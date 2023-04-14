import React from 'react';
import TT from '../components/portcards/TT'
import LifeLog from '../components/portcards/LifeLog'
import MySQLDB from '../components/portcards/MySQLDB'
import PassGen from '../components/portcards/PassGen'
import ReadGen from '../components/portcards/ReadGen';
import Weather from '../components/portcards/Weather';

export default function Portfolio(){
    return(
      <div className='card portfolio d-flex justify-content-even ' >
      <h2>Portfolio</h2>
      <section className='container'>
        <div className='row'>
          <TT/>
          <LifeLog/>
          <MySQLDB/>
          <PassGen/>
          <ReadGen/>
          <Weather/>
        </div>
      </section>
  </div>
    )
};