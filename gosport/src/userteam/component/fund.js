import React, { useState,useEffect } from 'react';
import fund from './fund.module.css';
import img from '../img.module.js';
import { Link, useParams, useLocation, useHistory } from 'react-router-dom';
import DateSearch from './dateSearch';
import Axios from 'axios';
import Cookies from 'js-cookie';

export default function Fund(params) {

    // 資料庫抓回來的值
    const [result, setResult] = useState(null);
    const [date, setDate] = useState(null);
    const [resultImg, setResultImg] = useState(null);
    const [fee, setFee] = useState(null);
    const [text, setText] = useState(null);

    // 球隊id
    const {id} = useParams();

    // SQL參數
    const [userid, setUserid] = useState( Cookies.get('id') ); // 登入者id
    const [teamid, setTeamid] = useState( id );                // 球隊id
    
    // index.js內查找的目前文章id 動態路由取得
    const {articleid} = useParams();

    // 刪除文章後的最新文章id
    const [afterDeleteArticleId,setAfterDeleteArticleId]=useState(null);

    // articleid -> 查找目前文章
    useEffect(()=>{
        Axios.post('http://localhost:3001/teamfundarticle',{
            articleid:articleid
        }).then((response)=>{
            console.log(response.data[0]);
            setDate(response.data[0].date); // date
            setFee(response.data[0].fee); // fee
            setText(response.data[0].text); // text
            // 讀照片
            const u8Arr = new Uint8Array(response.data[0].userimg.data); // 轉unit8array
            const blob = new Blob([u8Arr],{type:"image/jpeg"});          // 轉blob
            const fr = new FileReader;                                   // 讀取
            fr.readAsDataURL(blob);                                      // base64編碼的URL
            fr.onload = function () {                                    // 當讀取完成時
                setResultImg(fr.result); // resultimg
            };
        });
    },[articleid]);

    // 文章類型
    const [articleType, setArticleType] = useState('');
    const location = useLocation();                     // 使用 useLocation
    const splitLocaPath = location.pathname.split('/'); // 將網址切開
    useEffect(()=>{
        if(splitLocaPath[5]==='fund'){
            setArticleType('fund');
        }else if(splitLocaPath[5]==='pay'){
            setArticleType('pay');
        }else if(splitLocaPath[5]==='activity'){
            setArticleType('activity');
        };
    },[])

    // 查找最新文章id
    const handleNewArticleId =()=>{
        if(articleType==='fund'){
            Axios.post('http://localhost:3001/teamfundall',{
                teamid:teamid
            }).then((response)=>{
                // 設定刪除文章後 最新基金文章id
                setAfterDeleteArticleId(response.data[0].articleid);
            });
        }else if(articleType==='pay'){
            Axios.post('http://localhost:3001/teampayall',{
                teamid:teamid
            }).then((response)=>{
                // 設定刪除文章後 最新支出文章id
                setAfterDeleteArticleId(response.data[0].articleid);
            });
        }else if(articleType==='activity'){
            Axios.post('http://localhost:3001/teamactivityall',{
                teamid:teamid
            }).then((response)=>{
                // 設定刪除文章後 最新活動文章id
                setAfterDeleteArticleId(response.data[0].articleid);
            });
        };
    }

    // 使用history
    const goPath =useHistory();
    // 刪除目前文章
    const handleDeleteArticle=()=>{
        Axios.post('http://localhost:3001/teamfundarticledelete',{
            articleid:articleid
        })
        handleNewArticleId();
        if(afterDeleteArticleId){
            console.log(afterDeleteArticleId);
            // goPath.push(`/gosport/user/myteam/${id}/fund/${afterDeleteArticleId}`);
        }
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
                    <img src={resultImg? resultImg:img.m}/>
                    
                    <div className={fund.oTitle}>金額</div>
                    <div className={fund.oText}>{fee}</div>
                    <div className={fund.oTitle}>描述</div>
                    <div className={fund.oTextL}>{text}</div>
                </div>

            </div>
        </>
    )
};
