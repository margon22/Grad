const express = require("express");
const users = require("../models/userModel");
const userRouter = express.Router();
const verifyJWT = require('../verifyJWT')

userRouter.use(verifyJWT)


userRouter
  .get("/", async (req, res) => {
    const allUser = await users.find();
    res.json(allUser);
  })
  .post("/", async (req, res) => {
    const user = new users({
      username: req.body.username,
      name: req.body.name,
      password: req.body.password,
      Email: req.body.Email,
      phone: req.body.phone,
      role: req.body.role,
      pc: req.body.pc,
      cc: req.body.cc,
    });
    try {
      const newUser = await user.save();
      res.send(newUser);
    } catch (e) {
      console.log(e);
    }
  })
  .patch("/:id", getUser, async (req, res) => {
    if (req.body.name != null) {
      res.user.name = req.body.name;
    }
    if (req.body.username != null) {
      res.user.username = req.body.username;
    }
    if (req.body.Email != null) {
      res.user.Email = req.body.Email;
    }
    if (req.body.phone != null) {
      res.user.phone = req.body.phone;
    }
    if (req.body.role != null) {
      res.user.role = req.body.role;
    }
    try {
      const updatedUser = await res.user.save();
      res.json(updatedUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  })
  .delete("/:id", getUser, async (req, res) => {
    try {
      await res.user.remove();
      res.json({ message: "Deleted user" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

async function getUser(req, res, next) {
  let user;
  try {
    user = await users.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find user" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.user = user;
  next();
}
module.exports = userRouter;
