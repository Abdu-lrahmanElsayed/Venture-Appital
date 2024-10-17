from myapp import app, bcrypt
from flask import jsonify, request
from myapp.user import User
from flask_jwt_extended import create_access_token


@app.route('/login', methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password']

    try:
        user = User.query.filter_by(email=email).first()
        if user and bcrypt.check_password_hash(user.password, password):
            access_token = create_access_token(identity={'email': email})
            return jsonify(access_token=access_token), 200
        else:
            return jsonify({"msg": "Bad username or password"}), 401
    except:
        return jsonify({"msg": "Some issue happened"}), 500