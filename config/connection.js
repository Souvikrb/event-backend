const mongoose = require('mongoose');

// Connection function to MongoDB
const connection = async () => {
  try {
    // Connect to the database using the connection string from environment variables
    const dbUri = 'mongodb+srv://souvikraybarman:0njcPuO7cryFWgTQ@cluster25.lkz63.mongodb.net/?retryWrites=true&w=majority&appName=Cluster25';
    const connect = await mongoose.connect(dbUri);

    console.log(`MongoDB connected successfully to: ${connect.connection.host}`);
  } catch (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1); // Exit the process if DB connection fails
  }
};

module.exports = connection;
