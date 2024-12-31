


const mongoose = require('mongoose');


const ProfileSchema = new mongoose.Schema({

  fullName: String,
  location: String,
  dateOfBirth: Date,
  height: Number,
  weight:Number,
 
});

const ProfileInfo = mongoose.model('profile', ProfileSchema);

module.exports = ProfileInfo;
