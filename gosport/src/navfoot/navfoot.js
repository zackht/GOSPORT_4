import React, { Component } from 'react';
// css
import './navfoot.css';
// icon
import notice from './img/icon_notice.svg';
import user from './img/icon_user.svg';

export default function NavFoot(params) {
    return(
        <React.Fragment>
                
                {/* 導覽列 */}
                <div className="navbar">
                    <div className="nContent">
                        <div className="nLeft">
                            <div>GOsport</div>
                        </div>
                        <div className="nRight">
                            <div><a href="">租場地</a></div>
                            <div><a href="">交流區</a></div>
                            <div><a href="">成為場地方</a></div>
                            <div><a href="">Q&A</a></div>
                            <img src={notice}/>
                            <img src={user} />
                        </div>
                    </div>
                </div>
                
                {/* footer */}
                <div className="footer">
                    <div className="fContent">
                        <div>Copyright © 2022 GOsport. 保留一切權利。</div>
                    </div>
                </div>
            </React.Fragment>
    )
};
