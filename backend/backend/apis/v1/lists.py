from fastapi import APIRouter

DATA_TAGS = ["Lists"]
DATA_URL = "lists"

router = APIRouter(prefix="/" + DATA_URL, tags=DATA_TAGS)

