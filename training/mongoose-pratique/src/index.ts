import { connect } from 'mongoose';
import { MovieModel } from './schemas/movies_2.ts';

// class Truc {
//     static find() {

//     }
// }

// MovieModel.find();
// Truc.find()

async function init() {
    await connect('mongodb://root:test123@127.0.0.1:27017/sample_mflix?authSource=admin');
    
    const newMovie = new MovieModel({
        plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        genres: [ "Crime", "Drama" ],
        runtime: 175,
        cast: [ "Marlon Brando", "Al Pacino", "James Caan" ],
        title: "The Godfather II",
        fullplot: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
        counries: [ "USA" ],
        released: 1974  ,
        directors: [ "Francis Ford Coppola" ],
        rated: "R",
        awards: {
            wins: 1 ,
            nominations: 11 ,
            text: "Won 1 Oscar. Another 32 wins & 11 nominations."
        },
        lastupdated: new Date("2015-08-26 00:03:50.123000000"),
        year: 1974,
        imdb: {
            rating: 9.0,
            votes: 1349663,
            id: 240
        },
        type: "movie"
    });

    const newMovie3 = new MovieModel({
        plot: "After his village is destroyed, a young ninja strives to become the leader of his people.",
        genres: [ "Animation", "Action", "Adventure" ],
        runtime: 98,
        cast: [ "Junko Takeuchi", "Chie Nakamura", "Noriaki Sugiyama" ],
        title: "Naruto the Movie: Ninja Clash in the Land of Snow",
        fullplot: "Naruto and his team are sent on a mission to protect an actress during the filming of her latest movie, only to become involved in a dangerous plot involving her mysterious past.",
        countries: [ "Japan" ],
        released: 2004,
        directors: [ "Tensai Okamura" ],
        rated: "PG-18",
        awards: {
            wins: 0,
            nominations: 1,
            text: "1 nomination."
        },
        lastupdated: new Date("2015-08-26 00:03:50.123000000"),
        year: 2004,
        imdb: {
            rating: 6.7,
            votes: 6500,
            id: 435651
        },
        type: "movie"
    });

    // on sauvegarde nos films
    await newMovie.save();
    await newMovie3.save();

    const matrix = await MovieModel.findOne({
        title: "The Matrix"
    });

    matrix.title = "The Matrique";
    
    await matrix.save().catch(console.log);

    const jurassic = await MovieModel.findOne({
        title: "Jurassic Park"
    });

    // soit on delete via le modèle. Attention de checker si c'est undefined ou non, sinon votre application crash
    await jurassic?.deleteOne();

    // soit on delete via la collection. Attention, pas de manipulation possible du document dans votre applicatif
    await MovieModel.deleteOne({
        title: "Jurassic Park"
    });
}

init();