const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Ping route
app.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});

// Start the server with error handling
const startServer = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
        process.exit(1);
    }
};

startServer();
