from pymongo import MongoClient
import os
from dotenv import load_dotenv
import time

def get_db():

    load_dotenv()

    DATABASE_URL= f'mongodb+srv://TutorConnect:{os.environ.get("password")}@cluster0.11rfunq.mongodb.net/?retryWrites=true&w=majority' 

    client = MongoClient(DATABASE_URL, maxPoolSize=100)

    mongo_db=client["tutorConnect"]

    return mongo_db

if __name__ == "__main__":
    dbObj = get_db()
    myDoc = dbObj["user"]
    
    query = {"user": "user1"}
    queryA = myDoc.find(query)

    for i in queryA:
        print(i["user"])