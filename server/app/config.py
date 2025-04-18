# app/config.py
import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URI", "mysql://root:bhawuk42@localhost/interview_scheduler")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.getenv("SECRET_KEY", "supersecretkey")
