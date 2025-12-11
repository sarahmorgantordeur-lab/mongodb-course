let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");

db = db.getSiblingDB('sample_mflix');

// const Amaury = db.movies.find({
//     actors: "Amaury Reeves"
// });

// console.log(Amaury);

// db.movies.updateOne(
//     { directors: 'Denis Villeneuve' },
//     { 
//         $push: { actors: "Amaury Reeves" },
//       	$pull: { genres: "Drama" },
//       	$set: { "directors.$" : "Patate Man" }
//     }
// );

// const upsertResult = db.movies.updateMany({
//     cast: {$in: ["Charlize Theron"]}
// }, {
//     $inc: {"imdb.rating": 5}
// });

// console.log(upsertResult);

// const movie = db.movies.find({
//     _id: ObjectId('693989beb485593f09dd0310')
// });

// // console.log(movie);

// const replaced = db.movies.replaceOne({
//     _id: ObjectId('693989beb485593f09dd0310')
// }, {
//     title : "Trump in Belgium",
//     genres: ["Comedy"],
//     year: 2026
// })

// const trumpInBelgium = db.movies.find({
//     _id: ObjectId('693989beb485593f09dd0310')
// });

// db.movies.deleteMany({
//     directors : "Harald Zwart"
// });

// db.movies.updateMany(
//     { title: {$in: ["+1", "Anamorph"]} },
//     { $addToSet: { cast: "Key Key" }}
// );

// Vérifie les modifications
// db.movies.updateMany(
//     { title: "The matrix" },
//     { title: 1, cast: 1 }
// );

// db.movies.updateOne(
//     { title: "Jurassic Park" },
//     { $set: { title: "The Matrix" }}
// );

// console.log(trumpInBelgium);