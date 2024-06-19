const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// Route to get data from Java microservice
router.get('/data', async (req, res) => {
    try {
        const response = await fetch('http://localhost:8080/data');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

module.exports = router;
