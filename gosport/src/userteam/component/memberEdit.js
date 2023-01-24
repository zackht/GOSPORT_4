import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import memberEdit from './memberEdit.module.css';
import img from '../img.module.js';
import Axios from "axios";
import Cookies from 'js-cookie';
import { parse } from 'url';

export default function MemberEdit(params) {

    // SQL參數
    const [userid, setUserid] = useState( Cookies.get('id') ); // 登入者id
    const [teamid, setTeamid] = useState(1);                   // 球隊id

    // input值
    const [sqlLeaderId, setSqlLeaderId] = useState();     // 資料庫 隊長id
    const [leaderId, setLeaderId] = useState();           // 隊長id
    const [members, setmembers] = useState([]);             // 成員資料
    const [memberImgUrls, setMemberImgUrls] = useState({}); // 成員urls 已讀取

    // 成員的刪除 button 預設未刪除｜已刪除 
    const [btnDelete, setBtnDelete] = useState('');

    // 畫面載入即抓資料
    useEffect(()=>{
        handlemembers(); // 成員
    },[]);

    // 抓 成員資料
    const handlemembers = () => {
        Axios.post("http://localhost:3001/teammember",{
            teamid: teamid
        }).then((response)=>{
            setmembers(response.data);          // 成員資料 
            response.data.forEach((val)=>{
                if(val.leader===1){
                    setSqlLeaderId(val.userid); // 資料庫隊長id
                    setLeaderId(val.userid);    // 隊長id
                }
            })
        })
    };
    
    // 抓到成員資料後 
    useEffect(() => {

        members.forEach((val, key) => {
            // 1. 照片轉檔
            if (val.userimg !== null) {
                let u8Arr = new Uint8Array(val.userimg.data);
                let blob = new Blob([u8Arr], {type: "image/jpeg"});
                let fr = new FileReader;
                fr.readAsDataURL(blob);
                fr.onload = function () {
                    setMemberImgUrls(e => {
                        return { ...e, [key]: fr.result };
                    });
                }
            };
            // 2. 成員的刪除btn
            setBtnDelete((e)=>{
                return {...e, [key]: true}; // 預設true -> css:isNotDelete
            })
        });

    }, [members]);

    // 隊長清單
    const setLeaderList = members.map((val, key) => {
        // 會員有頭像時
        if(val.userimg !== null){
            return (
                <>
                    <input type="radio" key={key} id={`o${key}`} name='teammember' value={val.userid}
                           checked={val.userid==leaderId} // 現任隊長 checked
                           onClick={e=>{ setLeaderId(e.target.value)} }/>
                    <label for={`o${key}`}>
                        <img src={memberImgUrls[key]} />
                    </label>
                </>
            )
        }else{
            // 會員無頭像時
            return (
                <>
                    <input type="radio" key={key} id={`o${key}`} name='teammember' value={val.userid}
                           checked={val.userid==leaderId} 
                           onClick={e=>{ setLeaderId(e.target.value) }}/>
                    <label for={`o${key}`}>
                        <img src={img.m} />
                    </label>
                </>
            )
        }
    });

    // 成員球類程度
    const handleteamtype =(val)=>{
        if(val.teamtype==='羽球'){ 
            return <div>{val.badminton}</div>;
        }else if(val.teamtype==='桌球'){
            return <div>{val.tabletennis}</div>;
        }else{
            return <div>{val.volleyball}</div>;
        }
    };

    // 刪除btn
    const handleDeleteMember =(e,val,key)=>{
        const newBtnDelete = {...btnDelete};
        newBtnDelete[key] = !btnDelete[key]; // 切換false
        setBtnDelete(newBtnDelete);
    }

    // 成員清單
    const memberList =members.map((val, key) => {
        return (
            <div className={memberEdit.checkMember}>
                <img src={ memberImgUrls[key]? memberImgUrls[key]:img.m }/>
                <div>{val.username}</div>
                <div>程度</div>
                <div>{ handleteamtype(val) }</div>
                <div className={memberEdit.badge}>
                    <img src={img.star}/>
                    <img src={img.star}/>
                </div>
                <div className={memberEdit.checkbtn}>
                    {/* 刪除btn */}
                    <button onClick={ (e) =>{ handleDeleteMember(e,val,key) } } 
                            // 預設true -> isNotDelete ｜ 刪除false -> isDelete
                            className={ btnDelete[key]? `${memberEdit.isNotDelete}`:`${memberEdit.isDelete}`} >刪除</button>
                </div>
            </div>
        )
    })

    // 成員資料更新 
    const handleMemberUpdate=()=>{

        // 舊隊長
        Axios.post("http://localhost:3001/oldleader",{
            teamid:      teamid,
            sqlleaderid: sqlLeaderId
        }).then((response)=>{
            console.log('updateOldLeader');
        })

        // 新隊長
        Axios.post("http://localhost:3001/newleader",{
            teamid:      teamid,
            leaderid:    leaderId
        }).then((response)=>{
            console.log('updateNewLeader');
        })
        
        

        // 刪除成員
        for (const key in btnDelete) {
            // 刪除按鈕亮燈的成員
            if(btnDelete[key]===false){
                Axios.post("http://localhost:3001/deletemember",{
                    teamid:teamid,
                    userid:members[key].userid
                }).then((response)=>{
                    console.log('delete');
                })

            }
        }
    }

    return(
        <>
            <div className={memberEdit.mForm}>

                {/* 隊長 */}
                <div className={memberEdit.mTitle}>隊長</div>
                { setLeaderList }

                {/* 成員 */}
                <div className={memberEdit.mTitle}>成員</div>
                { memberList }

                {/* 取消｜儲存 */}
                <div className={memberEdit.formbtn}>
                    <Link to={`/gosport/user/myteam/member`}>取消</Link>
                    <Link to={`/gosport/user/myteam/member`} onClick={ handleMemberUpdate }>儲存</Link>
                </div>

            </div>
        </>
    )
};
