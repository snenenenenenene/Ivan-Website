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
      </div>
    );
  }
}
