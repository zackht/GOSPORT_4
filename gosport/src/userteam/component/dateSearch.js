import React, { useState, useEffect } from 'react';
import dateSearch from './dateSearch.module.css';
import Axios from 'axios';
import Cookies from 'js-cookie';
import { useLocation, Link, useParams } from "react-router-dom";


export default function DateSearch(params) {
    
    // 文章類型 依網址判斷
    const [pathend, setPathEnd] = useState('');
    const location = useLocation();
    const splitLocaPath = location.pathname.split('/');
    useEffect(()=>{
        if(splitLocaPath[5]==='fund'){
            setPathEnd('fund');
        }else if(splitLocaPath[5]==='pay'){
            setPathEnd('pay');
        }else if(splitLocaPath[5]==='activity'){
            setPathEnd('activity');
        };
    },[])

    // 動態路由 teamid articleid
    const {id} = useParams();
    const {articleid} = useParams();
    

    // SQL參數
    const [userId, setUserId] = useState( Cookies.get('id') ); // 登入者id
    const [teamid, setTeamid] = useState( id );                // 球隊id

    // 其他判斷
    const [leaderId, setLeaderId] = useState(''); // 隊長id

    // input值
    const [startdate, setStartdate] = useState(null); // 開始時間
    // const [enddate, setEnddate] = useState(null);     // 結束時間

    // 資料庫查找值
    const [result, setResult] = useState(null);

    // 文章日期清單
    const [resultList, setResultList] = useState('');

    // 找隊長id
    useEffect(()=>{
        Axios.post("http://localhost:3001/teamleader",{
            teamid: teamid
        }).then((response)=>{
            setLeaderId(response.data[0].userid);
        })
    },[]);

    // 切換基金｜支出｜活動 -> pathend改變 查找文章-1 all
    useEffect(()=>{

        // 基金
        if(pathend==='fund'){
            Axios.post('http://localhost:3001/teamfundall',{
                teamid:teamid
            }).then((response)=>{
                // console.log(`基金文章`);
                // console.log(response.data);
                setResult(response.data);
            });

        // 支出
        }else if(pathend==='pay'){
            Axios.post('http://localhost:3001/teampayall',{
                teamid:teamid
            }).then((response)=>{
                // console.log(`支出文章`);
                setResult(response.data);
            });

        // 活動
        }else if(pathend==='activity'){
            Axios.post('http://localhost:3001/teamactivityall',{
                teamid:teamid
            }).then((response)=>{
                // console.log(`活動文章`);
                setResult(response.data);
            });
        };

    },[pathend]);

    // 資料庫查找值result改變 列出文章日期清單
    // articleid改變 列出文章日期清單
    useEffect(()=>{
        if(result){
            if(pathend==='fund'){
                const newList = result.map((val,key)=>{
                    let vv = val.date.substr(0,10);
                    let vvReplace = vv.replaceAll('-','/');
                    return <Link to={`/gosport/user/myteam/${id}/fund/${val.articleid}`} 
                                 key={key}
                                 className = {articleid==val.articleid? dateSearch.linkvisited:''}>{ vvReplace }</Link>
                })
                setResultList(newList);
            }else if(pathend==='pay'){
                const newList = result.map((val,key)=>{
                    let vv = val.date.substr(0,10);
                    let vvReplace = vv.replaceAll('-','/');
                    return <Link to={`/gosport/user/myteam/${id}/pay/${val.articleid}`} 
                                 key={key}
                                 className = {articleid==val.articleid? dateSearch.linkvisited:''}>{ vvReplace }</Link>    
                })
                setResultList(newList);
            }else if(pathend==='activity'){
                const newList = result.map((val,key)=>{
                    let vv = val.date.substr(0,10);
                    let vvReplace = vv.replaceAll('-','/');
                    return <Link to={`/gosport/user/myteam/${id}/activity/${val.articleid}`} 
                                 key={key}
                                 className = {articleid==val.articleid? dateSearch.linkvisited:''}>{ vvReplace }</Link>    
                })
                setResultList(newList);
            }
        }
    },[result,articleid]);

    // 點擊搜尋按鈕時 依網址判定查找的類型文章-2 時間條件
    const handleDateSearch =()=>{

        // 基金
        if(pathend==='fund'){
            Axios.post('http://localhost:3001/teamfunddate',{
                teamid:teamid,
                startdate:startdate
            }).then((response)=>{
                console.log(`基金文章(${startdate})`);
                setResult(response.data);
            });

        // 支出
        }else if(pathend==='pay'){
            Axios.post('http://localhost:3001/teampaydate',{
                teamid:teamid,
                startdate:startdate
            }).then((response)=>{
                console.log(`支出文章(${startdate})`);
                setResult(response.data);
            });

        // 活動
        }else if(pathend==='activity'){
            Axios.post('http://localhost:3001/teamactivitydate',{
                teamid:teamid,
                startdate:startdate
            }).then((response)=>{
                console.log(`活動文章(${startdate})`);
                setResult(response.data);
            });
        };
    };

    // 當startdate, enddate改變時查找文章清單
    useEffect(()=>{
        if(startdate){
            console.log(startdate);
            handleDateSearch();
        }
    },[startdate])

    // 新增文章按鈕css
    const handleDateListCss=()=>{

        if(pathend==='activity'){
            return `${dateSearch.sDate}`
        }else{
            return userId==leaderId? `${dateSearch.sDate}`:`${dateSearch.sDateMax}`
        }
    }

    const handleNewArticleBtn =()=>{
        if(pathend==='activity'){
            return <Link to={`/gosport/user/myteam/${id}/${pathend}/new`}>新增文章</Link>
        }else{
            return userId==leaderId? <Link to={`/gosport/user/myteam/${id}/${pathend}/new`}>新增文章</Link>:''
        }
        
    }

    return(
        <>
            {/* 日期搜索 */}
            <div className={dateSearch.search}>
                <div className={dateSearch.sTitle}>日期搜尋</div>
                <input type="date" onChange={ (e)=>{ setStartdate(e.target.value) } } />
                <div className={dateSearch.sTitle}>訂單日期</div>
                <div className={ handleDateListCss() }>{ resultList }</div>
                {/* 新增文章 */}
                { handleNewArticleBtn() }
                
                
            </div>
        </>
    )
};
