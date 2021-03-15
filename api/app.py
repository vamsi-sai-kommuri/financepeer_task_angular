from flask import Flask, request,jsonify,json
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy



app = Flask(__name__)
app.config ['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.sqlite3'


db = SQLAlchemy(app)
class users(db.Model):
   id = db.Column('id', db.Integer, primary_key = True)
   userId = db.Column(db.String(100))
   title = db.Column(db.String(50))  
   body = db.Column(db.String(10000))
   

def __init__(self,id, userId, title, body):
   self.id = id
   self.userId = userId
   self.title = title
   self.body = body


CORS(app)

@app.route("/",methods=['GET', 'POST'])
def hello():
    request_data = request.get_json()
    
    username = request_data["usr"]
    password = request_data["pass"]

    data = {}
    if username=="Admin" and password=="123456":
        data["status"]=True

    else:
        data["status"] = False


    return jsonify(data)


@app.route("/form",methods=['GET', 'POST'])
def form():
    users.query.delete()
    posted_file = str(request.files['file'].read(), 'utf-8')
    psoted_data = json.loads(posted_file)
    
    for i in psoted_data :
      
        user = users(id=i['id'],userId=i['userId'],title=i["title"],body=i["body"])
        db.session.add(user)
        db.session.commit()
         
    

    data = {"status":True}
    


    return jsonify(data)

@app.route("/getData",methods=['GET', 'POST'])
def getData():

    userData = users.query.all()

    data = []

    for i in userData:
        singleData = {}

        singleData["id"]=i.id
        singleData["userId"]=i.userId
        singleData["title"]=i.title
        singleData["body"]=i.body

        data.append(singleData)
        

    return jsonify(data)

if __name__ == '__main__':
   db.create_all()
   app.run(debug = True)
   #app.run(port=5000)