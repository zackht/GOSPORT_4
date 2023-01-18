import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import member from './member.module.css';
import img from '../img.module.js';
import Axios from "axios";
import Cookies from 'js-cookie';

export default function Member(params) {

    // 徽章還沒找資料！！！！
    
    // SQL參數
    const [userid, setUserid] = useState( Cookies.get('id') ); // 登入者id
    const [teamid, setTeamid] = useState('1');                 // 球隊id

    // input值
    const [leaderImg, setLeaderImg] = useState('');         // 隊長img
    const [leaderId, setLeaderId] = useState('');           // 隊長id
    const [memberImgs, setmemberImgs] = useState([]);       // 成員imgs 資料庫二進位檔
    const [memberImgUrls, setMemberImgUrls] = useState({}); // 成員urls 已讀取
    const [pendingmember, setpendingmember] = useState([]);   // 未審核成員
    const [pendingImgUrls, setPendingImgUrls] = useState({}); // 未審核成員urls 已讀取

    // 畫面載入即抓資料
    useEffect(()=>{
        handleLeaderImg();  // 隊長
        handlememberImgs(); // 成員
        handlePending(); // 未審核成員
        
    },[]);

    // 抓 隊長img id
    const handleLeaderImg = async () => {
        let res = await Axios.post("http://localhost:3001/teamleader",{
            teamid: teamid
        });
        setLeaderId(res.data[0].userid);
        // console.log(res.data[0].userid);
        let u8Arr = new Uint8Array(res.data[0].userimg.data);
        let blob = new Blob([u8Arr],{type:"image/jpeg"});
        let fr = new FileReader;
        fr.readAsDataURL(blob);
        fr.onload = function () {
            setLeaderImg(fr.result); // 給input
        };
    };

    // 抓 成員img 
    const handlememberImgs = () => {
        Axios.post("http://localhost:3001/teammember",{
            teamid: teamid
        }).then((response)=>{
            setmemberImgs(response.data); // 未讀取 給input 
        })
    }

    // 讀取 成員img
    useEffect(() => {
        memberImgs.forEach((val, key) => {
            if (val.userimg !== null) {
                let u8Arr = new Uint8Array(val.userimg.data);
                let blob = new Blob([u8Arr], {type: "image/jpeg"});
                let fr = new FileReader;
                fr.readAsDataURL(blob);
                fr.onload = function () {
                    setMemberImgUrls(e => {
                        return { ...e, [key]: fr.result }
                    });
                }
            }
        });
    }, [memberImgs]);

    // 成員清單
    const memberList = memberImgs.map((val, key) => {
        if(val.userimg !== null){
            // 隊長排除
            return val.userid === leaderId? '':( <img key={key} className={member.mImg} src={memberImgUrls[key]} />);    
        }else{
            // 會員無頭像時
            return <img key={key} className={member.mImg} src={img.m} />; 
        }
    });

    // 抓 未審核成員img
    const handlePending = () => {
        Axios.post("http://localhost:3001/teampendingimg",{
            teamid: teamid
        }).then((response)=>{
            setpendingmember(response.data); // 給input
        })
    }
    // console.log(typeof pendingmember);

    // 讀取 未審核成員
    useEffect(() => {
        pendingmember.forEach((val, key) => {
            if (val.userimg !== null) {
                // console.log(val.userimg);
                let u8Arr = new Uint8Array(val.userimg.data);
                let blob = new Blob([u8Arr], {type: "image/jpeg"});
                let fr = new FileReader;
                fr.readAsDataURL(blob);
                fr.onload = function () {
                    setPendingImgUrls(e => {
                        return { ...e, [key]: fr.result }
                    });
                }
            }
        });
    }, [pendingmember]);

    // 顯示對應球隊類別的會員程度
    const handleteamtype =(val)=>{
        if(val.teamtype==='羽球'){ 
            return <div>{val.badminton}</div>;
        }else if(val.teamtype==='桌球'){
            return <div>{val.tabletennis}</div>;
        }else{
            return <div>{val.volleyball}</div>;
        }
    };

    // 拒絕 未審核成員
    const handlieReject=(val)=>{
        console.log(`${val.userid}`);
        Axios.post("http://localhost:3001/teampendingreject",{
            teamid:teamid,
            userid:val.userid // 未審核成員的id
        }).then((response)=>{
            // setpendingmember(response.data); // 給input
        })
    }

    // 接受 未審核成員
    const handlieAccept=()=>{
        console.log('接受');
    }

    // 未審核成員清單
    const pendingMemberList = pendingmember.map((val, key) => {
        // console.log(pendingmember[key+1].userid);
        if(key%3===0){ // 篩出重複資料
            return (
                <div className={member.checkMember}>
                    <img className={member.mImg} src={pendingImgUrls[key]} alt="使用者頭貼"/>
                    <div>{val.username}</div>
                    <div className={member.mSpace} ></div>
                    <div>程度</div>
                    { handleteamtype(val) }
                    <div className={member.badge}>
                        <img src={img.star} alt=""/>
                        <img src={img.star} alt=""/>
                        <img src={img.star} alt=""/>
                    </div>
                    <div className={member.checkbtn}>
                        <button onClick={()=>{handlieReject(val)}}>拒絕</button>
                        <button onClick={()=>{handlieAccept(val)}}>接受</button>
                    </div>
                </div>
            )
        }else{
            return '';
        }
    });

    return(
        <>
            <div className={member.memberContent}>
                <div>
                    {/* only 隊長可編輯 */}
                    { userid===`${leaderId}`? (<Link to={"/gosport/user/myteam/member/edit"} className={member.mbtn}>編輯</Link>):'' }
                    {/* 隊長 */}
                    <div className={member.mTitle}>隊長</div>
                    <img className={member.mImg} src={leaderImg} alt=""/>
                    {/* 成員 */}
                    <div className={member.mTitle}>成員</div>
                    { memberList }  
                </div>
                {/* 未審核 */}
                { userid===`${leaderId}`? (<div className={`${member.mTitle} ${member.mPending}`}>未審核</div>):'' }
                { userid===`${leaderId}`? pendingMemberList:'' }
            </div>
        </>
    )
};