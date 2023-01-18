import React, { useState,useEffect } from 'react';
import dateSearch from './dateSearch.module.css';
import Axios from 'axios';
import { useLocation } from "react-router-dom";

export default function DateSearch(params) {

    const [pathend,setPathEnd]=useState('');

    // 當前網址 fund|pay|activity?
    const location = useLocation();
    const splitLocaPath = location.pathname.split('/');
    
        // if(splitLocaPath[4]==='fund'){
        //     return teammoney;
        // }else if(splitLocaPath[4]==='pay'){
        //     return teampay;
        // }else if(splitLocaPath[4]==='fund'){
        //     return teamevent;
        // };

    // setPathEnd(pp);


    // 假設目前查詢 會員id=1 球隊id=1
    const [userid, setUserid] = useState('1');
    const [teamid, setTeamid] = useState('1');
    // 開始時間
    const [startdate, setStartdate] = useState('');
    // 結束時間
    const [enddate, setEnddate] = useState('');

    // 支出
    // const [pay, setPay] = useState('');

    // 搜尋 訂單
    const handleDateSearch =()=>{
        console.log('search');
        Axios.post('http://localhost:3001/teamdate',{
            pathend:pathend,
            userid:userid,
            teamid:teamid,
            startdate:startdate,
            enddate:enddate
        }).then((response)=>{
            console.log('in data');
            console.log(response);
            // setPay(response.data);
        });
        console.log('outside');
    };
    // useEffect(()=>{
    //     handleDateSearch();
    // },[startdate,enddate]);

    return(
        <>
            {/* 日期搜索 */}
            <div className={dateSearch.search}>
                    {/* <div className={dateSearch.sTitle}>日期區間</div> */}
                    <input type="date" name="" onChange={(e)=>{setStartdate(e.target.value)}} />
                    <input type="date" name="" onChange={(e)=>{setEnddate(e.target.value)}} />
                    <div className={dateSearch.sTitle}>訂單日期</div>
                    <div className={dateSearch.sDate}>
                        <div>2022/12/31</div>
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
                        <div>2022/12/29</div>
                    </div>
                    <button onClick={ handleDateSearch }>搜尋</button>
            </div>
        </>
    )
};
