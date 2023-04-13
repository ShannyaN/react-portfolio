import React from 'react';
import TT from '../components/portcards/TT'
import LifeLog from '../components/portcards/LifeLog'
import MySQLDB from '../components/portcards/MySQLDB'

export default function Portfolio(){
    return(
      <div className='card portfolio d-flex justify-content-even ' >
      <h2>Portfolio</h2>
      <section className='container'>
        <div className='row'>
          <TT />
          <LifeLog/>
          <MySQLDB/>
        </div>
      </section>
  </div>
    )
};