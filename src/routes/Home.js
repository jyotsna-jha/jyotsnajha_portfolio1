import React from 'react'
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from '../components/Footer';
import WorkCard from '../components/WorkCard';

const Home = () => {
  return (<div>
    <Navbar/>
    <HeroImg/>
    <WorkCard/>
    
    <Footer/>
  </div>);
}

export default Home;
