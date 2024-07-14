const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
    .connect(process.env.REACT_APP_MONGO_URL)
    .then(() => console.log('Database connected'))
    .catch((err) => console.log('Database not connected', err));

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // or your frontend URL
    credentials: true
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());

// Routes
app.use('/', require('./routes/adminLoginRoutes'));
app.use('/vlog', require('./routes/vlogsRoutes'));
app.use('/blog',require('./routes/blogsRoutes'));
app.use('/projects', require('./routes/projectRoutes'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});