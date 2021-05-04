import React from "react"
import About from "./About/About"
import Blog from "./Blog/Blog"
import Contact from "./Contact/Contact"
import Header from "./NavBar/Header/Header"
import Navbar from "./NavBar/Navbar"
import Project from "./Project/Project"
import Skill from "./Skill/Skill"
import Testimonial from "./Testimonial/Testimonial"

function App() {
  
  return (
    <div >
      <Navbar/>
      <Header/>
      <About/>
      <Skill/>
      <Project/>
      <Blog/>
      <Testimonial/>
      <Contact/>
    </div>
  );
}

export default App;
