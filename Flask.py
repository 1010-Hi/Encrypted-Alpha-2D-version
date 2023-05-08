from flask import Flask, render_template
  
app = Flask(__name__)
  
@app.route("/", methods=['GET', 'POST'])
def home():
    return render_template("index.html")

@app.route("/intro", methods=['GET', 'POST'])
def intro():
    return render_template("Intro.html")

@app.route("/welcome", methods=['GET', 'POST'])
def welcome():
    return render_template("welcome.html")

@app.route("/to", methods=['GET', 'POST'])
def to():
    return render_template("to.html")

@app.route("/game", methods=['GET', 'POST'])
def game():
    return render_template("game.html")

@app.route("/Encrypted", methods=['GET', 'POST'])
def Encrypted():
    return render_template("Encrypted.html")

@app.route("/Invis", methods=['GET', 'POST'])
def Invis():
    return render_template("Invis.html")

@app.route("/MiniGame", methods=['GET', 'POST'])
def MiniGame():
    return render_template("MiniGame.html")

@app.route("/Button", methods=['GET', 'POST'])
def button():
    return render_template("Button.html")

@app.route("/MiniGame2", methods=['GET', 'POST'])
def MiniGame2():
    return render_template("MiniGame2.html")

@app.route("/No", methods=['GET', 'POST'])
def No():
    return render_template("No.html")

@app.route("/Stop", methods=['GET', 'POST'])
def stop():
    return render_template("Stop.html")


@app.route("/You", methods=['GET', 'POST'])
def You():
    return render_template("You.html")

@app.route("/Win", methods=['GET', 'POST'])
def Win():
    return render_template("Win.html")

# app name

@app.errorhandler(404)  
# inbuilt function which takes error as parameter
def not_found(e):
    return render_template("404.html")

if __name__=="__main__":
    app.run(host='0.0.0.0', port=8080, debug ="off")