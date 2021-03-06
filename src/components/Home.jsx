import React, { Component } from "react";
import Contact from "./Contact";
import FAQ from "./FAQ";
import HomeSection from "./HomeSection";
import Portfolio from "./Portfolio";
import Programs from "./Programs";

export default class Home extends Component {
  render() {
    return (
      <div>
        <HomeSection />
        <Portfolio />
        <Programs />
        <Contact />
        <FAQ />
        <div className="back-to-top">
          <a href="#home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 47.255 47.255"
              width={30}
              fill={"#FFFFFF"}
            >
              <path d="M46.255 35.941a.997.997 0 01-.707-.293l-21.921-21.92-21.92 21.92a.999.999 0 11-1.414-1.414L22.92 11.607a.999.999 0 011.414 0l22.627 22.627a.999.999 0 01-.706 1.707z" />
            </svg>
          </a>
        </div>
        <div className="footer">
          <p>© 2021 IVAN FAES ALLE RECHTEN VOORBEHOUDEN</p>
          <p>
            CREATED BY{" "}
            <a
              style={{ color: "#cce6ff", textDecoration: "underline" }}
              href="http://www.sennebels.xyz/"
            >
              SENNE BELS
            </a>
            <a href="https://www.linkedin.com/in/sennebels/">
              <i class="bi bi-linkedin"></i>
            </a>
          </p>
        </div>
      </div>
    );
  }
}
