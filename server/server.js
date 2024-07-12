const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

dotenv.config(); // Load environment variables

const app = express();
const port = 5000;

mongoose
    .connect(process.env.REACT_APP_MONGO_URL)
    .then(() => console.log('Database connected'))
    .catch((err) => console.log('Database not connected', err));

app.use(express.json());
app.use(cookieParser());

//router setup
app.use('/', require('./routes/adminLoginRoutes'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});