import React from "react";
import "./footer.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section>
      <footer className="footer">
        <div className="logo">Health Tech Sport</div>
        <div className="footer-pages">
          <ul className="footer-links">
            <li>
              <Link to="aboutus" className="links">
                ABOUT US{" "}
              </Link>
            </li>
            <li>
              <Link to="faqs" className="links">
                FAQS
              </Link>
            </li>
            <li>
              <Link to="terms" className="links">
                TERMS & CONDITIONS
              </Link>
            </li>
            <li>
              <Link to="/refund" className="links">
                REFUND POLICY
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="links">
                Privacy Policy
              </Link>
            </li>
          </ul>
          <div className="footer-divider"></div>
        </div>
        <div className="footer-flex">
          <Typography
            variant="body1"
            color={"rgba(255,255,255,.28)"}
            className="copyright"
          >
            © 2023, copyrights @Health Tech Sport
          </Typography>
          <Typography
            variant="body1"
            color="rgba(255, 255, 255, 0.28)"
            className="devloper"
          >
            Developed By <span>AbdulMoiz</span>
          </Typography>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
