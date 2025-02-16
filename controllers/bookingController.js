const Booking = require("../models/booking");

exports.addBooking = async (req, res) => {
    try {
        return res.status(200).json({ message: "Booking Event is disable now" });
        const { eventId, dateId, timeslotId, promocode, guest } = req.body;
        // Validate required fields
        if ( !eventId || !dateId || !timeslotId) {
            return res.status(400).json({ message: " Event ID, Date ID, and Time Slots ID are required" });
        }
        const customerId = req.user.id;
        // Create a new booking
        const newBooking = new Booking({
            customerId,
            eventId,
            dateId,
            timeslotId,
            promocode,
            guest
        });

        await newBooking.save();

        res.status(201).json({ message: "Booking added successfully", data: newBooking });
    } catch (error) {
        res.status(400).json({ message: "Something went wrong", error });
    }
};

exports.getBookings = async (req, res) => {
    const { id } = req.params;

    try {
        let bookings = await Booking.findById(id)
        .populate("eventId", "eventName dateTime")
        .populate("customerId","name");
        const dateId = bookings.dateId;
        const timeslotId = bookings.timeslotId;
        const dateslot = bookings.eventId.dateTime;
        const item = dateslot.find(data => String(data._id) === String(dateId));
        const timeslotitem = item.timeSlots.find(data => String(data._id) === String(timeslotId));
        const response = {
            eventName:bookings.eventId.eventName,
            date:item.date,
            timeslot:timeslotitem.stime
        }
        
        res.status(200).json({ message: response });
    } catch (error) {
        res.status(400).json({ message: "Something went wrong", error });
    }
};

exports.deleteBooking = async (req, res) => {
    try {
        const { id } = req.params;

        // Find and delete the booking by ID
        const deletedBooking = await Booking.findByIdAndDelete(id);

        if (!deletedBooking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        res.status(200).json({ message: "Booking deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting booking", error: error.message });
    }
};

exports.updateBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const { eventId, dateId, timeslotId, promocode } = req.body;

        // Validate required fields
        if (!eventId || !dateId || !timeslotId) {
            return res.status(400).json({ message: "Event ID, Date ID, and Time Slots ID are required" });
        }

        const updatedData = {
            eventId,
            dateId,
            timeslotId,
            promocode,
        };

        // Update the booking by ID
        const updatedBooking = await Booking.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedBooking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        res.status(200).json({ message: "Booking updated successfully", data: updatedBooking });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error });
    }
};
