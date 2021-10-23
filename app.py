from flask import Flask, render_template, request, redirect, jsonify
import json


# Initiate Flask Application
app = Flask(__name__)

# Import DataFrame
PATH_IN = r'static\data\miserables.json'

# Routing do define url
@app.route('/')
def index():
    return render_template('matrix.html')


@app.route('/get-json', methods=['GET', 'POST'])
def get_json():
    ''' Send JSON data to Javascript '''
    # Import Data
    with open(PATH_IN) as f:
        json_to = json.load(f)
    return jsonify(json_to)   


if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(debug=True, port=5000)


