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
            <button type='button' href="https://bobbycharms.github.io/travel-tracker/" className="btn btn-primary column ">Deployed App
            </button>
            &emsp;
            <button type='button' href="https://github.com/BobbyCharms/travel-tracker" className="btn column btn-primary">Repository
            </button>
          </div>
        </div>
    </div>
    )
}