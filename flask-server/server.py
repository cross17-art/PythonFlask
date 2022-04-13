import json
from flask import Flask, jsonify, request
from Traders.TrDataBase import TrDataBase 
import json

class User: 
    def __init__(self,user_id,user_name) -> None:
        self.__user_id = user_id
        self.__user_name = user_name
    
    @property
    def user_id(self):
        return self.__user_id

    @user_id.setter
    def user_id (self,id):
        self.__user_id = id

    @property
    def user_name(self):
        return self.__user_name

    @user_name.setter
    def user_name (self,name):
        self.__user_name = name


app = Flask("__name__")

@app.route('/mem')
def list():
    return {"memvers":["Mem9061","Mem2","Mem3"]}

@app.route("/test_b", methods =["POST"])
def test():
    obf = request.json["user_name"]
    print(obf)
    return {"status":"200"}


@app.route('/test_send_user')
def send_user():
    print('request is come')
    user = User(1,"Ivan")
    obj={
        1:{
        "User_name":user.user_name,
        "User_id":user.user_id
        },
        2:{
        "User_name":user.user_name,
        "User_id":user.user_id
        }
    }
    return obj 

@app.route("/create_db",methods=['POST'])
def createDb():
    print("request is come to CREATE DB")
    cand= []
    file = request.files.get("arrFile").stream.read()

    reader = (file.decode(encoding='UTF-8',errors='strict'))
    
    tr = TrDataBase("trades")
    tr.createCSVFile(reader)
    tr.createTable()
    tr.insertData()
    return "200"

@app.route("/selectTr",methods=['GET'])
def selectTr():
    print("request is come to SELECT Tr")
    tr = TrDataBase("trades")
    res = tr.queryTrDB()
    print("response from DB is come")
    
    return jsonify({"end":res})



if __name__ == "__main__":
    app.run(debug=True, use_debugger=False, use_reloader=True)


