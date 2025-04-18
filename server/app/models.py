# app/models.py
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)

class Interview(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    recruiter_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    candidate_name = db.Column(db.String(100), nullable=False)
    date_time = db.Column(db.String(50), nullable=False)
    status = db.Column(db.String(50), default='Scheduled')

    recruiter = db.relationship('User', backref=db.backref('interviews', lazy=True))
