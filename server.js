import express from 'express';
const app = express();
import { db } from './db.js';
import { configDotenv } from 'dotenv';
configDotenv();
const PORT = process.env.PORT || 3302


// middleware body-parser (use built-in express.json)
app.use(express.json());  // object name ->  req.body

app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to the Student Database" });
})
//import the router files
import studentRoutes from './routes/studentRoutes.js';

// use the routes
app.use('/student', studentRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}`);
})