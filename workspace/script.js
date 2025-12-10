let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");
// USE technocite
db = db.getSiblingDB('technocite');


let students = db.students.find({
    name: {
        $ne: "Fred",
        $eq: "Jammy"
    }
});

db.students.insertOne({
    name: "Gerard",
    notes: {
        geography: 5
    }
})

students = db.students.find({
    "notes.geography": {
        $eq: 5
    }
});

console.log(students);