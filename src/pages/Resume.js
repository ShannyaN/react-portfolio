import React from 'react';
import resume from '/Users/babygirl/bootcamp/Challenges/react-portfolio/src/assets/images/resume.png';
export default function Resume(){
    return(
        <div className='card container resume'>
            <h2>Resume</h2>
            <h3> Skills</h3> 
                <ul>
                    <li>Teamwork Problem-Solving</li>
                    <li>CAD Design Electrical Engineering MySQL</li>
                    <li>ReactJS</li>
                    <li>LabView</li>
                    <li>COMSOL</li>
                    <li>ImageJ</li>
                    <li>SolidWorks</li>
                    <li>AutoCAD</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                </ul>
            <h3> Languages</h3>
                <ul>
                    <li>English</li>
                    <li>Spanish</li>
                </ul>
            <a id='resdown' href='https://drive.google.com/file/d/1seg3LwQIac-qjKoNoxe22Qjgd6Ujxu2R/view?usp=sharing'>
                Download Resume
              </a>
             <img src={resume} className="text-center img-fluid" alt="Resume preview." /> 
           
        </div>
    )
}