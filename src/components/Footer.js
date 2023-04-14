import React from 'react';
import github from '../assets/images/footer/github.png'
import linkedin from '../assets/images/footer/linkedin.png'
import twitter from '../assets/images/footer/twitter.png'

export default function Footer () {
    return (
        <footer className='is-centered foot'>
         
            <a href='https://www.linkedin.com/in/shannyaniveyro/'>
                <img src={linkedin} alt='linkedin'>
                </img>
            </a>
            <a href='https://github.com/ShannyaN'>
                <img src={github} alt='github logo.'>
                </img>
            </a>
            <a href='https://twitter.com/shannyan'>
                <img src={twitter} alt='linkedin'>
                </img>
            </a>
       
        </footer>
    )
}