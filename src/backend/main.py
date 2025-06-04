from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os
from pathlib import Path

app = FastAPI()

# CORS設定（Reactなど別オリジンのフロントからのアクセスを許可）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React側のURL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload")
async def upload_video(video: UploadFile = File(...)):
    upload_dir = Path("./uploads")
    upload_dir.mkdir(parents=True, exist_ok=True)  # ← フォルダがなければ作成

    # ファイル名に安全性を考慮（日本語や特殊文字への対応）
    safe_filename = video.filename.replace("/", "_").replace("\\", "_")
    video_path = upload_dir / safe_filename

    with open(video_path, "wb") as buffer:
        shutil.copyfileobj(video.file, buffer)

    return {"message": "Video uploaded successfully", "filename": video.filename}