import React, { useState,useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import pay from './pay.module.css';
import DateSearch from './dateSearch';
import Axios from 'axios';

export default function Pay(params) {

        // 資料庫抓回來的值
        const [result, setResult] = useState(null);
        const [date, setDate] = useState(null);
        const [ruserimg, setRuserimg] = useState(null);
    
        // 抓網址id = 文章id
        const {id} = useParams();
    
        // 查找指定文章
        useEffect(()=>{
            Axios.post('http://localhost:3001/teampayarticle',{
                id:id
            }).then((response)=>{
                console.log(`基金文章:${id}`);
                setResult(response.data[0]);

                // 讀date
                const rDate = response.data[0].date;
                const rDateSub = rDate.substr(0,10);
                const rDateSubRe = rDateSub.replaceAll('-','/');
                setDate(rDateSubRe);
            });
        },[id]);

    return(
        <>
            {/* 支出 */}
            <div className={pay.pay}>

                {/* 日期搜索 */}
                <DateSearch/>

                {/* 訂單資訊 */}
                <div className={pay.order}>
                    <Link to={`/gosport/user/myteam/pay/edit`}>編輯</Link>
                    <button>刪除</button>
                    <div className={pay.oTitle}>日期</div>
                    <div className={pay.oText}>{result? date:''}</div>
                    <div className={pay.oTitle}>項目</div>
                    <div className={pay.oText}>{result? result.item:''}</div>
                    <div className={pay.oTitle}>金額</div>
                    <div className={pay.oText}>{result? result.fee:''}</div>
                    <div className={pay.oTitle}>描述</div>
                    <div className={pay.oText}>{result? result.text:''}</div>
                </div>

            </div>
        </>
    )
};
