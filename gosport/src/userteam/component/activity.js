import React,{useEffect,useState} from 'react';
import { Link,useParams } from "react-router-dom";
import activity from './activity.module.css';
import img from '../img.module.js';
import DateSearch from './dateSearch';
import Axios from 'axios';
import Cookies from 'js-cookie';

export default function Activity(params) {

        // 資料庫抓回來的值
        const [result, setResult] = useState(null);
        // 時間
        const [startdate, setStartdate] = useState(null);
        const [enddate, setEnddate] = useState(null);
        const [starttime, setStarttime] = useState(null);
        const [endtime, setEndtime] = useState(null);
        // 成員頭像
        // const [resultImg, setResultImg] = useState(null);
        const [imgUrls, setImgUrls]= useState(null);
    
        // 使用者id
        const [userid, setUserid]=useState( Cookies.get('id') );
        // 球隊id
        const {id} = useParams();
        const {articleid} = useParams();
        const [teamid, setTeamid]=useState(id);
    
        // 查找指定文章
        useEffect(()=>{

            Axios.post('http://localhost:3001/teamactivityarticle',{
                articleid:articleid
            }).then((response)=>{
                // console.log(response.data);
                setResult(response.data[0]);

                // 調整格式
                // startdate 
                const rrstartdate = response.data[0].startdate.substr(0,10).replaceAll('-','/');
                setStartdate(rrstartdate);
                // enddate
                const rrenddate = response.data[0].enddate.substr(0,10).replaceAll('-','/');
                setEnddate(rrenddate);
                // starttime
                const rrstarttime = response.data[0].starttime.substr(0,5);
                setStarttime(rrstarttime);
                // endtime
                const rrendtime = response.data[0].endtime.substr(0,5);
                setEndtime(rrendtime);
            });

        },[articleid]);

        // 查找活動成員
        const SearchMembers =()=>{
            Axios.post('http://localhost:3001/teamactivitymember',{
                articleid:articleid
            }).then((res)=>{
                // console.log(res.data);
                // 讀照片
                res.data.map((val,key)=>{
                    // console.log(val);
                    if(val.userimg!==null){
                        const u8Arr = new Uint8Array(val.userimg.data); // 轉unit8array
                        const blob = new Blob([u8Arr],{type:"image/jpeg"});          // 轉blob
                        const fr = new FileReader; // 異步讀取方法
                        fr.readAsDataURL(blob);    // 讀取 以base64編碼的URL
                        fr.onload = function () {  // 讀取完成時
                            setImgUrls(e => { 
                                return { ...e, [key]: fr.result };
                            });
                        };
                    }else{
                        setImgUrls(e => { 
                            return { ...e, [key]: 'm' };
                        });
                    }
                })
            })
        }
        useEffect(()=>{
            
            SearchMembers();

        },[articleid])

        // 參加成員清單
        const [memberList, setMemberList] =useState(null);

        const handleMemberList = ()=>{
            if(imgUrls){
                const imgUrlsArray = Object.entries(imgUrls);
                const newMemberList = imgUrlsArray.map((val,key)=>{
                    return <img key={key} src={val[1]}/>;
                })
                setMemberList(newMemberList);
            }
        }
        useEffect(()=>{
            handleMemberList();
        },[imgUrls]);

        const [signUpText,setSignUpText]=useState('報名');
        const [signUpCss,setSignUpCss]=useState('報名');

        // 報名
        const handleSignUp=()=>{
            
            // 新增活動成員
            Axios.post('http://localhost:3001/teamactivitmember',{
                articleid:articleid,
                userid,userid
            }).then((response)=>{
                console.log('新增成員成功');
            });

            // 查找成員
            SearchMembers();
            // 切換鈕
            setSignUpText('已報名');
        }
        
        

    return(
        <>
            {/* 活動 */}
            <div className={activity.activity}>
                
                {/* 日期搜索 */}
                <DateSearch/>

                {/* 訂單資訊 */}
                <div className={activity.order}>
                    {/* <Link to={`/gosport/user/myteam/activity/show`} className={id? activity.orderBtn:activity.notshow}>檢視</Link> */}
                    
                    <button className={id? activity.orderBtn:activity.notshow} onClick={ handleSignUp } >{ signUpText }</button>
                    <Link to={`/gosport/user/myteam/activity/edit`} className={id? activity.orderBtn:activity.notshow}>編輯</Link>
                    <button className={id? activity.orderBtn:activity.notshow}>刪除</button>    
                    <div className={activity.oTitle}>日期</div>
                    {/* <div className={activity.oText}>{result? `${startdate}-${enddate}`:''}</div> */}
                    <div className={activity.oText}>{result? `${startdate}`:''}</div>
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
                    {/* <img src={resultImg? resultImg:img.m}/> */}

                    { memberList }

                    {/* <img src={img.m1}></img>
                    <img src={img.m2}></img>
                    <img src={img.m3}></img>
                    <img src={img.m4}></img> */}

                    <div className={activity.oTitle}>留言</div>
                    <Link to={`/gosport/user/myteam/activity/show`} className={activity.oText}>0</Link>
                </div>

            </div>
        </>
    )
};
