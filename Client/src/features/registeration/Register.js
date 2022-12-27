import React from "react";
import { useSelector } from "react-redux";
import { selectAllCourses } from "../courses/courseApiSlice";
import RegisterList from "./RegisterList";

const Register = () => {
  const courses = useSelector(selectAllCourses);
  // console.log(users)
  const content = courses ? (
    <RegisterList courses={courses} />
  ) : (
    <p>Loading...</p>
  );

  return content;
};

export default Register;
