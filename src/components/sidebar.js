import React, { useState } from "react";
import logo from '../logo.svg';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

function Sidebar(){

   


    return (
        <div className="sidebar rel">
            <a href="#" className="logo bl">
                <img src={logo} className="bl" />
            </a>

            <Router><Routes /></Router>

            <div className="stats aic flex">

                {/* <div className="stats-box flex">
                    <div className="ico ico-points s24 icon-shield" />
                    <h2 className="val s15 c333 fontb">{point}</h2>
                    <h2 className="lbl s13 c777">points</h2>
                </div>

                <div className="stats-box flex">
                    <div className="ico ico-battery s24 icon-battery-90" />
                    <h2 className="val s15 c333 fontb">{percent}</h2>
                    <h2 className="lbl s13 c777">complete</h2>
                </div> */}

            </div>


            <div className="me flex aic">
                
            </div>

        </div>
    )
}

export default Sidebar;