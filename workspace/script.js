db = connect("mongodb://root:test123@localhost/test?authSource=admin")
print(db.getUsers())