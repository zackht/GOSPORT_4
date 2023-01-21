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
    const [members, setmembers] = useState([]);       // 成員imgs 資料庫二進位檔
    const [memberImgUrls, setMemberImgUrls] = useState({}); // 成員urls 已讀取
    const [pendingmember, setpendingmember] = useState([]);   // 未審核成員
    const [pendingImgUrls, setPendingImgUrls] = useState({}); // 未審核成員urls 已讀取

    // 畫面載入即抓資料
    useEffect(()=>{
        handleLeaderImg();  // 隊長
        handlemembers(); // 成員
        handlePending(); // 未審核成員
    },[]);
    // useEffect(()=>{
    //     handleLeaderImg();  // 隊長
    //     handlemembers(); // 成員
    //     handlePending(); // 未審核成員
    // },[leaderImg,leaderId,members,memberImgUrls,pendingmember,pendingImgUrls]);

    // 抓 隊長資料
    const handleLeaderImg = async () => {
        let res = await Axios.post("http://localhost:3001/teamleader",{
            teamid: teamid
        });
        setLeaderId(res.data[0].userid); // 隊長id
        let u8Arr = new Uint8Array(res.data[0].userimg.data);
        let blob = new Blob([u8Arr],{type:"image/jpeg"});
        let fr = new FileReader;
        fr.readAsDataURL(blob);
        fr.onload = function () {
            setLeaderImg(fr.result); // 隊長img
        };
    };

    // 抓 成員資料
    const handlemembers = () => {
        Axios.post("http://localhost:3001/teammember",{
            teamid: teamid
        }).then((response)=>{
            setmembers(response.data); // 成員資料
        })
    }

    // 讀取 成員img
    useEffect(() => {
        members.forEach((val, key) => {
            if (val.userimg !== null) {
                let u8Arr = new Uint8Array(val.userimg.data);
                let blob = new Blob([u8Arr], {type: "image/jpeg"});
                let fr = new FileReader;
                fr.readAsDataURL(blob);
                fr.onload = function () {
                    setMemberImgUrls(e => { // 成員img
                        return { ...e, [key]: fr.result }
                    });
                }
            }
        });
    }, [members]);

    // 成員清單
    const memberList = members.map((val, key) => {
        // 會員有頭像
        if(val.userimg !== null){
            // 排除隊長
            return val.userid === leaderId? '':( <img key={key} className={member.mImg} src={memberImgUrls[key]} />);    
        }else{
        // 會員無頭像
            return <img key={key} className={member.mImg} src={img.m} />; 
        }
    });

    // 抓 未審核成員資料
    const handlePending = () => {
        Axios.post("http://localhost:3001/teampendingimg",{
            teamid: teamid
        }).then((response)=>{
            console.log(response.data);
            setpendingmember(response.data); // 未審核成員
        })
    }

    // 讀取 未審核成員img
    useEffect(() => {
        pendingmember.forEach((val, key) => {
            if (val.userimg !== null) {
                let u8Arr = new Uint8Array(val.userimg.data);
                let blob = new Blob([u8Arr], {type: "image/jpeg"});
                let fr = new FileReader;
                fr.readAsDataURL(blob);
                fr.onload = function () {
                    setPendingImgUrls(e => { // 未審核成員img
                        return { ...e, [key]: fr.result }
                    });
                }
            }
        });
    }, [pendingmember]);

    // 成員的球類程度 對應球隊類別
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
        // console.log(`${val.userid}`);
        Axios.post("http://localhost:3001/teampendingreject",{
            teamid:teamid,
            userid:val.userid // 未審核成員id
        }).then((response)=>{
            handlePending();  // 抓未審核成員資料
        })
    }

    // 接受 未審核成員
    const handlieAccept=(val)=>{
        console.log(`${val.userid}`);
        Axios.post("http://localhost:3001/teampendingaccept",{
            teamid:teamid,
            userid:val.userid // 未審核成員id
        }).then((response)=>{
            handlePending();  // 抓未審核成員資料
        })
    }

    // 未審核成員清單
    const pendingMemberList = pendingmember.map((val, key) => {
        if(key%3===0){ // 篩出重複資料
            return (
                <div className={member.checkMember}>
                    <img className={member.mImg} src={pendingImgUrls[key]? pendingImgUrls[key]:img.mp} alt="使用者頭貼"/>
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