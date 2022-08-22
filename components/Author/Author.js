import React from "react";
import "./Author.css";
const Author = () => {
  return (
    <div>
      <aside className="profile-card">
        <header>
          {/* here’s the avatar --*/}
          <a target="_blank" href="#">
            <img
              src="http://lorempixel.com/150/150/people/"
              className="hoverZoomLink"
              alt=""
            />
          </a>

          {/*-- the username --*/}
          <h1>John Doe</h1>

          {/*-- and role or location --*/}
          <h2>Better Visuals</h2>
        </header>

        {/*-- bit of a bio; who are you? --*/}
        <div className="profile-bio">
          <p>
            It takes monumental improvement for us to change how we live our
            lives. Design is the way we access that improvement.
          </p>
        </div>

        {/*-- some social links to show off --*/}
        <ul className="profile-social-links">
          <li>
            <a href="https://www.facebook.com/creativedonut">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/dropyourbass">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/vipulsaxena">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/vipulsaxena">
              <i className="fa fa-behance"></i>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Author;
