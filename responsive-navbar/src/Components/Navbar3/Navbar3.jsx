import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Navbar3.css";
import Logo from "../../Logo/logo_.png";

function Navbar3() {
  const [Clicked, setClicked] = useState(false);
  return (
    <>
      <nav className="nav">
        <div className="logo">
          <a href="/">
            {" "}
            <img src={Logo} alt="logo" />
          </a>
        </div>

        <ul className={Clicked ? "nav-links active" : "nav-links"}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/rooms">Rooms</a>
          </li>
          <li>
            <a href="/orders">Orders</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <button className="btn">
            <a href="/connect">Login</a>
          </button>
          <button className="btn">
            <a href="/connect">Register</a>
          </button>
        </ul>

        <div
          className="hamburger"
          onClick={() => {
            setClicked(!Clicked);
          }}
        >
          <FontAwesomeIcon icon={Clicked ? faTimes : faBars} />
        </div>
      </nav>
    </>
  );
}

export default Navbar3;
