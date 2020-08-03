import React, { Component } from "react";
import "./App.css";
import WorkExperience from "./components/workexp";
import Header from "./components/header";
import About from "./components/about";
import Education from "./components/education";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <About></About>
        <Education></Education>
        <WorkExperience></WorkExperience>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
