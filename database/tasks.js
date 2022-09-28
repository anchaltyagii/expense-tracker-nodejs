const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  title: String,
  price: Number,
  date: Date,
});

module.exports = mongoose.model("User", userSchema);
