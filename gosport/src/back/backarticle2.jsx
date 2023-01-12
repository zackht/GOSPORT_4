import React, { useState } from 'react';
import ba from './backarticle.module.css';
import Group41 from './icon/Group 41.png';
import Axios from "axios";
import backteam from './backarticleteam.module.css';
import backrent from './後臺轉租.module.css';

import a from "./icon/上傳照片.svg";
import group41 from "./icon/Group 41.png";
import { useRef } from 'react';
const Backarticle2 = () => {
    const [zerodaseach, setzerodaseach] = useState('block');
    const [teamseach, setteamseach] = useState('none');
    const [rentseach, setrentseach] = useState('none');
    const [zeroda1, setzeroda1] = useState(true);
    const [team1, setteam1] = useState(false);
    const [rent1, setrent1] = useState(false);
    const team = () => {
        setzerodaseach('none');
        setrentseach('none');
        setteamseach('block');
        setzeroda1(false);
        setteam1(true);
        setrent1(false);
    }
    const rent = () => {
        setzerodaseach('none');
        setteamseach('none');
        setrentseach('block');
        setzeroda1(false);
        setteam1(false);
        setrent1(true);
    }
    const zeroda = () => {
        setrentseach('none');
        setteamseach('none');
        setzerodaseach('block');
        setzeroda1(true);
        setteam1(false);
        setrent1(false);
    }
    // 零打搜尋
    const [starttime1, setstarttime1] = useState('');
    const [endtime1, setendtime1] = useState('');
    const [ball1, setball1] = useState('');
    const [zerodalist, setzerodalist] = useState([]);
    const [zerodainput, setzerodainput] = useState('');
    const aaa = () => {
        console.log(zerodainput);
        Axios.post("http://localhost:3001/zeroda", {
            starttime1: starttime1,
            endtime1: endtime1,
            ball1: ball1,
            zerodainput: zerodainput,
        }).then((response) => {
            // console.log(response);
            setzerodalist(response.data);
        });
    }
    // 零打編輯儲存
    const [zerodafieldname, setzerodafieldname] = useState('');
    const [zerodacounty, setzerodacounty] = useState('');
    const [zerodaarea, setzerodaarea] = useState('');
    const [zerodaaddress, setzerodaaddress] = useState('');
    const [zerodadate, setzerodadate] = useState('');
    const [zerodastarttime, setzerodastarttime] = useState('');
    const [zerodaendtime, setzerodaendtime] = useState('');
    const [zerodalevel, setzerodalevel] = useState('');
    const [zerodacost, setzerodacost] = useState('');
    const [zerodacontent, setzerodacontent] = useState('');
    const [articleid_zeroda, setarticleid_zeroda] = useState('');
    const zerodaupdate = () => {
        Axios.post("http://localhost:3001/zerodaupdate", {
            zerodafieldname: zerodafieldname,
            zerodacounty: zerodacounty,
            zerodaarea: zerodaarea,
            zerodaaddress: zerodaaddress,
            zerodadate: zerodadate,
            zerodastarttime: zerodastarttime,
            zerodaendtime: zerodaendtime,
            zerodalevel: zerodalevel,
            zerodacost: zerodacost,
            zerodacontent: zerodacontent,
            articleid_zeroda: articleid_zeroda,
            number1: number1,
        }).then((response) => {
            setdiv1(!div1);
            alert("更新成功");
        });
    }
    // 零打刪除
    const zerodadelete = (key, e) => {
        zerodalist.splice(key, 1);
        setzerodalist([]);
        Axios.post("http://localhost:3001/zerodadelete", {
            articleid_zeroda: e,
        }).then((response) => {
            alert("刪除成功");
            setzerodalist(zerodalist);
        });
    }
    // 球隊刪除
    const teamdelete = (key, e) => {
        teamlist.splice(key, 1);
        setteamlist([]);
        Axios.post("http://localhost:3001/teamdelete", {
            teameventid: e,
        }).then((response) => {
            alert("刪除成功");
            setteamlist(teamlist);
        });
    }
    // 轉租刪除
    const rentdelete = (key, e) => {
        rentlist.splice(key, 1);
        setrentlist([]);
        Axios.post("http://localhost:3001/rentdelete", {
            articleid_sublet: e,
        }).then((response) => {
            alert("刪除成功");
            setrentlist(rentlist);
        });
    }
    // 球隊搜尋
    const [teamstartday, setteamstartday] = useState('');
    const [teamendday, setteamendday] = useState('');
    const [teamtype, setteamtype] = useState('運動');
    const [location, setlocation] = useState('');
    const [teamlist, setteamlist] = useState([]);
    const bbb = () => {
        setteamlist([]);
        Axios.post("http://localhost:3001/team", {
            teamstartday: teamstartday,
            teamendday: teamendday,
            teamtype: teamtype,
            location: location,
        }).then((response) => {
            // console.log(response);
            setteamlist(response.data);
        });
    }
    // 轉租搜尋 
    const [renttime, setrenttime] = useState('');
    const [renttime1, setrenttime1] = useState('');
    const [rentselectcounty, setrentselectcounty] = useState('台中市');
    const [rentselectarea, setrentselectarea] = useState('中區');
    const [rentlist, setrentlist] = useState([]);
    const [fieldname,setfieldname]=useState('');
    const ccc = () => {
        setrentlist([]);
        Axios.post("http://localhost:3001/rent", {
            renttime: renttime,
            renttime1: renttime1,
            rentselectcounty: rentselectcounty,
            rentselectarea: rentselectarea,
            fieldname:fieldname,
        }).then((response) => {
            console.log(response);
            setrentlist(response.data);
        });
    }
    const ddd1 = () => {
        setdiv1(!div1);
        setzerodaedit([]);
        // console.log(div1);
    }
    // 球隊取消
    const [div2, setdiv2] = useState(false);
    const ddd2 = () => {
        setdiv2(!div2);
        setteamedit([]);
    }
    // 零打編輯畫面
    var [div1, setdiv1] = useState(false);
    var [zerodaedit, setzerodaedit] = useState([]);
    var ddd = (e) => {
        setdiv1(!div1);
        console.log(e);
        Axios.post("http://localhost:3001/zerodada", {
            articleid_zeroda: e,
        }).then((response) => {
            // console.log(response);
            let c = new Date(response.data[0].date);
            let y = c.getFullYear();
            let m = c.getMonth();
            let d = c.getDate();
            setzerodaedit(response.data);
            setnumber1(response.data[0].number);
            setzerodafieldname(response.data[0].fieldname);
            setzerodacounty(response.data[0].county);
            setzerodaarea(response.data[0].area);
            setzerodaaddress(response.data[0].address);
            setzerodadate(`${y}-${m + 1}-${d}`);
            setzerodastarttime(response.data[0].starttime);
            setzerodaendtime(response.data[0].endtime);
            setzerodalevel(response.data[0].level);
            setzerodacost(response.data[0].cost);
            setzerodacontent(response.data[0].content);
            setarticleid_zeroda(response.data[0].articleid_zeroda);
        });
    }
    // 球隊編輯畫面
    var [teamedit, setteamedit] = useState([]);
    const [teameventid, setteameventid] = useState('');
    const ttt = (e) => {
        setdiv2(!div2);
        console.log(e);
        setteameventid(e);
        Axios.post("http://localhost:3001/teamedit", {
            teameventid: e,
        }).then((response) => {
            console.log(response);
            setteamedit(response.data);
        });
    }
    // 球隊儲存
    const [teamstartdate, setteamstartdate] = useState('');
    const [teamenddate, setteamenddate] = useState('');
    const [teamstarttime, setteamstarttime] = useState('');
    const [teamendtime, setteamendtime] = useState('');
    const [teamtype2, setteamtype2] = useState('');
    const [teamtitle, setteamtitle] = useState('');
    const [teamlocation, setteamlocation] = useState('');
    const [teampay, setteampay] = useState('');
    const [teamtext, setteamtext] = useState('');
    const [teamfile, setteamfile] = useState();
    const ttt2 = () => {
        const teamData = new FormData();
        console.log(teamfile);
        teamData.append('teamfile',teamfile);
        teamData.append('teamstartdate',teamstartdate);
        teamData.append('teamenddate',teamenddate);
        teamData.append('teamstarttime',teamstarttime);
        teamData.append('teamendtime',teamendtime);
        teamData.append('teamtype2',teamtype2);
        teamData.append('teamtitle',teamtitle);
        teamData.append('teamlocation',teamlocation);
        teamData.append('teampay',teampay);
        teamData.append('teamtext',teamtext);
        teamData.append('teameventid',teameventid);
        Axios.post("http://localhost:3001/teamupdate",teamData,{
            headers: {'Content-Type': 'multipart/form-data'},
        }).then((response) => {
            setdiv2(!div2);
            alert("更新成功");
        });
    }
    const [teamimg, setteamimg] = useState();
    const ttt3 =(e)=>{
        console.log(e[0]);
    }
    // 零打搜尋結果
    let title = null;
    let content = null;
    if (zeroda1) {
        title =
            <div class={`d-flex ${ba.div37}`}>
                <div class={`col-2 ${ba.font1} ${ba.div38}`}>發布日期</div>
                <div class={`col-2 ${ba.font1} ${ba.div38}`}>類型</div>
                <div class={`col-5 ${ba.font1} ${ba.div38}`}>文章內容</div>
                <div class={`col-3 ${ba.font1} ${ba.div38}`}></div>
            </div>
        content =
            <div className={`${ba.div54}`}>
                {zerodalist.map((val, key) => {
                    let c = new Date(val.date);
                    let y = c.getFullYear();
                    let m = c.getMonth();
                    let d = c.getDate();
                    return (
                        <React.Fragment>
                            <div class={` ${ba.div39}`} key={key}>
                                <div class={`col d-flex flex-column ${ba.div40}`}>
                                    {/* <!-- 搜尋結果 --> */}
                                    <div class={`d-flex ${ba.font2} ${ba.div41}`}>
                                        <div class={`col-2 ${ba.div38}`}>{`${y}/${m + 1}/${d}`}</div>
                                        <div class={`col-2 ${ba.div38}`}>{val.ballgames}</div>
                                        <div class={`col-5 ${ba.div38}`}>{val.content}</div>
                                        <div class={`col-3 d-flex justify-content-center ${ba.div38}`}>
                                            <div class={`${ba.button1} ${ba.div42}`} onClick={() => { ddd(val.articleid_zeroda) }}>編輯</div>
                                            <div class={ba.button1} onClick={() => zerodadelete(key, val.articleid_zeroda)}>刪除</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
        // 球隊搜尋結果
    } else if (team1) {
        title =
            <div class={`d-flex ${ba.div44}`}>
                <div class={`col-2 ${ba.font1} ${ba.div38}`}>開始日期</div>
                <div class={`col-2 ${ba.font1} ${ba.div38}`}>結束日期</div>
                <div class={`col-2 ${ba.font1} ${ba.div38}`}>類型</div>
                <div class={`col-3 ${ba.font1} ${ba.div38}`}>地點</div>
                <div class={`col-3 ${ba.font1} ${ba.div38}`}></div>
            </div>
        content =
            <div className={`${ba.div54}`}>
                {teamlist.map((val, key) => {
                    let c = new Date(val.startdate);
                    let y = c.getFullYear();
                    let m = c.getMonth();
                    let d = c.getDate();
                    let cc = new Date(val.enddate);
                    let yy = cc.getFullYear();
                    let mm = cc.getMonth();
                    let dd = cc.getDate();
                    return (
                        <React.Fragment>
                            <div class={` ${ba.div39}`} key={key}>
                                <div class={`col d-flex flex-column ${ba.div46}`}>
                                    {/* <!-- 搜尋結果 --> */}
                                    <div class={`d-flex ${ba.font2} ${ba.div47}`}>
                                        <div class={`col-2 ${ba.div38}`}>{`${y}-${m + 1}-${d}`}</div>
                                        <div class={`col-2 ${ba.div38}`}>{`${yy}-${mm + 1}-${dd}`}</div>
                                        <div class={`col-2 ${ba.div38}`}>{val.type}</div>
                                        <div class={`col-3 ${ba.div38}`}>{val.location}</div>
                                        <div class={`col-3 d-flex justify-content-center ${ba.div38}`}>
                                            <div class={`${ba.button1} ${ba.div48}`} onClick={() => { ttt(val.teameventid) }}>編輯</div>
                                            <div class={ba.button1} onClick={() => teamdelete(key, val.teameventid)}>刪除</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
        // 轉租搜尋結果
    } else if (rent1) {
        title =
            <div class={`d-flex ${ba.div50}`}>
                <div class={`col-2 ${ba.font1} ${ba.div38}`}>發布日期</div>
                <div class={`col-2 ${ba.font1} ${ba.div38}`}>縣市</div>
                <div class={`col-2 ${ba.font1} ${ba.div38}`}>區</div>
                <div class={`col-3 ${ba.font1} ${ba.div38}`}>場館名稱</div>
                <div class={`col-3 ${ba.font1} ${ba.div38}`}></div>
            </div>
        content =
            <div className={`${ba.div54}`}>
                {rentlist.map((val, key) => {
                    let c = new Date(val.date);
                    let y = c.getFullYear();
                    let m = c.getMonth();
                    let d = c.getDate();
                    return (
                        <React.Fragment>
                            <div class={` ${ba.div39}`} key={key}>
                                <div class={`col d-flex flex-column ${ba.div46}`}>
                                    {/* <!-- 搜尋結果 --> */}
                                    <div class={`d-flex ${ba.font2} ${ba.div52}`}>
                                        <div class={`col-2 ${ba.div38}`}>{`${y}/${m + 1}/${d}`}</div>
                                        <div class={`col-2 ${ba.div38}`}>{val.county}</div>
                                        <div class={`col-2 ${ba.div38}`}>{val.area}</div>
                                        <div class={`col-3 ${ba.div38}`}>{val.fieldname}</div>
                                        <div class={`col-3 d-flex justify-content-center ${ba.div38}`}>
                                            <div class={`${ba.button1} ${ba.div53}`} onClick={() => { rrr(val.articleid_sublet) }}>編輯</div>
                                            <div class={ba.button1} onClick={() => rentdelete(key, val.articleid_sublet)}>刪除</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
    }
    // 判斷select縣市地區
    const [Taichung, setTaichung] = useState([
        "中區", "東區", "西區", "南區", "北區", "西屯區", "南屯區", "北屯區", "豐原區", "大里區", "太平區", "清水區", "沙鹿區", "大甲區", "東勢區", "梧棲區", "烏日區", "神岡區", "大肚區", "大雅區", "后里區", "霧峰區", "潭子區", "龍井區", "外埔區", "和平區", "石岡區", "大安區", "新社區"
    ]);
    const [time,settime] =useState([
        '0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','0:00'
    ])
    const [number1, setnumber1] = useState(0);
    const [number2, setnumber2] = useState(0);
    // 球隊編輯圖片
    const [teamurl, setteamurl] = useState('');
    // const [teamurlwork,setteamurlwork]=useState(false);
    // 球隊活動編輯顯示活動成員頭向
    const [userimg, setuserimg] = useState('');
    // 轉租取消
    const rrr2=()=>{
        setdiv3(!div3);
        setrentedit([]);
    }
    const [div3, setdiv3] = useState(false);
    // 轉租編輯畫面
    const [rentedit, setrentedit] = useState([]);
    const rrr = (articleid_sublet) => {
        setarticleid_sublet(articleid_sublet);
        setdiv3(!div3);
        Axios.post("http://localhost:3001/rentedit", {
            articleid_sublet: articleid_sublet,
        }).then((response) => {
            console.log(response);
            let c = new Date(response.data[0].date);
            let y = c.getFullYear();
            let m = c.getMonth();
            let d = c.getDate();
            setrentedit(response.data);
            setnumber2(response.data[0].amount);
            setrentcontent(response.data[0].content);
            setrentstarttime(response.data[0].starttime);
            setrentendtime(response.data[0].endtime);
            setrentdate(`${y}-${m + 1}-${d}`);
            setrentcounty(response.data[0].county);
            setrentarea(response.data[0].area);
            setrentfieldname(response.data[0].fieldname);
            setrentaddress(response.data[0].address);
            setrentcost(response.data[0].cost);
        });
    }
    // rent編輯 textarea自動伸縮
    const renttext = useRef(0);
    const textarea2=(text)=>{
        setrentcontent(text);
        renttext.current.style.height = 'auto';
        // if(renttext.scrollHeight>=renttext.offsetHeight){
        //     renttext.current.style.height=renttext.scrollHeight+'px';
        // }
    }
    // 轉租儲存
    const [articleid_sublet,setarticleid_sublet]=useState('');
    const [rentcontent,setrentcontent]=useState('');
    const [rentstarttime,setrentstarttime]=useState('');
    const [rentendtime,setrentendtime]=useState('');
    const [rentdate,setrentdate]=useState('');
    const [rentcounty,setrentcounty]=useState('');
    const [rentarea,setrentarea]=useState('');
    const [rentfieldname,setrentfieldname]=useState('');
    const [rentaddress,setrentaddress]=useState('');
    const [rentcost,setrentcost]=useState('');
    const rrr3 = () => {
        console.log(rentdate);
        Axios.post("http://localhost:3001/rentupdate", {
            articleid_sublet:articleid_sublet,
            rentcontent: rentcontent,
            rentstarttime: rentstarttime,
            rentendtime: rentendtime,
            rentdate: rentdate,
            rentcounty: rentcounty,
            rentarea: rentarea,
            rentfieldname: rentfieldname,
            rentaddress: rentaddress,
            rentcost: rentcost,
            number2:number2,
        }).then((response) => {
            setdiv3(!div3);
            alert("更新成功");
        });
    }
    return (
        <React.Fragment>
            <div class={`container-fluid ${ba.div1}`}>
                <div class={`row ${ba.div2}`}>
                    <div class={`col-md-3 d-flex flex-column ${ba.boxshadow} ${ba.div3}`}>
                        {/* <!-- 零打搜尋 --> */}
                        <div className={ba.div4} style={{ display: zerodaseach }} id="zerosearch">
                            <div action="" class={`d-flex flex-column ${ba.div5}`}>
                                <span className={ba.span}>日期區間</span>
                                <div class={`d-flex flex-column ${ba.div6}`} >
                                    <div class={`${ba.dateimg} ${ba.font}`}>
                                        <input type="date" className={`${ba.div7} ${ba.date}`} onChange={(e) => setstarttime1(e.target.value)} />
                                        <img class={ba.selectedDate} src={Group41} alt="" />
                                    </div>
                                    <div class={`${ba.dateimg} ${ba.div8}`}>
                                        <input type="date" class={`${ba.font} ${ba.div9} ${ba.date}`} onChange={(e) => setendtime1(e.target.value)} />
                                        <img class={ba.selectedDate} src={Group41} alt="" />
                                    </div>
                                    <span className={ba.span}>球類</span>
                                    <div class={`${ba.selectimg} ${ba.font} ${ba.div10}`}>
                                        <select name="" id="" className={`${ba.div11} ${ba.select}`} onChange={(e) => setball1(e.target.value)}>
                                            <option value="羽球">羽球</option>
                                            <option value="排球">排球</option>
                                            <option value="桌球">桌球</option>
                                        </select>
                                        <img class="" src={Group41} alt="" className={ba.img} />
                                    </div>
                                </div>
                                <div className={ba.div12}>
                                    <span className={ba.span}>文章內容</span>
                                    <div>
                                        <input type="text" class={`${ba.ccc} ${ba.div13}`}
                                            placeholder="請輸入關鍵字" onChange={(e) => setzerodainput(`%${e.target.value}%`)} />
                                    </div>
                                </div>
                                <div class={`mt-auto`}>
                                    <input type="submit" value="搜尋" class={ba.submit} onClick={aaa} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- 球隊搜尋 --> */}
                        <div className={ba.div14} style={{ display: teamseach }} id="ballteamsearch">
                            <div action="" class={`d-flex flex-column ${ba.div15}`}>
                                <div class={`d-flex flex-column`} >
                                    <div class={`d-flex flex-column ${ba.div16}`}>
                                        <span className={ba.span}>日期區間</span>
                                        <div class={`${ba.dateimg} ${ba.font}`}>
                                            <input type="date" className={`${ba.div7} ${ba.date}`} onChange={(e) => setteamstartday(e.target.value)} />
                                            <img class={ba.selectedDate} src={Group41} alt="" />
                                        </div>
                                        <div class={`${ba.dateimg} ${ba.div8}`}>
                                            <input type="date" class={`${ba.font} ${ba.div9} ${ba.date}`} onChange={(e) => setteamendday(e.target.value)} />
                                            <img class={ba.selectedDate} src={Group41} alt="" />
                                        </div>
                                        <span className={`${ba.div19} ${ba.span}`}>類型</span>
                                        <div class={`${ba.selectimg} ${ba.font}`}>
                                            <select name="" id="" className={`${ba.div20} ${ba.select}`} onChange={(e) => { setteamtype(e.target.value) }}>
                                                <option value="運動">運動</option>
                                                <option value="聚餐">聚餐</option>
                                            </select>
                                            <img class="" src={Group41} alt="" className={ba.img} />
                                        </div>
                                    </div>
                                    <span className={`${ba.div23} ${ba.span}`}>地點</span>
                                    <div>
                                        <input type="text" class={`${ba.ccc} ${ba.div22}`}
                                            placeholder="請輸入關鍵字" onChange={(e) => { setlocation(`%${e.target.value}%`) }} />
                                    </div>
                                </div>

                                <div class={`mt-auto`}>
                                    <input type="submit" value="搜尋" class={ba.submit} onClick={bbb} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- 轉租搜尋 --> */}
                        <div className={ba.div24} style={{ display: rentseach }} id="rentsearch">
                            <div action="" class={`d-flex flex-column ${ba.div25}`}>
                                <div className={ba.div26}>
                                    <span className={ba.span}>日期</span>
                                    <div class={`d-flex flex-column`}>
                                        <div class={`${ba.dateimg} ${ba.font}`}>
                                            <input className={`${ba.div27} ${ba.date}`} type="date" onChange={(e) => { setrenttime(e.target.value) }} />
                                            <img class={ba.selectedDate} src={Group41} alt="" />
                                        </div>
                                        <div class={`${ba.dateimg} ${ba.font}`}>
                                            <input className={`${ba.div27} ${ba.date}`} type="date" onChange={(e) => { setrenttime1(e.target.value) }} />
                                            <img class={ba.selectedDate} src={Group41} alt="" />
                                        </div>
                                        <span className={`${ba.div28} ${ba.span}`}>縣市</span>
                                        <div class={`${ba.selectimg} ${ba.font}`}>
                                            <select name="" id="" className={`${ba.div29} ${ba.select}`} onChange={(e) => { setrentselectcounty(e.target.value) }}>
                                                <option value="台中市">台中市</option>
                                            </select>
                                            <img src={Group41} alt="" className={ba.img} />
                                        </div>
                                        <span className={`${ba.div30} ${ba.span}`}>地區</span>
                                        <div class={`${ba.selectimg} ${ba.font}`}>
                                            <select name="" id="" className={`${ba.div31} ${ba.select}`} onChange={(e) => { setrentselectarea(e.target.value) }}>
                                                {Taichung.map((val, key) => {
                                                    return (<option key={key} value={val}>{val}</option>);
                                                })}
                                            </select>
                                            <img src={Group41} alt="" className={ba.img} />
                                        </div>
                                    </div>
                                </div>
                                <div className={ba.div32}>
                                    <span className={ba.span}>場館名稱</span>
                                    <div>
                                        <input type="text" class={`${ba.ccc} ${ba.div33}`}
                                            placeholder="請輸入關鍵字" onChange={(e) => { setfieldname(`%${e.target.value}%`) }}/>
                                    </div>
                                </div>
                                <div class={`mt-auto`}>
                                    <input type="submit" value="搜尋" class={ba.submit} onClick={ccc} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md  d-flex flex-column ${ba.boxshadow} ${ba.div34}`}>
                        <div class={`d-flex ${ba.div35}`}>
                            {/* <!-- 按鈕 --> */}
                            <div class={`col-4 ${ba.button3} ${zeroda1 === true ? ba.focus123 : ''} `} id="zeroda" onClick={zeroda} tabIndex="0">零打</div>
                            <div class={`col-4 ${ba.button3} ${team1 === true ? ba.focus123 : ''}`} id="ballteam" onClick={team} tabIndex="0">球隊</div>
                            <div class={`col-4 ${ba.button3} ${rent1 === true ? ba.focus123 : ''}`} id="rent" onClick={rent} tabIndex="0">轉租</div>
                        </div>
                        {/* <!-- 文章列表 --> */}
                        <div className={`d-flex flex-column ${ba.div36}`} id="zerodadiv">
                            {title}
                            {content}
                        </div>
                    </div>
                </div>
            </div>
            {/* 零打彈出畫面 */}
            <div className={`${ba.div55}`} style={{ display: (div1) ? 'block' : 'none' }}>
                {zerodaedit.map((val, key) => {
                    let c = new Date(val.date);
                    let y = c.getFullYear();
                    let m = c.getMonth() + 1;
                    let d = c.getDate();
                    const add = () => {
                        // number1+=1;
                        setnumber1(number1 + 1);
                    }
                    const dda = () => {
                        // number1-=1;
                        setnumber1(number1 - 1);
                    }
                    return (
                        <div className={ba.div56} key={key}>
                            <div class={ba.cover}>
                                <div class={ba.contain}>
                                    <div >
                                        <label class={ba.dlabel} for="ct_pname">會員編號 : </label> {val.userid}
                                    </div>
                                    <div>
                                        <label class={ba.dlabel} for="ct_pname">場館</label><br />
                                        <input class={ba.dinput} id="ct_pname" type="text" defaultValue={val.fieldname} onChange={(e) => { setzerodafieldname(e.target.value) }} />
                                    </div>
                                    <div class={ba.ct_citycover}>
                                        <div className={ba.iimgdiv} >
                                            <label class={ba.dlabel} for="ct_city">縣市</label><br />
                                            <select class={ba.dselect} name="ct" id="ct_city" defaultValue={val.county} onChange={(e) => { setzerodacounty(e.target.value) }}>
                                                <option value="台中市">台中市</option>
                                            </select>
                                            <img src={Group41} alt="" className={ba.iimg} />
                                        </div>
                                        <div className={ba.iimgdiv}>
                                            <label class={ba.dlabel} for="">地區</label><br />
                                            <select class={ba.dselect} name="ct_" id="" defaultValue={val.area} onChange={(e) => { setzerodaarea(e.target.value) }}>
                                                {Taichung.map((val, key) => {
                                                    return (<option key={key} value={val}>{val}</option>);
                                                })}
                                            </select>
                                            <img src={Group41} alt="" className={ba.iimg} />
                                        </div>
                                    </div>
                                    <div>
                                        <label class={ba.dlabel} for="ct_addr">地址</label><br />
                                        <input class={ba.dinputaddr} type="text" id="ct_addr" defaultValue={val.address} onChange={(e) => { setzerodaaddress(e.target.value) }} />
                                    </div>
                                    <div>
                                        <label class={ba.dlabel} for="ct_d_input">日期</label><br />
                                        <input class={ba.dinputdate} id="ct_d_input" type="date" defaultValue={`${y}-${m = (m < 10 ? '0' : '') + m}-${d = (d < 10 ? '0' : '') + d}`} onChange={(e) => { setzerodadate(e.target.value) }} />
                                        <img class={ba.ct_seleD} src={Group41} />
                                    </div>
                                    <div>
                                        <label class={ba.dlabel} for="">時段</label>
                                    </div>
                                    <div class={ba.ct_time}>
                                        <div className={ba.iimgdiv}>
                                            <select class={ba.dselect} name="ct_" id="" defaultValue={val.starttime} onChange={(e) => { setzerodastarttime(e.target.value) }}>
                                                {time.map((val, key) => {
                                                    return (<option key={key} value={key+1}>{val}</option>);
                                                })}
                                            </select>
                                            <img src={Group41} alt="" className={ba.iimg2} />
                                        </div>
                                        <div className={ba.ggg}>
                                            至
                                        </div>
                                        <div className={ba.iimgdiv}>
                                            <select class={ba.dselect} name="ct_" id="" defaultValue={val.endtime} onChange={(e) => { setzerodaendtime(e.target.value) }}>
                                                {time.map((val, key) => {
                                                    return (<option key={key} value={key+1}>{val}</option>);
                                                })}
                                            </select>
                                            <img src={Group41} alt="" className={ba.iimg2} />
                                        </div>
                                    </div>
                                    <div className={ba.iimgdiv1}>
                                        <label class={ba.dlabel} for="ct_range">程度</label><br />
                                        <select class={ba.dselect1} name="ct_" id="ct_range" defaultValue={val.level} onChange={(e) => { setzerodalevel(e.target.value) }}>
                                            <option value="新手">新手</option>
                                            <option value="普通">普通</option>
                                            <option value="高手">高手</option>
                                        </select>
                                        <img src={Group41} alt="" className={ba.iimg3} />
                                    </div>
                                    <div>
                                        <label class={ba.dlabel} for="">人數</label><br />
                                        <input class={`${ba.minus} ${ba.dinput}`} type="button" onClick={dda} value="-" />
                                        <input class={`${ba.numbox} ${ba.dinputnum}`} type="number" key={number1} id="vall" defaultValue={number1} onChange={(e) => { setnumber1(e.target.value) }} />
                                        <input class={`${ba.minus} ${ba.dinput}`} type="button" onClick={add} value="+" />
                                    </div>
                                    <div>
                                        <label class={ba.dlabel} for="ct_pay">費用</label><br />
                                        <input class={ba.dinput} id="ct_pay" type="number" defaultValue={val.cost} onChange={(e) => { setzerodacost(e.target.value) }} />
                                    </div>
                                    <div>
                                        <label class={ba.dlabel} for="ct_discribe">描述</label><br />
                                        <textarea name="" class={ba.dtextarea} id="ct_discribe" cols="30" rows="10" defaultValue={val.content} onChange={(e) => { setzerodacontent(e.target.value) }}></textarea>
                                    </div>
                                    <div class={ba.ct_yesOrNot}>
                                        <div>
                                            <span class={ba.ct_backself} onClick={ddd1}>取消</span>
                                        </div>
                                        <input class={`${ba.dinput} ${ba.dinputsubmit}`} onClick={zerodaupdate} type="submit" value="儲存" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* 球隊彈出畫面 */}
            <div className={`${ba.div55}`} style={{ display: (div2) ? 'block' : 'none' }}>
                {teamedit.map((val, key) => {
                    let c = new Date(val.startdate);
                    let y = c.getFullYear();
                    let m = c.getMonth() + 1;
                    let d = c.getDate();
                    let cc = new Date(val.enddate);
                    let yy = cc.getFullYear();
                    let mm = cc.getMonth() + 1;
                    let dd = cc.getDate();
                    var u8Arr = new Uint8Array(val.teameventimg.data);
                    var blob = new Blob([u8Arr], { type: "image/jpeg" });
                    var fr = new FileReader;
                    fr.onload = function () {
                        setteamurl(fr.result);
                    };
                    fr.readAsDataURL(blob);

                    return (
                        <div className={`container ${backteam.div0}`}>
                            <div className={`row ${backteam.div7}`}>
                                <div>
                                    <div className={backteam.div1}>
                                        <span className={backteam.font1}>開始日期</span>
                                        <div className={backteam.dateimg}>
                                            <input type="date" name="inputdate" className={`${backteam.date} ${backteam.font}`}
                                                defaultValue={`${y}-${m = (m < 10 ? '0' : '') + m}-${d = (d < 10 ? '0' : '') + d}`}
                                                onChange={(e) => { setteamstartdate(e.target.value) }} />
                                            <img className={backteam.selectedDate} src={group41} alt="" />
                                        </div>
                                        <span className={backteam.font1}>結束日期</span>
                                        <div className={backteam.dateimg}>
                                            <input type="date" name="inputdate" className={`${backteam.date} ${backteam.font}`}
                                                defaultValue={`${yy}-${mm = (mm < 10 ? '0' : '') + mm}-${dd = (dd < 10 ? '0' : '') + dd}`}
                                                onChange={(e) => { setteamenddate(e.target.value) }} />
                                            <img className={backteam.selectedDate2} src={group41} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className={backteam.div4}>
                                    <span className={backteam.font1}>時間</span>
                                    <div className={`d-flex`}>
                                        <div className={backteam.div2}>
                                            <select name="" id="" className={`${backteam.div3} ${backteam.font}`} defaultValue={val.starttime} onChange={(e) => setteamstarttime(e.target.value)}>
                                                {time.map((val, key) => {
                                                    return (<option key={key} value={key+1}>{val}</option>);
                                                })}
                                            </select>
                                            <img className={backteam.selectimg} src={group41} alt="" />
                                        </div>
                                        <div className={backteam.font}>
                                            至
                                        </div>
                                        <div className={backteam.div5}>
                                            <select name="" id="" className={`${backteam.div3} ${backteam.font}`} defaultValue={val.endtime} onChange={(e) => setteamendtime(e.target.value)}>
                                                {time.map((val, key) => {
                                                    return (<option key={key} value={key+1}>{val}</option>);
                                                })}
                                            </select>
                                            <img className={backteam.selectimg} src={group41} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className={backteam.div6}>
                                    <label htmlFor="inputfile" className={backteam.filelabel}>
                                        <img src={teamurl} alt="" className={backteam.fileimg} onChange={(e)=>{setteamimg(e.target.files)}}/></label>
                                    <input type="file" id='inputfile' className={backteam.file}  onChange={(e)=>{setteamfile(e.target.files[0])}}/>
                                </div>
                            </div>
                            <div>
                                <span className={backteam.font1}>類型</span>
                                <div className={`d-flex`}>
                                    <div className={backteam.div2}>
                                        <select name="" id="" className={`${backteam.div3} ${backteam.font}`} defaultValue={val.type} onChange={(e) => setteamtype2(e.target.value)}>
                                            <option value="運動">運動</option>
                                            <option value="聚餐">聚餐</option>
                                        </select>
                                        <img className={backteam.selectimg} src={group41} alt="" />
                                    </div>
                                    <div className={backteam.font}>
                                    </div>
                                </div>
                            </div>
                            <div className={backteam.div8}>
                                <span className={backteam.font1}>標題</span>
                                <div>
                                    <input type="text" className={`${backteam.input1} ${backteam.font}`} defaultValue={val.title} onChange={(e) => setteamtitle(e.target.value)} />
                                </div>
                            </div>
                            <div className={backteam.div8}>
                                <span className={backteam.font1}>地點</span>
                                <div>
                                    <input type="text" className={`${backteam.input1} ${backteam.font}`} defaultValue={val.location} onChange={(e) => setteamlocation(e.target.value)} />
                                </div>
                            </div>
                            <div className={backteam.div8}>
                                <span className={backteam.font1}>支出</span>
                                <div>
                                    <input type="number" className={`${backteam.input3} ${backteam.font}`} defaultValue={val.pay} onChange={(e) => setteampay(e.target.value)} />
                                </div>
                            </div>
                            <div className={backteam.div9}>
                                <span className={backteam.font}>成員</span>
                                <div className='d-flex'>
                                </div>
                            </div>
                            <div className={backteam.div8}>
                                <span className={backteam.font1}>描述</span>
                                <div>
                                    <textarea name="" id="" cols="30" rows="10" maxLength="100" className={`${backteam.input2} ${backteam.font}`}
                                        defaultValue={val.text} onChange={(e) => setteamtext(e.target.value)}>

                                    </textarea>
                                </div>
                            </div>
                            <div className={`${backteam.div10} d-flex justify-content-around`}>
                                <button className={backteam.button1} onClick={ddd2}>取消</button>
                                <button className={backteam.button2} onClick={ttt2}>儲存</button>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* 轉租彈出畫面 */}
            <div className={`${ba.div55}`} style={{ display: (div3) ? 'block' : 'none' }}>
                {rentedit.map((val, key) => {
                    const add = () => {
                        setnumber2(number2 + 1);
                    }
                    const dda = () => {
                        setnumber2(number2 - 1);
                    }
                    let c = new Date(val.date);
                    let y = c.getFullYear();
                    let m = c.getMonth() + 1;
                    let d = c.getDate();
                    return (
                        <React.Fragment>
                            <div class={backrent.cover} key={key}>
                                <div class={backrent.contain}>
                                    <div>
                                        <label class={backrent.dlabel} for="ct_pname">場館</label><br />
                                        <input class={backrent.dinput} id="ct_pname" type="text" defaultValue={val.fieldname} onChange={(e)=>{setrentfieldname(e.target.value)}}/>
                                    </div>
                                    <div class={backrent.ct_citycover}>
                                        <div className={backrent.div3} >
                                            <label class={backrent.dlabel} for="ct_city">縣市</label><br />
                                            <select class={backrent.dselect} name="ct" id="ct_city" defaultValue={val.county} onChange={(e)=>{setrentcounty(e.target.value)}}>
                                                <option value="台中市">台中市</option>
                                            </select>
                                            <img src={group41} alt="" className={backrent.div2} />
                                        </div>
                                        <div className={backrent.div3}>
                                            <label class={backrent.dlabel} for="">地區</label><br />
                                            <select class={backrent.dselect} name="ct_" id="" defaultValue={val.area} onChange={(e)=>{setrentarea(e.target.value)}}>
                                                {Taichung.map((val, key) => {
                                                    return (<option key={key} value={val}>{val}</option>);
                                                })}
                                            </select>
                                            <img src={group41} alt="" className={backrent.div2} />
                                        </div>
                                    </div>
                                    <div>
                                        <label class={backrent.dlabel} for="ct_addr">地址</label><br />
                                        <input class={backrent.dinput} type="text" id="ct_addr" defaultValue={val.address} onChange={(e)=>{setrentaddress(e.target.value)}} />
                                    </div>
                                    <div >
                                        <label class={backrent.dlabel} for="ct_d_input">日期</label>
                                        <div className={`${backrent.div3} d-flex`}>
                                            <input class={backrent.dinputdate} id="ct_d_input" type="date" defaultValue={`${y}-${m = (m < 10 ? '0' : '') + m}-${d = (d < 10 ? '0' : '') + d}`} onChange={(e)=>{setrentdate(e.target.value)}}/>
                                            <img src={group41} alt="" className={backrent.div5}/>
                                        </div>
                                    </div>
                                    <div>
                                        <label class={backrent.dlabel} for="">時段</label>
                                    </div>
                                    <div class={backrent.ct_time}>
                                        <div className={backrent.div3}>
                                            <select class={backrent.dselect} name="ct_" id="" defaultValue={val.starttime} onChange={(e)=>{setrentstarttime(e.target.value)}}>
                                                {time.map((val, key) => {
                                                    return (<option key={key} value={key+1}>{val}</option>);
                                                })}
                                            </select>
                                            <img src={group41} alt="" className={backrent.div4} />
                                        </div>
                                        <div className={backrent.div1}>
                                            至
                                        </div>
                                        <div className={backrent.div3}>
                                            <select class={backrent.dselect} name="ct_" id="" defaultValue={val.endtime} onChange={(e)=>{setrentendtime(e.target.value)}}>
                                                {time.map((val, key) => {
                                                    return (<option key={key} value={key+1}>{val}</option>);
                                                })}
                                            </select>
                                            <img src={group41} alt="" className={backrent.div4} />
                                        </div>
                                    </div>
                                    <div>
                                        <label class={backrent.dlabel} for="">場地數</label><br />
                                        <input class={`${backrent.minus} ${backrent.dinput}`} type="button" onClick={dda} value="-" />
                                        <input class={`${backrent.numbox} ${backrent.dinput3}`} type="number" key={number2} id="val" defaultValue={number2} onChange={(e)=>{setnumber2(e.target.value)}} />
                                        <input class={`${backrent.minus} ${backrent.dinput}`} type="button" onClick={add} value="+" />
                                    </div>
                                    <div>
                                        <label class={backrent.dlabel} for="ct_pay">費用</label><br />
                                        <input class={backrent.dinput2} id="ct_pay" type="number" defaultValue={val.cost} onChange={(e)=>{setrentcost(e.target.value)}} />
                                    </div>
                                    <div>
                                        <label class={backrent.dlabel} for="ct_discribe">描述</label><br />
                                        <textarea name="" class={backrent.dtextarea} id="ct_discribe" cols="30" rows="10" defaultValue={val.content} onChange={(e)=>textarea2(e.target.value)} ref={renttext}></textarea>
                                    </div>
                                    <div class={`${backrent.ct_yesOrNot} d-flex justify-content-around`}>
                                        <input class={`${backrent.div6} ${backrent.dinputsubmit}`} type="submit" value="取消" onClick={rrr2}/>
                                        <input class={`${backrent.dinput} ${backrent.dinputsubmit}`} type="submit" value="儲存" onClick={rrr3} />
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    );
                })}

            </div>


        </React.Fragment>
    );

}

export default Backarticle2;