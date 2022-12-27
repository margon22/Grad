const express = require("express");
const Router = express();
const mongoose = require("mongoose");
const users =require("../models/userModel")
const posts = require("../models/postsModel");
const verifyJWT = require('../verifyJWT')

Router.use(verifyJWT)

Router.get("/", async (req, res) => {
  const  allPosts = await posts.find();

res.json(allPosts)

}).post("/", async (req, res) => {
  const user = await users.findById(req.body.poster).lean().exec()
  const post = new posts({
    title: req.body.title,
    poster: req.body.poster,
    name:user.name,
    content: req.body.content,
  });
  try {
    const addPost = await post.save();
    res.json(addPost);
  } catch (e) {
    res.send(e);
  }
});

module.exports = Router;
