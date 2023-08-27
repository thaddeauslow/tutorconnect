from .db import get_db

class mongo:
    def __init__(self, collection):
        self.db = get_db()
        self.collection = self.db[collection]

    def query(self, query):

        result = self.collection.find_one(query)

        if result:
            return True
        else: 
            return False

    def retrieveCollection(self):

        return list(self.collection.find({}, {'_id': 0}))

    def get_user(self, query):
        email = query["email"]
        password = query["password"]

        # Create an index on the 'email' field to speed up the search
        self.collection.create_index("email")

        # Use a single query to find the user based on email and password
        user = self.collection.find_one({"email": email, "password": password}, {"email": 1})

        if user:
            return {"success": "Authentication successful"}
        else:
            user_with_matching_email = self.collection.find_one({"email": email}, {"password": 1})
            if user_with_matching_email:
                return {"error": "password is incorrect"}
            else:
                return {"error": "user cannot be found"}
            

    def new_user(self, query):
        email = query["email"]
        ePresent = self.query({"email" : email})

        if not ePresent:
            self.collection.insert_one(query)
            return {"success": "account created"}
        else:
            return {"error": "Email Address Exists"}
        


            
