import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// css
import './headerfooter.css';
// icon
import notice from './img/icon_notice.svg';
import user from './img/icon_user.svg';

export default function Navbar(props) {
    const { pathname } = useLocation(); 
    const splitPathname = pathname.split("/");
    
    return(
        <div className="navbar">
            <div className="nContent">
                <div className="nLeft">
                    <div>GOsport</div>
                </div>
                <div className="nRight">
                    <div id={splitPathname[2] === "index" ? "tabline" : ""}>
                        <Link to='/gosport/index'>首頁</Link>
                    </div>
                    <div id={splitPathname[2] === "rent" ? "tabline" : ""}>
                        <Link to='/gosport/rent'>租場地</Link>
                    </div>
                    <div id={splitPathname[2] === "communicate" ? "tabline" : ""}>
                        <Link to='/gosport/communicate'>交流區</Link>
                    </div>
                    <div id={splitPathname[2] === "qa" ? "tabline" : ""}>
                        <Link to='/gosport/qa'>Q&A</Link>   
                    </div>
                    <img src={notice}/>
                    <img src={user} />
                </div>
            </div>
        </div>
    )
};