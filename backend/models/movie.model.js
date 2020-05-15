const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: { type: String, required: true },
    cast_crew: { type: [], required: true },
    trivia: { type: String },
    reviews: { type: [] },
    avg_rating: { type: number },
    ratings: { type: [] }
}, {
        timestamps: true
    });

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
