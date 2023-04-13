import React from 'react';
import TT from '../components/portcards/TT'
// import ttLogo from '../assets/images/TT.png'

export default function Portfolio(){
    return(
      <div className='card portfolio d-flex justify-content-even ' >
      <h2>Portfolio</h2>
      <section className='container'>
        <div className='row'>
          <TT />
          <TT/>
          <TT/>
        </div>
      </section>
  </div>
    )
};
// {/* <ul className="nav nav-tabs">
//             <li className='nav-item'> 
//               <a href=Life Log 
//             </li>
//             <li> Travel Tracker </li>
//             <li> Employee Database with MySQL </li>
//             <li> Weather App </li>
//             <li> ReadMe Generator </li>
//             <li> Password Generator </li> */}

