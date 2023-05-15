import "./FooterStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              9746567175
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              jyotsna.jha003@gmail.com
            </h4>
          </div>
        </div>

        <div className="footer-right">
        
          <div className="social">
            <Link to="https://www.facebook.com/jyotshna.jha.9693">
              <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </Link>
            <Link to="https://github.com/jyotsna-jha">
              <FaGithub size={30} style={{ color: "#fff", marginRight: "2rem" }} />
            </Link>
            <Link to="https://www.linkedin.com/in/jyotsna-jha-655596250/">
              <FaLinkedin size={30} style={{ color: "#fff", marginRight: "2rem" }} />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-rights">
        <p>All rights reserved © {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

export default Footer;
