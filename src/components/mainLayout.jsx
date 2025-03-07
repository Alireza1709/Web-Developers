import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Vuejs from './vuejs';
import Reacts from './react';
import Blog from './blog';
import OurTeam from './ourTeam';
import Questions from './questions';
import Contact from './contact';
import Footer from './footer';
import Feature from './feature';
import Navbar from './navbar';


const MainLayOut = () => {

    

    return ( 
        <>
            <Navbar/>
            <Header/>
            <Feature />
            <Vuejs />
            <Reacts />
            <Blog/>
            <OurTeam/>
            <Questions/>
            <Contact/>
            <Footer/>
        </>
     );
}
 
export default MainLayOut;