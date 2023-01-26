import React, { useState,useEffect } from 'react';
import dateSearch from './dateSearch.module.css';
import Axios from 'axios';
import { useLocation } from "react-router-dom";

export default function DateSearch(params) {

    // 目前網址
    const [pathend,setPathEnd]=useState('');

    // 抓當前網址 fund|pay|activity?
    const location = useLocation();
    const splitLocaPath = location.pathname.split('/');
    useEffect(()=>{
        if(splitLocaPath[4]==='fund'){
            setPathEnd('fund');
        }else if(splitLocaPath[4]==='pay'){
            setPathEnd('pay');
        }else if(splitLocaPath[4]==='activity'){
            setPathEnd('activity');
        };
    },[])

    // SQL參數
    const [userid, setUserid] = useState('1'); // 登入者id
    const [teamid, setTeamid] = useState('1'); // 球隊id

    // input值
    const [startdate, setStartdate] = useState(''); // 開始時間
    const [enddate, setEnddate] = useState('');     // 結束時間

    // 抓資料庫的結果
    const [fundResult, setFundResult] = useState([]);
    const [payResult, setPayResult] = useState([]);
    const [activityResult, setActivityResult] = useState([]);

    // map資料庫查詢的結果清單
    const [fundList, setFundList] = useState('');
    const [payList, setPayList] = useState('');
    const [activityList, setActivityList] = useState('');

    // 日期 -> 搜尋文章
    const handleDateSearch =()=>{
        // 基金
        if(pathend==='fund'){
            Axios.post('http://localhost:3001/teamfunddate',{
                teamid:teamid,
                startdate:startdate,
                enddate:enddate
            }).then((response)=>{
                console.log(response.data);
                setFundResult(response.data);
            });
        // 支出
        }else if(pathend==='pay'){
            Axios.post('http://localhost:3001/teampaydate',{
                teamid:teamid,
                startdate:startdate,
                enddate:enddate
            }).then((response)=>{
                console.log(response.data);
                setPayResult(response.data);
            });
        // 活動
        }else if(pathend==='activity'){
            Axios.post('http://localhost:3001/teamactivitydate',{
                teamid:teamid,
                startdate:startdate,
                enddate:enddate
            }).then((response)=>{
                console.log(response.data);
                setActivityResult(response.data);
            });
        };

    };
    useEffect(()=>{
        handleDateSearch();
    },[]);

    // 基金清單
    useEffect(()=>{
        const newFundList = fundResult.map((val,key)=>{
            let vv = val.date.substr(0,10);
            let vvReplace = vv.replaceAll('-','/');
            return <div>{ vvReplace }</div>;
        })
        setFundList(newFundList);
    },[fundResult]);

    // 支出清單
    useEffect(()=>{
        const newPayList = payResult.map((val,key)=>{
            let vv = val.date.substr(0,10);
            let vvReplace = vv.replaceAll('-','/');
            return <div>{ vvReplace }</div>;
        })
        setFundList(newPayList);
    },[payResult]);

    // 活動清單
    useEffect(()=>{
        const newActivityList = activityResult.map((val,key)=>{
            let vv = val.startdate.substr(0,10);
            let vvReplace = vv.replaceAll('-','/');
            return <div>{ vvReplace }</div>;
        })
        setFundList(newActivityList);
    },[activityResult]);




    
    

    

    return(
        <>
            {/* 日期搜索 */}
            <div className={dateSearch.search}>
                    {/* <div className={dateSearch.sTitle}>日期區間</div> */}
                    <input type="date" onChange={ (e)=>{ setStartdate(e.target.value) } } />
                    <input type="date" onChange={ (e)=>{ setEnddate(e.target.value) } } />
                    <div className={dateSearch.sTitle}>訂單日期</div>
                    <div className={dateSearch.sDate}>
                        { fundList }
                        {/* <div>2022/12/31</div>
                        <div>2022/12/29</div>
                        <div>2022/12/29</div>
                        <div>2022/12/29</div>
                        <div>2022/12/29</div>
                        <div>2022/12/29</div>
                        <div>2022/12/29</div>
                        <div>2022/12/29</div>
                        <div>2022/12/29</div>
                        <div>2022/12/29</div>
                        <div>2022/12/29</div>
                        <div>2022/12/29</div> */}
                    </div>
                    <button onClick={ handleDateSearch }>搜尋</button>
            </div>
        </>
    )
};
