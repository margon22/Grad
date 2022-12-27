// jshint esversion: 6
import "./public.scss";
import { Link } from "react-router-dom";
function Public() {
  const content = (
    <>
      <nav>
        <Link to="/dash">
        <h1 className="logo">student affiars system</h1>
        </Link>
        <ul>
          <li>
            <a href="#">home</a>
          </li>
          {/* <li>
            <a href="#">our project</a>
          </li>
          <li>
            <a href="#">about department</a>
          </li> */}
          <li>
            <a href="#">contact it</a>
          </li>
          {/* <li>
            <a href="#">news</a>
          </li>
          <li>
            <a href="#">ads</a>
          </li> */}
          <li>
            <a href="#">footer</a>
          </li>
        </ul>
        <div className="login-section">
          <Link to="/login" className="btn">Login</Link>
        </div>
      </nav>
      <header>
        <div className="header-content">
          <h1>project</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet in
            doloribus animi, voluptatem officiis sed dignissimos atque maxime,
            quam architecto, nam repellat! Soluta obcaecati error, aliquid
            voluptas pariatur minus consequatur!
          </p>
        </div>
      </header>
      <section className="our-project">
        <div className="section-header">
          <h2>our project</h2>
        </div>
        <p>text abot project</p>
      </section>
      <section className="about-department">
        <div className="section-header">
          <h2>about departmentc</h2>
        </div>
        <div className="msg">department message</div>
        <div className="vision">department vision</div>
      </section>
    </>
  );
  return content;
}

export default Public;
