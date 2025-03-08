const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventName: {
        en: { type: String },
        ar: { type: String }
    },
    eventHighlight: {
        en: { type: String },
        ar: { type: String }
    },
    eventDescription: {
        en: { type: String, default: '' },
        ar: { type: String, default: '' }
    },
    termsTitle: {
        en: { type: String },
        ar: { type: String }
    },
    termsDetails: {
        en: { type: String },
        ar: { type: String }
    },
    country: { type: mongoose.Schema.Types.Mixed, default: '' },
    city: { type: mongoose.Schema.Types.Mixed, default: '' },
    location: { type: mongoose.Schema.Types.Mixed, default: '' },
    profileImage: { type: String, default: '' },
    category: { type: mongoose.Schema.Types.Mixed, default: '' },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },
    phone: { type: String, required: true },
    price: { type: String },
    providerName: { type: String, required: true, ref: 'User' },
    dateTime: [
        {
            date: { type: String, required: true }, // Date in YYYY-MM-DD format
            timeSlots: [
                {
                    stime: { type: String, required: true }, // Start time
                    etime: { type: String, required: true }, // End time
                    guests: { type: Number, required: true }, // Number of guests
                },
            ],
        },
    ],
    isSpecialist: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    }
});

module.exports = mongoose.model('Event', eventSchema);
