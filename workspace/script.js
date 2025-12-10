let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");
// USE technocite
db = db.getSiblingDB('sample_mflix');

// SELECT title FROM movies WHERE released IS NULL
const movies = db.movies
    // .find({
    //     cast: {
    //         $in: ["Keanu Reeves"]
    //     }
    // });

    // .find({
    //     genres: {
    //         $in: ["Comedy"]
    //     }
    // });

    // .find({
    //     year: {
    //         $gte: 2002, $lte: 2008
    //     }
    // })

    // .find({
    //     $and: [
    //         {
    //             cast: {
    //                 $in: ["Chris O'Donnell"]
    //             },
    //             cast: {
    //                 $in: ["Matt Damon"]
    //             }
    //         }
    //     ]
    // })

    // .find({
    //     $or: [
    //         {directors: ["Neil Burger"]},
    //         {directors: ["Brad Furman"]}
    //     ]
    // })

// const movie = movies.aggregate([
//   {
//     $group: {
//         _id: null,
//         minYear: { $min: "$year" }
//     }
//   }
// ])

// const movie = movies.find({
//         $and: [
//             {"imdb.rating": {$glt: 8.0}},
//             {"tomatoes.critic.rating": {$glt: 8}}
//         ]
//     })

.find({
    "realeased.date": { $exists: false }
})
console.log(movies);

