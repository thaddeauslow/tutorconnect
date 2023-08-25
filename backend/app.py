from logging import error
from flask import Flask, jsonify, request, render_template



app = Flask(__name__)

app.jinja_env.filters['zip'] = zip

#control panel
@app.route("/")
def home_view():

        return render_template('index.html.j2')



