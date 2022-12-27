require("dotenv").config();
const users = require("./models/userModel");
const coursesRouter = require("./routes/coursesRoute");
const postsRouter = require("./routes/postsRoute");
const userRouter = require("./routes/usersRoute");
const loginRouter = require("./routes/loginRouter");
const requireAuth = require("./routes/requireAuth");
const express = require("express");
const mongoose = require("mongoose");
const { json } = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require('cors')
const corsOptions=require('./models/config/corsOptions')


app.use(cors(corsOptions))

//connect DB
const cnnDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("connected to DB");
  } catch (err) {
    console.log(err);
  }
};
app.set("view engine", "ejs");
//app.use(express.urlencoded({ extended: false }));
app.use(json());
app.use(cookieParser());
app.use("/users", userRouter);
app.use("/courses", coursesRouter);
app.use("/posts", postsRouter);
app.use("/login", loginRouter);

cnnDB();

app.listen(4000);
