from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from sqlalchemy import Column, Integer, String, DateTime, func
import pyodbc

app = Flask(__name__)
bcrypt = Bcrypt(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mssql+pyodbc://@MSSQLSERVER01/RealHomesDB?driver=ODBC+Driver+17+for+SQL+Server;Authentication=ActiveDirectoryIntegrated'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class User(db.Model):
    __tablename__ = 'Users'
    UserID = Column(Integer, primary_key=True)
    Username = Column(String(50), nullable=False, unique=True)
    PasswordHash = Column(String(255), nullable=False)
    Email = Column(String(100))
    CreatedAt = Column(DateTime, default=func.now())

@app.route('/signup', methods=['POST'])
def signup():
    print('Received signup request')
    data = request.form
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    new_user = User(Username=username, PasswordHash=hashed_password, Email=email)
    db.session.add(new_user)
    db.session.commit()

    return jsonify(message="Sign-up successful"), 201

@app.route('/signin', methods=['POST'])
def signin():
    print("Received signin request")
    data = request.form
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(Username=username).first()

    if user and bcrypt.check_password_hash(user.PasswordHash, password):
        return jsonify(message="Sign-in successful"), 200
    else:
        return jsonify(message="Invalid username or password"), 401

if __name__ == '__main__':
    app.run(debug=True)