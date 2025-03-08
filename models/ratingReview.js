
const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const ratingReviewSchema = new Schema({
    rating: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    event: {
        type: Schema.Types.ObjectId,
        ref: 'event',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('RatingReview', ratingReviewSchema);

