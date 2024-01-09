import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Home } from './container';
import { Navbar } from './components';
import './App.css';
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

const App = () => (
  <>
    <BrowserRouter>
    <Navbar/>    
    <Routes>
        <Route path="/Home" element={ <Home /> }/>
        <Route path='/about' element={<AboutUs />}/>
        <Route path='/contact' element={<FindUs />}/>
        {/* <Route path='/about' element={<AboutUs />}/> */}
    </Routes>
    <Footer/>
    </BrowserRouter>
  </>
);

export default App;
