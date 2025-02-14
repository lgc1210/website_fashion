from contextlib import contextmanager
from config.mongodb import Database

@contextmanager
def mongo_connection():
    # Set up database instance
    db_instance = Database()
    
    try:
        # the code block inside the with statement will be executed 
        # and can access the db_instance to manipulate with the database
        # the 'yield' keyword is like the 'return' keyword but instead of 
        # return the value and stop the function, it also returns but
        # do not stop the function. That's why the finally code still can be run
        yield db_instance
    finally:
        db_instance.close_connection()
        