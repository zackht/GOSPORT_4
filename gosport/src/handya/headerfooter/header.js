import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// css
import cc from '../cc.module.css'
import '../headerfooter/headerfooter.css';
// icon
import google from '../icon/google快速註冊.svg'
import cancel from '../icon/快速搜尋＿取消.svg'
import sighimg from '../icon/快速搜尋＿註冊.svg'
import loginimg from '../icon/快速搜尋.svg'

import notice from './img/icon_notice.svg';
import user from './img/icon_user.svg';

export default function Navbar(props) {
    const { pathname } = useLocation(); 
    const splitPathname = pathname.split("/");
    const [sighdiv,sighchange] = useState('block');
    const [logindiv,loginchange] = useState('none');
    const[sighbtn,sighbtnchange] = useState(true);
    const[loginbtn,loginbtnchange] = useState(false);
    const[logsigdiv,logsigchange] = useState('none');
    // var[logsigdiv,close] = useState()
    const close = () =>{
logsigchange('none')
    }
    const logsig = () =>{
    logsigchange('block');
    }
    const sigh = () =>{
        sighchange('block');
        loginchange('none');
        sighbtnchange(true);
        loginbtnchange(false);
    }
    const login = () =>{
        sighchange('none');
        loginchange('block');
        sighbtnchange(false);
        loginbtnchange(true);
    }
    return(
        <React.Fragment>
        <div style={{display:logsigdiv}} className={`${cc.back} container-fluid`}>
        <div onClick={close} className={`${cc.aa1} container-fluid`}>

        </div>
        <div class={cc.apple}> 
            
            <button className={` ${sighbtn === true ? cc.focus1:cc.tablink1 }`} onClick={sigh}  >註冊</button>
            <button className={` ${loginbtn === true ? cc.focus1:cc.tablink1 }`} onClick={login} >登入</button>
            <div id="Londo" style={{display:sighdiv}} className={cc.tabcontent}>
                <img className={cc.d131} src={google} alt="" />
              <p className={cc.d132}>註冊信箱</p>
              <form action="">
              <input className={cc.d133} type="text" />
              <p className={cc.d134}>密碼</p>
              <input className={cc.d135} type="text" />
              <p className={cc.d136}>至少8個字,含至少1個數字及1個英文字母</p>
              <p className={cc.d137}>確認密碼</p>
              <input className={cc.d138} type="text" />
              <div className={cc.d139}>
                <img src={cancel} alt="" />
                <img src={sighimg} alt="" />
              </div>
              
              </form>
            </div>
            <div id="Pari" style={{display:logindiv}} className={cc.tabcontent}>
            <p className={cc.d140}>註冊信箱</p>
              <form className={cc.d145} action="">
              <input className={cc.d133} type="text" />
              <p className={cc.d141}>密碼</p>
              <input className={cc.d142} type="text" />
               <p className={cc.d143}>忘記密碼</p></form>
               <div className={cc.d144}>
                <img src={cancel} alt="" />
                <img src={loginimg} alt="" />
              </div>
              
             
            </div>
        </div>
    </div>
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
                    <img onClick={logsig} src={user} />
                </div>
            </div>
        </div>
        </React.Fragment>
    )
    
};