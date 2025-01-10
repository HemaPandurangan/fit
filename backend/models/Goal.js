
const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
 
  Steps: Number,
  Running: Number,
  Sleep: Number,
  targetWeight: Number,
  Water: Number,
  
});

const GoalInfo = mongoose.model('goals', GoalSchema);

module.exports = GoalInfo;
