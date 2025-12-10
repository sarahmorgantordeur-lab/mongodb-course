let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");

d = db.getSiblingDB("technocite");

const inserted = db.students.insertOne({
    name: "Alice",
});

console.log("Inserted document ID:", inserted);