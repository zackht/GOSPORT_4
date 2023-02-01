import React,{useEffect,useState} from 'react';
import { Link,useParams } from "react-router-dom";
import activity from './activity.module.css';
import img from '../img.module.js';
import DateSearch from './dateSearch';
import Axios from 'axios';

export default function Activity(params) {

        // 資料庫抓回來的值
        const [result, setResult] = useState(null);
        // 時間
        const [startdate, setStartdate] = useState(null);
        const [enddate, setEnddate] = useState(null);
        const [starttime, setStarttime] = useState(null);
        const [endtime, setEndtime] = useState(null);
        // 成員頭像
        const [ruserimg, setRuserimg] = useState(null);
    
        // 抓網址id = 文章id
        const {id} = useParams();
    
        // 查找指定文章
        useEffect(()=>{
            Axios.post('http://localhost:3001/teamactivityarticle',{
                id:id
            }).then((response)=>{
                console.log(`基金文章:${id}`);
                setResult(response.data[0]);
                
                // startdate
                const rrstartdate = response.data[0].startdate;
                const rrSubstartdate = rrstartdate.substr(0,10);
                const rrRepstartdate = rrSubstartdate.replaceAll('-','/');
                setStartdate(rrRepstartdate);

                // enddate
                const rrenddate = response.data[0].enddate;
                const rrSubenddate = rrenddate.substr(0,10);
                const rrRependdate = rrSubenddate.replaceAll('-','/');
                setEnddate(rrRependdate);

                // starttime
                const rrstarttime = response.data[0].starttime;
                const rrSubstarttime = rrstarttime.substr(0,5);
                const rrRepstarttime = rrSubstarttime.replaceAll('-','/');
                setStarttime(rrRepstarttime);

                // endtime
                const rrendtime = response.data[0].endtime;
                const rrSubendtime = rrendtime.substr(0,5);
                const rrRependtime = rrSubendtime.replaceAll('-','/');
                setEndtime(rrRependtime);

                // 讀照片
                // console.log(response.data[0].userimg);
                // const u8Arr = new Uint8Array(response.data[0].userimg.data); // 轉unit8array
                // const blob = new Blob([u8Arr],{type:"image/jpeg"});          // 轉blob
                // const fr = new FileReader; // 異步讀取方法
                // fr.readAsDataURL(blob);    // 讀取 以base64編碼的URL
                // fr.onload = function () {  // 讀取完成時
                //     setRuserimg(fr.result);
                // };
            });

        },[id]);

    return(
        <>
            {/* 活動 */}
            <div className={activity.activity}>
                
                {/* 日期搜索 */}
                <DateSearch/>

                {/* 訂單資訊 */}
                <div className={activity.order}>
                    <Link to={`/gosport/user/myteam/activity/show`} className={activity.orderBtn}>檢視</Link>
                    <Link to={`/gosport/user/myteam/activity/edit`} className={activity.orderBtn}>編輯</Link>
                    <button className={activity.orderBtn}>刪除</button>    
                    <div className={activity.oTitle}>日期</div>
                    <div className={activity.oText}>{result? `${startdate}-${enddate}`:''}</div>
                    <div className={activity.oTitle}>時間</div>
                    <div className={activity.oText}>{result? `${starttime}-${endtime}`:''}</div>
                    <div className={activity.oTitle}>類型</div>
                    <div className={activity.oText}>{result? result.type:''}</div>
                    <div className={activity.oTitle}>標題</div>
                    <div className={activity.oText}>{result? result.title:''}</div>
                    <div className={activity.oTitle}>地點</div>
                    <div className={activity.oText}>{result? result.location:''}</div>
                    <div className={activity.oTitle}>支出</div>
                    <div className={activity.oText}>{result? result.pay:''}</div>
                    <div className={activity.oTitle}>描述</div>
                    <div className={activity.oText}>{result? result.text:''}</div>
                    
                    <div className={activity.oTitle}>參加成員</div>
                    {/* <img src={ruserimg? ruserimg:img.m}/> */}
                    <img src={img.m1}></img>
                    <img src={img.m2}></img>
                    <img src={img.m3}></img>
                    <img src={img.m4}></img>
                    <div className={activity.oTitle}>留言</div>
                    <Link to={`/gosport/user/myteam/activity/show`} className={activity.oText}>3</Link>
                </div>

            </div>
        </>
    )
};
