import React, { useState ,useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import fund from './fundEdit.module.css';
import img from '../img.module';
import Axios from 'axios';

export default function FundEdit(params) {

    // SQL參數
    const [teamid, setTeamid] = useState(1);                   // 球隊id

    // 資料庫抓回來的值
    const [result, setResult] = useState(null);
    const [ruserimg, setRuserimg] = useState(null);

    // input值
    const [date, setDate] = useState(null);                 // 儲值日期
    const [fundMembeIid, setFundMembeIid] = useState();     // 儲值成員id
    const [fee,setFee]=useState(null);                      // 儲值金額
    const [text,setText]=useState(null);                    // 儲值描述 
    const [members, setmembers] = useState([]);             // 成員資料
    const [memberImgUrls, setMemberImgUrls] = useState({}); // 成員urls 已讀取

    // 抓網址id = 文章id
    const {id} = useParams();

    // 查找指定文章
    useEffect(()=>{
        Axios.post('http://localhost:3001/teamfundarticle',{
            id:id
        }).then((response)=>{
            // console.log(`基金文章:${id}`);
            // console.log(response.data[0]);
            setResult(response.data[0]);
            setFundMembeIid(response.data[0].userid);

            // 讀date
            const rDate = response.data[0].date;
            const rDateSub = rDate.substr(0,10);
            const rDateSubRe = rDateSub.replaceAll('-','/');
            setDate(rDateSub);

            // 讀照片
            const u8Arr = new Uint8Array(response.data[0].userimg.data); // 轉unit8array
            const blob = new Blob([u8Arr],{type:"image/jpeg"});          // 轉blob
            const fr = new FileReader; // 異步讀取方法
            fr.readAsDataURL(blob);    // 讀取 以base64編碼的URL
            fr.onload = function () {  // 讀取完成時
                setRuserimg(fr.result);
            };
        });
    },[id]);

    // 畫面載入即抓 成員資料
    useEffect(()=>{
        Axios.post("http://localhost:3001/teammember",{
            teamid: teamid
        }).then((response)=>{
            setmembers(response.data); // 成員資料 
            // console.log(response.data);
        })
    },[]);

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
        });

    }, [members]);

    // 成員清單
    const memberList =members.map((val, key) => {
        return (
            <>
                <input type="radio" key={key} id={`fund${key}`} name='member' value={val.userid}
                       checked={val.userid==fundMembeIid} 
                       onClick={e=>{ setFundMembeIid(e.target.value)} }/>
                <label for={`fund${key}`}>
                    <img src={memberImgUrls[key]} />
                </label>
            </>
        )
    })

    const handleUpdateFund=()=>{
        console.log('update');
        console.log(date);
        console.log(fundMembeIid);
        console.log(fee);
        console.log(text);
    }

    return(
        <div className={fund.fForm}>
            <div>日期</div>
            <input type="date" min="2023-01-01" max="2024-12-31" 
                    value={ date } onChange={ (e)=>{setDate(e.target.value)} }/>

            <div>儲值成員</div>
            <div>{ memberList }</div>

            <div>金額</div>
            <input type="text" defaultValue={result? result.fee:''} onChange={ (e)=>{setFee(e.target.value)} }/>

            <div>描述</div>
            <textarea cols="30" rows="10"
                      defaultValue={result? result.text:''} 
                      onChange={ (e)=>{setText(e.target.value)} } ></textarea>
            <div>
                <Link to={`/gosport/user/myteam/fund/${id}`}>取消</Link>
                <button onClick={ handleUpdateFund }>儲存</button>
            </div>
        </div>
    )
};
