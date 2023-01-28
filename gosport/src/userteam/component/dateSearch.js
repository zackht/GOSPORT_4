import React, { useState,useEffect } from 'react';
import dateSearch from './dateSearch.module.css';
import Axios from 'axios';
import { useLocation } from "react-router-dom";
import handleArticle from './fund.js';

export default function DateSearch(params) {

    // 目前網址
    const [pathend, setPathEnd] = useState('');

    // 抓當前網址 
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

    // 資料庫抓回來的值
    const [result, setResult] = useState(null);

    // 文章的日期清單
    const [resultList, setResultList] = useState('');

    // pathend改變時 依網址判定查找的類型文章-1 all
    useEffect(()=>{

        // 基金
        if(pathend==='fund'){
            Axios.post('http://localhost:3001/teamfundall',{
                teamid:teamid
            }).then((response)=>{
                console.log(`基金文章`);
                setResult(response.data);
            });

        // 支出
        }else if(pathend==='pay'){
            Axios.post('http://localhost:3001/teampayall',{
                teamid:teamid
            }).then((response)=>{
                console.log(`支出文章`);
                setResult(response.data);
            });

        // 活動
        }else if(pathend==='activity'){
            Axios.post('http://localhost:3001/teamactivityall',{
                teamid:teamid
            }).then((response)=>{
                console.log(`活動文章`);
                setResult(response.data);
            });
        };

    },[pathend]);

    // result改變時 列出文章的日期清單
    useEffect(()=>{
        if(result){
            const newList = result.map((val,key)=>{
                let vv = val.date.substr(0,10);
                let vvReplace = vv.replaceAll('-','/');
                return <div key={key} onClick={ handleArticle }>{ vvReplace }</div>;
            })
            setResultList(newList);
        }
    },[result]);

    // 點擊搜尋按鈕時 依網址判定查找的類型文章-2 時間條件
    const handleDateSearch =()=>{

        // 基金
        if(pathend==='fund'){
            Axios.post('http://localhost:3001/teamfunddate',{
                teamid:teamid,
                startdate:startdate,
                enddate:enddate
            }).then((response)=>{
                console.log(`基金文章(${startdate}-${enddate})`);
                setResult(response.data);
            });

        // 支出
        }else if(pathend==='pay'){
            Axios.post('http://localhost:3001/teampaydate',{
                teamid:teamid,
                startdate:startdate,
                enddate:enddate
            }).then((response)=>{
                console.log(`支出文章(${startdate}-${enddate})`);
                setResult(response.data);
            });

        // 活動
        }else if(pathend==='activity'){
            Axios.post('http://localhost:3001/teamactivitydate',{
                teamid:teamid,
                startdate:startdate,
                enddate:enddate
            }).then((response)=>{
                console.log(`活動文章(${startdate}-${enddate})`);
                setResult(response.data);
            });
        };
    };

    return(
        <>
            {/* 日期搜索 */}
            <div className={dateSearch.search}>
                <input type="date" onChange={ (e)=>{ setStartdate(e.target.value) } } />
                <input type="date" onChange={ (e)=>{ setEnddate(e.target.value) } } />
                <div className={dateSearch.sTitle}>訂單日期</div>
                <div className={dateSearch.sDate}>{ resultList }</div>
                <button onClick={ handleDateSearch }>搜尋</button>
            </div>
        </>
    )
};
