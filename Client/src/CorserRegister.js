// jshint esversion: 6
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./public.scss";
// import { Link } from "react-router-dom";
function CourseRegister() {
  const content = (
    <>
      <div className="course-container">
        <div className="header">
          <h3>courser register</h3>
        </div>
        <div className="available-course">
          <div className="level">
            <a href="#" className="btn">
              level one
            </a>
            <a href="#" className="btn">
              level two
            </a>
            <a href="#" className="btn">
              level three
            </a>
            <a href="#" className="btn">
              level four
            </a>
          </div>
          <div className="course-in-level">
            <ul>
              <li>
                <li>name</li>
                <li>code</li>
                <li>3</li>
                <li>lecture time</li>
                <li>section time</li>
                <div>
                  <li>add</li>
                  <li>remove</li>
                </div>
              </li>
              <li>
                <li>name</li>
                <li>code</li>
                <li>3</li>
                <li>lecture time</li>
                <li>section time</li>
                <div>
                  <li>add</li>
                  <li>remove</li>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="registered-course"></div>
      </div>
      <div className="chat-container">
        <nav>chat</nav>
        <div>
          <aside>
            <ul>
              <li>
                <figure>
                  <img src="" alt="" />
                </figure>
                <div>
                  <p className="name">name</p>
                  <span>admin</span>
                </div>
              </li>
            </ul>
          </aside>
          <main>
            <p className="sender">
              <span>test from sender </span>
            </p>
            <p className="reciver">
              <span>test form reciver </span>
            </p>
            <p className="sender">
              <span>test from sender </span>
            </p>
            <p className="reciver">
              <span>test form reciver </span>
            </p>
            <p className="reciver">
              <span>test form reciver </span>
            </p>
            <p className="reciver">
              <span>test form reciver </span>
            </p>
            <p className="sender">
              <span>test from sender </span>
            </p><p className="sender">
              <span>test from sender </span>
            </p>
            <footer>
                <input type="text" name="" id="" />
                <button className="btn">send</button>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
  return content;
}

export default CourseRegister;
