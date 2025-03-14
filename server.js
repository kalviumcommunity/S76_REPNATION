require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const exerciseRoutes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
    .connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB ✅'))
    .catch(err => {
        console.error('❌ MongoDB connection error:', err);
        process.exit(1);
    });

// Routes
app.use('/api', exerciseRoutes);

// Home Route
app.get('/', async (req, res) => {
    const dbStatus = mongoose.connection.readyState;
    let statusMessage = '';

    switch (dbStatus) {
        case 0:
            statusMessage = 'Disconnected';
            break;
        case 1:
            statusMessage = 'Connected';
            break;
        case 2:
            statusMessage = 'Connecting';
            break;
        case 3:
            statusMessage = 'Disconnecting';
            break;
        default:
            statusMessage = 'Unknown State';
    }

    res.json({
        message: 'Welcome to RepNation - Your Ultimate Exercise Guide!',
        database_status: statusMessage
    });
});

// Ping Route
app.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});

// Start Server
const startServer = () => {
    try {
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
        process.exit(1);
    }
};

startServer();