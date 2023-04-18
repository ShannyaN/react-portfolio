import React from 'react';
import App from './App'

function Projects ({projectList}){ 
    return projectList.map(project => {
        return (
            <div className='card col '>
                <div className='text-center container'>
                        <img src={project.image} className="card-img-top text-center img-fluid" alt={project.name} />
                </div>
                <div className='card-body'>
                <h3 className='card-title'>{project.name}</h3>
                <p className="card-text">{project.desc}</p>
                <div className='d-flex linkbuttons container columns'> 
                    <App app={project.app}/>
                    <button className="btn column btn-primary">
                        <a className='reg' href={project.repo}>
                            Repository
                        </a>
                    </button>
                </div>
                </div>
            </div>
        )
    });
};

export default Projects;