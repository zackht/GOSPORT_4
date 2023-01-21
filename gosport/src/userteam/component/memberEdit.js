import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import memberEdit from './memberEdit.module.css';
import img from '../img.module.js';
import Axios from "axios";
import Cookies from 'js-cookie';

export default function MemberEdit(params) {

    // SQL參數
    const [userid, setUserid] = useState( Cookies.get('id') ); // 登入者id
    const [teamid, setTeamid] = useState('1');                 // 球隊id

    // input值
    const [leaderImg, setLeaderImg] = useState('');         // 隊長img
    const [leaderId, setLeaderId] = useState('');           // 隊長id
    const [members, setmembers] = useState([]);             // 成員imgs 資料庫二進位檔
    const [memberImgUrls, setMemberImgUrls] = useState({}); // 成員urls 已讀取

    // 畫面載入即抓資料
    useEffect(()=>{
        handlemembers(); // 成員
        
    },[]);

    // 抓 成員資料
    const handlemembers = () => {
        Axios.post("http://localhost:3001/teammember",{
            teamid: teamid
        }).then((response)=>{
            setmembers(response.data);     // 成員資料 
            response.data.forEach((val)=>{ // 隊長id
                if(val.leader===1){
                    setLeaderId(val.userid);
                }
            })
        })
    };
    
    // 抓到成員資料後
    useEffect(() => {
        members.forEach((val, key) => {
            // 讀取 成員img
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
    }, [members]);

    // 設定隊長清單 -> 所有成員
    const setLeaderList = members.map((val, key) => {
        // 會員有頭像時
        if(val.userimg !== null){
            // 現任隊長 checked
            return (
                <>
                    <input type="radio" key={key} id={`o${key}`} name='teammember' value={val.userid}
                           checked={val.userid==leaderId} 
                           onClick={e=>{setLeaderId(e.target.value)}}/>
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
                           onClick={e=>{setLeaderId(e.target.value)}}/>
                    <label for={`o${key}`}>
                        <img src={img.m} />
                    </label>
                </>
            )
        }
    });

    // 設定成員清單
    const memberList =members.map((val, key) => {
        console.log(val);
        return (
            <div className={memberEdit.checkMember}>
                <img src={img.m1} alt=""/>
                <div>豐原大哥</div>
                <div>程度</div>
                <div>普通</div>
                <div className={memberEdit.badge}>
                    <img src={img.star} alt=""/>
                    <img src={img.star} alt=""/>
                </div>
                <div className={memberEdit.checkbtn}>
                    <button>刪除</button>
                </div>
            </div>
        )
    })


    return(
        <>
            <form action="" className={memberEdit.mForm}>

                {/* 隊長 */}
                <div className={memberEdit.mTitle}>隊長</div>
                { setLeaderList }

                {/* 成員 */}
                <div className={memberEdit.mTitle}>成員</div>
                { memberList }
                
                {/* <div className={memberEdit.checkMember}>
                    <img src={img.m1} alt=""/>
                    <div>豐原大哥</div>
                    <div>程度</div>
                    <div>普通</div>
                    <div className={memberEdit.badge}>
                        <img src={img.star} alt=""/>
                        <img src={img.star} alt=""/>
                    </div>
                    <div className={memberEdit.checkbtn}>
                        <button>刪除</button>
                    </div>
                </div>
                
                <div className={memberEdit.checkMember}>
                    <img src={img.m2} alt=""/>
                    <div>南區金城武</div>
                    <div>程度</div>
                    <div>高手</div>
                    <div className={memberEdit.badge}>
                        <img src={img.star} alt=""/>
                        <img src={img.star} alt=""/>
                        <img src={img.star} alt=""/>
                    </div>
                    <div className={memberEdit.checkbtn}>
                        <button>刪除</button>
                    </div>
                </div>
                
                <div className={memberEdit.checkMember}>
                    <img src={img.m3} alt=""/>
                    <div>南區謝震武</div>
                    <div>程度</div>
                    <div>新手</div>
                    <div className={memberEdit.badge}>
                        <img src={img.star} alt=""/>
                        <img src={img.star} alt=""/>
                        <img src={img.star} alt=""/>
                    </div>
                    <div className={memberEdit.checkbtn}>
                        <button>刪除</button>
                    </div>
                </div> */}

                {/* 取消｜儲存 */}
                <div className={memberEdit.formbtn}>
                    <Link to={`/gosport/user/myteam/member`}>取消</Link>
                    <input type="submit" value="儲存" id="formSubmit"/>
                </div>

            </form>
        </>
    )
};
