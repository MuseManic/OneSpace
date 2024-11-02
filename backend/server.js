const express = require('express');
const cors = require('cors');
const registrationRoutes = require('./registration'); // Ensure the path is correct

const app = express();
app.use(cors());
app.use(express.json()); // For parsing JSON bodies

// Add a root route to handle GET requests
app.get('/', (req, res) => {
    res.send('Welcome to the API. Use /api/register for registration.');
});

// Use the registration route
app.use('/api', registrationRoutes);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
