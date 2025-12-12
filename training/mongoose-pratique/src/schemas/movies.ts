import { Schema, model } from "mongoose";

const schema = new Schema({
    // méthode fainéant
    plot: String,
    genres: {
        type: [String]
    },
    runtime: {
        type: Number
    },
    rated: {
        type: String,
        enum: ['UNRATED','R', 'PG-13', 'RATED', 'PG', 'G','APPROVED', 'PASSED']
    },
    cast: {
        type: [String]
    },
    num_mflix_comments: {
        type: Number
    },
    title: {
        type: String,
        required: true
    },
    fullplot: {
        type: String
    },
    countries: {
        type: [String]
    },
    released: {
        type: Date
    },
    directors: {
        type: [String]
    },
    awards: {
        type: {
            wins: {
                type: Number
            },
            nominations: {
                type: Number
            },
            text: {
                type: String
            }
        }
    },
    lastupdated: {
        type: String
    },
    year: {
        type: Number
    },
    imdb: {
        type: new Schema({
            rating: {
                type: Number
            },
            votes: {
                type: Number
            },
            id: {
                type: Number
            }
        })
    },
    type: {
        type: String,
        // movie + series
        enum: ['movie','series']
    }
});

export const MovieModel = model('MovieModel', schema, 'movies');