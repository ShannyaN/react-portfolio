import React from 'react';
import lifelog from '../assets/images/portIcons/lifelog.png'
import db from '../assets/images/portIcons/db.png'
import pwd from '../assets/images/portIcons/lifelog.png'

export default function LifeLog (){
    return (
        <div className='card col '>
        <div className='text-center container'>
                <img src={lifelog} className="card-img-top text-center img-fluid" alt="Life Log."/>
        </div>
        <div className='card-body'>
          <h3 className='card-title'>Life Log</h3>
          <p className="card-text">Allows users to create an account and To Do lists within to do lists, view within a calendar, and set presets.  </p>
          <div className='d-flex linkbuttons container columns '> 
            <button className="btn column btn-primary">
              <a className='reg' href='https://lifelog.herokuapp.com/'>
                  Application
              </a>
            </button>
            &emsp;
            <button className="btn column btn-primary">
              <a className='reg' href='https://github.com/emmaparis/Project-2'>
                  Repository
              </a>
            </button>
          </div>
        </div>
    </div>
    )
}