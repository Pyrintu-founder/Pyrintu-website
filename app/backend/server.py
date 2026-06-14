from fastapi import FastAPI, HTTPException
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import Optional
import uuid
from datetime import datetime, timezone
import os
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Pyrintu API")

# Allow all origins for simplicity
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class WaitlistCreate(BaseModel):
    email: EmailStr
    product: str = "general"
    source: Optional[str] = None


class ContactCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    message: str = Field(min_length=5, max_length=4000)


@app.get("/")
def root():
    return {
        "name": "Pyrintu API",
        "status": "live",
        "tagline": "Intelligent Solutions. Real Impact.",
    }


@app.post("/api/waitlist")
def join_waitlist(payload: WaitlistCreate):
    logger.info(f"Waitlist signup: {payload.email}")
    return {
        "id": str(uuid.uuid4()),
        "email": payload.email,
        "product": payload.product,
        "created_at": datetime.now(timezone.utc).isoformat(),
    }


@app.get("/api/waitlist/count")
def waitlist_count():
    return {"total": 0, "task_anchor": 0, "modelguard": 0}


@app.post("/api/contact")
def submit_contact(payload: ContactCreate):
    logger.info(f"Contact form: {payload.name} - {payload.email}")
    logger.info(f"Message: {payload.message}")
    return {
        "id": str(uuid.uuid4()),
        "name": payload.name,
        "email": payload.email,
        "message": payload.message,
        "created_at": datetime.now(timezone.utc).isoformat(),
    }


@app.get("/api/insights")
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
        ]
    }


if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("server:app", host="0.0.0.0", port=port)