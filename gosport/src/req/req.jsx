import React, { Component, useState } from 'react';
import axios from 'axios';
export default function ASD() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const login = (e) => {
        if (username !== "" && password !== "") {
            axios
                .post("http://localhost:7000/signin", {
                    username: username,
                    password: password,
                })
                .then((res) => {
                    alert("登入成功!");
                    // navigate("/testt");
                })
                .catch((e) => {
                    if (e.response.error) {
                        alert("帳號或密碼錯誤！");
                    }
                });
        } else if (username === "") {
            alert("請輸入帳號!");
        } else {
            alert("請輸入密碼!");
        }
    };

    return (
        <React.Fragment>
            <form action="">
            email<input type="text" />
            密碼<input type="text" />
            </form>
        </React.Fragment>
    )

}
