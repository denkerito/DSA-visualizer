from fastapi import APIRouter, FastAPI

from core.apis import router as dsa_router

app = FastAPI()

router = APIRouter()

router.include_router(dsa_router)
app.include_router(router)




