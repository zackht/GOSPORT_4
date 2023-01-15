import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import member from './member.module.css';
import img from '../img.module.js';
import Axios from "axios";

export default function Member(params) {

    // SQL參數 球隊id 會員id(好像不需要...待定)
    // const [userid, setUserid] = useState('1');
    const [teamid, setTeamid] = useState('1');

    // input值
    const [leaderImg, setLeaderImg] = useState('');         // 隊長
    const [memberImgs, setmemberImgs] = useState([]);       // 成員s 未讀取（二進位）
    const [memberImgUrls, setMemberImgUrls] = useState({}); // 成員s 已讀取
    const [pendingmemberImgs, setPendingmemberImgs] = useState(''); // 未審核成員

    // 畫面載入即抓資料
    useEffect(()=>{
        handleLeaderImg();  // 隊長
        handlememberImgs(); // 成員
        handlePendingImg(); // 未審核成員
    },[]);

    // 抓 隊長img
    const handleLeaderImg = async () => {
        let res = await Axios.post("http://localhost:3001/teamleader",{
            teamid: teamid
        });
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
                    setMemberImgUrls(prevmemberImgUrls => {
                        return { ...prevmemberImgUrls, [key]: fr.result }
                    });
                }
            }
        });
    }, [memberImgs]);

    // 成員清單
    const memberList = memberImgs.map((val, key) => {
        return val.userimg !== null? (
            <img key={key} className={member.mImg} src={memberImgUrls[key]} />
        ):(
            <img key={key} className={member.mImg} src={img.m} /> // 會員無頭像時
        );
    });


    // 抓 未審核成員img
    const handlePendingImg = () => {
        Axios.post("http://localhost:3001/teampendingimg",{
            teamid: teamid
        }).then((response)=>{
            setPendingmemberImgs(response.data); // 給input
        })
    }
    // console.log(pendingmemberImgs);



    return(
        <>
            <div className={member.memberContent}>
                <div>
                    <Link to={"/gosport/user/myteam/member/edit"} className={member.mbtn}>編輯</Link>
                    {/* 隊長 */}
                    <div className={member.mTitle}>隊長</div>
                    <img className={member.mImg} src={leaderImg} alt=""/>
                    {/* 成員 */}
                    <div className={member.mTitle}>成員</div>
                    { memberList }  
                    {/* <img className={member.mImg} src={img.m2} alt=""/>
                    <img className={member.mImg} src={img.m3} alt=""/>
                    <img className={member.mImg} src={img.m4} alt=""/>
                    <img className={member.mImg} src={img.m5} alt=""/>
                    <img className={member.mImg} src={img.m6} alt=""/> */}

                    {/* 待審核區 */}
                    <div className={member.mTitle}>未審核</div>
                </div>
                {/* 待審核成員 -1 */}
                <div className={member.checkMember}>
                    <img className={member.mImg} src={img.m7} alt=""/>
                    <div>七期許效舜</div>
                    <div>程度</div>
                    <div>高手</div>
                    <div className={member.badge}>
                        <img src={img.star} alt=""/>
                        <img src={img.star} alt=""/>
                        <img src={img.star} alt=""/>
                    </div>
                    <div className={member.checkbtn}>
                        <button>拒絕</button>
                        <button>接受</button>
                    </div>
                </div>

                {/* 待審核成員 -2 */}
                <div className={member.checkMember}>
                    <img className={member.mImg}  src={img.m8} alt=""/>
                    <div>資策會羅志祥</div>
                    <div>程度</div>
                    <div>新人</div>
                    <div className={member.badge}>
                        <img src={img.star} alt=""/>
                        <img src={img.star} alt=""/>
                        <img src={img.star} alt=""/>
                    </div>
                    <div className={member.checkbtn}>
                        <button>拒絕</button>
                        <button>接受</button>
                    </div>
                </div>
                
            </div>
        </>
    )
};