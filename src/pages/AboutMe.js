import React from 'react';
import proPic from '../assets/images/profileNiveyro.png'

export default function AboutMe(){
    return(
        <div className='card aboutme container' >
            <h2>About Me</h2>
            <div className='container columns'>
                <div className='row'>
                    <div className='col-sm'>
                        <img src={proPic} alt="Profile."/>
                    </div>
                    <div className='col-md'>
                        <p>
                        &emsp; A Hofstra University Biomedical Engineering graduate, pursuing certification in software engineering through a full-stack development bootcamp through Columbia University. I have completed a Co-op at United Therapeutics where I designed, assembled, and tested parts for scientists and managed projects from design to installation of parts in laboratories. I am looking to pursue Medical Devices/Biotechnology post-graduation. I am proficient in HTML, JavaScript, CSS, Node, Express, and Python.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};