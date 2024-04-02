const mongoose = require('mongoose');
const User = require('../models/User');
const Thought = require('../models/Thought');
const { userData, thoughtData } = require('./data');

// Import existing mongoose connection
const connection = require('../config/connection');

// Seed the database
seedDatabase();

// Function to seed the database with sample user and thought data
async function seedDatabase() {
  try {
    // Delete existing users and thoughts
    await User.deleteMany({});
    await Thought.deleteMany({});
    console.log('Existing users and thoughts deleted');

    // Create new users
    const createdUsers = await User.create(userData);
    console.log('Users seeded successfully');

    // Create new thoughts
    for (const thought of thoughtData) {
      // Find the corresponding user for the thought by userName
      const user = createdUsers.find(user => user.userName === thought.userName);
      // Set the user's _id as the value for the userName field in the thought data
      thought.userName = user._id;
      // Create the thought
      await Thought.create(thought);
    }
    console.log('Thoughts seeded successfully');

    // Close the database connection
    connection.close();
    console.log('Database connection closed');
  } catch (err) {
    console.error('Error seeding database:', err);
    // Close the database connection
    connection.close();
  }
}