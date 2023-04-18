import React from 'react';
import Projects from '../components/Projects'
import projectList from '../components/ProjectList';
import TT from '../components/portcards/TT'
import LifeLog from '../components/portcards/LifeLog'
import LifeLoglogo from '../assets/images/portIcons/lifelog'
import MySQLDB from '../components/portcards/MySQLDB'
import MySQLDBlogo from '../assets/images/portIcons/db.png'
import PassGen from '../components/portcards/PassGen'
import PassGenlogo from '../assets/images/portIcons/pwd.png'
import ReadGen from '../components/portcards/ReadGen';
import ReadGenlogo from '../assets/images/portIcons/readme.png'
import Weather from '../components/portcards/Weather';
import Weatherlogo from '../assets/images/portIcons/Weather.png'
makeCards

function Portfolio(){
  
  return(
      <div className='card portfolio d-flex justify-content-even ' >
      <h2>Portfolio</h2>
      <section className='container'>
        <div className='row'>
          {/* <TT/>
          <LifeLog/>
          <MySQLDB/>
          <PassGen/>
          <ReadGen/>
          <Weather/> */}
          Projects(ProjectList)
        </div>
      </section>
  </div>
    )
};

export default Portfolio;