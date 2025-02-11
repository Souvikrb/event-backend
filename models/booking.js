const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"Event"
    },
    dateId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    timeslotId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    promocode: {
        type: String,
        trim: true, // Removes extra whitespac
    },
    guest: {
        type: Number
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
});

module.exports = mongoose.model("Booking", bookingSchema);
