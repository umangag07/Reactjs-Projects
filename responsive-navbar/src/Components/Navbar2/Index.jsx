import React,{useState} from "react";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faTimes} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [Clicked, setClicked] = useState(false)
  return (
    <div>
      <nav className="nav">
        <div className="logo">
          <a href="/"><h1>OUR LOGO</h1></a>
        </div>
        <ul className={Clicked? 'nav-links active':'nav-links'}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/services">Service</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
        <div className="burger" onClick={()=>{setClicked(!Clicked)}}>
          <FontAwesomeIcon icon={Clicked? faTimes:faBars} />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
