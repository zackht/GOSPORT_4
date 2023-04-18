import React, { useState ,useEffect } from 'react';
import { Link, useParams,useLocation, useHistory } from 'react-router-dom';
import fund from './fundEdit.module.css';
// import img from '../img.module';
import Axios from 'axios';
import Cookies from 'js-cookie';

export default function FundNew(params) {

    // 今天日期
    const setToday = new Date();
    const today = setToday.toISOString().substring(0, 10);

    // 球隊id
    const {id} = useParams();
    // 最新文章id值
    const [articleid,setArticleid]=useState(null);
    // 新建文章的id值
    const [newArticleid,setNewArticleid]=useState(null);
    // 文章類型
    const [articleType, setArticleType] = useState('');

    // SQL參數
    const [userid, setUserid] = useState( Cookies.get('id') );  // 登入者id
    const [teamid, setTeamid] = useState( id );   

    // 資料庫抓回來的值
    const [result, setResult] = useState(null);
    // const [ruserimg, setRuserimg] = useState(null);

    // input值
    const [date, setDate] = useState(today);                   // 儲值日期
    const [fundMembeIid, setFundMembeIid] = useState(null); // 儲值成員id
    const [fee,setFee]=useState(null);                      // 儲值金額
    const [text,setText]=useState(null);                    // 儲值描述 
    const [members, setmembers] = useState([]);             // 成員資料
    const [memberImgUrls, setMemberImgUrls] = useState({}); // 成員urls 已讀取

    // 文章類型 依網址判斷
    const location = useLocation();
    const splitLocaPath = location.pathname.split('/');
    useEffect(()=>{
        if(splitLocaPath[5]==='fund'){
            setArticleType('fund');
        }else if(splitLocaPath[5]==='pay'){
            setArticleType('pay');
        }else if(splitLocaPath[5]==='activity'){
            setArticleType('activity');
        };
        
    },[])

    // 畫面載入 設定最新的文章id
    useEffect(()=>{
        // 基金
        if(articleType==='fund'){
            Axios.post('http://localhost:3001/teamfundall',{
                teamid:teamid
            }).then((response)=>{
                console.log(`最新文章${response.data[0].articleid}`);
                setArticleid(response.data[0].articleid);
            });

        // 支出
        }else if(articleType==='pay'){
            Axios.post('http://localhost:3001/teampayall',{
                teamid:teamid
            }).then((response)=>{
                setArticleid(response.data[0].articleid);
            });


        }

    },[articleType]);

    // 畫面載入即抓 成員資料
    useEffect(()=>{
        Axios.post("http://localhost:3001/teammember",{
            teamid: teamid
        }).then((response)=>{
            setmembers(response.data); // 成員資料 
            // console.log(response.data);
        })
    },[articleid]);

    // 抓到成員資料後 讀照片
    useEffect(() => {

        members.forEach((val, key) => {
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
        // console.log(val.userid);
        return (
            <React.Fragment key={key}>
                <input type="radio"  id={`fund${key}`} name='member' value={val.userid}
                       defaultChecked={val.userid==fundMembeIid} 
                       onClick={e=>{ setFundMembeIid(e.target.value)} }/>
                <label htmlFor={`fund${key}`} >
                    <img src={memberImgUrls[key]} />
                </label>
            </React.Fragment>
        )
    })

    // 前往指定網址
    const goPath =useHistory(); 

    // 新建文章
    const handleNewFund=()=>{

        // 新增文章
        Axios.post('http://localhost:3001/teamfundarticlenew',{
            date:date,
            teamid:teamid,
            userid:fundMembeIid,
            fee:fee,
            text:text
        })

        // 查找最新文章id
        if(articleType==='fund'){ // 基金

            Axios.post('http://localhost:3001/teamfundall',{
                teamid:teamid
            }).then((response)=>{
                console.log(response.data[0].articleid);
                setNewArticleid(response.data[0].articleid);
            });

        }else if(articleType==='pay'){  // 支出

            Axios.post('http://localhost:3001/teampayall',{
                teamid:teamid
            }).then((response)=>{
                setNewArticleid(response.data[0].articleid);
            });

        }else if(articleType==='activity'){ // 活動

            Axios.post('http://localhost:3001/teamactivityall',{
                teamid:teamid
            }).then((response)=>{
                setNewArticleid(response.data[0].articleid);
            });

        };

    }

    // 找到新增文章id值後 返回基金頁
    if(newArticleid){
        goPath.push(`/gosport/user/myteam/${id}/fund/${newArticleid}`);
    }

    return(
        <div className={fund.fForm}>
            <div>日期</div>
            <input type="date"
                   value={ date } 
                   onChange={ (e)=>{setDate(e.target.value)} }/>

            <div>儲值成員</div>
            <div>{ memberList }</div>

            <div>金額</div>
            <input type="text" defaultValue={result? result.fee:''} onChange={ (e)=>{setFee(e.target.value)} }/>

            <div>描述</div>
            <textarea cols="30" rows="10"
                      defaultValue={result? result.text:''} 
                      onChange={ (e)=>{setText(e.target.value)} } ></textarea>
            <div>
                <Link to={`/gosport/user/myteam/${id}/fund/${articleid}`}>取消</Link>
                <button onClick={ handleNewFund } >儲存</button>
            </div>
        </div>
    )
};
