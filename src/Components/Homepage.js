import React, { useState } from 'react';
import img1 from '../Assets/SAMP-2.png';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importing the icons

function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="BOdy">
      <div className="HEader">
        <p>Harsha &#x222B;</p>
        <button className="MEunToggle" onClick={toggleMenu}>
          &#9778;
        </button>
        <ul className={`NAvMenu ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/resume">RESUME</Link></li>
          <li><Link to="/works">WORKS</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </div>

      <div className="MAin">
        <div className="text-container">
          <p className="i1">HELLO I'M</p>
          <p className="i2">HARSHAVARDHANA S K</p>
          <p className="i3">
          A dedicated professional with a strong work ethic, specializing in computer applications. Adaptable and quick to learn, excels in dynamic environments.
           With a track record of guiding teams to successful work and project outcomes, brings a 
           disciplined and determined approach. Passionate about front-end development, is committed 
           to continuous growth and making impactful contributions.
          </p>
        </div>
        <img className="profile" src={img1} alt="Profile" />
      </div>

      <div className="ICons">
        {/* Social Media Icons */}
        <a href="https://www.instagram.com/_harsha._.vardhana_?igsh=cHF2MXQxZWVoeW54" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/harshavardhana-s-k-896a82246/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="mailto:nishanthharsha23@gmail.com?subject=Inquiry&body=Hello%20Harsha,">
          <FaEnvelope className="social-icon" />
        </a>

      </div>

      <div className='Fotter'>
      

      <p>Page designed by Harshavardhana S K</p>
      <p> Contact <br></br></p>
            <p> Gmail<br></br>nishanthharsha23@gmail.com</p>

      </div>
    </div>
  );
}

export default Homepage;
