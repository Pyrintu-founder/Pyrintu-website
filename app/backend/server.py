from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from pymongo import MongoClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent.resolve()
load_dotenv(ROOT_DIR / ".env")

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

mongo_url = os.environ.get("MONGO_URL", "")
client = None
db = None

if mongo_url:
    try:
        client = MongoClient(mongo_url, serverSelectionTimeoutMS=5000)
        db = client[os.environ.get("DB_NAME", "pyrintu")]
        client.server_info()  # Test connection
        logger.info("MongoDB connected successfully")
    except Exception as e:
        logger.error(f"MongoDB connection failed: {e}")
        client = None
        db = None

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
def root():
    return {
        "name": "Pyrintu API",
        "status": "live",
        "tagline": "Intelligent Solutions. Real Impact.",
    }


@app.get("/")
def main_root():
    return {
        "name": "Pyrintu API",
        "status": "live",
        "tagline": "Intelligent Solutions. Real Impact.",
    }


@api_router.post("/waitlist", response_model=WaitlistEntry)
def join_waitlist(payload: WaitlistCreate):
    if not db:
        raise HTTPException(status_code=500, detail="Database not configured")
    
    try:
        existing = db.waitlist.find_one({"email": payload.email, "product": payload.product})
        if existing:
            raise HTTPException(status_code=409, detail="You're already on this waitlist. We'll be in touch soon.")
        
        entry = WaitlistEntry(**payload.model_dump())
        doc = entry.model_dump()
        doc["created_at"] = doc["created_at"].isoformat()
        db.waitlist.insert_one(doc)
        return entry
    except Exception as e:
        logger.error(f"Waitlist error: {e}")
        raise HTTPException(status_code=500, detail="Failed to join waitlist")


@api_router.get("/waitlist/count")
def waitlist_count():
    if not db:
        return {"total": 0, "task_anchor": 0, "modelguard": 0}
    
    try:
        total = db.waitlist.count_documents({})
        task_anchor = db.waitlist.count_documents({"product": "task-anchor"})
        modelguard = db.waitlist.count_documents({"product": "modelguard"})
        return {"total": total, "task_anchor": task_anchor, "modelguard": modelguard}
    except Exception as e:
        logger.error(f"Count error: {e}")
        return {"total": 0, "task_anchor": 0, "modelguard": 0}


@api_router.post("/contact", response_model=ContactMessage)
def submit_contact(payload: ContactCreate):
    if not db:
        raise HTTPException(status_code=500, detail="Database not configured")
    
    try:
        msg = ContactMessage(**payload.model_dump())
        doc = msg.model_dump()
        doc["created_at"] = doc["created_at"].isoformat()
        db.contact_messages.insert_one(doc)
        return msg
    except Exception as e:
        logger.error(f"Contact error: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to send message: {str(e)}")


@api_router.get("/insights")
def list_insights():
    return {
        "posts": [
            {
                "id": "post-1",
                "title": "Why we're building Pyrintu",
                "excerpt": "AI/ML is having its 'production reality' moment.",
                "tag": "Mission",
                "read_time": "3 min",
                "date": "2026-02-01",
            },
            {
                "id": "post-2",
                "title": "Task Anchor — the focus recovery problem",
                "excerpt": "We lose 23 minutes after every context switch.",
                "tag": "Product",
                "read_time": "5 min",
                "date": "2026-02-08",
            },
            {
                "id": "post-3",
                "title": "ModelGuard — observability for the rest of us",
                "excerpt": "Datadog for ML is enterprise-priced.",
                "tag": "Product",
                "read_time": "6 min",
                "date": "2026-02-15",
            },
            {
                "id": "post-4",
                "title": "Building in public, from Hyderabad",
                "excerpt": "No team yet. No funding yet.",
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


@app.on_event("shutdown")
def shutdown_db_client():
    if client:
        client.close()


if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    logger.info(f"Starting server on port {port}")
    uvicorn.run(app, host="0.0.0.0", port=port)