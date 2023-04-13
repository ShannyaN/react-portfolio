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
            <button type='button' href="https://shannyan.github.io/three-pwdgen/" className="btn btn-primary column ">Deployed App
            </button>
            &emsp;
            <button type='button' href="https://github.com/ShannyaN/three-pwdgen" className="btn column btn-primary">Repository
            </button>
          </div>
        </div>
    </div>
    )
}