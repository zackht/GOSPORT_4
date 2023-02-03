import React, { useState,useEffect } from 'react';
import fund from './fund.module.css';
import img from '../img.module.js';
import { Link, useParams } from 'react-router-dom';
import DateSearch from './dateSearch';
import Axios from 'axios';

export default function Fund(params) {

    // 資料庫抓回來的值
    const [result, setResult] = useState(null);
    const [date, setDate] = useState(null);
    const [ruserimg, setRuserimg] = useState(null);
    const [fee, setFee] = useState(null);
    const [text, setText] = useState(null);

    // 抓網址id = 文章id
    const {id} = useParams();
    const {articleid} = useParams();

    // articleid change -> 查找指定文章
    useEffect(()=>{
        Axios.post('http://localhost:3001/teamfundarticle',{
            articleid:articleid
        }).then((response)=>{
            // console.log(`基金文章:${id}`);
            // setResult(response.data[0]);
            // console.log(response.data[0]);
            setDate(response.data[0].date);
            setFee(response.data[0].fee);
            setText(response.data[0].text);

            // 讀date
            // const rDate = response.data[0].date;
            // const rDateSub = rDate.substr(0,10);
            // const rDateSubRe = rDateSub.replaceAll('-','/');
            // setDate(rDateSubRe);

            // 讀照片
            // console.log(response.data[0].userimg);
            const u8Arr = new Uint8Array(response.data[0].userimg.data); // 轉unit8array
            const blob = new Blob([u8Arr],{type:"image/jpeg"});          // 轉blob
            const fr = new FileReader; // 異步讀取方法
            fr.readAsDataURL(blob);    // 讀取 以base64編碼的URL
            fr.onload = function () {  // 讀取完成時
                setRuserimg(fr.result);
            };
        });
    },[articleid]);

    // 刪除文章
    const handleDeleteArticle=()=>{
        Axios.post('http://localhost:3001/teamfundarticledelete',{
            articleid:articleid
        })
        
    }

    return(
        <>
            {/* 基金 */}
            <div className={fund.fund}>

                {/* 日期搜索 */}
                <DateSearch/>
                
                {/* 訂單資訊 */}
                <div className={fund.order}>
                    <Link to={`/gosport/user/myteam/${id}/fund/${articleid}/edit`} className={id? fund.show:fund.notshow} >編輯</Link>
                    <button className={articleid? fund.show:fund.notshow} onClick={ handleDeleteArticle }>刪除</button>

                    <div className={fund.oTitle}>日期</div>
                    <div className={fund.oText}>{date}</div>
                    <div className={fund.oTitle}>儲值成員</div>
                    <img src={ruserimg? ruserimg:img.m}/>
                    
                    <div className={fund.oTitle}>金額</div>
                    <div className={fund.oText}>{fee}</div>
                    <div className={fund.oTitle}>描述</div>
                    <div className={fund.oTextL}>{text}</div>
                </div>

            </div>
        </>
    )
};
