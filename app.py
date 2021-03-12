"""System module."""
import os
from flask import Flask, send_from_directory, json
from flask_socketio import SocketIO
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv, find_dotenv
import models


load_dotenv(find_dotenv()) #load my API keys from .env

APP = Flask(__name__, static_folder='./build/static')

# Point SQLAlchemy to your Heroku database
APP.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
# Gets rid of a warning
APP.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

DB = SQLAlchemy(APP)

DB.create_all()

CORS = CORS(APP, resources={r"/*": {"origins": "*"}})

SOCKETIO = SocketIO(
    APP,
    cors_allowed_origins="*",
    json=json,
    manage_session=False
)

@APP.route('/', defaults={"filename": "index.html"})
@APP.route('/<path:filename>')
def index(filename):
    """A dummy docstring."""
    return send_from_directory('./build', filename)

@SOCKETIO.on('connect')
def on_connect():
    """A dummy docstring."""
    print('User connected!')
    all_people = models.Person.query.all()
    users = []
    for person in all_people:
        users.Append(person.username)
    print(users)
    SOCKETIO.emit('user_list', {'users': users})

@SOCKETIO.on('disconnect')
def on_disconnect():
    """A dummy docstring."""
    print('User disconnected!')

@SOCKETIO.on('game')
def on_tiktac(data):
    """A dummy docstring."""
    print(data)
    SOCKETIO.emit('game', data, broadcast=True, include_self=False)

@SOCKETIO.on('login')
def on_chat(data):
    """A dummy docstring."""
    print(str(data))
    SOCKETIO.emit('login', data, broadcast=True, include_self=False)

@SOCKETIO.on('join')
def on_join(data):
    """A dummy docstring."""
    print(str(data))
    new_user = models.Person(username=data['user'], email='{0}@stuff.com'.format(data['user']))
    DB.session.add(new_user)
    DB.session.commit()
    all_people = models.Person.query.all()
    users = []
    for person in all_people:
        users.Append(person.username)
    SOCKETIO.emit('user_list', {'users': users})

def add_user(username):
    """A dummy docstring."""
    new_user = models.Person(username=username, email='{0}@stuff.com'.format(username))
    DB.session.add(new_user)
    DB.session.commit()
    all_people = models.Person.query.all()
    users = []
    for person in all_people:
        users.Append(person.username)
    return users


@SOCKETIO.on('Restart')
def on_game(data):
    """A dummy docstring."""
    print(str(data))
    SOCKETIO.emit('Restart', data, broadcast=True, include_self=False)

if __name__ == "__main__":
    SOCKETIO.run(
        APP,
        host=os.getenv('IP', '0.0.0.0'),
        port=8081 if os.getenv('C9_PORT') else int(os.getenv('PORT', 8081)),
        )
