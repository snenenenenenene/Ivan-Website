import React, { useState } from "react";
import {HashLink as Link} from 'react-router-hash-link'
const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="navbar">
      <div className="hamburger-menu-div" onClick={() => setActive(!active)}>
        <svg
          width={48}
          height={48}
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFFFFF"
          className="hamburger-menu"
        >
          <path d="M41 14H7a2 2 0 010-4h34a2 2 0 010 4zM41 26H7a2 2 0 010-4h34a2 2 0 010 4zM41 38H7a2 2 0 010-4h34a2 2 0 010 4z" />
        </svg>
      </div>
      <Link to="/#home" style={{ display: "flex" }}>
        <svg
          width="60"
          className="navbar-logo"
          alt="Logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M256 0c141.385 0 256 114.615 256 256a257.02 257.02 0 01-5.517 52.966H5.518A256.952 256.952 0 010 256C0 114.615 114.615 0 256 0z"
            fill="#a5d2f0"
          />
          <path
            d="M256 512C114.615 512 0 397.385 0 256h512c0 141.385-114.615 256-256 256z"
            fill="#6e9be0"
          />
          <g fill="#5c83ce">
            <path d="M512 256c0 2.962-.131 5.89-.232 8.828H.232C.131 261.89 0 258.962 0 256c0-2.961.124-5.891.223-8.828h511.554c.099 2.937.223 5.867.223 8.828zM388.414 361.931h44.138a8.829 8.829 0 000-17.656h-44.138a8.829 8.829 0 000 17.656zM291.31 361.931h61.793a8.829 8.829 0 000-17.656H291.31a8.829 8.829 0 00-8.828 8.828 8.83 8.83 0 008.828 8.828z" />
          </g>
          <path
            d="M194.207 361.931h44.138a8.829 8.829 0 000-17.656h-44.138a8.829 8.829 0 000 17.656z"
            fill="#87b4f0"
          />
          <g fill="#5c83ce">
            <path d="M61.793 326.621h150.069a8.829 8.829 0 000-17.656H61.793a8.829 8.829 0 00-8.828 8.828 8.83 8.83 0 008.828 8.828zM238.345 326.621h132.414a8.829 8.829 0 000-17.656H238.345a8.829 8.829 0 000 17.656zM406.069 326.621h8.828a8.829 8.829 0 000-17.656h-8.828a8.829 8.829 0 000 17.656zM256 467.862h52.966a8.829 8.829 0 000-17.656H256a8.828 8.828 0 000 17.656z" />
          </g>
          <path
            d="M150.069 361.931h8.828a8.829 8.829 0 000-17.656h-8.828a8.829 8.829 0 000 17.656z"
            fill="#87b4f0"
          />
          <g fill="#5c83ce">
            <path d="M220.69 432.552h44.138a8.829 8.829 0 000-17.656H220.69a8.829 8.829 0 000 17.656zM176.552 432.552h8.828a8.829 8.829 0 000-17.656h-8.828a8.829 8.829 0 000 17.656z" />
          </g>
          <g fill="#87b4f0">
            <path d="M256 397.241h26.483a8.829 8.829 0 000-17.656H256a8.828 8.828 0 000 17.656zM88.276 397.241h26.483a8.829 8.829 0 000-17.656H88.276a8.828 8.828 0 000 17.656zM105.931 361.931h8.828a8.829 8.829 0 000-17.656h-8.828a8.829 8.829 0 000 17.656zM326.621 432.552h35.31a8.829 8.829 0 000-17.656h-35.31a8.829 8.829 0 000 17.656zM317.793 397.241h8.828a8.829 8.829 0 000-17.656h-8.828a8.829 8.829 0 000 17.656z" />
          </g>
          <g fill="#ffd7af">
            <path d="M449.207 164.833l-12.331-17.523-22.621-14.897h-47.172l-144.255 16.029a25.674 25.674 0 00-20.626 15.089l-49.504 111.385-68.098 34.05h132.414l35.31-114.759 124.505-35.126 16 13.793 29.426 13.977 6.069-4.919-17.103-14.208v-8.828l26.114 16.415a5.484 5.484 0 005.738.06l4.47-2.682a5.482 5.482 0 001.664-7.856z" />
            <path d="M367.681 308.966c5.123-14.492 3.986-31.081-4.559-45.169v-.001c-15.108-24.907-47.848-32.924-72.755-17.815l-22.643 13.735c-17.538 10.638-26.653 30.018-25.265 49.25h125.222z" />
          </g>
          <path
            d="M367.681 308.966c5.123-14.492 3.986-31.081-4.559-45.17-15.107-24.907-47.848-32.924-72.755-17.815l-3.774 2.29 36.818 60.695h44.27z"
            fill="#ff5050"
          />
          <path
            d="M333.736 308.966l-39.477-65.081c-1.311.652-2.617 1.325-3.891 2.097l-11.321 6.868 34.039 56.117h20.65z"
            fill="#b43c3c"
          />
          <g fill="#643c46">
            <path d="M282.264 292.195l-4.578-7.548c-3.793-6.253-1.799-14.396 4.454-18.189 6.252-3.793 14.396-1.799 18.189 4.454l4.578 7.548c3.793 6.252 1.799 14.396-4.454 18.188-6.253 3.793-14.396 1.799-18.189-4.453zM323.411 308.966l-.191-.316c-3.793-6.252-11.936-8.247-18.188-4.454-1.99 1.207-3.493 2.882-4.572 4.769l22.951.001z" />
          </g>
        </svg>
      </Link>
      <div
        className={
          active ? "navbar-link-container active" : "navbar-link-container"
        }
      >
        <Link to="/#home" className="navbar-link">
          Home
        </Link>
        <Link to="/#portfolio" className="navbar-link">
          Wie ben ik?
        </Link>
        <Link to="/#programs" className="navbar-link">
          Onderdelen
        </Link>
        <Link to="/#contact" className="navbar-link">
          Contact
        </Link>
        <Link to="/#FAQ" className="navbar-link">
          FAQ
        </Link>
        <a
          className="facebook-link"
          href="https://facebook.com/IvanFaesPrivateSwimAdvice"
        >
          <i className="bi bi-facebook"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
