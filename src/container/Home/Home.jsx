import React from 'react';

import { AboutUs, Chef, FindUs, Gallery, Header, Intro, Laurels, SpecialMenu } from '..';

import './Home.css';


const Home = () => (
  <>  
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
  </>
);

export default Home;
