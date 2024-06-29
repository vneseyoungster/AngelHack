from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/calculate', methods=['GET'])
def calculate():
    city = request.args.get('city')
    district = request.args.get('district')
    ward = request.args.get('ward')
    street = request.args.get('street')

    if not city or not district or not ward or not street:
        return jsonify({"error": "Missing required parameters"}), 400

    result = f"My home is from {city}, {street}, {ward}, I want to calculate my home price."
    return jsonify({"message": result})

if __name__ == '__main__':
    app.run(debug=True)
