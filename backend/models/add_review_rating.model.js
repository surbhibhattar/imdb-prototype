const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const review_ratingSchema = new Schema({
    movie_id: { type: String, required: true },
    user_id: { type: String, required: true },
    rating: { type: number },
    review: { type: String }
}, {
        timestamps: true
    });

const ReviewRating = mongoose.model('ReviewRating', review_ratingSchema);

module.exports = ReviewRating;
