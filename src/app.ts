import express from 'express';
require('dotenv').config();

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send({success: true, message: "Welcome! Schedule your trip now."})
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;