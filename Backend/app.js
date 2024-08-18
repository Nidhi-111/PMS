import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import propertyRoutes from './routes/property.routes.js';
import teantRoutes from './routes/teant.routes.js';




const app = express();
app.use(bodyParser.json());


// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/propertymanage")
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Import routes
// const authRoutes = require('./routes/auth');


// Use routes
// app.use('/api/auth', authRoutes);
app.use('/properties', propertyRoutes);
app.use('/teantss',teantRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
