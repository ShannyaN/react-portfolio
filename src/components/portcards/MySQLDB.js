import React from 'react';
import db from '/Users/babygirl/bootcamp/Challenges/react-portfolio/src/assets/images/portIcons/db.png'

export default function MySQLDB (){
    return (
        <div className='card col '>
            <div className='text-center container'>
                <img src={db} className="card-img-top text-center img-fluid" alt="MySQL icon."/>
            </div>
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