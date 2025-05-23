from flask import Flask
from app.config import Config
from app.models import db
from app.routes import interview_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)

    app.register_blueprint(interview_bp, url_prefix="/interviews")

    return app
