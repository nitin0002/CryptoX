import React from "react";
import "./styles.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from "@mui/icons-material/Email";
import XIcon from '@mui/icons-material/X';
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <h2 className="logo" onClick={() => topFunction()}>
        CryptoX<span>.</span>
      </h2>
      <div className="social-links">
        <a href="https://Github.com/nitin0002">
          <GitHubIcon className="social-link" />
        </a>
        <a href="mailto:ntomar.0020@gmail.com">
          <EmailIcon className="social-link" />
        </a>
        <a href="https://www.x.com/NitinTomar002">
          <XIcon className="social-link" />
        </a>
        <a href="https://www.instagram.com/nitintomar200">
          <InstagramIcon className="social-link" />
        </a>
      </div>
    </div>
  );
}

export default Footer;