import React, { useState,useEffect } from 'react';
import Axios from "axios";
import { Link, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

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
    const [sighdiv, sighchange] = useState('block');
    const [logindiv, loginchange] = useState('none');
    const [sighbtn, sighbtnchange] = useState(true);
    const [loginbtn, loginbtnchange] = useState(false);
    const [logsigdiv, logsigchange] = useState('none');
    // var[logsigdiv,close] = useState()
    const close = () => {
        logsigchange('none')
    }
    const logsig = () => {
        logsigchange('block');
    }
    const sigh = () => {
        sighchange('block');
        loginchange('none');
        sighbtnchange(true);
        loginbtnchange(false);
    }
    const login = () => {
        sighchange('none');
        loginchange('block');
        sighbtnchange(false);
        loginbtnchange(true);
    }
    // 輸入
    const [account, setAccount] = useState();
    const [password, setPassword] = useState();
    //實際
    const [trueAcc, setTrueAcc] = useState();
    const [truePass, setTruePass] = useState();
    const [userid,saveId] = useState();
    const [username,setname] = useState();
    //token
    const [token , saveToken] = useState();
    const [token1, setToken] = useState();
    const [id, setId] = useState();

    const ccc=()=>{
        Axios.post("http://localhost:3001/userinfo", {
            account: account,
            password:password
        }).then((response) => {
            console.log(response)
            setTrueAcc(response.data[0].email);
            setTruePass(response.data[0].password);
            saveId(response.data[0].userid);
            setname(response.data[0].username);
            saveToken(account);
                Cookies.set(
                    'token',//key
                    account,//value
                    {
                        path:'/',
                        expires: 7,//有效7天
                        sameSite: 'strict'//只有當前url與請求目標一致才會帶上cookie
                    }
                )
                // setToken(token)
                console.log(token)
            

            // Cookies.set(
            //     'id',//key
            //     userid,//value
            //     {
            //         path:'/gosport',
            //         expires: 7,//有效7天
            //         sameSite: 'strict'//只有當前url與請求目標一致才會帶上cookie
            //     }
            // )
            // setToken(Cookies.get('token'));






            //     Cookies.set(
            //         'token',//key
            //         token,//value
            //         {
            //             path:'/gosport',
            //             expires: 7,//有效7天
            //             sameSite: 'strict'//只有當前url與請求目標一致才會帶上cookie
            //         }
            //     )
            //     // setToken(token)
            //     console.log(token)
            

            // Cookies.set(
            //     'id',//key
            //     userid,//value
            //     {
            //         path:'/gosport',
            //         expires: 7,//有效7天
            //         sameSite: 'strict'//只有當前url與請求目標一致才會帶上cookie
            //     }
            // )
            // setToken(Cookies.get('token'));

        }).catch(()=>{
            alert('87');
        });
    }
    useEffect(() => {
        setToken(Cookies.get('token'))
        saveToken(Cookies.get('token'))
    }, [])



    // const saveToken = (token) => {
    //     // Login有
    //     Cookies.set(
    //         'token',//key
    //         token,//value
    //         {
    //             path:'/',
    //             expires: 7,//有效7天
    //             sameSite: 'strict'//只有當前url與請求目標一致才會帶上cookie
    //         }
    //     )

    //     setToken(token)
    //     console.log(token)

    // }

    // useEffect(()=>{
    //     Axios.post("http://localhost:3001/userinfo", {
    //         account: account,
    //         password:password
    //     }).then((response) => {
    //         console.log(response)
    //         setTrueAcc(response.data[0].email);
    //         setTruePass(response.data[0].password);
    //         saveId(response.data[0].userid);
    //         setname(response.data[0].username);
    //         console.log(password);
    //         console.log(userid);
    //         console.log(username);
    //     });
    // },[account,password])
  
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // console.log(e);
    //     // 判斷輸入密碼和實際是否相符 是的話將account傳回給Applayout
    //     if (account === trueAcc && password === truePass) {
    //         saveToken(account);
    //         // alert('輸入!!');
    //     } else {
    //         alert('輸入有誤喔!!');
    //     }
    // }
    if (!token) {
        // return <PageLogin saveToken={saveToken} saveId={saveid} />;
        return (
            <React.Fragment>
                <div style={{ display: logsigdiv }} className={`${cc.back} container-fluid`}>
                    <div onClick={close} className={`${cc.aa1} container-fluid`}>
    
                    </div>
                    <div class={cc.apple}>
    
                        <button className={` ${sighbtn === true ? cc.focus1 : cc.tablink1}`} onClick={sigh}  >註冊</button>
                        <button className={` ${loginbtn === true ? cc.focus1 : cc.tablink1}`} onClick={login} >登入</button>
                        <div id="Londo" style={{ display: sighdiv }} className={cc.tabcontent}>
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
                        <div id="Pari" style={{ display: logindiv }} className={cc.tabcontent}>
                            <p className={cc.d140}>註冊信箱</p>
                            <form className={cc.d145}>
                                <input className={cc.d133} type="text" onChange={e => setAccount(e.target.value)} />
                                <p className={cc.d141}>密碼</p>
                                <input className={cc.d142} type="password" onChange={e => setPassword(e.target.value)} />
                                <p className={cc.d143}>忘記密碼</p></form>
                            <div className={cc.d144}>
                                <button style={{border:"None",backgroundColor:"transparent"}}><img src={cancel}></img></button>
                                <button onClick={ccc}  style={{border:"None",backgroundColor:"transparent"}} type='submit'><img src={loginimg}></img></button>
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
                            <div id={splitPathname[2] === "gosport" ? "tabline" : ""}>
                                <Link to='/gosport'>0</Link>
                            </div>
                            <div id={splitPathname[2] === "rent" ? "tabline" : ""}>
                                <Link to='/gosport/rent'>0</Link>
                            </div>
                            <div id={splitPathname[2] === "communicate" ? "tabline" : ""}>
                                <Link to='/gosport/communicate'>0</Link>
                            </div>
                            <div id={splitPathname[2] === "qa" ? "tabline" : ""}>
                                <Link to='/gosport/qa'>Q&A</Link>
                            </div>
                            <img src={notice} />
                            <img onClick={logsig} src={user} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    // else if (token="dddd"){
    //     return (
    //         <React.Fragment>
    //             <div style={{ display: logsigdiv }} className={`${cc.back} container-fluid`}>
    //                 <div onClick={close} className={`${cc.aa1} container-fluid`}>
    
    //                 </div>
    //                 <div class={cc.apple}>
    
    //                     <button className={` ${sighbtn === true ? cc.focus1 : cc.tablink1}`} onClick={sigh}  >註冊</button>
    //                     <button className={` ${loginbtn === true ? cc.focus1 : cc.tablink1}`} onClick={login} >登入</button>
    //                     <div id="Londo" style={{ display: sighdiv }} className={cc.tabcontent}>
    //                         <img className={cc.d131} src={google} alt="" />
    //                         <p className={cc.d132}>註冊信箱</p>
    //                         <form action="">
    //                             <input className={cc.d133} type="text" />
    //                             <p className={cc.d134}>密碼</p>
    //                             <input className={cc.d135} type="text" />
    //                             <p className={cc.d136}>至少8個字,含至少1個數字及1個英文字母</p>
    //                             <p className={cc.d137}>確認密碼</p>
    //                             <input className={cc.d138} type="text" />
    //                             <div className={cc.d139}>
    //                                 <img src={cancel} alt="" />
    //                                 <img src={sighimg} alt="" />
    //                             </div>
    
    //                         </form>
    //                     </div>
    //                     <div id="Pari" style={{ display: logindiv }} className={cc.tabcontent}>
    //                         <p className={cc.d140}>註冊信箱</p>
    //                         <form className={cc.d145}>
    //                             <input className={cc.d133} type="text" onChange={e => setAccount(e.target.value)} />
    //                             <p className={cc.d141}>密碼</p>
    //                             <input className={cc.d142} type="password" onChange={e => setPassword(e.target.value)} />
    //                             <p className={cc.d143}>忘記密碼</p></form>
    //                         <div className={cc.d144}>
    //                             <button style={{border:"None",backgroundColor:"transparent"}}><img src={cancel}></img></button>
    //                             <button onClick={ccc}  style={{border:"None",backgroundColor:"transparent"}} type='submit'><img src={loginimg}></img></button>
    //                         </div>
    
    
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="navbar">
    //                 <div className="nContent">
    //                     <div className="nLeft">
    //                         <div>GOsport</div>
    //                     </div>
    //                     <div className="nRight">
    //                         <div id={splitPathname[2] === "gosport" ? "tabline" : ""}>
    //                             <Link to='/gosport'>後台</Link>
    //                         </div>
    //                         <div id={splitPathname[2] === "rent" ? "tabline" : ""}>
    //                             <Link to='/gosport/rent'>後台</Link>
    //                         </div>
    //                         <div id={splitPathname[2] === "communicate" ? "tabline" : ""}>
    //                             <Link to='/gosport/communicate'>0</Link>
    //                         </div>
    //                         <div id={splitPathname[2] === "qa" ? "tabline" : ""}>
    //                             <Link to='/gosport/qa'>Q&A</Link>
    //                         </div>
    //                         <img src={notice} />
    //                         <img onClick={logsig} src={user} />
    //                     </div>
    //                 </div>
    //             </div>
    //         </React.Fragment>
    //     )
    // }
    



    return (
        <React.Fragment>
            <div style={{ display: logsigdiv }} className={`${cc.back} container-fluid`}>
                <div onClick={close} className={`${cc.aa1} container-fluid`}>

                </div>
                <div class={cc.apple}>

                    <button className={` ${sighbtn === true ? cc.focus1 : cc.tablink1}`} onClick={sigh}  >註冊</button>
                    <button className={` ${loginbtn === true ? cc.focus1 : cc.tablink1}`} onClick={login} >登入</button>
                    <div id="Londo" style={{ display: sighdiv }} className={cc.tabcontent}>
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
                    <div id="Pari" style={{ display: logindiv }} className={cc.tabcontent}>
                        <p className={cc.d140}>註冊信箱</p>
                        <form className={cc.d145}>
                            <input className={cc.d133} type="text" onChange={e => setAccount(e.target.value)} />
                            <p className={cc.d141}>密碼</p>
                            <input className={cc.d142} type="password" onChange={e => setPassword(e.target.value)} />
                            <p className={cc.d143}>忘記密碼</p></form>
                        <div className={cc.d144}>
                            <button style={{border:"None",backgroundColor:"transparent"}}><img src={cancel}></img></button>
                            <button onClick={ccc}  style={{border:"None",backgroundColor:"transparent"}} type='submit'><img src={loginimg}></img></button>
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
                        <div id={splitPathname[2] === "gosport" ? "tabline" : ""}>
                            <Link to='/gosport'>{token}</Link>
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
                        <img src={notice} />
                        <img onClick={logsig} src={user} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

};