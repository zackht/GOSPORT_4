import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import basic from './basic.module.css';
import Axios from "axios";
import Cookies from 'js-cookie';

export default function Basic(props) {
    
    // SQL參數
    const [userid, setUserid] = useState( Cookies.get('id') ); // 登入者id
    const [teamid, setTeamid] = useState('1');                 // 球隊id

    // 其他判斷
    const [leaderId, setLeaderId] = useState(''); // 隊長id
    
    // input值
    const [basicResult,setBasicResult] = useState(null); // all
    const [teamimg, setTeamimg] = useState('');          // 球隊img

    // 抓 隊長id
    const handleLeaderImg = async () => {
        let res = await Axios.post("http://localhost:3001/teamleader",{
            teamid: teamid
        });
        setLeaderId(res.data[0].userid);
    };

    // 抓資料
    const handleBasicResult = async () => {
        let res = await Axios.post("http://localhost:3001/basicsearch",{
            userid: userid,
            teamid: teamid
        });
        // 給input
        setBasicResult(res.data[0]); 
        // 讀照片
        const u8Arr = new Uint8Array(res.data[0].teamimg.data); // 轉unit8array
        const blob = new Blob([u8Arr],{type:"image/jpeg"});     // 轉blob
        const fr = new FileReader; // 異步讀取方法
        fr.readAsDataURL(blob);    // 讀取 以base64編碼的URL
        fr.onload = function () {  // 讀取完成時
            setTeamimg(fr.result);
        };
    };

    // 畫面載入即抓資料
    useEffect(()=>{
        handleBasicResult();
        handleLeaderImg();
    },[]);

    return(
        <>
            <div className={basic.basic}>
                {/* 只有隊長可編輯 */}
                { userid===`${leaderId}`? <Link to={`/gosport/user/myteam/basic/edit`}>編輯</Link>:'' }
                {/* 基本資料 */}
                <div className={basic.mBigTitle}>{basicResult? basicResult.tname:''}</div>

                <div className={basic.mTitle}>場館</div>
                <div className={basic.mText}>{basicResult? basicResult.sidename:''}</div>

                <div className={basic.mTitle}>縣市</div>
                <div className={basic.mText}>{basicResult? basicResult.county:''}</div>

                <div className={basic.mTitle}>區域</div>
                <div className={basic.mText}>{basicResult? basicResult.area:''}</div>

                <div className={basic.mTitle}>週期</div>
                <div className={basic.mText}>{basicResult? basicResult.week:''}</div>

                <div className={basic.mTitle}>時段</div>
                <div className={basic.mText}>{`${basicResult? basicResult.starttime:''}:00-${basicResult? basicResult.endtime:''}:00`}</div>

                <div className={basic.mTitle}>程度</div>
                <div className={basic.mText}>{basicResult? basicResult.level:''}</div>

                <div className={basic.mTitle}>零打費用</div>
                <div className={basic.mText}>{basicResult? basicResult.fee:''}</div>

                <div className={basic.mTitle}>描述</div>
                <div className={basic.mText}>{basicResult? basicResult.text:''}</div>

                <div><img src={teamimg} className={basic.mBimg} alt='團隊的照片'/></div>
            </div>
        </>
    )
};