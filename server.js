const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Ping route
app.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
