const User = require("../models/auth");
const { upload } = require("../utils/fileUpload");
const bcrypt = require("bcrypt");
exports.getUsers = async (req, res) => {
    const id = req.user.id;
    try {
        let users = id ? await User.findOne({ _id: id }) : await User.find({});
        
        // Ensure users is always an array
        users = id ? [users] : users;  

        res.status(200).json({ message: users });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong", error });
    }
};


exports.addUser = async (req, res) => {
    try {
        upload.single('profileImage')(req, res, async (err) => {
            if(err)
                return res.status(400).json({ message: err.message });

            const { name, email, phone, password, role, designation } = req.body;
            if (!name || !email || !password || !role)
                return res.status(500).json({ message: "Please enter all required fields" });

            // Check if the email already exists
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'Email already exists' });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const fileName = req.file?`/uploads/${req.file.fileName}`:'';
            const user = new User({
                name:name,
                email,
                phone,
                role,
                password: hashedPassword,
                profileImage:fileName,
                designation
            })

            await user.save();
            res.status(201).json({ message: 'User added successfully', data: user });
        })

    } catch (error) {
        return res.status(500).json({ message: "Something went wrong", error });
    }
}

exports.updateUser = async (req, res) => {
    try {
        upload.single('profileImage')(req, res, async (err) => {
            if(err)
                return res.status(400).json({ message: err.message });
            const { id } = req.params;
            const { name, email, phone, password, role, designation, status, nameInCharge, postalCode, country, price, city, destination, definition, workingHours } = req.body;
            if (!name || !email )
                return res.status(500).json({ message: "Please enter name & Email Id" });

            const user = {
                name:name,
                email
            }
            if(phone) user.phone = phone;
            if(password) user.password = await bcrypt.hash(password, 10);
            if(role) user.role = role;
            if(designation) user.designation = designation;
            if(status) user.status = status;
            if(nameInCharge) user.nameInCharge = nameInCharge;
            if(postalCode) user.postalCode = postalCode;
            if(country) user.country = country;
            if(price) user.price = price;
            if(city) user.city = city;
            if(destination) user.destination = destination;
            if(definition) user.definition = definition;
            if(workingHours) user.workingHours = workingHours;
            if (req.file) {
                user.profileImage = `/uploads/${req.file.filename}` // Save the file path
            }

            const updateUser = await User.findByIdAndUpdate(
                id,
                user,
                {new:true}
            );
            if (!updateUser) {
                return res.status(404).json({ message: "Event not found" });
            }

            res.status(200).json({
                message: "User updated successfully",
                data: updateUser,
            });
        })

    } catch (error) {
        return res.status(500).json({ message: "Something went wrong", error });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the Event by ID and delete it
        const deleteuser = await User.findByIdAndDelete(id);

        if (!deleteuser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting User:', error);
        res.status(500).json({ message: 'Error deleting User', error: error.message });
    }
};

exports.approveUser = async (req, res) => {
        try {
            const { id } = req.params;
            const { status  } = req.body;
            // Prepare update object
            const updateData = {
                status
            };
            // Find the User by ID and update it
            const updateUser = await User.findByIdAndUpdate(
                id,
                updateData,
                { new: true } // Return the updated document
            );

            if (!updateUser) {
                return res.status(404).json({ message: "User not found" });
            }

            res.status(200).json({
                message: "Change status successfully",
                data: updateUser,
            });
        } catch (error) {
            res.status(500).json({
                message: "Error updating User",
                error: error.message,
            });
        }
}