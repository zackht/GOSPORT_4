import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams,useLocation, useHistory } from 'react-router-dom';
import activityEdit from './activityEdit.module.css';
import img from '../img.module';
import Axios from 'axios';
import Cookies from 'js-cookie';

export default function ActivityNew(params) {

    // 今天日期
    const setToday = new Date();
    const today = setToday.toISOString().substring(0, 10);

    // 使用者id
    const [userid, setUserid]=useState( Cookies.get('id') );
    // 球隊id
    const {id} = useParams();
    const [teamid, setTeamid]=useState(id);
    // 最新文章id值
    const [articleid,setArticleid]=useState(null);
    // 新建文章的id值
    const [newArticleid,setNewArticleid]=useState(null);
    // 文章類型
    const [articleType, setArticleType] = useState('');
    // input
    const [date, setDate] = useState(today);                // 日期
    const [starttime, setStarttime] = useState('06:00');    // 開始時間
    const [endtime, setEndtime] = useState('18:00');        // 結束時間
    const [type, setType] = useState('運動');                // 類型
    const [title, setTitle] = useState(null);               // 標題
    const [place, setPlace] = useState(null);               // 地點
    const [pay, setPay] = useState(null);                   // 支出
    const [members, setmembers] = useState([]);             // 資料庫成員
    const [memberImgUrls, setMemberImgUrls] = useState({}); // 資料庫成員urls 已讀取 
    const [activityMember, setActivityMember] = useState(null); // 參加成員   
    const [text,setText]=useState(null);                    // 描述 
    const [activityImg, setActivityImg] = useState();       // 顯示
    const [activityFile, setActivityFile] = useState();     // 傳照片
    // 上傳照片...
    const [uploadimg, setUploadimg] = useState(img.upload_c);

    // 網址  
    const location = useLocation();
    const splitLocaPath = location.pathname.split('/');
    useEffect(()=>{
        
        // 依網址判斷文章類型 
        if(splitLocaPath[5]==='fund'){
            setArticleType('fund');
        }else if(splitLocaPath[5]==='pay'){
            setArticleType('pay');
        }else if(splitLocaPath[5]==='activity'){
            setArticleType('activity');
        };

        // 查找最新文章id
        Axios.post('http://localhost:3001/teamactivityall',{
            teamid:teamid
        }).then((response)=>{
            setArticleid(response.data[0].articleid);
        });

    },[])

    // 前往指定網址
    const goPath =useHistory(); 

    // 畫面載入時 查找球隊成員
    useEffect(()=>{
        handlemembers(); 
    },[]);

    // 查找成員
    const handlemembers = () => {
        Axios.post("http://localhost:3001/teammember",{
            teamid: teamid
        }).then((response)=>{
            setmembers(response.data); // 放入members
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

        // 參加成員id 預設成員不參加  
        // const newActivityMembers = Array(members.length).fill(false);
        // setActivityMembers(newActivityMembers);
                         
    }, [members]);
    
    // 參加成員
    // const handleClickMember=(val,key)=>{
    //     const temp = {...activityMembers};
    //     temp[key]=val.target.checked;
    //     setActivityMembers(temp);
    // }
    
    // 成員清單
    // const memberList = members.map((val, key) => {

    //     // 會員有頭像時 img.m
    //     if(val.userimg !== null){
    //         return (<React.Fragment key={key}>
    //             <input type="checkbox" id={`${key}`} value={val.userid}
    //                    onClick={ (val,key)=>{ handleClickMember(val,key) } } />
    //             <label htmlFor={`${key}`} ><img src={ memberImgUrls[key] } /></label>
    //         </React.Fragment>)  

    //     // 會員無頭像時 img.m
    //     }else{
    //         return (<React.Fragment key={key}> 
    //             <input type="checkbox" id={`${key}`} value={val.userid}
    //                    onClick={ (val,key)=>{ handleClickMember(val,key) } }/>
    //             <label htmlFor={`${key}`} ><img src={img.m} /></label>
    //         </React.Fragment>)
    //     };
    // });

    // 顯示要上傳的圖片
    const handleImgChange =(e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();
        if (file) {
            // console.log(file);
            reader.readAsDataURL(file); // 讀取 以base64編碼的URL
            setActivityFile(file);
        }
        reader.addEventListener("load", function () {
            setActivityImg(reader.result);
            // 隱藏uploadimg
            setUploadimg('none');
        }, false);
    }

    // 新建文章
    const handleNewActivity=()=>{

        // 有圖片
        if(activityFile){ 
            
            const activityData = new FormData(); 
            activityData.append('teamid', teamid);
            activityData.append('date', date);
            activityData.append('starttime', starttime);
            activityData.append('endtime', endtime);
            activityData.append('type', type);
            activityData.append('title', title);
            activityData.append('place', place);
            activityData.append('pay', pay);
            activityData.append('text', text);
            activityData.append('activityFile', activityFile); // img
            Axios.post("http://localhost:3001/activitynew", activityData,{
                headers: { 'Content-Type': 'multipart/form-data' },
            }).then((response) => {
                console.log("有圖片更新成功");
            });

        // 沒圖片
        } else { 
            const activityDataNoImg = new FormData();
            activityDataNoImg.append('teamid', teamid);
            activityDataNoImg.append('date', date);
            activityDataNoImg.append('starttime', starttime);
            activityDataNoImg.append('endtime', endtime);
            activityDataNoImg.append('type', type);
            activityDataNoImg.append('title', title);
            activityDataNoImg.append('place', place);
            activityDataNoImg.append('pay', pay);
            activityDataNoImg.append('text', text);
            Axios.post("http://localhost:3001/activitynewnoimg", activityDataNoImg, {
                headers: { 'Content-Type': 'multipart/form-data' },
            }).then((response) => {
                console.log("沒圖片更新成功");
            });
        }

        // 查找最新文章id
        Axios.post('http://localhost:3001/teamactivityall',{
            teamid:teamid
        }).then((response)=>{

            // 設定新建文章id
            setNewArticleid(response.data[0].articleid);

            // 新增活動成員
            Axios.post('http://localhost:3001/teamactivitmember',{
                newArticleid:response.data[0].articleid,
                userid,userid
            }).then((response)=>{
                console.log('新增成員成功');
                
                // 返回基金頁
                goPath.push(`/gosport/user/myteam/${id}/activity/${newArticleid}`);
            });
        });

    }

    return(
        <>
            <div className={activityEdit.aForm}>
                <div >
                {/* <div onClick={upLoadImg}> */}
                    <img src={uploadimg}/>
                    <img src={activityImg}/>
                    <input type='file' accept=".png, .jpg, .jpeg"  
                    // <input type='file' accept=".png, .jpg, .jpeg" ref={inputFile} 
                           onChange={ handleImgChange }></input>
                </div>
                <div>日期</div>
                <input type="date" onChange={ (e)=>{setDate(e.target.value)} }
                    defaultValue={ `${today}` }/>
                <div>時段</div>
                <input type='time' defaultValue={'06:00'} onChange={ (e)=>{setStarttime(e.target.value)}}/>
                <div className={activityEdit.fTimeTo}>至</div>
                <input type='time' defaultValue={'18:00'} onChange={ (e)=>{setEndtime(e.target.value)}}/>
                <div>類型</div>
                <select onChange={ (e)=>{setType(e.target.value)} }
                        defaultValue={'運動'}>
                    <option value="運動">運動</option>
                    <option value="聚餐">聚餐</option>
                    <option value="其他">其他</option>
                </select>
                <div>標題</div>
                <input type="text" onChange={ (e)=>{setTitle(e.target.value)} }/>
                <div>地點</div>
                <input type="text" onChange={ (e)=>{setPlace(e.target.value)} }/>
                <div>支出</div>
                <input type="text" onChange={ (e)=>{setPay(e.target.value)} }/>
                {/* <div>參加成員</div>
                <div> { memberList } </div> */}
                <div>描述</div>
                <textarea onChange={ (e)=>{setText(e.target.value)} } cols="30" rows="10"></textarea>
                <div>
                    <Link to={`/gosport/user/myteam/${id}/activity/${articleid}`}>取消</Link>
                    <button onClick={ handleNewActivity }>儲存</button>
                </div>
            </div>
        </>
    )
};
