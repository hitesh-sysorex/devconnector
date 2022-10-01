const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect Database
connectDB();

const port = process.env.PORT || 5000;
// const www = process.env.WWW || './';
// app.use(express.static(www));
// console.log(`serving ${www}`);

app.get('/', (req, res) => {
    res.send(`API Running`);
});
app.listen(port, () => console.log(`Server started on port ${port}`));
