let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");
// USE technocite
db = db.getSiblingDB('sample_mflix');

const movies = db.movies.find({
    released:  {
        $exists: false
    }
});

console.log(movies);

