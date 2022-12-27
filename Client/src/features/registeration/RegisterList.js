import React, { useEffect } from "react";
import "./registers.scss"
import Course from "../courses/Course";
// import "../../../src/main.scss";
import { useGetCoursesQuery } from "../courses/courseApiSlice";
import { useGetUsersQuery, useUpdateUserMutation } from "../users/userApiSlice";
import User from "../users/User";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const RegisterList = ({ courses }) => {
  const [updateUser, { isLoading, isSuccess, isError, error }] =
    useUpdateUserMutation();

  const [cc, setCc] = useState([]);

  const { _id } = useAuth();
  // console.log(_id);
  useEffect(() => {
    if (isSuccess) {
      setCc([]);
    }
  }, [isSuccess]);

  const [level, setLevel] = useState(1);

  const OnLevelOneClick = e => setLevel(1);
  const OnLevelTwoClick = e => {
    setLevel(2);
  };
  const OnLevelThreeClick = e => {
    setLevel(3);
  };
  const OnLevelFourClick = e => setLevel(4);
  const OnCourseIdClick = e => setCc(e.target.value);

  const onSaveUserClicked = async e => {
    if (true) {
      await updateUser({ id: _id, cc });
    } else {
      await updateUser({ id: _id, cc });
    }
  };
  const options = courses.map(course => {
    if (course.level == level)
      return (
        <li>
          <li key={course.id} value={course.id}>
            {" "}
            {course.name}
          </li>
          <li>{course.code}</li>
          <li>{course.credit}</li>
          <button className="btn" value={course.id} onClick={OnCourseIdClick}>
            Add
          </button>
        </li>
      );
  });

  const content = (
    <>
      <div className="course-container">
        <div className="header">
          <h3>courser register</h3>
        </div>
        <div className="available-course">
          <div className="level">
            <button onClick={OnLevelOneClick} className="btn">
              level one
            </button>
            <button onClick={OnLevelTwoClick} className="btn">
              level two
            </button>
            <button onClick={OnLevelThreeClick} className="btn">
              level three
            </button>
            <button onClick={OnLevelFourClick} className="btn">
              level four
            </button>
          </div>
          <div className="course-in-level">
            <ul>{options}</ul>
          </div>
        </div>
        <div className="registered-course"></div>
      </div>
    </>
  );
  return content;
};

export default RegisterList;
