const mongoose = require('mongoose');


const ActivityInfoSchema = new mongoose.Schema({
  mon: { type: Number, default: 0, min: 0 }, 
  tue: { type: Number, default: 0, min: 0 }, 
  wed: { type: Number, default: 0, min: 0 }, 
  thu: { type: Number, default: 0, min: 0 },
  fri: { type: Number, default: 0, min: 0 }, 
  sat: { type: Number, default: 0, min: 0 }, 
  sun: { type: Number, default: 0, min: 0 }, 
  week1: { type: Number, default: 0, min: 0 },
  week2: { type: Number, default: 0, min: 0 },
  week3: { type: Number, default: 0, min: 0 },
});


const ActivityInfo = mongoose.model('activityInfo', ActivityInfoSchema);
module.exports = ActivityInfo;
