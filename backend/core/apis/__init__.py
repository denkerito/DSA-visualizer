from fastapi import APIRouter

from core.apis.v1.arrays import router as arrays_router

router = APIRouter(prefix="/api/v1")
router.include_router(arrays_router)