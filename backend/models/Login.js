const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  username: { type: String, required: true },
  
  password: { type: String, required: true }
});

const LoginModel = mongoose.model("logins", loginSchema);

module.exports = LoginModel;
