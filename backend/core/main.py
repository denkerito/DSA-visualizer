from fastapi import APIRouter, FastAPI
from fastapi.middleware.cors import CORSMiddleware

from core.apis import router as dsa_router

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173", 
        "http://127.0.0.1:5173",
    ],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

router = APIRouter()

router.include_router(dsa_router)

app.include_router(router)





