from myapp import app, db
from flask import jsonify, request
from myapp.images import Images
import os


@app.route('/uploadimage', methods=['POST'])
def uploadimage():
    image = request.files['image']
    image_path = os.path.join(app.config['UPLOAD_IMAGES'], image.filename)
    EXTINTION_ALLOWED = {'jpg', 'png','jpeg', 'gif'}

    try:
        if image.filename == "":
            return jsonify({"msg": "Please upload an image!"}), 400
        elif image.filename.rsplit('.', 1)[1].lower() not in EXTINTION_ALLOWED:
            return jsonify({"msg": "Please upload an image in extintions:('jpg', 'png','jpeg', 'gif')"}), 400
        
        image.save(image_path)
        new_image = Images(name=image.filename, path=image_path)
        db.session.add(new_image)
        db.session.commit()
        return jsonify({"msg": "Image uploaded successfully!"}), 201
    except:
        return jsonify({"msg": "Some issue happened"}), 500