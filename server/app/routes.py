from flask import Blueprint, request, jsonify
from app.models import db, Interview

interview_bp = Blueprint('interview_bp', __name__)

# Schedule a new interview
@interview_bp.route('/schedule', methods=['POST'])
def schedule_interview():
    data = request.json
    try:
        new_interview = Interview(
            candidate_name=data['candidate_name'],
            candidate_email=data['candidate_email'],
            position=data['position'],
            scheduled_time=data['scheduled_time'],
            status="Scheduled"
        )
        db.session.add(new_interview)
        db.session.commit()
        return jsonify({"message": "Interview scheduled successfully!"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Get all scheduled interviews
@interview_bp.route('/all', methods=['GET'])
def get_all_interviews():
    interviews = Interview.query.order_by(Interview.scheduled_time.desc()).all()
    return jsonify([
        {
            "id": i.id,
            "candidate_name": i.candidate_name,
            "candidate_email": i.candidate_email,
            "position": i.position,
            "scheduled_time": i.scheduled_time.strftime("%Y-%m-%d %H:%M"),
            "status": i.status
        }
        for i in interviews
    ]), 200

# # Optional: Delete an interview
# @interview_bp.route('/delete/<int:id>', methods=['DELETE'])
# def delete_interview(id):
#     interview = Interview.query.get(id)
#     if interview:
#         db.session.delete(interview)
#         db.session.commit()
#         return jsonify({"message": "Interview deleted"}), 200
#     return jsonify({"error": "Interview not found"}), 404
