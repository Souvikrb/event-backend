const { upload } = require('../utils/fileUpload');
const Event = require('../models/event');
const User = require('../models/auth');
const mongoose = require("mongoose");
exports.addEvent = async (req, res) => {
    try {
        upload.single('profileImage')(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ message: err.message });
            }
            const language = req.query.language || "en"; // Default language is English
            const { eventName, eventHighlight, dateTime, country, city, location, category, status,providerName,eventDescription,phone,termsTitle,termsDetails,price } = req.body;

            // Validate required fields
            if (!eventName  || !phone) {
                return res.status(400).json({ message: 'Event name, Phone are required.' });
            }

            const eventDate = new Date(dateTime);

            const profileImage = req.file ? `/uploads/${req.file.filename}` : '';

            const newEventData = {
                eventName: { [language]: eventName },
                eventHighlight: { [language]: eventHighlight },
                eventDescription: { [language]: eventDescription },
                termsTitle: { [language]: termsTitle },
                termsDetails: { [language]: termsDetails },
                phone,
                price,
                providerName,
                profileImage,
                country,
                city,
                location,
                category,
                status: status || 'active',
                dateTime: dateTime || []
            };

            const newEvent = new Event(newEventData);
            await newEvent.save();

            res.status(201).json({ message: 'Event added successfully', data: newEvent });
        });
    } catch (error) {
        console.error('Error adding event:', error);
        res.status(500).json({ message: 'Error adding event', error: error.message });
    }
};

// Get a list of all event
exports.getEvent = async (req, res) => {
    const { id } = req.params;
    const language = req.query.language || "en"; // Default language is English
    try {
        let events;

        if (id) {
            events = await Event.findOne({ _id: id });

            if (events) {
                if (mongoose.Types.ObjectId.isValid(events.providerName)) {
                    const providerName = await User.findOne({ _id: events.providerName });
                    events = { ...events._doc, providerNameShow: providerName?.name };
                }

                // Return only the selected language fields
                events = {
                    ...events._doc,
                    _id: events._id,
                    eventName: events.eventName[language] || events.eventName["en"],
                    eventHighlight: events.eventHighlight[language] || events.eventHighlight["en"],
                    eventDescription: events.eventDescription[language] || events.eventDescription["en"],
                    termsTitle: events.termsTitle[language] || events.termsTitle["en"],
                    termsDetails: events.termsDetails[language] || events.termsDetails["en"],
                    phone: events.phone,
                    price: events.price,
                    country: events.country,
                    city: events.city, 
                    location: events.location,
                    category: events.category,
                    providerName: events.providerName,
                    providerNameShow: events.providerNameShow,
                    isSpecialist: events.isSpecialist,
                    status: events.status,
                    dateTime: events.dateTime,
                };
            }
            res.status(200).json({ message: events });
        } else {  
            events = await Event.find({}).populate("providerName", "name");
            
            // Return only the selected language fields for all events
            events = events.map(event => ({
                _id: event._id,
                eventName: event.eventName[language] || event.eventName["en"],
                eventHighlight: event.eventHighlight[language] || event.eventHighlight["en"],
                eventDescription: event.eventDescription[language] || event.eventDescription["en"],
                termsTitle: event.termsTitle[language] || event.termsTitle["en"],
                termsDetails: event.termsDetails[language] || event.termsDetails["en"],
                phone: event.phone,
                price: event.price,
                country: event.country,
                city: event.city, 
                location: event.location,
                category: event.category,
                isSpecialist: event.isSpecialist,
                status: event.status,
                providerName: event.providerName ? event.providerName._id: null,
                providerNameShow: event.providerName ? event.providerName.name[language]: null,
                dateTime: events.dateTime
            }));
            res.status(200).json({ message: events });
        }

        
    } catch (error) {
        console.error("Error fetching event:", error);
        res.status(500).json({ message: "Error fetching event", error: error.message });
    }
};

// Update an existing Event by ID
exports.updateEvent = async (req, res) => {
    upload.single("profileImage")(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: "Error uploading file", error: err.message });
        }
        try {
            const language = req.query.language || "en"; // Default language is English
            const { id } = req.params;
            
            const { eventName, eventHighlight, dateTime, country, city, location, category, status,providerName,eventDescription,phone,termsTitle,termsDetails,price} = req.body;
            // Validate required fields
            if (!eventName  || !phone) {
                return res.status(400).json({ message: 'Event name, Phone are required.' });
            }
           
            // Prepare update object
            const updateData = {
                [`eventName.${language}`]: eventName,
                [`eventHighlight.${language}`]: eventHighlight,
                [`eventDescription.${language}`]: eventDescription,
                [`termsTitle.${language}`]: termsTitle,
                [`termsDetails.${language}`]: termsDetails,
                dateTime: dateTime || [],
                country,
                city,
                location,
                category,
                status: status || 'active',
                providerName,
                phone,
                price

            };
            // If a file is uploaded, add its path to the update data
            if (req.file) {
                updateData.profileImage = `/uploads/${req.file.filename}` // Save the file path
            }
            
            // Find the Event by ID and update it
            const updatedEvents = await Event.findByIdAndUpdate(
                id,
                updateData,
                { new: true } // Return the updated document
            );

            if (!updatedEvents) {
                return res.status(404).json({ message: "Event not found" });
            }

            res.status(200).json({
                message: "Event updated successfully",
                data: updatedEvents,
            });
        } catch (error) {
            res.status(500).json({
                message: "Error updating Event",
                error: error.message,
            });
        }
    });
}

exports.deleteEvent = async (req, res) => {
        try {
            const { id } = req.params;

            // Find the Event by ID and delete it
            const deleteevent = await Event.findByIdAndDelete(id);

            if (!deleteevent) {
                return res.status(404).json({ message: 'Event not found' });
            }

            res.status(200).json({ message: 'Event deleted successfully' });
        } catch (error) {
            console.error('Error deleting Event:', error);
            res.status(500).json({ message: 'Error deleting Event', error: error.message });
        }
    };

exports.approveEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const { status  } = req.body;
        // Prepare update object
        const updateData = {
            status
        };
        // Find the Event by ID and update it
        const updateEvent = await Event.findByIdAndUpdate(
            id,
            updateData,
            { new: true } // Return the updated document
        );

        if (!updateEvent) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.status(200).json({
            message: "Change status successfully",
            data: updateEvent,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating Event",
            error: error.message,
        });
    }
}

exports.approvespecialist = async (req, res) => {
    try {
        const { id } = req.params;
        const { status  } = req.body;
        // Prepare update object
        const updateData = {
            isSpecialist:status
        };
        // Find the Event by ID and update it
        const updateEvent = await Event.findByIdAndUpdate(
            id,
            updateData,
            { new: true } // Return the updated document
        );

        if (!updateEvent) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.status(200).json({
            message: "Change status successfully",
            data: updateEvent,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating Event",
            error: error.message,
        });
    }
}