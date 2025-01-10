const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const RegisterModel = mongoose.model("registers", registerSchema);

module.exports = RegisterModel;
