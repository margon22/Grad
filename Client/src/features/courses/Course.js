// import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import { selectCoursesById } from "./courseApiSlice";
// import '../../../src/main.scss';
import "./courses.scss";

const Course = ({ coursesId }) => {
  const courses = useSelector(state => selectCoursesById(state, coursesId));

  // const navigate = useNavigate()

  if (courses) {
    // console.log(courses.preqname)
    // const coursesRolesString = courses.roles.toString().replaceAll(',', ', ')
    console.log(courses.preqname);

    return (
      <>
        <li className="li-parent">
          <li>{courses.name}</li>
          <li>{courses.code}</li>
          <li>{courses.credit}</li>
          <li>{courses.level}</li>
          <li>{courses.sem}</li>
          <li>{courses.preqname}</li>
          {/* <button className='btn'>Add</button> */}
        </li>
      </>
    );
  } else return null;
};
export default Course;
