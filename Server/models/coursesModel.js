const mongoose = require("mongoose");
const coursesSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "is require"],
    unique: true,
  },
  code: {
    type: String,
    require: true,
  },
  credit: {
    type: Number,
    require: true,
  },
  level: {
    type: Number,
    require: true,
  },
  sem: {
    type: Number,
    require: true,
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'users'
    },
  ],
  prof: [
    {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'users'

    },
  ],
  preq: 
    {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
  
  preqname: 
    {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
  
});
module.exports = mongoose.model("courses", coursesSchema);
