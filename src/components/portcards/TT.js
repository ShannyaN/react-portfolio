import React from 'react';
import tt from '/Users/babygirl/bootcamp/Challenges/react-portfolio/src/assets/images/portIcons/tt.png'

export default function TT (){
    return (
        <div className='card col '>
        <div className='text-center container '>
                <img src={tt} className="card-img-top text-center img-fluid" alt="Travel Tracker."/>
        </div>
        <div className='card-body'>
          <h3 className='card-title'>Travel Tracker</h3>
          <p className="card-text">Lets users drop, drag, and remove pins on map locations that can be searched to find. Airport selections based on pin locations. </p>
          <div className='d-flex linkbuttons container columns '> 
            <button className="btn column btn-primary">
              <a className='reg' href='https://bobbycharms.github.io/travel-tracker/'>
                  Application
              </a>
            </button>
            &emsp;
            <button className="btn column btn-primary">
              <a className='reg' href='https://github.com/BobbyCharms/travel-tracker'>
                  Repository
              </a>
            </button>
          </div>
        </div>
    </div>
    )
}