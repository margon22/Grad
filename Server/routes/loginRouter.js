require("dotenv").config();
const express = require("express");
const Router = express();
const users = require("../models/userModel");
const { route } = require("./coursesRoute");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { config } = require("dotenv");

//create json web token
const maxAge = 3 * 24 * 60 * 60;
// const createToken = (id) => {
//   return jwt.sign({ id },
  
//     process.env.ACCESS_TOKEN_SECRET, {
//     expiresIn: maxAge,
//   });
// };






Router.post( "/",async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
      return res.status(400).json({ message: 'All fields are required' })
  }

  const foundUser = await users.findOne({ username }).exec()

    if (!foundUser) {
      return res.status(401).json({ message: "user not exist" });
    }

  const match = await bcrypt.compare(password, foundUser.password)

  if (!match) return res.status(401).json({ message: 'Unauthorized444' })

  const accessToken = jwt.sign(
      {
          "UserInfo": {
            "_id":foundUser._id,
              "username": foundUser.username,
              "role": foundUser.role
          }
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '15m' }
  )

  const refreshToken = jwt.sign(
      { "username": foundUser.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '7d' }
  )

  // Create secure cookie with refresh token 
  res.cookie('jwt', refreshToken, {
      httpOnly: true, //accessible only by web server 
      secure: true, //https
      sameSite: 'None', //cross-site cookie 
      maxAge: 7 * 24 * 60 * 60 * 1000 //cookie expiry: set to match rT
  })

  // Send accessToken containing username a nd roles 
  res.json({ accessToken })
})








Router.get(
  "/refresh",
  // asyncHandler(async (req, res) => {
  //   const { username, password } = req.body;
  //   //Check for user Data
  //   if (!username || !password) {
  //     return res.status(400).json({ message: "All fields are required" });
  //   }

  //   const foundUser = await users.findOne({ username }).exec();

  //   if (!foundUser) {
  //     return res.status(401).json({ message: "user not exist" });
  //   }

  //   const match = await bcrypt.compare(password, foundUser.password);

  //   if (!match) return res.status(401).json({ message: "X password" });

  //   const token = createToken(foundUser._id);
    
  //   res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
  //   const accessToken = jwt.sign(
  //     {
  //         "UserInfo": {
  //             "username": foundUser.username,
  //             "role": foundUser.role
  //         }
  //     },
  //     process.env.ACCESS_TOKEN_SECRET,
  //     { expiresIn: '15m' }
  // )

  // res.json({ accessToken })
  //   console.log("logged In \n", foundUser.role);
  //  // res.redirect("/users");
  // })



  asyncHandler(async (req, res) => {cookies = req.cookies

  if (!cookies?.jwt) return res.status(401).json({ message: 'Unauthorizedddddd' })

  const refreshToken = cookies.jwt

  jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, decoded) => {
          if (err) return res.status(403).json({ message: 'Forbidden' })

          const foundUser = await users.findOne({ username: decoded.username }).exec()

          if (!foundUser) return res.status(401).json({ message: 'Unauthorizedddddddddddd' })

          const accessToken = jwt.sign(
              {
                  "UserInfo": {
            "_id":foundUser._id,

                      "username": foundUser.username,
                      "role": foundUser.role
                  }
              },
              process.env.ACCESS_TOKEN_SECRET,
              { expiresIn: '15m' }
          )

          res.json({ accessToken })
      }
  )
    }))



   Router.delete("/", logout = (req, res) => {
      const cookies = req.cookies
      if (!cookies?.jwt) return res.sendStatus(204) //No content
      res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })
      res.json({ message: 'Cookie cleared' })
  }
   )

module.exports = Router;
