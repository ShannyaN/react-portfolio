import React from 'react';
import weather from '/Users/babygirl/bootcamp/Challenges/react-portfolio/src/assets/images/portIcons/weather.png'

export default function Weather (){
    return (
        <div className='card col '>
        <div className='text-center container'>
                <img src={weather} className="card-img-top text-center img-fluid" alt="Weather App."/>
        </div>
        <div className='card-body'>
          <h3 className='card-title'>Weather Application</h3>
          <p className="card-text">Allows users to search and log a list of cities that generate a five day forecast.</p>
          <div className='d-flex linkbuttons container columns '> 
            <button className="btn column btn-primary">
              <a className='reg' href='https://shannyan.github.io/six-weather/'>
                  Application
              </a>
            </button>
            &emsp;
            <button className="btn column btn-primary">
              <a className='reg' href='https://github.com/ShannyaN/six-weather'>
                  Repository
              </a>
            </button>
          </div>
        </div>
    </div>
    )
}