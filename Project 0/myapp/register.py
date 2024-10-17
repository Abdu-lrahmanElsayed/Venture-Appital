from myapp import app, bcrypt, db
from flask import jsonify, request
from myapp.user import User
from myapp.images import Images
import os


@app.route('/register', methods=['POST'])
def register():
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    email = request.form['email']
    password = request.form['password']
    image = request.files['image']
    EXTINTION_ALLOWED = {'jpg', 'png','jpeg', 'gif'}
    image_path = os.path.join(app.config['UPLOAD_IMAGES'], image.filename)

    try:
        if User.query.filter_by(email=email).first():
            return jsonify({"msg": "User already registered"}), 400

        hashed_password = bcrypt.generate_password_hash(password)

        if image.filename == "":
            return jsonify({"msg": "Please upload an image!"}), 400
        elif image.filename.rsplit('.', 1)[1].lower() not in EXTINTION_ALLOWED:
            return jsonify({"msg": "Please upload an image in extintions:('jpg', 'png','jpeg', 'gif')"}), 400

        new_user = User(first_name=first_name, last_name=last_name, email=email, password=hashed_password)
        db.session.add(new_user)
        db.session.flush()

        image.save(image_path)
        new_image = Images(name=image.filename, path=image_path, user_id=new_user.id)
        db.session.add(new_image)
        db.session.commit()

        return jsonify({"msg": "User registered successfully!"}), 201
    except:
        return jsonify({"msg": "Some issue happened"}), 500