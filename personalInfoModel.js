// models/PersonalInfo.js
const mongoose = require('mongoose');

// Define the schema for personal information
const personalInfoSchema = new mongoose.Schema({
  mon: Number,
  tue: Number,
  wed: Number,
  thu: Number,
  fri: Number,
  sat: Number,
  sun: Number,
  week1: Number,
  week2: Number,
  week3: Number,
  week4: Number,
});

const PersonalInfo = mongoose.model('PersonalInfo', personalInfoSchema);

module.exports = PersonalInfo;
