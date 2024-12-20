const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');

const blogRoutes = require('./Routes/BlogRouter');
const path = require('path');
const fs = require('fs');

require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 5000;

app.get('/ping', (req, res) => {
    res.send('PONG');
});



app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// app.use(cors());
app.use(cors({
    origin: '*', // Allow only this origin (your frontend)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
  }));

app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

// app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); 
app.use('/api/blogs', blogRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})