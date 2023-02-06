import React, { useState,useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import basic from './basic.module.css';
import Axios from "axios";
import Cookies from 'js-cookie';
import img from '../img.module';

export default function Basic(props) {

    // 球隊id
    const {id} = useParams();
    
    // SQL參數
    const [userid, setUserid] = useState( Cookies.get('id') ); // 登入者id
    const [teamid, setTeamid] = useState(id);                  // 球隊id

    // 其他判斷
    const [leaderId, setLeaderId] = useState(''); // 隊長id
    
    // input值
    // const [basicResult,setBasicResult] = useState(null); // all
    const [teamimg, setTeamimg] = useState('');          // 球隊img
    const [tname, setTname]=useState(null);
    const [sidename, setSidename]=useState(null);
    const [week, setWeek]=useState(null);
    const [type, setType]=useState(null);
    const [level, setLevel]=useState(null);
    const [fee, setFee]=useState(null);
    const [text, setText]=useState(null);
    const [starttime, setStarttime]=useState(null);
    const [endtime, setEndtime]=useState(null);
    const [county, setCounty]=useState(null);
    const [area, setArea]=useState(null);

    // 抓 隊長id -> 編輯權限
    const handleLeaderImg =  () => {
        let res =  Axios.post("http://localhost:3001/teamleader",{
            teamid: teamid
        }).then((response)=>{
            setLeaderId(response.data[0].userid);
        })
    };

    // 抓球隊資料
    const handleBasicResult =  () => {
        let res =  Axios.post("http://localhost:3001/basicsearch",{
            userid: userid,
            teamid: teamid
        }).then((response)=>{
            // 給input
            // setBasicResult(response.data[0]); 
            // console.log(response.data[0]); 
            setTname(response.data[0].tname);
            setSidename(response.data[0].sidename);
            setWeek(response.data[0].week);
            setType(response.data[0].type);
            setLevel(response.data[0].level);
            setFee(response.data[0].fee);
            setText(response.data[0].text);
            setStarttime(response.data[0].starttime);
            setEndtime(response.data[0].endtime);
            setCounty(response.data[0].county);
            setArea(response.data[0].area);

            // 讀照片
            const u8Arr = new Uint8Array(response.data[0].teamimg.data); // 轉unit8array
            const blob = new Blob([u8Arr],{type:"image/jpeg"});     // 轉blob
            const fr = new FileReader; // 異步讀取方法
            fr.readAsDataURL(blob);    // 讀取 以base64編碼的URL
            fr.onload = function () {  // 讀取完成時
                setTeamimg(fr.result);
            };
        })
        
    };

    // 畫面載入即抓資料
    useEffect(()=>{
        handleBasicResult();
        handleLeaderImg();
    },[]);

    // id改變抓資料
    useEffect(()=>{
        handleBasicResult();
        handleLeaderImg();
    },[id]);


    
    return(
        <>
            <div className={basic.mBimgBox}><img src={teamimg? teamimg:img.team_none} className={basic.mBimg} alt='團隊的照片'/></div>
            <div className={basic.basic}>
                {/* 只有隊長可編輯 */}
                { userid===`${leaderId}`? <Link to={`/gosport/user/myteam/${id}/basic/edit`}>編輯</Link>:'' }

                {/* 基本資料 */}
                <div className={basic.mBigTitle}>{ tname }</div>

                <div className={basic.mTitle}>固定打球地區</div>
                <div className={basic.mText}>{ county }</div>

                {/* <div className={`${basic.mTitle} ${basic.mR1}`}></div> */}
                <div className={`${basic.mText} ${basic.mR2}`}>{ area }</div>

                <div className={basic.mTitle}>固定打球時間</div>
                <div className={basic.mText}>{ week }</div>

                {/* <div className={`${basic.mTitle} ${basic.mR3}`}></div> */}
                <div className={`${basic.mText} ${basic.mR4}`}>{`${ starttime }:00-${ endtime }:00`}</div>

                <div className={basic.mTitle}>固定打球場館</div>
                <div className={basic.mText}>{ sidename }</div>

                <div className={basic.mTitle}>能力限制</div>
                <div className={basic.mText}>{ level }</div>

                <div className={basic.mTitle}>零打費用</div>
                <div className={basic.mText}>{`${fee}元`}</div>

                <div className={basic.mTitle}>球隊描述</div>
                <div className={basic.mText}>{ text }</div>

            </div>
        </>
    )
};