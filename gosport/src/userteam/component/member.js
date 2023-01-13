import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import member from './member.module.css';
import img from '../img.module.js';
import Axios from "axios";

export default function Member(params) {

    // 假設目前查詢 球隊id=1
    const [teamid, setTeamid] = useState('1');

    // 隊長頭像
    const [leaderImg, setLeaderImg] = useState('');
    // 成員頭像
    const [memberImg, setMemberImg] = useState('');
    const [memberSrc, setMemberSrc] = useState('');
    // 成員頭像 map值
    // const [memberImgMap, setMemberImgMap] = useState(null);

    // 搜尋隊長頭像
    const handleLeaderImg = async () => {
        let res = await Axios.post("http://localhost:3001/teamleader",{
            teamid: teamid
        });
        // 照片格式轉換
        let u8Arr = new Uint8Array(res.data[0].userimg.data);
        let blob = new Blob([u8Arr],{type:"image/jpeg"});
        let fr = new FileReader;
        fr.readAsDataURL(blob);
        fr.onload = function () {
            // 設置
            setLeaderImg(fr.result);
            };
    };

    // 搜尋成員頭像
    const handleMemberImg = async () => {
        let res = await Axios.post("http://localhost:3001/teammember",{
            teamid: teamid
        });
        // 設置
        // setMemberImg(res.data);
        // console.log(memberImg);
        // console.log(res.data);
        // map 成員頭像
        const memberList = res.data.map((val,key) => {
            // console.log(val);
            // 若成員沒有設置頭貼時
            if(val.userimg.data === null){
                return <img key={key} className={member.mImg} src={img.m} />;
            }else{
                // 照片轉換
                let u8Arr = new Uint8Array(val.userimg.data);
                let blob = new Blob([u8Arr], {type:"image/jpeg"});
                let fr = new FileReader;
                fr.readAsDataURL(blob);
                fr.onload = ()=>{
                    setMemberSrc([...memberSrc,fr.result]);
                    // setMemberSrc(fr.result);
                    console.log(memberSrc);
                };
                
                return <img key={key} className={member.mImg} src={memberSrc} />;
                
            };
        });
        // console.log(memberList);
    };
    

    // // map 成員頭像
    // const handleMemberImgMap=()=>{
        
    // }

    // 當畫面載入 抓資料庫
    useEffect(()=>{
        handleLeaderImg();
        handleMemberImg();
    },[]);

    return(
        <>
            <div className={member.memberContent}>
                <div>
                    {/* 只有隊長可以編輯 */}
                    <Link to={"/gosport/user/myteam/member/edit"} className={member.mbtn}>編輯</Link>
                    {/* 隊長 */}
                    <div className={member.mTitle}>隊長</div>
                    <img className={member.mImg} src={leaderImg} alt=""/>
                    {/* 成員 */}
                    <div className={member.mTitle}>成員</div>
                    { memberImg? memberImg:'' }  
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