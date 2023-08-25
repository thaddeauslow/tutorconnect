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
