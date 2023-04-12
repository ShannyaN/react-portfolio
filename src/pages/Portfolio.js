import React from 'react';
import ttLogo from '../assets/images/TT.png'

export default function Portfolio(){
    return(
      <div className='card portfolio' >
      <h2>Portfolio</h2>
      <div className='container columns'>
          <div className=' row-cols-2'>
              <div className='col-sm column card'>
                  <img src={ttLogo} className="card-img-top" alt="Travel Tracker."/>
                  <div className='card-body'>
                    <h3 className='card-title'>Travel Tracker</h3>
                    <p class="card-text">Created using JavaScript, Express, Node, and APIs. Lets users drop, drag, and remove pins on map locations that can be searched to find. Upon the selection of a pin, the closest airport names and locations appear. </p>
                    <a href="https://bobbycharms.github.io/travel-tracker/" class="btn btn-primary">Deployed App</a>
                    {/* href='https://bobbycharms.github.io/travel-tracker/' */}
                  </div>
              </div>
              <div className='col-md column card'>
                  
              </div>
          </div>
      </div>
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

