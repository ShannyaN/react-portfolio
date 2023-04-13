import React from 'react';
import readme from '/Users/babygirl/bootcamp/Challenges/react-portfolio/src/assets/images/portIcons/readme.png'

export default function ReadGen (){
    return (
        <div className='card col '>
            <div className='text-center container'>
                <img src={readme} className="card-img-top text-center img-fluid" alt="ReadMe Generator."/>
            </div>
            <div className='card-body'>
                <h3 className='card-title'>ReadMe Generator</h3>
                <p className="card-text"> Application using inquirer that generates a ReadMe.md file based on the user's inputs.</p>
            <div className='d-flex linkbuttons container columns '> 
                <button type='button' href="https://github.com/ShannyaN/seven-ReadMeGen" className="btn column btn-primary">Repository
                </button>
            </div>
        </div>
    </div>
    )
}