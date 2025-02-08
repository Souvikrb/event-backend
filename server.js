const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const admin = require('firebase-admin');
// Load environment variables
dotenv.config();

// Import routes
const authRoutes = require('./routes/authRoutes');
const masterRoutes = require('./routes/masterRoutes');
const serviceProviderRoute = require('./routes/serviceProviderRoutes');
const eventRoute = require("./routes/eventRoutes");
const adsRoute   = require("./routes/advertisementRoute");
const userRoutes = require("./routes/userRoute");
const notificationRoutes = require("./routes/notificationRoute");
const pushNotification = require('./pushNotification/notification')
// Connect to the database
const connection = require('./config/connection');
connection();

// Initialize express app
const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Routes
app.use('/api', authRoutes); // Auth-related routes
app.use('/api/master', masterRoutes); // Master-related routes
app.use('/api', serviceProviderRoute); // Service Provider-related routes
app.use('/api', eventRoute); // Service Provider-related routes
app.use('/api', adsRoute); //Ads-related routes
app.use('/api', userRoutes); //User-related routes
app.use('/api',notificationRoutes);//Notification-related routes
app.use('/',pushNotification);//Notification-related routes
// Define the port from environment variable or fallback to 5000
const PORT = process.env.PORT || 5000;



// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
