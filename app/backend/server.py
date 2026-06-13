from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

mongo_url = os.environ["MONGO_URL"]
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ["DB_NAME"]]

app = FastAPI(title="Pyrintu API")
api_router = APIRouter(prefix="/api")


class WaitlistEntry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    product: str = Field(default="general")
    source: Optional[str] = Field(default=None)
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class WaitlistCreate(BaseModel):
    email: EmailStr
    product: str = "general"
    source: Optional[str] = None


class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ContactCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    message: str = Field(min_length=5, max_length=4000)


@api_router.get("/")
async def root():
    return {
        "name": "Pyrintu API",
        "status": "live",
        "tagline": "Intelligent Solutions. Real Impact.",
    }


@api_router.post("/waitlist", response_model=WaitlistEntry)
async def join_waitlist(payload: WaitlistCreate):
    existing = await db.waitlist.find_one({"email": payload.email, "product": payload.product})
    if existing:
        raise HTTPException(status_code=409, detail="You're already on this waitlist. We'll be in touch soon.")

    entry = WaitlistEntry(**payload.model_dump())
    doc = entry.model_dump()
    doc["created_at"] = doc["created_at"].isoformat()
    await db.waitlist.insert_one(doc)
    return entry


@api_router.get("/waitlist/count")
async def waitlist_count():
    total = await db.waitlist.count_documents({})
    task_anchor = await db.waitlist.count_documents({"product": "task-anchor"})
    modelguard = await db.waitlist.count_documents({"product": "modelguard"})
    return {"total": total, "task_anchor": task_anchor, "modelguard": modelguard}


@api_router.post("/contact", response_model=ContactMessage)
async def submit_contact(payload: ContactCreate):
    msg = ContactMessage(**payload.model_dump())
    doc = msg.model_dump()
    doc["created_at"] = doc["created_at"].isoformat()
    await db.contact_messages.insert_one(doc)
    return msg


@api_router.get("/insights")
async def list_insights():
    return {
        "posts": [
            {
                "id": "post-1",
                "title": "Why we're building Pyrintu",
                "excerpt": "AI/ML is having its 'production reality' moment. Models look great in notebooks and fall apart in the wild. Pyrintu exists to close that gap.",
                "tag": "Mission",
                "read_time": "3 min",
                "date": "2026-02-01",
            },
            {
                "id": "post-2",
                "title": "Task Anchor — the focus recovery problem",
                "excerpt": "We lose 23 minutes after every context switch. Task Anchor is our attempt to give that time back, intelligently, without becoming another nagging app.",
                "tag": "Product",
                "read_time": "5 min",
                "date": "2026-02-08",
            },
            {
                "id": "post-3",
                "title": "ModelGuard — observability for the rest of us",
                "excerpt": "Datadog for ML is enterprise-priced. We're building production-grade ML monitoring for indie teams and lean engineering orgs.",
                "tag": "Product",
                "read_time": "6 min",
                "date": "2026-02-15",
            },
            {
                "id": "post-4",
                "title": "Building in public, from Hyderabad",
                "excerpt": "No team yet. No funding yet. Just a clear thesis and a stubborn belief that great AI products can come from anywhere.",
                "tag": "Journal",
                "read_time": "4 min",
                "date": "2026-02-20",
            },
        ]
    }


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
