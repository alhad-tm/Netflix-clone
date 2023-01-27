import React from 'react';
import {originals,action,HorrorMovies,ComedyMovies,RomanceMovies,Documentaries,Trending} from "./urls"
import './App.css';
import Banner from './components/banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Rowpost from './components/rowpost/Rowpost';



function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <Rowpost url ={originals} title="Netflix Originals"/>
    <Rowpost url={Trending} title="Trending" isSmall />
    <Rowpost url={action} title="Action Movies" isSmall />
    <Rowpost url={HorrorMovies} title="Horror Movies" isSmall />
    <Rowpost url={ComedyMovies} title="Comedy Movies" isSmall />
    <Rowpost url={RomanceMovies} title="Romance Movies" isSmall />
    <Rowpost url={Documentaries} title="Documentaries" isSmall />
    <p className='base'>© Developed by ALHAD.T.M</p>
    
      </div>
  );
}

export default App;
