import React from 'react';
//import './App.css';
 import FetechRandomUser from "./fetchrandom"
import Header from './header'
import News from './news'
import Tracker from './covid_tracker';
function App() {
  return (
    <div>
    <div className="combined">
      <div className='header'>  <Header /> </div>
  <div className='random'> <FetechRandomUser /></div>

    </div>
    <div> <News /> </div>
      <Tracker />
     {/* </div> */}
    </div>
  );
}

export default App;
