import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="App-footer">
        <div className=" align-content offset-xs-0 offset-md-8 offset-lg-10 text-white">
          Created By:
          <br />
          Aaryan Tyagi
          <br />
          <a
            href="https://www.linkedin.com/in/aaryan-tyagi-98785a176/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>
              <img src="./images/linkedin.png" width="2%" alt="LinkedIn" />
            </span>
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvqKnJNCLPbTztXqLSRsSgxkMMCGwDPKpJFvQSKhQbqhwpdWvJRLczSfDWJffQwxjczGlq"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>
              <img src="./images/gmail.png" width="2%" alt="Mail" />
            </span>
          </a>
          <a
            href="https://github.com/aaryantyagi182"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>
              <img src="./images/github2.png" width="2%" alt="Data Source" />
            </span>
          </a>
          <a
            href="https://github.com/mathdroid/covid-19-api"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>
              <img src="./images/api.png" width="2%" alt="github" />
            </span>
          </a>
          <br />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
