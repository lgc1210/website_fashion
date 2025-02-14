from bson import ObjectId

def serialize_mongo_doc(doc):
    # Convert MongoDB document to a JSON serialize dictionary
    # Handles ObjectId conversion
    
    if isinstance(doc, dict):
        for key, value in doc.items():
            if isinstance(value, ObjectId):
                doc[key] = str(value)
            
            elif isinstance(value, list):
                doc[key] = [serialize_mongo_doc(item) for item in value]
                
            elif isinstance(value, dict):
                doc[key] = serialize_mongo_doc(value) 
                    
    return doc

