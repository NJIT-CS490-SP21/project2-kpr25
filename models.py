"""System module."""
from app import db


class Person(db.Model):
    """A dummy docstring."""
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def new(self):
        """A dummy docstring."""

    def verynew(self):
        """A dummy docstring."""

    def __repr__(self):
        return '<Person %r>' % self.username
