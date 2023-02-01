import React, { useState, useRef } from 'react';
import Axios from "axios";
import vv from './req.module.css';
import Cookies from 'js-cookie';
import GoogleLogin from "react-google-login";
const Client = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [username, setusername] = useState("");
    const [userimg, setuserimg] = useState("");
    const [tel, settel] = useState("");
    const adduser = () => {
        Axios.post("http://localhost:3001/create", {
            email: email,
            password: password,
            username: username,
            userimg: userimg,
            tel: tel,
        }).then(() => {
            console.log("success");
        });
    };
    //提示email格式   
    const [emailhint, setemailhint] = useState("");
    const emailcheck = (Event) => {
        const text = Event.target.value;
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        // 任意字元開頭@gmail.com結尾
        console.log(text.match(reg))
        if (text.match(reg)) {
            setemailhint("格式正確");
            setemail(text);
        } else {
            setemailhint("格式錯誤");
        }
    }
    // 提示密碼格式
    const [passwordhint, setpasswordhint] = useState("");
    const passwordcheck = (Event) => {
        const text = Event.target.value;
        const reg = /^(?=.*[^a-zA-Z0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
        // 密碼必須包含大小寫英文字母,至少一個數字與特殊符號,至少8碼
        console.log(text.match(reg))
        if (text.match(reg)) {
            setpasswordhint("格式正確");
            setpassword(text);
        } else {
            setpasswordhint("格式錯誤");
        }
    }
    //提式手機格式
    const [telhint, settelhint] = useState("");
    const telcheck = (Event) => {
        const text = Event.target.value;
        const reg = /^09\d{8}$/;
        // 密碼必須包含大小寫英文字母,至少一個數字與特殊符號,至少8碼
        console.log(text.match(reg))
        if (text.match(reg)) {
            settelhint("格式正確");
            settel(text);
        } else {
            settelhint("格式錯誤");
        }
    }


    const [employeeList, setEmployeeList] = useState([]);
    const getEmployee = () => {
        Axios.post("http://localhost:3001/employee").then((response) => {
            console.log(response.data);
            setEmployeeList(response.data);
        });
    };

    const [url, seturl] = useState('');
    // 取得檔案並轉換
    const [text, settext] = useState('');
    const [img, setimg] = useState();

    const bbb = (e) => {
        const data = new FormData();
        data.append('image', img);
        data.append('name', text);
        Axios.post("http://localhost:3001/userupdate", data, {
            headers: { 'Content-Type': 'multipart/form-data' },
        }).then((response) => {
            alert("更新成功");
            console.log(response.data);
        });
    }
    const [Url, setUrl] = useState('');


    const [logindiv, setlogindiv] = useState(false);
    const [pw, setpw] = useState('');
    const [ac, setac] = useState('');
    const [bb, setbb] = useState('');
    const [logout, setlogout] = useState(false);
    const [cookieac, setcookieac] = useState('');
    const cookie = Cookies.get('ac');
    const [response, setresponse] = useState();
    const acinput = React.createRef()
    const pwinput = React.createRef()
    const change = () => {
        setlogindiv(!logindiv);
        setbb('');
        setpw('');
        setac('');
        acinput.current.value = "";
        pwinput.current.value = "";
    }
    const login = () => {
        Axios.post("http://localhost:3001/userlogintest", {
            pw: pw,
            ac: ac,
        }).then((response) => {
            console.log(response.data);
            if (JSON.stringify(response.data) === '[]') {
                setbb('帳號密碼錯誤');
            } else {
                setresponse(response.data[0]);
                setlogindiv(!logindiv);
                setlogout(true);
                Cookies.set(
                    'ac',//key
                    ac,//value
                    {
                        path: '/',
                        expires: 7,//有效7天
                        sameSite: 'strict'//只有當前url與請求目標一致才會帶上cookie
                    }
                )
                setcookieac(ac);
            }

        });
    }
    const logout2 = (e) => {
        Cookies.remove('ac', {
            path: '/'
        })
        setpw('');
        setac('');
        setresponse();
        e.preventDefault();
        setlogout(false);
        acinput.current.value = "";
        pwinput.current.value = "";
    }
    const test = () => {
        console.log(cookieac);
        console.log(ac);
        console.log(pw);
    }
    const responseGoogle = (response) => {
        console.log(response);
        }
        const [iid,setiid]=useState(false);
        const ooo=()=>{
            setiid(!iid);
        }
    return (
        <div className={vv.aaaaa}>
            <meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com"></meta>

            {/* 會員註冊 */}
            <div>
                帳號<input type="text" onChange={emailcheck} /><span>{emailhint}</span><br />
                <span>密碼需要大小寫字母與數字的組合</span><br />
                密碼<input type="text" onChange={passwordcheck} /><span>{passwordhint}</span><br />
                名稱<input type="text" onChange={(e) => setusername(e.target.value)} /><br />
                頭貼<input type="file" onChange={(e) => setuserimg(e.target.value)} /><br />
                手機<input type="text" onChange={telcheck} /><span>{telhint}</span><br />
                <button onClick={adduser}>新增會員</button>
            </div>
            <h1>獲取會員</h1>
            <button onClick={getEmployee}>搜索</button>
            {employeeList.map((val, key) => {
                var u8Arr = new Uint8Array(val.userimg.data);
                var blob = new Blob([u8Arr], { type: "image/jpeg" });
                var fr = new FileReader
                fr.readAsDataURL(blob);
                fr.onload = function () {
                    var aa = fr.result;
                    setUrl(aa);
                };
                return <div key={key}><img src={Url} alt="" /></div>;
            })}
            <input type="file" onChange={(e) => { setimg(e.target.files[0]) }} />
            <img src={url} alt="" />
            會員編號:<input type="text" onChange={(e) => { settext(e.target.value) }} />
            <button onClick={bbb}>更新照片</button>
            {response ?
                cookieac === cookie ? <h1>你好,{response.username}</h1> : ''
                : ''}

            {logout ? <div onClick={logout2}>登出</div> : <div onClick={change}>登入</div>}
            <button onClick={test}>測試</button>
            {/* 彈出視窗 */}
            <div className={vv.aadiv1} style={{ display: (logindiv) ? 'block' : 'none' }}>
                <div className='aadiv2'>
                    帳號<input type="text" onChange={(e) => { setac(e.target.value) }} ref={acinput} /> <br />
                    密碼<input type="text" onChange={(e) => { setpw(e.target.value) }} ref={pwinput} /> <br />
                    <h3>{bb}</h3>
                    <button onClick={change}>取消</button>
                    <button onClick={login}>登入</button>
                    <GoogleLogin
                        clientId="242513557303-7c0flfi7ljjmkdvqef4ivfc7ge0qfuho.apps.googleusercontent.com"
                        buttonText="使用 GOOGLE 登入"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            </div>
            <button onClick={ooo}>換</button>
            <div className={iid?vv.a:vv.b}>

            </div>
        </div>
    );
}

export default Client;
