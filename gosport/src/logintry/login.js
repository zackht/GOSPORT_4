import React, { useEffect, useState } from 'react';
import Axios from "axios";


const PageLogin = ({ saveToken }) => {
    // 輸入
    const [account, setAccount] = useState();
    const [password, setPassword] = useState();
    //實際
    const [trueAcc, setTrueAcc] = useState();
    const [truePass, setTruePass] = useState();
    const [userlist, setUserList] = useState();
   
    useEffect(()=>{
       console.log(account)
    },[account])
  
    const getU = () =>{
        Axios.get("http://localhost:3001/userinfo", {
            account: account,
        }).then((response) => {
            console.log(response);
            setUserList(response.data)
            // setTrueAcc(response.data[0].email);
            // setTruePass(response.data[0].password);
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        // 判断输入帐号和密码
        if (account === 'world' && password === '123456') {
            saveToken(account);
        } else {
            alert('Invalid account or password!');
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Account:</p>
                    <input type="text" onChange={e => setAccount(e.target.value)} />
                </label>
                <label>
                    <p>Password:</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <p>
                    <button type="submit" onClick={getU}>Submit</button>
                </p>
            </form>
            account:world password:123456
        </div>
    );
}
export default PageLogin;