import React from 'react';
import lifelog from '/Users/babygirl/bootcamp/Challenges/react-portfolio/src/assets/images/portIcons/lifelog.png'

export default function LifeLog (){
    return (
        <div className='card col '>
        <img src={lifelog} className="card-img-top" alt="Life Log."/>
        <div className='card-body'>
          <h3 className='card-title'>Life Log</h3>
          <p className="card-text">Allows users to create an account and To Do lists within to do lists, view within a calendar, and set presets.  </p>
          <div className='d-flex linkbuttons container columns '> 
            <button type='button' href="https://lifelog.herokuapp.com/" className="btn btn-primary column ">Deployed App
            </button>
            &emsp;
            <button type='button' href="https://github.com/emmaparis/Project-2" className="btn column btn-primary">Repository
            </button>
          </div>
        </div>
    </div>
    )
}