from myapp import db
from datetime import datetime


class Videos(db.Model):
    __tablename__ = 'videos'
    id = db.Column(db.Integer, primary_key=True)
    time_uploaded = db.Column(db.DateTime, default=datetime.utcnow())
    path = db.Column(db.String(200))
    name = db.Column(db.String(50))
    user_id = db.Column(db.ForeignKey('user.id'))