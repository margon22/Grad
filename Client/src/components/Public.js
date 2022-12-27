import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllUsers } from "../features/users/userApiSlice";
import useAuth from "../hooks/useAuth";
import "./public.scss";
const Public = () => {
  const { _id, username, status } = useAuth();
  // const users=useSelector(selectAllUsers)
  // console.log(users)

  return (
    <div>
      <nav>
        <div className="logo">student affiras system</div>
        <ul>
          <li>
            <h1>
              <Link to="/dash/posts">Post</Link>
            </h1>
          </li>
        </ul>
        <div className="userInfo">
          <p>{username}</p>
          <p className="status">{status}</p>
        </div>
        <div className="burgerMenu">
          <span></span>
          <span></span>
          <span></span>
          <div className="sidebar">
            <ul>
              <li>
                <Link to="/dash/users">profil</Link>
              </li>
              <li>
                <Link to="/dash/users">Users</Link>
              </li>
              <li>
                <Link to="/dash/courses">courses</Link>
              </li>
              <li>
                <Link to="/dash/register">register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <h1><Link to="/dash/users/add">Add New User</Link></h1> */}
      {/* <h1><Link to="/dash/courses/add">Add New Course</Link></h1> */}
      <h1></h1>

      <section className="posts" id="posts">
        <div className="post-header">
          <h2 className="section-header">posts</h2>
          <h1 className="plus">
            <Link to="/dash/posts/add">+</Link>
          </h1>
        </div>
        <div className="post">
          <h3 className="post-title">post title</h3>
          <p className="post-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            asperiores voluptates, explicabo iusto, ipsa architecto tempore
            doloribus similique est commodi error facere vel veniam totam.
            Nesciunt laudantium laboriosam doloribus rerum!
          </p>
          <p className="publisher">publisher name</p>
        </div>
        <div className="post">
          <h3 className="post-title">post title</h3>
          <p className="post-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            asperiores voluptates, explicabo iusto, ipsa architecto tempore
            doloribus similique est commodi error facere vel veniam totam.
            Nesciunt laudantium laboriosam doloribus rerum!
          </p>
          <p className="publisher">publisher name</p>
        </div>
      </section>
      {/* <p>id: {_id}</p> */}
    </div>
  );
};

export default Public;
