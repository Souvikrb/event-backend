const multer = require('multer');
const path = require('path');
const ServiceProvider = require('../models/serviceProvider');
const User = require('../models/auth');
const bcrypt = require('bcrypt');
// Add a new service provider
// Set up multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Specify the folder where images will be stored
    },
    filename: function (req, file, cb) {
        const fileExtension = path.extname(file.originalname); // Get the file extension
        const fileName = Date.now() + fileExtension; // Generate a unique file name
        cb(null, fileName); // Save the file with the generated name
    }
});

// Set up multer file filter to allow only image files
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true); // Allow the file
    } else {
        cb(new Error('Only image files are allowed'), false); // Reject non-image files
    }
};

// Initialize multer with storage and file filter configuration
const upload = multer({ storage, fileFilter });

exports.addServiceProvider = async (req, res) => {
    try {
        // Handle file upload (only one file is expected)
        upload.single('profileImage')(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ message: err.message }); // If file upload fails
            }

            // Extract data from the request body
            const { name, phone, email,password, about, country, city, location, category, status,role } = req.body;
            const language = req.query.language || "en"; // Default language is English
            // Check if the required fields are provided
            if (!name || !email || !phone) {
                return res.status(400).json({ message: 'Full name, email, and phone are required' });
            }

            const isEmail = await User.findOne({ email });

            if (isEmail)
                return res.status(400).json({ message: 'Email Id is already exist.' });

            const isPhone = await User.findOne({ phone });

            if (isPhone)
                return res.status(400).json({ message: 'Phone Number is already exist.' });

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);
            
            // Get the uploaded file's path (or URL if using a cloud storage service)
            const profileImage = req.file ? `/uploads/${req.file.filename}` : ""; // Use local path for simplicity

            // Create a new service provider document
            const newServiceProvider = new User({
                name:{ [language]: name },
                email,
                phone,
                password:hashedPassword,
                about: { [language]: about || '' }, // Optional field with default empty string if not provided
                country: country || "", // Optional field with default empty string if not provided
                city: city || "", // Optional field with default empty string if not provided
                location: location || "",
                category: category || "",
                profileImage, // Save the uploaded profile image path
                role
            });

            // Save the service provider to the database
            await newServiceProvider.save();

            res.status(201).json({ message: 'Service provider added successfully', data: newServiceProvider });
        });
    } catch (error) {
        console.error('Error adding service provider:', error);
        res.status(500).json({ message: 'Error adding service provider', error: error.message });
    }
};

// Get a list of all service providers
exports.getServiceProviders = async (req, res) => {
    const { id } = req.params;
    const language = req.query.language || "en";
    
    try {
        let serviceProviders = id 
            ? await User.findOne({ _id: id }) 
            : await User.find({ role: 'serviceprovider' });

        if (!serviceProviders) return res.status(404).json({ message: "No service providers found" });

        const formatProvider = provider => ({
            ...provider._doc,
            name: provider.name[language] ,
            about: provider.about[language]
        });
        
        res.status(200).json({ message: id ? formatProvider(serviceProviders) : serviceProviders.map(formatProvider) });
    } catch (error) {
        console.error("Error fetching service providers:", error);
        res.status(500).json({ message: "Error fetching service providers", error: error.message });
    }
};


// Update an existing service provider by ID
exports.updateServiceProvider = async (req, res) => {
    upload.single("profileImage")(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: "Error uploading file", error: err.message });
        }

        try {
            const { id } = req.params;
            const { name, phone, email, about, country, city, location, category,status } = req.body;
            const language = req.query.language || "en"; // Default language is English
            // Check if the required fields are provided
            if (!name || !email || !phone) {
                return res.status(400).json({ message: 'Full name, email, and phone are required' });
            }
            // Prepare update object
            const updateData = {
                [`name.${language}`]: name,
                phone,
                email,
                [`about.${language}`]: about,
                country,
                city,
                location,
                category,
            };

            // If a file is uploaded, add its path to the update data
            if (req.file) {
                updateData.profileImage = req.file.path; // Save the file path
            }
            
            // Find the service provider by ID and update it
            const updatedServiceProvider = await User.findByIdAndUpdate(
                id,
                updateData,
                { new: true } // Return the updated document
            );

            if (!updatedServiceProvider) {
                return res.status(404).json({ message: "Service provider not found" });
            }

            res.status(200).json({
                message: "Service provider updated successfully",
                data: updatedServiceProvider,
            });
        } catch (error) {
            res.status(500).json({
                message: "Error updating service provider",
                error: error.message,
            });
        }
    });
}

    // Delete a service provider by ID
exports.deleteServiceProvider = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the service provider by ID and delete it
        const deletedServiceProvider = await User.findByIdAndDelete(id);

        if (!deletedServiceProvider) {
            return res.status(404).json({ message: 'Service provider not found' });
        }

        res.status(200).json({ message: 'Service provider deleted successfully' });
    } catch (error) {
        console.error('Error deleting service provider:', error);
        res.status(500).json({ message: 'Error deleting service provider', error: error.message });
    }
};

exports.approveServiceProvider = async (req, res) => {
        try {
            const { id } = req.params;
            const { status  } = req.body;
            // Prepare update object
            const updateData = {
                status
            };
            // Find the service provider by ID and update it
            const updatedServiceProvider = await User.findByIdAndUpdate(
                id,
                updateData,
                { new: true } // Return the updated document
            );

            if (!updatedServiceProvider) {
                return res.status(404).json({ message: "Service provider not found" });
            }

            res.status(200).json({
                message: "Change status successfully",
                data: updatedServiceProvider,
            });
        } catch (error) {
            res.status(500).json({
                message: "Error updating service provider",
                error: error.message,
            });
        }
}
