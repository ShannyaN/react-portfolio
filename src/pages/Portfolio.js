import React from 'react';
import Projects from '../components/Projects'



function Portfolio({projectList}){
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
          <Projects projectList={projectList}/>
        </div>
      </section>
  </div>
    )
};

export default Portfolio;