from logging import error
from flask import Flask, jsonify, request, render_template

from .data import mongo



app = Flask(__name__)
app.jinja_env.filters['zip'] = zip

#login page
@app.route("/")
def login():

    return render_template('index.html.j2')

#dashboard page
@app.route("/dashboard")
def dashboard():

    return render_template('dashboard.html.j2')

#handle users
@app.route("/authentication", methods=['POST'], strict_slashes=False)
def auth():
    if request.method == 'POST':
        query = request.json
        userCol = mongo("user")
        sResponse = userCol.get_user(query)
        return sResponse
    

@app.route("/register", methods=['POST'], strict_slashes=False)
def register():
    if request.method == 'POST':
        query = request.json
        userCol = mongo("user")
        sResponse = userCol.new_user(query)
        
        return sResponse
    
@app.route("/catalogue", methods=['POST'], strict_slashes=False)
def catalogue():
    if request.method == 'POST':

        serviceCol = mongo("service")
        sResponse = serviceCol.retrieveCollection()

        return jsonify(sResponse)





