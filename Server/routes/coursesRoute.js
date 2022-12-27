const express = require("express");
const courses = require("../models/coursesModel");
const Router = express.Router();
const verifyJWT = require('../verifyJWT')

Router.use(verifyJWT)

Router.get("/", async (req, res) => {
  try {
    const allCourses = await courses.find();
    res.json(allCourses);
  } catch (e) {
    res.send(e);
  }
})
  .post("/", async (req, res) => {
    const pn=courses.findById(req.body.preq)
    const course = new courses({
      name: req.body.name,
      code: req.body.code,
      level: req.body.level,
      sem: req.body.sem,
      preq: req.body.preq,
      preqname:pn.name,
      credit: req.body.credit,
      students: req.body.students,
      prof: req.body.prof,
    });
    try {
      const newCourse = await course.save();
      res.json(newCourse);
    } catch (e) {
      res.send(e);
    }
  })
  .patch("/:id", getCourse, async (req, res) => {
    if (req.body.name != null) {
      res.course.name = req.body.name;
    }
    if (req.body.code != null) {
      res.subscriber.code = req.body.code;
    }
    if (req.body.credit != null) {
      res.course.credit = req.body.credit;
    }
    if (req.body.students != null) {
      res.course.students = req.body.students;
    }
    if (req.body.prof != null) {
      res.course.prof = req.body.prof;
    }
    try {
      const updatedCourse = await res.course.save();
      res.json(updatedCourse);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  })
  .delete("/:id", getCourse, async (req, res) => {
    try {
      await res.course.remove();
      res.json({ message: "Deleted course" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

async function getCourse(req, res, next) {
  let course;
  try {
    course = await course.findById(req.params.id);
    if (course == null) {
      return res.status(404).json({ message: "Cannot find course" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.course = course;
  next();
}

module.exports = Router;
