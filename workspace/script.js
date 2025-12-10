let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");
// USE technocite
db = db.getSiblingDB('technocite');

// INSERT INTO students (name) VALUES ("Jean Sébastien")
const inserted = db.students.insertOne({
    name: "Jean Sébastien"
});

console.log(inserted);

const multiInsert = db.students.insertMany([
    {
        name : "Jammy"
    },
    {
        name : "Fred"
    }
]);

console.log(multiInsert);

const myBoss = db.formators.insertOne({
    name: "Gilles Bertrand"
});

console.log(myBoss);