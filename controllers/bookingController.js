const Booking = require("../models/booking");

exports.addBooking = async (req, res) => {
    try {
        const { eventId, dateId, timeslotId, promocode, guest } = req.body;
        // Validate required fields
        let errorMessages = [];
        if (!eventId) {
            errorMessages.push("Please select an event.");
        }
        if (!dateId) {
            errorMessages.push("Please select an event date.");
        }
        if (!timeslotId) {
            errorMessages.push("Please select a time slot.");
        }
        if (guest == 0) {
            errorMessages.push("Please select the number of guests.");
        }

        if (errorMessages.length > 0) {
            return res.status(400).json({ message: errorMessages.join(" ") });
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

        res.status(201).json({ message: "Your Event is booked successfully", data: newBooking });
    } catch (error) {
        res.status(400).json({ message: "Something went wrong", error });
    }
};

exports.getBookings = async (req, res) => {
    const { id } = req.params;
    let providerId, customerId;

    if (req.user.role === "serviceprovider") {
        providerId = req.user.id;
    } else if (req.user.role === "user") {
        customerId = req.user.id;
    }

    try {
        let bookings = [];

        if (id) {
            bookings = await Booking.findById(id)
                .populate("eventId", "eventName dateTime")
                .populate("customerId", "name");
        } else {
            let query = {};
            
            // if (providerId) {
            //     query = { ...query, "eventId.providerId": providerId };
            // }
            
            if (customerId) {
                query = { ...query, customerId: customerId };
            }

            bookings = await Booking.find(query)
                .populate({
                    path: "eventId",
                    select: "eventName dateTime providerId",
                    ...(providerId ? { match: { providerName: providerId } } : {}),
                })
                .populate("customerId", "name");

            // Remove bookings where eventId is null (for service providers)
            if (providerId) {
                bookings = bookings.filter(booking => booking.eventId !== null);
            }
        }

        let response = [];

        bookings.forEach((data) => {
            if (!data.eventId || !data.eventId.dateTime) return; // Prevent null errors

            const dateId = data.dateId;
            const timeslotId = data.timeslotId;
            const dateslot = data.eventId.dateTime;

            const item = dateslot.find(slot => String(slot._id) === String(dateId));
            if (!item) return;

            const timeslotitem = item.timeSlots.find(slot => String(slot._id) === String(timeslotId));
            if (!timeslotitem) return;

            response.push({
                id: data._id,
                eventName: data.eventId.eventName,
                date: item.date,
                timeslot: timeslotitem.stime,
                promocode: data.promocode,
                guest: data.guest,
                customer: data.customerId ? data.customerId.name : "Guest",
            });
        });

        res.status(200).json({ message: response });

    } catch (e) {
        res.status(400).json({ message: "Something went wrong", error: e.message });
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
