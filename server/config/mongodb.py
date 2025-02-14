from pymongo import MongoClient

class Database: 
    def __init__(self, uri = 'mongodb://localhost:27017/', db_name = 'website_fashion'):
        self.uri = uri
        self.db_name = db_name
        self.client = None
        self.db = None
        self.connect_db()
    
    def connect_db(self):
        try: 
            self.client = MongoClient(self.uri)
            self.db = self.client[self.db_name]
            print("Connected to MongoDB successfully.")
        except Exception as e:
            raise Exception(f"Failed to connect to MongoDB: {str(e)}")
        
    def close_connection(self):
        if self.client:
            self.client.close()
            print("MongoDB connection closed.")