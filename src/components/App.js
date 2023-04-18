import React from "react";

export default function App ({app}){
    if (app){
       return(
            <button className="btn column btn-primary">
                <a className='reg' href={app}>
                    Application
                </a>
            </button>
       )
    }
}
