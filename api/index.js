import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRoutes from '../api/routes/user.route.js'

const app = express();
dotenv.config();

console.log(process.env.MONGO_DB_URL); // Add this line to check if the URL is being loaded correctly

mongoose.connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(3000, () => {
  console.log('Server is Running on Port 3000');
});


app.use('/api/user', UserRoutes)
