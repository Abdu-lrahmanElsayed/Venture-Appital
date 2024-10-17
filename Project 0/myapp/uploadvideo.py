from myapp import app, db
from flask import jsonify, request
from myapp.videos import Videos
import os
#from flask_jwt_extended import jwt_required


@app.route('/uploadvideo', methods=['GET', 'POST'])
#@jwt_required()
def uploadvideo():
    video = request.files['video']
    video_path = os.path.join(app.config['UPLOAD_VIDEOS'], video.filename)

    try:
        if video.filename == "":
            return jsonify({"msg": "Please upload a video!"}), 400
        elif video.filename.rsplit('.', 1)[1].lower() not in {'mp4'}:
            return jsonify({"msg": "Please upload a video in extintion(mp4)"}), 400
        
        video.save(video_path)
        new_video = Videos(name=video.filename, path=video_path)
        db.session.add(new_video)
        db.session.commit()
        return jsonify({"msg": "Video uploaded successfully!"}), 201
    except:
        return jsonify({"msg": "Some issue happened"}), 500