let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");
// USE technocite
db = db.getSiblingDB('sample_mflix');

// SELECT title FROM movies WHERE released IS NULL
const movies = db.movies
.find({
    released:  {
        $exists: false
    }
})
.projection({
    title: true,
    year: true,
    _id: false
})
.sort({
    year: -1
})
.limit(5)
.count();

console.log(movies);

