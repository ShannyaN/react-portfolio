import React from 'react';
import pwd from '/Users/babygirl/bootcamp/Challenges/react-portfolio/src/assets/images/portIcons/pwd.png'

export default function PassGen (){
    return (
        <div className='card col '>
        <div className='text-center container'>
                <img src={pwd} className="card-img-top text-center img-fluid" alt="Password Generator."/>
        </div>
        <div className='card-body'>
          <h3 className='card-title'>Password Generator</h3>
          <p className="card-text">Creates unique passwords based on parameters input by users. </p>
          <div className='d-flex linkbuttons container columns '> 
            <button className="btn column btn-primary">
              <a className='reg' href='https://shannyan.github.io/three-pwdgen/'>
                  Application
              </a>
            </button>
            &emsp;
            <button className="btn column btn-primary">
              <a className='reg' href="https://github.com/ShannyaN/three-pwdgen">
                  Repository
              </a>
            </button>
          </div>
        </div>
    </div>
    )
}