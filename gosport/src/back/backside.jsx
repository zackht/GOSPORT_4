import React, { useState } from 'react';
import side from './backside.module.css';
import cside from './createside.module.css';
import group41 from "./icon/Group 41.png";
import aa from './icon/上傳照片.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
const Backside = () => {
    // 搜尋場地
    const [startdate, setstartdate] = useState('');
    const [enddate, setenddate] = useState('');
    const [type, settype] = useState('籃球');
    const [text, settext] = useState('');
    const [list, setlist] = useState([]);
    const search = () => {
        Axios.post("http://localhost:3001/backsidesearch", {
            startdate: startdate,
            enddate: enddate,
            type: type,
            text: text,
        }).then((response) => {
            console.log(response);
            setlist(response.data);
        });
    }
    // 場地編輯畫面
    const [editlist, seteditlist] = useState([]);
    const [div1, setdiv1] = useState(false);
    const [div2, setdiv2] = useState(false);
    const edit = (sideid) => {
        console.log(sideid);
        setdiv1(!div1)
        console.log(sideid);
        Axios.post("http://localhost:3001/backsideedit", {
            sideid: sideid,
        }).then((response) => {
            console.log(response);
            seteditlist(response.data);
            setnumber1(response.data[0].amount);
        });
    }
    const [time, settime] = useState([
        '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '0:00'
    ])
    const [number1, setnumber1] = useState(0);
    const [number2, setnumber2] = useState(0);
    const [sideurl, setsideurl] = useState('');
    const add2 = () => {
        setnumber2(number2 + 1);
    }
    const dda2 = () => {
        if (number2 > 0) {
            setnumber2(number2 - 1);
        }
    }
    // 上傳同時顯示圖片==========================
    const [localUrl,setlocalUrl]=useState('');
    const getimg=(e)=>{
        setimg(e);
        console.log(e);
        const lurl = URL.createObjectURL(e)
        setlocalUrl(lurl);
    }
    // =========================================
    // 新增場地到資料庫==========================
    const [img,setimg]=useState();
    const [usidename,setusidename]=useState('');
    const [utype,setutype]=useState('羽球');
    const [upark,setupark]=useState(false);
    const [ubath,setubath]=useState(false);
    const [ubaulk,setubaulk]=useState(false);
    const [uweekstarttime,setuweekstarttime]=useState(false);
    const [uweekendtime,setuweekendtime]=useState(false);
    const [uholidaystarttime,setuholidaystarttime]=useState(false);
    const [uholidayendtime,setuholidayendtime]=useState(false);
    const [upeakstarttime,setupeakstarttime]=useState(false);
    const [upeakendtime,setupeakendtime]=useState(false);
    const [upeakfee,setupeakfee]=useState(false);
    const [uoffpeakstarttime,setuoffpeakstarttime]=useState(false);
    const [uoffpeakendtime,setuoffpeakendtime]=useState(false);
    const [uoffpeakfee,setuoffpeakfee]=useState(false);
    const [ureservedate,setureservedate]=useState(false);
    const [utext,setutext]=useState('');
    // const [uamount,setuamount]=useState('');
    const [utel,setutel]=useState('');
    const [uaddress,setuaddress]=useState('');
    const [ugoolemapurl,setugoolemapurl]=useState('');

    const save =()=>{ 
        let c = new Date();
        let y = c.getFullYear();
        let m = c.getMonth() + 1;
        let d = c.getDate();
        let today=`${y}-${m = (m < 10 ? '0' : '') + m}-${d = (d < 10 ? '0' : '') + d}`;
        const data = new FormData();
        data.append('image',img);
        data.append('usidename',usidename);
        data.append('utype',utype);
        data.append('upark',upark);
        data.append('ubath',ubath);
        data.append('ubaulk',ubaulk);
        data.append('uweekstarttime',uweekstarttime);
        data.append('uweekendtime',uweekendtime);
        data.append('uholidaystarttime',uholidaystarttime);
        data.append('uholidayendtime',uholidayendtime);
        data.append('upeakstarttime',upeakstarttime);
        data.append('upeakendtime',upeakendtime);
        data.append('upeakfee',upeakfee);
        data.append('uoffpeakstarttime',uoffpeakstarttime);
        data.append('uoffpeakendtime',uoffpeakendtime);
        data.append('uoffpeakfee',uoffpeakfee);
        data.append('ureservedate',ureservedate);
        data.append('utext',utext);
        data.append('uamount',number2);
        data.append('utel',utel);
        data.append('uaddress',uaddress);
        data.append('ugoolemapurl',ugoolemapurl);
        data.append('today',today);
        Axios.post("http://localhost:3001/backnewside", data, {
                headers: { 'Content-Type': 'multipart/form-data' },
            }).then((response) => {
                setdiv2(!div2);
                alert("更新成功");
            });
    }
    // =========================================
    const sidedelete =(e)=>{
        Axios.post("http://localhost:3001/backsidedelete", {
            sideid: e,
        }).then((response) => {
            search();
            alert('刪除成功');
        });
    }
    return (
        <React.Fragment>
            <div class={`container-fluid ${side.bdiv1}`}>
                <div class={`row ${side.bdiv2}`}>
                    {/* 搜尋欄 */}
                    <div class={`col-md-3 d-flex flex-column ${side.boxshadow} ${side.bdiv3}`}>
                        <div action="" class={`d-flex flex-column ${side.bdiv4}`}>
                            <span class={side.span}>日期區間</span>
                            <div class={`d-flex flex-column ${side.bdiv5}`}>
                                <div class={`${side.dateimg} ${side.font}`}>
                                    <input type="date" class={`${side.bdiv6} ${side.date}`} onChange={(e) => { setstartdate(e.target.value) }} />
                                    <img class={side.bselectedDate} src={group41} alt="" />
                                </div>
                                <div class={`${side.dateimg} ${side.bdiv7}`}>
                                    <input type="date" class={`${side.font} ${side.bdiv8} ${side.date}`} onChange={(e) => { setenddate(e.target.value) }} />
                                    <img class={side.bselectedDate} src={group41} alt="" />
                                </div>
                                <span class={side.span}>球類</span>
                                <div class={`${side.selectimg} ${side.font} ${side.bdiv9}`}>
                                    <select name="" id="" class={`${side.bdiv10} ${side.aselect}`} onChange={(e) => { settype(e.target.value) }} >
                                        <option value="籃球">籃球</option>
                                        <option value="羽球">羽球</option>
                                        <option value="桌球">桌球</option>
                                    </select>
                                    <img class="" src={group41} alt="" />
                                </div>
                            </div>
                            <div class={side.bdiv11}>
                                <span class={side.span}>關鍵字</span>
                                <div>
                                    <input type="text" class={`${side.ccc} ${side.bdiv12}`} placeholder="請輸入關鍵字" onChange={(e) => { settext(`%${e.target.value}%`) }} />
                                </div>
                            </div>
                            <div class="mt-auto ">
                                <input type="submit" value="搜尋" class={side.submit} onClick={search} />
                            </div>
                        </div>
                    </div>
                    {/* 顯示欄 */}
                    <div class={`col-md ${side.boxshadow} ${side.bdiv13}`}>
                        <div class={`row ${side.bdiv14}`}>
                            <div class={`col-2 ${side.font1} ${side.bdiv15}`}>申請日期</div>
                            <div class={`col-1 ${side.font1} ${side.bdiv15}`}>球類</div>
                            <div class={`col-6 ${side.font1} ${side.bdiv15}`}>場館名稱</div>
                            <div class={`col-3 ${side.font1} ${side.bdiv15}`}></div>
                        </div>
                        <div class={`row ${side.bdiv16}`}>
                            <div class={`col d-flex flex-column ${side.bdiv15}`}>
                                {/* <!-- 搜尋結果 --> */}
                                {list.map((val, key) => {
                                    let c = new Date(val.addday);
                                    let y = c.getFullYear();
                                    let m = c.getMonth();
                                    let d = c.getDate();
                                    return (
                                        <div class={`d-flex font2 ${side.bdiv17}`} key={key}>
                                            <div class={`col-2 ${side.bdiv15}`}>{`${y}/${m + 1}/${d}`}</div>
                                            <div class={`col-1 ${side.bdiv15}`}>{val.sidetype}</div>
                                            <div class={`col-6 ${side.bdiv15}`}>{val.sidename}</div>
                                            <div class={`col-3 d-flex justify-content-center ${side.bdiv15}`}>
                                                <div class={`${side.button1} ${side.bdiv18}`} onClick={(e) => { edit(val.sideid) }} >編輯</div>
                                                <div class={side.button1} onClick={()=>{sidedelete(val.sideid)}}>刪除</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div class={`mt-auto d-flex justify-content-end`}>
                            <div class={side.button2} onClick={()=>{setdiv2(true)}}>新增</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 彈出編輯室窗 */}
            {editlist.map((val, key) => {
                const add = () => {
                    setnumber1(number1 + 1);
                }
                const dda = () => {
                    if (number1 > 0) {
                        setnumber1(number1 - 1);
                    }
                }
                let c = new Date(val.reservedate);
                let y = c.getFullYear();
                let m = c.getMonth() + 1;
                let d = c.getDate();
                var u8Arr = new Uint8Array(val.sideimg.data);
                    var blob = new Blob([u8Arr], { type: "image/jpeg" });
                    var fr = new FileReader;
                    fr.onload = function () {
                        setsideurl(fr.result);
                    };
                    fr.readAsDataURL(blob);
                return (
                    <React.Fragment>
                        <div className={`${side.div55}`} style={{ display: (div1) ? 'block' : 'none' }}>
                            <div>
                                <div class={`container ${cside.div0}`}>
                                    <div class={`row ${cside.div1}`}>
                                        <div class={`d-flex ${cside.padding}`}>
                                            <div class={cside.div2}>
                                                <img src={sideurl} alt="" />
                                            </div>
                                        </div>
                                        <div class={`col d-flex flex-column ${cside.padding}`}>
                                            <div>
                                                <span class={cside.font}>場館名稱</span>
                                                <div>
                                                    <input type="text" class={`${cside.div3} ${cside.font2}`} defaultValue={val.sidename} />
                                                </div>
                                            </div>
                                            <div class={cside.div24}>
                                                <span class={cside.font}>球類</span>
                                                <div class={cside.div5}>
                                                    <select name="" id="" class={`${cside.font2} ${cside.div4}`} defaultValue={val.sidetype}>
                                                        <option value="羽球">羽球</option>
                                                        <option value="桌球">桌球</option>
                                                        <option value="籃球">籃球</option>
                                                    </select>
                                                    <img class={cside.div6} src={group41} alt="" />
                                                </div>
                                            </div>
                                            <div class={cside.div24}>
                                                <span class={cside.font}>設施</span>
                                                <div>
                                                    <input type="checkbox" id="check1" class={cside.div8} checked={val.park === 'true' ? 'checked' : ''} />
                                                    <label for="check1" class={`${cside.div7} ${cside.font2}`} >停車場</label>
                                                    <input type="checkbox" id="check2" checked={val.bath === 'true' ? 'checked' : ''} />
                                                    <label for="check2" class={`${cside.div7} ${cside.font2}`}>淋浴設備</label>
                                                    <input type="checkbox" id="check3" checked={val.baulk === 'true' ? 'checked' : ''} />
                                                    <label for="check3" class={cside.font2}>無障礙環境</label>
                                                </div>
                                            </div>
                                            <div class={cside.div24}>
                                                <span class={cside.font}>營業時間</span>
                                                <div class={`d-flex ${cside.div8}`}>
                                                    <div class={`${cside.font2} ${cside.div12}`}>平日</div>
                                                    <div class={`d-flex`}>
                                                        <div class={cside.div11}>
                                                            <select name="" id="" class={`${cside.font2} ${cside.div9}`} defaultValue={val.weekstarttime}>
                                                                {time.map((val, key) => {
                                                                    return (<option key={key} value={key + 1}>{val}</option>);
                                                                })}
                                                            </select>
                                                            <img class={cside.div10} src={group41} alt="" />
                                                        </div>
                                                        <div class={`${cside.font2} ${cside.div13}`}>至</div>
                                                        <div class={cside.div11}>
                                                            <select name="" id="" class={`${cside.font2} ${cside.div9}`} defaultValue={val.weekendtime}>
                                                                {time.map((val, key) => {
                                                                    return (<option key={key} value={key + 1}>{val}</option>);
                                                                })}
                                                            </select>
                                                            <img class={cside.div10} src={group41} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class={`d-flex ${cside.div14}`}>
                                                    <div class={`${cside.font2} ${cside.div12}`}>假日</div>
                                                    <div class={`d-flex`}>
                                                        <div class={cside.div11}>
                                                            <select name="" id="" class={`${cside.font2} ${cside.div9}`} defaultValue={val.holidaystarttime}>
                                                                {time.map((val, key) => {
                                                                    return (<option key={key} value={key + 1}>{val}</option>);
                                                                })}
                                                            </select>
                                                            <img class={cside.div10} src={group41} alt="" />
                                                        </div>
                                                        <div class={`${cside.font2} ${cside.div13}`}>至</div>
                                                        <div class={cside.div11}>
                                                            <select name="" id="" class={`${cside.font2} ${cside.div9}`} defaultValue={val.holidayendtime}>
                                                                {time.map((val, key) => {
                                                                    return (<option key={key} value={key + 1}>{val}</option>);
                                                                })}
                                                            </select>
                                                            <img class={cside.div10} src={group41} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class={cside.div24}>
                                                <span class={cside.font}>租期</span>
                                                <div>
                                                    <input type="checkbox" id="check11" class={cside.div8}  />
                                                    <label for="check11" class={`${cside.div7} ${cside.font2}`} >日租</label>
                                                    <input type="checkbox" id="check22" />
                                                    <label for="check22" class={`${cside.div7} ${cside.font2}`} >月租</label>
                                                    <input type="checkbox" id="check33"  />
                                                    <label for="check33" class={cside.font2} >季租</label>
                                                </div>
                                            </div>
                                            <div class={cside.div24}>
                                                <span class={cside.font}>可預定日期至</span>
                                                <div class={cside.div19}>
                                                    <input type="date" class={cside.div18} defaultValue={`${y}-${m = (m < 10 ? '0' : '') + m}-${d = (d < 10 ? '0' : '') + d}`} />
                                                    <img class={cside.div20} src={group41} alt="" />
                                                </div>
                                            </div>
                                            <div class={`${cside.div24} d-flex`}>
                                                <div>
                                                    <span class={cside.font}>尖峰時段</span>
                                                    <span class={`${cside.font} ${cside.div28}`}>尖峰時段費用</span>
                                                    <div class={`d-flex ${cside.div21}`}>
                                                        <div class={`d-flex flex-wrap ${cside.div27}`}>
                                                            <div class={cside.div11}>
                                                                <select name="" id="" class={`${cside.font2} ${cside.div9}`} defaultValue={val.holidaystarttime}>
                                                                    {time.map((val, key) => {
                                                                        return (<option key={key} value={key + 1}>{val}</option>);
                                                                    })}
                                                                </select>
                                                                <img class={cside.div10} src={group41} alt="" />
                                                            </div>
                                                            <div class={`${cside.font2} ${cside.div13}`}>至</div>
                                                            <div class={cside.div11}>
                                                                <select name="" id="" class={`${cside.font2} ${cside.div9}`} defaultValue={val.holidayendtime}>
                                                                    {time.map((val, key) => {
                                                                        return (<option key={key} value={key + 1}>{val}</option>);
                                                                    })}
                                                                </select>
                                                                <img class={cside.div10} src={group41} alt="" />
                                                            </div>
                                                            <div>
                                                                <input type="number" class={`${cside.number} ${cside.einputnumber}`}
                                                                    onkeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))" defaultValue={val.peakfee} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class={cside.div24}>
                                                <div>
                                                    <span class={cside.font}>離峰時段</span>
                                                    <span class={`${cside.font} ${cside.div28}`}>離峰時段費用</span>
                                                    <div class={`d-flex ${cside.div21}`}>
                                                        <div class={`d-flex flex-wrap ${cside.div22}`}>
                                                            <div class={cside.div11}>
                                                                <select name="" id="" class={`${cside.font2} ${cside.div9}`} defaultValue={val.holidaystarttime}>
                                                                    {time.map((val, key) => {
                                                                        return (<option key={key} value={key + 1}>{val}</option>);
                                                                    })}
                                                                </select>
                                                                <img class={cside.div10} src={group41} alt="" />
                                                            </div>
                                                            <div class={`${cside.font2} ${cside.div13}`}>至</div>
                                                            <div class={cside.div11}>
                                                                <select name="" id="" class={`${cside.font2} ${cside.div9}`} defaultValue={val.holidayendtime}>
                                                                    {time.map((val, key) => {
                                                                        return (<option key={key} value={key + 1}>{val}</option>);
                                                                    })}
                                                                </select>
                                                                <img class={cside.div10} src={group41} alt="" />
                                                            </div>
                                                            <div>
                                                                <input type="number" class={`${cside.number} ${cside.einputnumber}`}
                                                                    onkeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))" defaultValue={val.offpeakfee} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class={cside.div24}>
                                                <span class={cside.font}>數量上限</span>
                                                <div class={`d-flex ${cside.divnn}`}>
                                                    <div class={cside.numbutton1}>
                                                        <div class={cside.add} onClick={dda}>-</div>
                                                    </div>
                                                    <input type={cside.number} class={`${cside.number2} ${cside.einputnumber}`}
                                                        onkeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))" key={number1} defaultValue={number1} />
                                                    <div class={cside.numbutton2}>
                                                        <div class={cside.minus} onClick={add}>+</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class={cside.div24}>
                                                <span class={cside.font}>電話</span>
                                                <div>
                                                    <input type="text" name="" id="" class={cside.div15} defaultValue={val.tel} />
                                                </div>
                                            </div>
                                            <div class={cside.div24}>
                                                <span class={cside.font}>描述</span>
                                                <div>
                                                    <textarea name="" id="" cols="30" rows="10" class={cside.div16} defaultValue={val.text}>

                                                    </textarea>
                                                </div>
                                            </div>
                                            <div class={cside.div24}>
                                                <span class={cside.font}>地址</span>
                                                <div>
                                                    <input type="text" class={cside.div17} defaultValue={val.adress} />
                                                </div>
                                            </div>
                                            <div class={cside.div24}>
                                                <span class={cside.font}>goole地圖網址</span>
                                                <div>
                                                    <input type="text" class={cside.div17} defaultValue={val.goolemapurl} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class={`row d-flex justify-content-around ${cside.div23}`}>
                                        <div> <input type="button" value="取消" class={cside.div25} onClick={() => { setdiv1(!div1) }} /></div>
                                        <div> <input type="submit" value="提交" class={cside.div26} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                );
            })}
            {/* 新增場地 */}
            <div className={`${side.div55}`} style={{ display: (div2) ? 'block' : 'none' }}>
                <div>
                    <div class={`container ${cside.div0}`}>
                        <div class={`row ${cside.div1}`}>
                            <div class={`d-flex ${cside.padding}`}>
                                <label htmlFor="file" class={cside.div2}>
                                    <input type="file" id='file'  className={cside.inputfile} onChange={(e)=>{getimg(e.target.files[0])}}/>
                                    {localUrl===''?<img src={aa} alt="" />:<img src={localUrl} alt="" className={cside.filebig}/>}
                                    
                                </label>
                            </div>
                            <div class={`col d-flex flex-column ${cside.padding}`}>
                                <div>
                                    <span class={cside.font}>場館名稱</span>
                                    <div>
                                        <input type="text" class={`${cside.div3} ${cside.font2}`} onChange={(e)=>{setusidename(e.target.value)}}/>
                                    </div>
                                </div>
                                <div class={cside.div24}>
                                    <span class={cside.font}>球類</span>
                                    <div class={cside.div5}>
                                        <select name="" id="" class={`${cside.font2} ${cside.div4}`} onChange={(e)=>{setutype(e.target.value)}}>
                                            <option value="羽球">羽球</option>
                                            <option value="桌球">桌球</option>
                                            <option value="籃球">籃球</option>
                                        </select>
                                        <img class={cside.div6} src={group41} alt="" />
                                    </div>
                                </div>
                                <div class={cside.div24}>
                                    <span class={cside.font}>設施</span>
                                    <div>
                                        <input type="checkbox" id="check1" class={cside.div8} onChange={(e)=>setupark(!upark)}/>
                                        <label for="check1" class={`${cside.div7} ${cside.font2}`} >停車場</label>
                                        <input type="checkbox" id="check2" onChange={(e)=>setubath(!ubath)}/>
                                        <label for="check2" class={`${cside.div7} ${cside.font2}`}>淋浴設備</label>
                                        <input type="checkbox" id="check3" onChange={(e)=>setubaulk(!ubaulk)}/>
                                        <label for="check3" class={cside.font2}>無障礙環境</label>
                                    </div>
                                </div>
                                <div class={cside.div24}>
                                    <span class={cside.font}>營業時間</span>
                                    <div class={`d-flex ${cside.div8}`}>
                                        <div class={`${cside.font2} ${cside.div12}`}>平日</div>
                                        <div class={`d-flex`}>
                                            <div class={cside.div11}>
                                                <select name="" id="" class={`${cside.font2} ${cside.div9}`} onChange={(e)=>{setuweekstarttime(e.target.value)}}>
                                                    {time.map((val, key) => {
                                                        return (<option key={key} value={key + 1}>{val}</option>);
                                                    })}
                                                </select>
                                                <img class={cside.div10} src={group41} alt="" />
                                            </div>
                                            <div class={`${cside.font2} ${cside.div13}`}>至</div>
                                            <div class={cside.div11}>
                                                <select name="" id="" class={`${cside.font2} ${cside.div9}`} onChange={(e)=>{setuweekendtime(e.target.value)}}>
                                                    {time.map((val, key) => {
                                                        return (<option key={key} value={key + 1}>{val}</option>);
                                                    })}
                                                </select>
                                                <img class={cside.div10} src={group41} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class={`d-flex ${cside.div14}`}>
                                        <div class={`${cside.font2} ${cside.div12}`}>假日</div>
                                        <div class={`d-flex`}>
                                            <div class={cside.div11}>
                                                <select name="" id="" class={`${cside.font2} ${cside.div9}`} onChange={(e)=>{setuholidaystarttime(e.target.value)}}>
                                                    {time.map((val, key) => {
                                                        return (<option key={key} value={key + 1}>{val}</option>);
                                                    })}
                                                </select>
                                                <img class={cside.div10} src={group41} alt="" />
                                            </div>
                                            <div class={`${cside.font2} ${cside.div13}`}>至</div>
                                            <div class={cside.div11}>
                                                <select name="" id="" class={`${cside.font2} ${cside.div9}`} onChange={(e)=>{setuholidayendtime(e.target.value)}}>
                                                    {time.map((val, key) => {
                                                        return (<option key={key} value={key + 1}>{val}</option>);
                                                    })}
                                                </select>
                                                <img class={cside.div10} src={group41} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class={cside.div24}>
                                    <span class={cside.font}>租期</span>
                                    <div>
                                        <input type="checkbox" id="dcheck1" class={cside.div8}/>
                                        <label for="dcheck1" class={`${cside.div7} ${cside.font2}`} >日租</label>
                                        <input type="checkbox" id="dcheck2"/>
                                        <label for="dcheck2" class={`${cside.div7} ${cside.font2}`} >月租</label>
                                        <input type="checkbox" id="dcheck3"/>
                                        <label for="dcheck3" class={cside.font2} >季租</label>
                                    </div>
                                </div>
                                <div class={cside.div24}>
                                    <span class={cside.font}>可預定日期至</span>
                                    <div class={cside.div19}>
                                        <input type="date" class={cside.div18} onChange={(e)=>{setureservedate(e.target.value)}}/>
                                        <img class={cside.div20} src={group41} alt="" />
                                    </div>
                                </div>
                                <div class={`${cside.div24} d-flex`}>
                                    <div>
                                        <span class={cside.font}>尖峰時段</span>
                                        <span class={`${cside.font} ${cside.div28}`}>尖峰時段費用</span>
                                        <div class={`d-flex ${cside.div21}`}>
                                            <div class={`d-flex flex-wrap ${cside.div27}`}>
                                                <div class={cside.div11}>
                                                    <select name="" id="" class={`${cside.font2} ${cside.div9}`} onChange={(e)=>{setupeakstarttime(e.target.value)}}>
                                                        {time.map((val, key) => {
                                                            return (<option key={key} value={key + 1}>{val}</option>);
                                                        })}
                                                    </select>
                                                    <img class={cside.div10} src={group41} alt="" />
                                                </div>
                                                <div class={`${cside.font2} ${cside.div13}`}>至</div>
                                                <div class={cside.div11}>
                                                    <select name="" id="" class={`${cside.font2} ${cside.div9}`} onChange={(e)=>{setupeakendtime(e.target.value)}}>
                                                        {time.map((val, key) => {
                                                            return (<option key={key} value={key + 1}>{val}</option>);
                                                        })}
                                                    </select>
                                                    <img class={cside.div10} src={group41} alt="" />
                                                </div>
                                                <div>
                                                    <input type="number" class={`${cside.number} ${cside.einputnumber}`}
                                                        onkeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"  onChange={(e)=>{setupeakfee(e.target.value)}}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class={cside.div24}>
                                    <div>
                                        <span class={cside.font}>離峰時段</span>
                                        <span class={`${cside.font} ${cside.div28}`}>離峰時段費用</span>
                                        <div class={`d-flex ${cside.div21}`}>
                                            <div class={`d-flex flex-wrap ${cside.div22}`}>
                                                <div class={cside.div11}>
                                                    <select name="" id="" class={`${cside.font2} ${cside.div9}`} onChange={(e)=>{setuoffpeakstarttime(e.target.value)}}>
                                                        {time.map((val, key) => {
                                                            return (<option key={key} value={key + 1}>{val}</option>);
                                                        })}
                                                    </select>
                                                    <img class={cside.div10} src={group41} alt="" />
                                                </div>
                                                <div class={`${cside.font2} ${cside.div13}`}>至</div>
                                                <div class={cside.div11}>
                                                    <select name="" id="" class={`${cside.font2} ${cside.div9}`} onChange={(e)=>{setuoffpeakendtime(e.target.value)}}>
                                                        {time.map((val, key) => {
                                                            return (<option key={key} value={key + 1}>{val}</option>);
                                                        })}
                                                    </select>
                                                    <img class={cside.div10} src={group41} alt="" />
                                                </div>
                                                <div>
                                                    <input type="number" class={`${cside.number} ${cside.einputnumber}`}
                                                        onkeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))" onChange={(e)=>{setuoffpeakfee(e.target.value)}}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class={cside.div24}>
                                    <span class={cside.font}>數量上限</span>
                                    <div class={`d-flex ${cside.divnn}`}>
                                        <div class={cside.numbutton1}>
                                            <div class={cside.add} onClick={dda2}>-</div>
                                        </div>
                                        <input type={cside.number} class={`${cside.number2} ${cside.einputnumber}`}
                                            onkeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))" key={number2} defaultValue={number2} onChange={(e)=>{setnumber2(e.target.value)}}/>
                                        <div class={cside.numbutton2}>
                                            <div class={cside.minus} onClick={add2}>+</div>
                                        </div>
                                    </div>
                                </div>
                                <div class={cside.div24}>
                                    <span class={cside.font}>電話</span>
                                    <div>
                                        <input type="text" name="" id="" class={cside.div15} onChange={(e)=>{setutel(e.target.value)}}/>
                                    </div>
                                </div>
                                <div class={cside.div24}>
                                    <span class={cside.font}>描述</span>
                                    <div>
                                        <textarea name="" id="" cols="30" rows="10" class={cside.div16} onChange={(e)=>{setutext(e.target.value)}}>

                                        </textarea>
                                    </div>
                                </div>
                                <div class={cside.div24}>
                                    <span class={cside.font}>地址</span>
                                    <div>
                                        <input type="text" class={cside.div17} onChange={(e)=>{setuaddress(e.target.value)}}/>
                                    </div>
                                </div>
                                <div class={cside.div24}>
                                    <span class={cside.font}>goole地圖網址</span>
                                    <div>
                                        <input type="text" class={cside.div17} onChange={(e)=>{setugoolemapurl(e.target.value)}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class={`row d-flex justify-content-around ${cside.div23}`}>
                            <div> <input type="button" value="取消" class={cside.div25} onClick={() => { setdiv2(!div2) }} /></div>
                            <div> <input type="submit" value="提交" class={cside.div26} onClick={save}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Backside;
