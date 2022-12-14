import React from 'react';
import {originals,action,HorrorMovies,ComedyMovies,RomanceMovies,Documentaries,Trending} from "./urls"
import './App.css';
import Banner from './components/banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Rowpost from './components/rowpost/Rowpost';
import Details from './components/Details/Details';


function App() {
  return (
    <div className="App">
    
     
    <Navbar/>
    <Banner/>
    <Rowpost url ={originals} title="Netflix Originals"/>
    <Rowpost url={Trending} title="Trending" isSmall />
    <Rowpost url={action} title="Action" isSmall />
    <Rowpost url={HorrorMovies} title="Horror Movies" isSmall />
    <Rowpost url={ComedyMovies} title="Comedy Movies" isSmall />
    <Rowpost url={RomanceMovies} title="Romance Movies" isSmall />
    <Rowpost url={Documentaries} title="Documentaries" isSmall />
     {/* <Details/> */}
      </div>
  );
}

export default App;
