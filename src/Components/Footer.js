import React, { useState } from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import "./Css/Footer.css";

function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);
  return (
    <div className="footer">
      <div className="footer__goTheTop">
        <ExpandLessIcon onClick={scrollTop} />
      </div>
      <div className="footer__wrapper">
        <div className="footer__info">
          <div className="footer__link">
            <h2>Get to Know Us</h2>
            <ul>
              <li>Careers</li>
              <li>Blog</li>
              <li>About Amazon</li>
              <li>Press Center</li>
            </ul>
          </div>

          <div className="footer__link">
            <h2>Get to Know Us</h2>
            <ul>
              <li>Careers</li>
              <li>Blog</li>
              <li>About Amazon</li>
              <li>Press Center</li>
            </ul>
          </div>

          <div className="footer__link">
            <h2>Get to Know Us</h2>
            <ul>
              <li>Careers</li>
              <li>Blog</li>
              <li>About Amazon</li>
              <li>Press Center</li>
            </ul>
          </div>

          <div className="footer__link">
            <h2>Get to Know Us</h2>
            <ul>
              <li>Careers</li>
              <li>Blog</li>
              <li>About Amazon</li>
              <li>Press Center</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
