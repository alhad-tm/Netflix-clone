import React from 'react';
import {originals,action} from "./urls"
import './App.css';
import Banner from './components/banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Rowpost from './components/rowpost/Rowpost';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <Rowpost  url ={originals} title="Netflix Originals"/>
    <Rowpost url={action} title="Action" isSmall />
  
    </div>
  );
}

export default App;
