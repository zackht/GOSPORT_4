import React, { useState } from 'react';
import Axios from "axios";


const PageLogin = ({ saveToken }) => {
    // 輸入
    const [account, setAccount] = useState();
    const [password, setPassword] = useState();
    //實際
    const [trueAcc, setTrueAcc] = useState();
    const [truePass, setTruePass] = useState();
   
    // input失焦時取資料
    const getU = (e) =>{
        Axios.post("http://localhost:3001/userinfo", {
            account: account,
            password:password
        }).then((response) => {
            console.log(response.data[0]);
            setTrueAcc(response.data[0].email);
            setTruePass(response.data[0].password);
        });
    }
  
    const handleSubmit = (e) => {
        e.preventDefault();

        // 判斷輸入密碼和實際是否相符 是的話將account傳回給Applayout
        if (account === trueAcc && password === truePass) {
            saveToken(account);
        } else {
            alert('輸入有誤喔!!');
        }
    }

    return (
        <div style={{position: "relative",top:'100px'}}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Account:</p>
                    <input type="text" onChange={e => setAccount(e.target.value)} onBlur={getU}/>
                </label>
                <label>
                    <p>Password:</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} onBlur={getU} />
                </label>
                <p>
                    <button type="submit" >Submit</button>
                </p>
            </form>
        </div>
    );
}
export default PageLogin;