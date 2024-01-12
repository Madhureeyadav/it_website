import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareTwitter } from 'react-icons/fa6';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="bg-dark bg-gradient text-light py-5">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-md-3 text-start ">
            <img src="./img/p2.png" alt="company logo" height="80px" width="200px" />
            <p className="pt-2">
              <FaLocationDot />H-15 305 BSI Business Park <br />
              Noida, 201301, India
            </p>
            <p>
              <MdOutlineAlternateEmail />info@obiculetechnologies.com
            </p>
            <p>
              <FaPhone />0123456789
            </p>
          </div>
          <div className="col-md-2">
            <p className="h4 text-light">Useful Links</p>
            <ul className="list-unstyled fs-6 pb-4">
              <li>
                <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-decoration-none text-light">About</NavLink>
              </li>
              <li>
                <NavLink to="/service" className="text-decoration-none text-light">Service</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-decoration-none text-light">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <p className="h4 text-light">Service Links</p>
            <ul className="list-unstyled  fs-6 pb-4 ">
              <li>
                <NavLink to="/digit" className="text-decoration-none text-light">Digit Market</NavLink>
              </li>
              <li>
                <NavLink to="/web" className="text-decoration-none text-light">Webdeveloper</NavLink>
              </li>
              <li>
                <NavLink to="/design" className="text-decoration-none text-light">Webdesign</NavLink>
              </li>
              <li>
                <NavLink to="/developer" className="text-decoration-none text-light">Software Developer</NavLink>
              </li>
              <li>
                <NavLink to="/tsting" className="text-decoration-none text-light">Software Testing</NavLink>
              </li>
              <li>
                <NavLink to="/android" className="text-decoration-none text-light">Anbroid</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <p className="h4 text-light pb-2">  Network</p>
            <ul className="list-unstyled flex ">
              <li>
                <NavLink to="/" className="text-decoration-none text-light ">
                  <FaFacebook  size={30} className="pb-2"/>
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-decoration-none text-light">
                  <FaInstagramSquare   size={30} className="pb-2"/>
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-decoration-none text-light">
                  <FaSquareTwitter  size={30} className="pb-2" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-decoration-none text-light">
                  <FaLinkedin  size={30} className="pb-2"/>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
