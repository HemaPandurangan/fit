
const mongoose = require('mongoose');


const DataSchema = new mongoose.Schema({
 
  wat: Number,
  steps: Number,
  cal: Number,
  rate: Number,

  
});

const DataInfo = mongoose.model('datas', DataSchema);

module.exports = DataInfo;
