import os
from flask import Flask, send_from_directory, json, session
from flask_socketio import SocketIO
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv()) #load my API keys from .env

app = Flask(__name__, static_folder='./build/static')

# Point SQLAlchemy to your Heroku database
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
# Gets rid of a warning
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

import models
db.create_all()


cors = CORS(app, resources={r"/*": {"origins": "*"}})

socketio = SocketIO(
    app,
    cors_allowed_origins="*",
    json=json,
    manage_session=False
)

@app.route('/', defaults={"filename": "index.html"})
@app.route('/<path:filename>')
def index(filename):
    """A dummy docstring."""
    return send_from_directory('./build', filename)

@socketio.on('connect')
def on_connect():
    """A dummy docstring."""
    print('User connected!')
    all_people = models.Person.query.all()
    users = []
    for person in all_people:
        users.append(person.username)
    print(users)
    socketio.emit('user_list', {'users': users})
   

@socketio.on('disconnect')
def on_disconnect():
    """A dummy docstring."""
    print('User disconnected!')

@socketio.on('game')
def on_tiktac(data):
    """A dummy docstring."""
    print(data)
    socketio.emit('game', data, broadcast=True, include_self=False)

@socketio.on('login')
def on_chat(data):
    """A dummy docstring."""
    print(str(data))
    socketio.emit('login', data, broadcast=True, include_self=False)

@socketio.on('Restart')
def on_game(data):
    """A dummy docstring."""
    print(str(data))
    socketio.emit('Restart', data, broadcast=True, include_self=False)

# Note we need to add this line so we can import app in the python shell
if __name__ == "__main__": 

    socketio.run(
        app,
        host=os.getenv('IP', '0.0.0.0'),
        port=8081 if os.getenv('C9_PORT') else int(os.getenv('PORT', 8081)),
)
