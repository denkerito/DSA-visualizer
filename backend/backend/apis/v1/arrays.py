from fastapi import APIRouter

DATA_TAGS = ["Arrays"]
DATA_URL = "arrays"

router = APIRouter(prefix="/" + DATA_URL, tags=DATA_TAGS)

# 