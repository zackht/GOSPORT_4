import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import member from './member.module.css';
import img from '../img.module.js';
import Axios from "axios";
import Cookies from 'js-cookie';

export default function Member(params) {

    // 徽章還沒做！！！！
    // 徽章還沒做！！！！
    // 徽章還沒做！！！！
    
    // SQL參數
    const [userid, setUserid] = useState( Cookies.get('id') ); // 登入者id
    const [teamid, setTeamid] = useState(1);                   // 球隊id

    // 資料庫抓回來的值
    const [leaderId, setLeaderId] = useState('');              // 隊長id
    const [leaderImg, setLeaderImg] = useState('');            // 隊長img

    const [members, setmembers] = useState([]);                // 成員
    const [memberImgUrls, setMemberImgUrls] = useState({});    // 成員urls 可讀取

    const [pendingmember, setpendingmember] = useState([]);    // 未審核成員
    const [pendingImgUrls, setPendingImgUrls] = useState({});  // 未審核成員urls 可讀取

    // 畫面載入時
    useEffect(()=>{
        handleLeaderImg(); // 查找球隊隊長
        handlemembers();   // 查找球隊成員
        handlePending();   // 查找未審核成員
    },[]);

    // 查找隊長
    const handleLeaderImg = async () => {
        let res = await Axios.post("http://localhost:3001/teamleader",{
            teamid: teamid
        });
        setLeaderId(res.data[0].userid); // 放入leaderId 隊長id
        let u8Arr = new Uint8Array(res.data[0].userimg.data);
        let blob = new Blob([u8Arr],{type:"image/jpeg"});
        let fr = new FileReader;
        fr.readAsDataURL(blob);
        fr.onload = function () {
            setLeaderImg(fr.result);     // 放入leaderImg 隊長img
        };
    };

    // 查找成員
    const handlemembers = () => {
        Axios.post("http://localhost:3001/teammember",{
            teamid: teamid
        }).then((response)=>{
            setmembers(response.data); // 放入members
            console.log(response.data);
        })
    }

    // members改變時 讀取成員img
    useEffect(() => {
        members.forEach((val, key) => {
            if (val.userimg !== null) {
                let u8Arr = new Uint8Array(val.userimg.data);
                let blob = new Blob([u8Arr], {type: "image/jpeg"});
                let fr = new FileReader;
                fr.readAsDataURL(blob);
                fr.onload = function () {
                    setMemberImgUrls(e => { // 放入memberImgUrls
                        return { ...e, [key]: fr.result }
                    });
                }
            }
        });
    }, [members]);

    // 成員清單
    const memberList = members.map((val, key) => {
        if(val.userimg !== null){
            // 隊長不顯示
            return val.userid === leaderId? '':( <div className={member.mImgbox}><img key={key} className={member.mImg} src={memberImgUrls[key]} /></div>);    
        }else{
        // 會員無頭像時，顯示官方圖檔
            return <div className={member.mImgbox}><img key={key} className={member.mImg} src={img.m} /></div>; 
        }
    });

    // 查找未審核成員
    const handlePending = () => {
        Axios.post("http://localhost:3001/teampending",{
            teamid: teamid
        }).then((response)=>{
            setpendingmember(response.data); // 放入pendingmember 
        })
    }

    // pendingmember改變時 讀取未審核成員img
    useEffect(() => {
        pendingmember.forEach((val, key) => {
            if (val.userimg !== null) {
                let u8Arr = new Uint8Array(val.userimg.data);
                let blob = new Blob([u8Arr], {type: "image/jpeg"});
                let fr = new FileReader;
                fr.readAsDataURL(blob);
                fr.onload = function () {
                    setPendingImgUrls(e => { // 放入pendingImgUrls 
                        return { ...e, [key]: fr.result }
                    });
                }
            }
        });
    }, [pendingmember]);

    // 顯示對應球隊類別的成員程度
    const handleteamtype =(val)=>{
        if(val.teamtype==='羽球'){ 
            return <div>{val.badminton}</div>;
        }else if(val.teamtype==='桌球'){
            return <div>{val.tabletennis}</div>;
        }else{
            return <div>{val.volleyball}</div>;
        }
    };

    // 拒絕未審核成員
    const handlieReject=(val)=>{
        Axios.post("http://localhost:3001/teampendingreject",{
            teamid:teamid,
            userid:val.userid
        }).then((response)=>{
            handlePending(); // 重抓未審核成員
            console.log(`拒絕, ${val.userid}`);
        })
    }

    // 接受未審核成員
    const handlieAccept=(val)=>{
        console.log(`${val.userid}`);
        // 1. 球隊新增成員
        Axios.post("http://localhost:3001/teampendingaccept",{
            teamid:teamid,
            userid:val.userid
        }).then((response)=>{
            console.log(`接受, ${val.userid}`);
        })
        // 2. 刪除未審核資料
        Axios.post("http://localhost:3001/teampendingdelete",{
            teamid:teamid,
            userid:val.userid
        }).then((response)=>{
            handlemembers(); // 重抓成員
            handlePending(); // 重抓未審核成員
            console.log(`刪除未審核資料, ${val.userid}`);
        })
    }

    // 未審核成員清單
    const pendingMemberList = pendingmember.map((val, key) => {
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
    });

    return(
        <>
            <div className={member.memberContent}>
                <div>
                    {/* 判定為隊長 才顯示編輯按鈕 */}
                    { userid===`${leaderId}`? (<Link to={"/gosport/user/myteam/member/edit"} className={member.mbtn}>編輯</Link>):'' }
                    {/* 隊長 */}
                    <div className={member.mTitle}>隊長</div>
                    <div className={member.mImgbox}><img className={member.mImg} src={leaderImg} alt=""/></div>
                    {/* 成員清單 */}
                    <div className={member.mTitle}>成員</div>
                    { memberList }  
                </div>
                {/* 未審核清單 */}
                { userid===`${leaderId}`? (<div className={`${member.mTitle} ${member.mPending}`}>未審核</div>):'' }
                { userid===`${leaderId}`? pendingMemberList:'' }
            </div>
        </>
    )
};