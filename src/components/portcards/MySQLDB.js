import React from 'react';
import db from '/Users/babygirl/bootcamp/Challenges/react-portfolio/src/assets/images/portIcons/db.png'

export default function MySQLDB (){
    return (
        <div className='card col '>
        <img src={db} className="card-img-top is-centered" alt="MySQL icon."/>
        <div className='card-body'>
          <h3 className='card-title'>MySQL Database</h3>
          <p className="card-text">Database created using Sequalize with MySQL for users to view, add, remove, and update departments, roles, and salaries.</p>
          <div className='d-flex linkbuttons container columns '> 
            <button type='button' href="https://github.com/ShannyaN/twelve-MySqlDB" className="btn column btn-primary">Repository
            </button>
          </div>
        </div>
    </div>
    )
}