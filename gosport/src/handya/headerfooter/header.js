import React, { useState, useEffect } from 'react';
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
    // 登入輸入
    const [account, setAccount] = useState();
    const [password, setPassword] = useState();
    //實際
    const [userInfo, setuser] = useState([{
        username: '',
        userid: '',
        userimg: { data: '' },
        email: '',
        password: '',
    }]);
    const [userurl, setUserurl] = useState();
    const [userimg, setuserimg] = useState([{}]);
    const[token1,settoken] = useState();
    const ccc = () => {
        Axios.post("http://localhost:3001/userinfo", {
            account: account,
            password: password
        }).then((response) => {
            // console.log(emaillist)
            // console.log(realmail)

            setuser(response.data);
            console.log(userInfo)
            settoken(account)
            Cookies.set(
                'token',//key
                response.data[0].email,//value
                {
                    path: '/',
                    expires: 7,//有效7天
                    sameSite: 'strict'//只有當前url與請求目標一致才會帶上cookie
                }
            )
            Cookies.set(
                'id',//key
                response.data[0].userid,//value
                {
                    path: '/',
                    expires: 7,//有效7天
                    sameSite: 'strict'//只有當前url與請求目標一致才會帶上cookie
                }
            )
            // token = (Cookies.get('token'))
            // settoken(Cookies.get('token'))
            // const id = ((Cookies.get('id')))
        }).catch(() => {
            alert('87');
        });
    }
    // token = (Cookies.get('token'))
    const token=(Cookies.get('token'))
    const id = ((Cookies.get('id')))

    const getimg = async () => {
        // settoken(Cookies.get('token'))
        // const token = (Cookies.get('token'))
        // const id = ((Cookies.get('id')))
        let response1 = await Axios.post("http://localhost:3001/self", {
            userid: id
        });
        setuser(response1.data)
        // console.log(response1)
        const u8Arr = new Uint8Array(response1.data[0].userimg);
        // u8Arr to url
        const blob = new Blob([u8Arr], { type: "image/jpeg" });
        // 讀取
        const fr = new FileReader
        fr.readAsDataURL(blob);
        fr.onload = function () {
            setUserurl(fr.result);
        };
    }
    useEffect(() => {
        getimg()
        
    }, []);

//註冊輸入
// const[sighemail,emailput]=useState('');
const[sighput,pasput]=useState('');
const[sighput2,passput2]=useState('');
const[email,setemail] = useState('');
//存在的email
const[realmail,setrealmail] = useState();
const [emailhint, setemailhint] = useState();
const [username, setusername] = useState();
const [userimg1, setuserimg1] = useState();
const [tel, settel] = useState();
const sighsend = () =>{
    Axios.post("http://localhost:3001/create1",{
        email:email,
        password:password,
    }).then(() => {
        console.log("success");
    });

}
const emailcheck = (Event) => {
    const text = Event.target.value;
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    // 任意字元開頭@gmail.com結尾
    if (text.match(reg)) {
        setemailhint("可以註冊");
        setemail(text);
    } else {
        setemailhint("信箱已重複或格式不正確");
    }
}

const handleLogout = (e) => {
    e.preventDefault();
settoken("")
    Cookies.remove('token', {
        path: ''
    })

    // settoken=(null);

    Cookies.remove('id', {
        path: ''
    })

}

// 滾到qa的位置
const scrollToQa =()=>{
    let qatext = document.getElementById('qateaxt');
    qatext.scrollIntoView();
}


    if (!token1) {
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
<div className={cc.d152}>
                               
                                <p>{emailhint}</p>
</div>
                                <input onChange={emailcheck} className={`${emailhint === "可以註冊"? cc.d133:cc.d151}`} type="text" />
                                <p className={cc.d134}>密碼</p>
                                <input onChange={e => setPassword(e.target.value)} className={cc.d135} type="text" />
                                <p className={cc.d136}>至少8個字,含至少1個數字及1個英文字母</p>
                                <p className={cc.d137}>確認密碼</p>
                                <input onChange={passput2} className={cc.d138} type="text" />
                                <div className={cc.d139}>
                                    <img src={cancel} onClick={close} alt="" />
                                    <img onClick={sighsend} type="submit" src={sighimg} alt="" />
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
                                <button style={{ border: "None", backgroundColor: "transparent" }}><img onClick={close} src={cancel}></img></button>
                                <button onClick={ccc} style={{ border: "None", backgroundColor: "transparent" }} type='submit'><img src={loginimg}></img></button>
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
                            <div id={splitPathname[2] === "home" ? "tabline" : ""}>
                                <Link to='/gosport/home'>首頁</Link>
                            </div>
                            <div id={splitPathname[2] === "rent" ? "tabline" : ""}>
                                <Link to='/gosport/rent'>租場地</Link>
                            </div>
                            <div id={splitPathname[2] === "communicate" ? "tabline" : ""}>
                                <Link to='/gosport/communicate/search'>交流區</Link>
                            </div>
                            <div id={splitPathname[2] === "qa" ? "tabline" : ""}>
                                <Link to='/gosport/home' onClick={scrollToQa}>Q&A</Link>
                            </div>
                            <img className="notice" src={notice} />
                            <img className="nouserimg" onClick={logsig} src={user} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

     return (
        <React.Fragment>
            {/* <div style={{display:'none'}} className={`${cc.back} container-fluid`}>
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
                            <button style={{ border: "None", backgroundColor: "transparent" }}><img src={cancel}></img></button>
                            <button onClick={ccc} style={{ border: "None", backgroundColor: "transparent" }} type='submit'><img src={loginimg}></img></button>
                        </div>


                    </div>
                </div>
            </div> */}
            <div className={userInfo[0].email==="root" ? 'rootnavbar':'navbar'}>
                <div className="nContent">
                    <div className="nLeft">
                        <div>GOsport</div>
                    </div>
                    <div className="nRight">
                        <div id={splitPathname[2] === "gosport" ? "tabline" : ""}>
                            {userInfo[0].email==="root" ? <Link to='/gosport'>後台首頁</Link>  : <Link to='/gosport'>首頁</Link> }
                            {/* <Link to='/gosport'>首頁</Link> */}

                        
                        </div>
                        <div id={splitPathname[2] === "rent" ? "tabline" : ""}>
                        {userInfo[0].email==="root" ? <Link to='/gosport'>後台租場地</Link>  : <Link to='/gosport'>租場地</Link> }
                            {/* <Link to='/gosport/rent'>租場地</Link> */}
                        </div>
                        <div id={splitPathname[2] === "communicate" ? "tabline" : ""}>
                        {userInfo[0].email==="root" ? <Link to='/gosport'>後台交流區</Link>  : <Link to='/gosport'>交流區</Link> }
                            {/* <Link to='/gosport/communicate'>交流區</Link> */}
                        </div>
                        <div id={splitPathname[2] === "qa" ? "tabline" : ""}>
                        {userInfo[0].email==="root" ? <Link to='/gosport'>後台Q&A</Link>  : <Link to='/gosport'>Q&A</Link> }
                            {/* <Link to='/gosport/qa'>Q&A</Link> */}
                        </div>
                        <img className="notice" src={notice} />
                        <div className="username"><p>Hi: {token}</p></div>
                        {userInfo.map((v, k) => {

                            
                            if (v.userimg === null) { return<React.Fragment> <img className="userimg1" onClick={logsig} src={user}></img> <p className={cc.d153}><a href="##" onClick={handleLogout}>登出</a></p> </React.Fragment>                                  
                        }
                            else {
                                let u8Arr = new Uint8Array(v.userimg.data);
                                let blob = new Blob([u8Arr], { type: "image/jpeg" });
                                let fr = new FileReader;
                                fr.readAsDataURL(blob);
                                fr.onload = function () {
                                    setUserurl(fr.result);
                                }
                                return<React.Fragment><img className="userimg" onClick={logsig} src={userurl} /> 
                                 <p className={cc.d153}><a href="##" onClick={handleLogout}>登出</a></p>  
                                 </React.Fragment>
                            }
                        })}

                    </div>
                </div>
            </div>
        </React.Fragment>
       )
    
};