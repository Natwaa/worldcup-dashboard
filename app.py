from flask import Flask
from flask import render_template
from flask import jsonify

from score_engine import load_players

app = Flask(__name__)


@app.route("/")
def dashboard():
    return render_template("dashboard.html")


@app.route("/api/ranking")
def ranking():

    return jsonify(load_players())


if __name__ == "__main__":
    app.run(debug=True)