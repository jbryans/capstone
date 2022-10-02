const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello from node');
});

app.listen(PORT, () => console.log('i am listneing on port http://localhost:${PORT}'));
