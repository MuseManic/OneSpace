const express = require('express');

const router = express.Router();

router.post('/register', (req, res) => {

    console.log("test2")
    const { name, username, password, confirmPassword, email } = req.body;

    // Simple validation logic (you can expand this later)
    if (!name || !username || !password || !confirmPassword || !email) {
        return res.status(400).json({ error: "All fields are required." });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match." });
    }

    // Proceed with registration logic, e.g., saving to database
    res.status(200).json({ message: "Registration successful!" });
});

module.exports = router;
