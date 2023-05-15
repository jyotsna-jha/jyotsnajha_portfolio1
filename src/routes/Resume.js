import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import ResumeContent from "../components/ResumeContent";

 

const Project = () => {
    return (<div>
      <Navbar/>
      <HeroImg2 heading="Resume." text="Click on download to view my Resume"/>
      <ResumeContent/>
      <Footer/>
    </div>);
  }
  
  export default Project;
  