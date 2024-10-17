from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt


app = Flask(__name__)
app.config['SECRET_KEY'] = '1a23'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqldb://abdu:Abdu_mn5@localhost/first_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
upload_images = 'myapp/images' # D://Venture Appital/New folder/
app.config['UPLOAD_IMAGES'] = upload_images
upload_videos = 'myapp/videos'
app.config['UPLOAD_VIDEOS'] = upload_videos
db = SQLAlchemy(app)
jwt = JWTManager(app)
bcrypt = Bcrypt(app)


from myapp import register, login, uploadvideo, uploadimage