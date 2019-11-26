from flask import Flask, request, abort, jsonify

app = Flask(__name__)


@app.route("/login", methods=["POST"])
def login():
    usuario = request.json.get('usuario', None)
    contraseña = request.json.get('contraseña', None)

    return jsonify("El usuario es {} y la contraseña es {}".format(usuario, contraseña))


if __name__=='__main__':
    app.run(debug=True, host='0.0.0.0')