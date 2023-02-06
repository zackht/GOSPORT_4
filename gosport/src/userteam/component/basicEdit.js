import React, { useRef, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import basicEdit from './basicEdit.module.css';
import img from '../img.module.js';
import Axios from "axios";
import Cookies from 'js-cookie';

export default function BasicEdit(props) {

    // 抓網址id = 文章id
    const {id} = useParams();

    // SQL參數 會員id 球隊id
    const [userid, setUserid] = useState( Cookies.get('id') ); // 登入者id
    const [teamid, setTeamid] = useState(id);

    // input值
    const [tname, setTname] = useState('');
    const [sidename, setSidename] = useState('');
    const [week, setWeek] = useState('');
    const [starttime, setStarttime] = useState('');
    const [endtime, setEndtime] = useState('');
    const [type, setType] = useState('');
    const [level, setLevel] = useState('');
    const [fee, setFee] = useState('');
    const [text, setText] = useState('');
    const [county, setCounty] = useState('');
    const [area, setArea] = useState('');
    const [teamimg, setTeamimg] = useState();   // 顯示
    const [teamfile, setTeamfile] = useState(); // 傳照片
    // 上傳照片...
    const [uploadimg, setUploadimg] = useState(img.upload_c);

    // 抓資料
    
    // 畫面載入即抓資料
    useEffect(()=>{
        
        let res = Axios.post("http://localhost:3001/basicsearch",{
            userid: userid,
            teamid: teamid
        }).then((res)=>{
            // 給input值
            console.log(res.data[0]);
            setTname(res.data[0].tname);
            setSidename(res.data[0].sidename);
            setWeek(res.data[0].week);
            setStarttime(res.data[0].starttime);
            setEndtime(res.data[0].endtime);
            setType(res.data[0].type);
            setLevel(res.data[0].level);
            setFee(res.data[0].fee);
            setText(res.data[0].text);
            setCounty(res.data[0].county);
            setArea(res.data[0].area);
            // 讀照片
            const u8Arr = new Uint8Array(res.data[0].teamimg.data); // 轉unit8array
            const blob = new Blob([u8Arr],{type:"image/jpeg"});     // 轉blob
            const fr = new FileReader; // 異步讀取方法
            fr.readAsDataURL(blob);    // 讀取 以base64編碼的URL
            fr.onload = function () {  // 讀取完成時
                // 給input
                setTeamimg(fr.result);
                // 隱藏uploadimg
                setUploadimg('none');
                };
            })
        
    },[]);
    
    // 更新照片
    const inputFile = useRef();
    const upLoadImg=()=>{
        inputFile.current.click();
    }
    
    const handleImgChange =(e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();
        // 轉換更新格式
        if (file) {
            reader.readAsDataURL(file); // 讀取 以base64編碼的URL
            // 放入儲存的值
            setTeamfile(file);
        }
        // 顯示
        reader.addEventListener("load", function () {
            // 給div
            setTeamimg(reader.result);
            // 隱藏uploadimg
            setUploadimg('none');
        }, false);
    }

    // 更新 or 新增資料
    const updateBasic =()=>{

        console.log(area);

        // 有球隊
        if(teamid){

            if(teamfile){ // 有圖片
                // 打包
                const teamData = new FormData(); 
                teamData.append('teamid', teamid);
                teamData.append('tname', tname);
                teamData.append('sidename', sidename);
                teamData.append('week', week);
                teamData.append('starttime', starttime);
                teamData.append('endtime', endtime);
                teamData.append('type', type);
                teamData.append('level', level);
                teamData.append('fee', fee);
                teamData.append('text', text);
                teamData.append('area', area);
                teamData.append('teamfile', teamfile); // img
                // console.log(teamfile);
                Axios.post("http://localhost:3001/basicupdate", teamData,{
                    headers: { 'Content-Type': 'multipart/form-data' },
                }).then((response) => {
                    console.log("有圖片更新成功");
                });
            } else { // 沒圖片
                const teamData2 = new FormData();
                teamData2.append('teamid', teamid);
                teamData2.append('tname', tname);
                teamData2.append('sidename', sidename);
                teamData2.append('week', week);
                teamData2.append('starttime', starttime);
                teamData2.append('endtime', endtime);
                teamData2.append('type', type);
                teamData2.append('level', level);
                teamData2.append('fee', fee);
                teamData2.append('text', text);
                teamData2.append('area', area);
                Axios.post("http://localhost:3001/basicupdate2", teamData2, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                }).then((response) => {
                    console.log("沒圖片更新成功");
                });
            }


        }else{
        // 無球隊
            
            if(teamfile){ // 有圖片
                // 打包
                const teamData = new FormData(); 
                teamData.append('teamid', teamid);
                teamData.append('tname', tname);
                teamData.append('sidename', sidename);
                teamData.append('week', week);
                teamData.append('starttime', starttime);
                teamData.append('endtime', endtime);
                teamData.append('type', type);
                teamData.append('level', level);
                teamData.append('fee', fee);
                teamData.append('text', text);
                teamData.append('teamfile', teamfile); // img
                Axios.post("http://localhost:3001/basicnew", teamData,{
                    headers: { 'Content-Type': 'multipart/form-data' },
                }).then((response) => {
                    console.log("有圖片新增球隊成功");
                });
            } else { // 沒圖片
                const teamData2 = new FormData();
                teamData2.append('teamid', teamid);
                teamData2.append('tname', tname);
                teamData2.append('sidename', sidename);
                teamData2.append('week', week);
                teamData2.append('starttime', starttime);
                teamData2.append('endtime', endtime);
                teamData2.append('type', type);
                teamData2.append('level', level);
                teamData2.append('fee', fee);
                teamData2.append('text', text);
                Axios.post("http://localhost:3001/basicnew2", teamData2, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                }).then((response) => {
                    console.log("沒圖片新增球隊成功");
                });
            }

        }

        
    }

    const [Taichung, setTaichung] = useState([
        "不限","外埔區", "東區", "西區", "南區", "北區", "西屯區", "南屯區", "北屯區", "豐原區", "大里區", "太平區", "清水區", "沙鹿區", "大甲區", "東勢區", "梧棲區", "烏日區", "神岡區", "大肚區", "大雅區", "后里區", "霧峰區", "潭子區", "龍井區", "中區", "和平區", "石岡區", "大安區", "新社區"
    ]);

    return(
        <>
            <div action="" className={basicEdit.bForm}>
                {/* 上傳照片 */}
                <div onClick={upLoadImg}  >
                    <img src={uploadimg}/>
                    <img src={teamimg}/>
                    <input type='file' accept=".png, .jpg, .jpeg" ref={inputFile} 
                           onChange={ handleImgChange }></input>
                </div>
                
                <div>球隊名稱</div>
                <input type="text" name='tname' defaultValue={tname? tname:''} 
                       onChange={(e)=>{setTname(e.target.value)}}/>

                <div>固定打球地區</div>
                <select name="county" onChange={(e)=>{setCounty(e.target.value)}}>
                    <option defaultValue="台中市" selected={week? `${week==='台中市'? 'selected':''}`:''}>台中市</option>
                </select>
                <select name="area" onChange={(e)=>{setArea(e.target.value)}} className={basicEdit.beRight}>
                    {Taichung.map((val, key) => {
                        return (<option key={key} selected={area===val} value={val}>{val}</option>);
                    })}
                </select>

                <div>場館名稱</div>
                <input type="text" name='sidename' defaultValue={sidename? sidename:''}
                       onChange={(e)=>{setSidename(e.target.value)}}/>

                <div>固定打球時間</div>
                <select name="week" onChange={(e)=>{setWeek(e.target.value)}}>
                    <option value="星期一" selected={week? `${week==='星期一'? 'selected':''}`:''}>星期一</option>
                    <option value="星期二" selected={week? `${week==='星期二'? 'selected':''}`:''}>星期二</option>
                    <option value="星期三" selected={week? `${week==='星期三'? 'selected':''}`:''}>星期三</option>
                    <option value="星期四" selected={week? `${week==='星期四'? 'selected':''}`:''}>星期四</option>
                    <option value="星期五" selected={week? `${week==='星期五'? 'selected':''}`:''}>星期五</option>
                    <option value="星期六" selected={week? `${week==='星期六'? 'selected':''}`:''}>星期六</option>
                    <option value="星期日" selected={week? `${week==='星期日'? 'selected':''}`:''}>星期日</option>
                </select>

                {/* <div>時段</div> */}
                <select name="starttime" onChange={(e)=>{setStarttime(e.target.value)}} className={basicEdit.beRight}>
                    <option value="9"  selected={starttime? `${starttime===9? 'selected':''}`:''}>09:00</option>
                    <option value="10" selected={starttime? `${starttime===10? 'selected':''}`:''}>10:00</option>
                    <option value="11" selected={starttime? `${starttime===11? 'selected':''}`:''}>11:00</option>
                    <option value="12" selected={starttime? `${starttime===12? 'selected':''}`:''}>12:00</option>
                    <option value="13" selected={starttime? `${starttime===13? 'selected':''}`:''}>13:00</option>
                    <option value="14" selected={starttime? `${starttime===14? 'selected':''}`:''}>14:00</option>
                    <option value="15" selected={starttime? `${starttime===15? 'selected':''}`:''}>15:00</option>
                    <option value="16" selected={starttime? `${starttime===16? 'selected':''}`:''}>16:00</option>
                    <option value="17" selected={starttime? `${starttime===17? 'selected':''}`:''}>17:00</option>
                    <option value="18" selected={starttime? `${starttime===18? 'selected':''}`:''}>18:00</option>
                    <option value="19" selected={starttime? `${starttime===19? 'selected':''}`:''}>19:00</option>
                    <option value="20" selected={starttime? `${starttime===20? 'selected':''}`:''}>20:00</option>
                    <option value="21" selected={starttime? `${starttime===21? 'selected':''}`:''}>21:00</option>
                </select>
                <div className={basicEdit.fTimeTo}>至</div>
                <select name="endtime" onChange={(e)=>{setEndtime(e.target.value)}} className={basicEdit.beRight2}>
                    <option value="9"  selected={endtime? `${endtime===9? 'selected':''}`:''}>09:00</option>
                    <option value="10" selected={endtime? `${endtime===10? 'selected':''}`:''}>10:00</option>
                    <option value="11" selected={endtime? `${endtime===11? 'selected':''}`:''}>11:00</option>
                    <option value="12" selected={endtime? `${endtime===12? 'selected':''}`:''}>12:00</option>
                    <option value="13" selected={endtime? `${endtime===13? 'selected':''}`:''}>13:00</option>
                    <option value="14" selected={endtime? `${endtime===14? 'selected':''}`:''}>14:00</option>
                    <option value="15" selected={endtime? `${endtime===15? 'selected':''}`:''}>15:00</option>
                    <option value="16" selected={endtime? `${endtime===16? 'selected':''}`:''}>16:00</option>
                    <option value="17" selected={endtime? `${endtime===17? 'selected':''}`:''}>17:00</option>
                    <option value="18" selected={endtime? `${endtime===18? 'selected':''}`:''}>18:00</option>
                    <option value="19" selected={endtime? `${endtime===19? 'selected':''}`:''}>19:00</option>
                    <option value="20" selected={endtime? `${endtime===20? 'selected':''}`:''}>20:00</option>
                    <option value="21" selected={endtime? `${endtime===21? 'selected':''}`:''}>21:00</option>
                </select>

                <div>球類別</div>
                <select name="type" onChange={(e)=>{setType(e.target.value)}}>
                    <option value="羽球" selected={type? `${type==='羽球'? 'selected':''}`:''}>羽球</option>
                    <option value="桌球" selected={type? `${type==='桌球'? 'selected':''}`:''}>桌球</option>
                    <option value="網球" selected={type? `${type==='網球'? 'selected':''}`:''}>網球</option>
                </select>
                <select name="level" className={basicEdit.formDegree} onChange={(e)=>{setLevel(e.target.value)}}>
                    <option value="新手" selected={level? `${level==='新手'? 'selected':''}`:''}>新手</option>
                    <option value="初階" selected={level? `${level==='初階'? 'selected':''}`:''}>初階</option>
                    <option value="高手" selected={level? `${level==='高手'? 'selected':''}`:''}>高手</option>
                    <option value="不限" selected={level? `${level==='不限'? 'selected':''}`:''}>不限</option>
                </select>

                <div>零打費用</div>
                <input type="text" name='fee' defaultValue={fee? fee:''}
                       onChange={(e)=>{setFee(e.target.value)}}/>

                <div>描述</div>
                <textarea name="text" id="" maxlength="100" defaultValue={text? text:''}
                          onChange={(e)=>{setText(e.target.value)}}></textarea><br/>

                {/* 取消｜儲存 */}
                <Link to={`/gosport/user/myteam/${id}/basic`}>取消</Link>
                <Link to={`/gosport/user/myteam/${id}/basic`} onClick={updateBasic}>儲存</Link>
                {/* <button >儲存</button> */}
            </div>
        </>
    )
}