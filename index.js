import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;


mongoose.connect(process.env.MONGODB_URI3,)
    .then(() => {
        console.log('MongoDB connected successfully');
        createNewUser();
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

     // Create a new model for the collection
     const userSchema = new mongoose.Schema({
        name: String,
        email: String
    });

    // Create a new collection
    const User = mongoose.model('User', userSchema);

   // Function to create and save a new user document
const createNewUser = async () => {
    try {
      const newUser = new User({ name: 'John Doe', email: 'john@example.com' });
      await newUser.save(); // save to the database
      console.log('New user created and saved:', newUser);
    } catch (error) {
      console.error('Error saving new user:', error);
    }
  };
    
    


app.listen(PORT, ()=>{
    console.log(`app is running`)
})

