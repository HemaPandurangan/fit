
const mongoose = require('mongoose');


const progressInfoSchema = new mongoose.Schema({
 
  Cardiac: Number,
  Stretching: Number,
  Swimming: Number,
  Treadmill: Number,
  
});

const progressInfo = mongoose.model('progressInfos', progressInfoSchema);

module.exports = progressInfo;
