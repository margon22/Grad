const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  Email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  role: [
    {
      type: String,
    },
  ],
  pc: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'courses'
    },
  ],
  cc: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'courses'
    },
  ],
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("users", userSchema);
