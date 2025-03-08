const RatingReview = require('../models/ratingReview');

exports.addRatingReview = async (req , res) => {
    try {
        const { rating, review, event, user } = req.body;
        if (!rating || !review || !event || !user) {
            return res.status(400).json({ message: 'Please fill all the fields' });
        }

        const ratingReview = new RatingReview({
            rating,
            review,
            event,
            user
        });

        await ratingReview.save();
        res.status(201).json({ message: 'Rating and Review added successfully', data: ratingReview });
    } catch (error) {
        console.error('Error adding Rating and Review:', error);
        res.status(500).json({ message: 'Error adding Rating and Review', error: error.message });
    }
}

exports.getRatingReview = async (req, res) => {
    try {
        const { id } = req.params;

        let list;
        if (id) {
            list = await RatingReview.findOne({ _id: id });
        } else {
            list = await RatingReview.find({});
        }

        res.status(200).json({ message: list });
    } catch (error) {
        console.error('Error getting Rating and Review:', error);
        res.status(500).json({ message: 'Error getting Rating and Review', error: error.message });
    }
}

exports.getRatingReviewByEvent = async (req, res) => {
    try {
        const { event } = req.params;

        const list = await RatingReview.find({ event });

        res.status(200).json({ message: list });
    } catch (error) {
        console.error('Error getting Rating and Review:', error);
        res.status(500).json({ message: 'Error getting Rating and Review', error: error.message });
    }
}

exports.getRatingReviewByUser = async (req, res) => {
    try {
        const { user } = req.params;

        const list = await RatingReview.find({ user });

        res.status(200).json({ message: list });
    } catch (error) {
        console.error('Error getting Rating and Review:', error);
        res.status(500).json({ message: 'Error getting Rating and Review', error: error.message });
    }
}

exports.updateRatingReview = async (req, res) => {
    try {
        const { id } = req.params;
        const { rating, review, event, user } = req.body;
        if (!rating || !review || !event || !user) {
            return res.status(400).json({ message: 'Please fill all the fields' });
        }

        const updatedRatingReview = await RatingReview.findByIdAndUpdate(id, {
            rating,
            review,
            event,
            user
        }, { new: true });

        res.status(200).json({ message: 'Rating and Review updated successfully', data: updatedRatingReview });
    } catch (error) {
        console.error('Error updating Rating and Review:', error);
        res.status(500).json({ message: 'Error updating Rating and Review', error: error.message });
    }
}

exports.deleteRatingReview = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedRatingReview = await RatingReview.findByIdAndDelete(id);

        if (!deletedRatingReview) {
            return res.status(404).json({ message: 'Rating and Review not found' });
        }

        res.status(200).json({ message: 'Rating and Review deleted successfully' });
    } catch (error) {
        console.error('Error deleting Rating and Review:', error);
        res.status(500).json({ message: 'Error deleting Rating and Review', error: error.message });
    }
}

