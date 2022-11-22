import './App.css';
import SideBar from './components/sidebar/SideBar';
import RightBar from './components/rightbar/RightBar';
import Feed from './components/feed/Feed';
import { useState, useEffect } from "react";

function App() {


  return (
    <div className="App">
      <div className='Container'>
          <SideBar 
          />
          <div className='feed' style={{width:"850px",height:"100vh",overflowY:'scroll',msOverflowStyle: 'none'}}><Feed/> </div>
          <RightBar
          />
  


    </div>
    </div>


  );
}

export default App;
