import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import basicEdit from './basicEdit.module.css';
import img from '../img.module.js';
import Axios from "axios";
export default function BasicEdit(props) {

    // 會員、球場
    const [userid, setUserid] = useState('1');
    const [teamid, setTeamid] = useState('1');

    // input 
    const [tname, setTname] = useState('');
    const [sidename, setSidename] = useState('');
    const [week, setWeek] = useState('');
    const [starttime, setStarttime] = useState('');
    const [endtime, setEndtime] = useState('');
    const [type, setType] = useState('');
    const [level, setLevel] = useState('');
    const [fee, setFee] = useState('');
    const [text, setText] = useState('');
    const [teamimg, setTeamimg] = useState('');

    // 尚無照片 顯示「上傳照片...」
    const [uploadimg, setUploadimg] = useState(img.upload_c);

    // 查詢資料庫
    const handleBasicResult = async () => {
        let res = await Axios.post("http://localhost:3001/teambasic",{
            userid: userid,
            teamid: teamid
        });
        // 將資料放入狀態
        setTname(res.data[0].tname);
        setSidename(res.data[0].sidename);
        setWeek(res.data[0].week);
        setStarttime(res.data[0].starttime);
        setEndtime(res.data[0].endtime);
        setType(res.data[0].type);
        setLevel(res.data[0].level);
        setFee(res.data[0].fee);
        setText(res.data[0].text);
        // 轉 照片格式
        const u8Arr = new Uint8Array(res.data[0].teamimg.data);
        console.log(res.data[0].teamimg.data);
        const blob = new Blob([u8Arr],{type:"image/jpeg"});
        const fr = new FileReader;
        fr.onload = function () {
            // 照片放入狀態
            setTeamimg(fr.result);
            // setUploadimg('none');
            };
        fr.readAsDataURL(blob);
    };
    // 第一次渲染即抓資料
    useEffect(()=>{
        handleBasicResult();
    },[]);
    
    // 打開檔案
    const inputFile = useRef();
    const upLoadImg=()=>{
        inputFile.current.click();
    }
    // 顯示上傳的照片
    const handleImgChange =(e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();
        if (file) {
            // base64編碼讀取
            reader.readAsDataURL(file);
        }
        reader.addEventListener("load", function () {
            // 將照片放入狀態
            setTeamimg(reader.result);
            // 將upload設定為none
            setUploadimg('none');
        }, false);
    }

    // 更新資料庫
    const updateBasic= () => {
        Axios.post("http://localhost:3001/updateteambasic",{
            teamid:     teamid,
            tname:      tname,
            sidename:   sidename,
            week:       week,
            starttime:  starttime,
            endtime:    endtime,
            type:       type,
            level:      level,
            fee:        fee,
            text:       text,
            teamimg:    teamimg
        }).then(()=>{
            alert("更新成功");
        // <Link to={`/gosport/user/myteam/basic`}/>
        })
    }
    

    return(
        <>
            <div action="" className={basicEdit.bForm}>
                {/* 上傳照片 */}
                <div onClick={upLoadImg} id='uploadImg' >
                    <img src={uploadimg}/>
                    <img src={teamimg}/>
                    <input type='file' accept=".png, .jpg, .jpeg" ref={inputFile} onChange={handleImgChange}></input>
                </div>
                
                <div>隊名</div>
                <input type="text" name='tname' defaultValue={tname? tname:''} 
                       onChange={(e)=>{setTname(e.target.value)}}/>

                <div>常打場館</div>
                <input type="text" name='sidename' defaultValue={sidename? sidename:''}
                       onChange={(e)=>{setSidename(e.target.value)}}/>

                <div>週期</div>
                <select name="week" onChange={(e)=>{setWeek(e.target.value)}}>
                    <option value="星期一" selected={week? `${week==='星期一'? 'selected':''}`:''}>星期一</option>
                    <option value="星期二" selected={week? `${week==='星期二'? 'selected':''}`:''}>星期二</option>
                    <option value="星期三" selected={week? `${week==='星期三'? 'selected':''}`:''}>星期三</option>
                    <option value="星期四" selected={week? `${week==='星期四'? 'selected':''}`:''}>星期四</option>
                    <option value="星期五" selected={week? `${week==='星期五'? 'selected':''}`:''}>星期五</option>
                    <option value="星期六" selected={week? `${week==='星期六'? 'selected':''}`:''}>星期六</option>
                    <option value="星期日" selected={week? `${week==='星期日'? 'selected':''}`:''}>星期日</option>
                </select>

                <div>時段</div>
                <select name="starttime" onChange={(e)=>{setStarttime(e.target.value)}}>
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
                <select name="endtime" onChange={(e)=>{setEndtime(e.target.value)}}>
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

                <div>球類</div>
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
                <Link to={`/gosport/user/myteam/basic`}>取消</Link>
                <button onClick={updateBasic}>儲存</button>
            </div>
        </>
    )
}