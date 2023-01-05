import React, { useEffect, useState } from 'react';
import ba from './backarticle.module.css';
import Group41 from './icon/Group 41.png';
import Axios from "axios";
import Backteam from "./backarticleteam";
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
    const [zerodainput,setzerodainput]=useState('');
    const aaa = () => {
        console.log(zerodainput);
        Axios.post("http://localhost:3001/zeroda", {
            starttime1: starttime1,
            endtime1: endtime1,
            ball1: ball1,
            zerodainput:zerodainput,
        }).then((response) => {
            // console.log(response);
            setzerodalist(response.data);
        });
    }
    // 零打編輯儲存
    const [zerodafieldname,setzerodafieldname]=useState('');
    const [zerodacounty,setzerodacounty]=useState('');
    const [zerodaarea,setzerodaarea]=useState('');
    const [zerodaaddress,setzerodaaddress]=useState('');
    const [zerodadate,setzerodadate]=useState('');
    const [zerodastarttime,setzerodastarttime]=useState('');
    const [zerodaendtime,setzerodaendtime]=useState('');
    const [zerodalevel,setzerodalevel]=useState('');
    const [zerodacost,setzerodacost]=useState('');
    const [zerodacontent,setzerodacontent]=useState('');
    const [articleid_zeroda,setarticleid_zeroda]=useState('');
    const zerodaupdate = () => {
        Axios.post("http://localhost:3001/zerodaupdate", {
            zerodafieldname: zerodafieldname,
            zerodacounty: zerodacounty,
            zerodaarea: zerodaarea,
            zerodaaddress:zerodaaddress,
            zerodadate:zerodadate,
            zerodastarttime:zerodastarttime,
            zerodaendtime:zerodaendtime,
            zerodalevel:zerodalevel,
            zerodacost:zerodacost,
            zerodacontent:zerodacontent,
            articleid_zeroda:articleid_zeroda,
            number1:number1,
        }).then((response) => {
            setdiv1(!div1);
            alert("更新成功");
        });
    }
    // 零打刪除
    const zerodadelete =(key,e)=>{
        zerodalist.splice(key,1);
        setzerodalist([]);
        Axios.post("http://localhost:3001/zerodadelete", {
            articleid_zeroda:e,
            }).then((response) => {
                alert("刪除成功");
                setzerodalist(zerodalist);
            });
    }
    // 球隊搜尋
    const [teamstartday, setteamstartday] = useState('');
    const [teamendday, setteamendday] = useState('');
    const [teamtype, setteamtype] = useState('聚餐');
    const [location, setlocation] = useState('');
    const [teamlist, setteamlist] = useState([]);
    const bbb = () => {
        Axios.post("http://localhost:3001/team", {
            teamstartday:teamstartday,
            teamendday:teamendday,
            teamtype:teamtype,
            location:location,
        }).then((response) => {
            console.log(response);
            setteamlist(response.data);
        });
    }
    // 轉租搜尋
    const [renttime, setrenttime] = useState('');
    const [renttime1, setrenttime1] = useState('');
    const [rentselectcounty, setrentselectcounty] = useState('台中市');
    const [rentselectarea, setrentselectarea] = useState('西屯區');
    const [rentlist, setrentlist] = useState([]);

    const ccc = () => {
        Axios.post("http://localhost:3001/rent", {
            renttime: renttime,
            renttime1: renttime1,
            rentselectcounty: rentselectcounty,
            rentselectarea: rentselectarea,
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
    const [div2,setdiv2]= useState(false);
    const ddd2 =()=>{
        setdiv2(!div2);
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
            setzerodadate(`${y}-${m+1}-${d}`);
            setzerodastarttime(response.data[0].starttime);
            setzerodaendtime(response.data[0].endtime);
            setzerodalevel(response.data[0].level);
            setzerodacost(response.data[0].cost);
            setzerodacontent(response.data[0].content);
            setarticleid_zeroda(response.data[0].articleid_zeroda);
        });
    }
    // 球隊編輯畫面
    const ttt= (e)=>{
        setdiv2(!div2);
        Axios.post("http://localhost:3001/zerodada", {
            teamid: e,
        }).then((response) => {
            // console.log(response);
            setzerodaedit(response.data);
        });
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
                                            <div class={ba.button1} onClick={()=>zerodadelete(key,val.articleid_zeroda)}>刪除</div>
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
                                        <div class={`col-2 ${ba.div38}`}>{`${y}-${m+1}-${d}`}</div>
                                        <div class={`col-2 ${ba.div38}`}>{`${yy}-${mm+1}-${dd}`}</div>
                                        <div class={`col-2 ${ba.div38}`}>{val.type}</div>
                                        <div class={`col-3 ${ba.div38}`}>{val.location}</div>
                                        <div class={`col-3 d-flex justify-content-center ${ba.div38}`}>
                                            <div class={`${ba.button1} ${ba.div48}`} onClick={() => { ttt(val.teamid) }}>編輯</div>
                                            <div class={ba.button1}>刪除</div>
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
                                            <div class={`${ba.button1} ${ba.div53}`}>編輯</div>
                                            <div class={ba.button1}>刪除</div>
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
        "中區","東區","西區","南區","北區","西屯區","南屯區","北屯區","豐原區","大里區","太平區","清水區","沙鹿區","大甲區","東勢區","梧棲區","烏日區","神岡區","大肚區","大雅區","后里區","霧峰區","潭子區","龍井區","外埔區","和平區","石岡區","大安區","新社區"
    ]);
    const [number1,setnumber1]=useState(0);
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
                                            placeholder="請輸入關鍵字" onChange={(e)=>setzerodainput(`%${e.target.value}%`)}/>
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
                                                <option value="聚餐">聚餐</option>
                                                <option value="比賽">比賽</option>
                                            </select>
                                            <img class="" src={Group41} alt="" className={ba.img} />
                                        </div>
                                    </div>
                                    <span className={`${ba.div23} ${ba.span}`}>地點</span>
                                    <div>
                                        <input type="text" class={`${ba.ccc} ${ba.div22}`}
                                            placeholder="請輸入關鍵字" onChange={(e) => { setlocation(`%${e.target.value}%`) }}/>
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
                                                <option value="台北市">台北市</option>
                                                <option value="高雄市">高雄市</option>
                                            </select>
                                            <img src={Group41} alt="" className={ba.img} />
                                        </div>
                                        <span className={`${ba.div30} ${ba.span}`}>地區</span>
                                        <div class={`${ba.selectimg} ${ba.font}`}>
                                            <select name="" id="" className={`${ba.div31} ${ba.select}`} onChange={(e) => { setrentselectarea(e.target.value) }}>
                                                <option value="西屯區">西屯區</option>
                                                <option value="北屯區">北屯區</option>
                                                <option value="南屯區">南屯區</option>
                                            </select>
                                            <img src={Group41} alt="" className={ba.img} />
                                        </div>
                                    </div>
                                </div>
                                <div className={ba.div32}>
                                    <span className={ba.span}>場館名稱</span>
                                    <div>
                                        <input type="text" class={`${ba.ccc} ${ba.div33}`}
                                            placeholder="請輸入關鍵字" />
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
            {zerodaedit.map((val,key) => {
            let c = new Date(val.date);
            let y = c.getFullYear();
            let m = c.getMonth();
            let d = c.getDate();
            
            const add=()=>{
                // number1+=1;
                setnumber1(number1+1);
            }
            const dda=()=>{
                // number1-=1;
                setnumber1(number1-1);
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
                                <input class={ba.dinput} id="ct_pname" type="text" defaultValue={val.fieldname} onChange={(e)=>{setzerodafieldname(e.target.value)}} />
                            </div>
                            <div class={ba.ct_citycover}>
                                <div className={ba.iimgdiv} >
                                    <label class={ba.dlabel} for="ct_city">縣市</label><br />
                                    <select class={ba.dselect} name="ct" id="ct_city" defaultValue={val.county} onChange={(e)=>{setzerodacounty(e.target.value)}}>
                                        <option value="台中市">台中市</option>
                                    </select>
                                    <img src={Group41} alt="" className={ba.iimg} />
                                </div>
                                <div className={ba.iimgdiv}>
                                    <label class={ba.dlabel} for="">地區</label><br />
                                    <select class={ba.dselect} name="ct_" id="" defaultValue={val.area} onChange={(e)=>{setzerodaarea(e.target.value)}}>
                                        {Taichung.map((val,key)=>{
                                            return (<option key={key} value={val}>{val}</option>);
                                        })}
                                    </select>
                                    <img src={Group41} alt="" className={ba.iimg} />
                                </div>
                            </div>
                            <div>
                                <label class={ba.dlabel} for="ct_addr">地址</label><br />
                                <input class={ba.dinputaddr} type="text" id="ct_addr" defaultValue={val.address} onChange={(e)=>{setzerodaaddress(e.target.value)}}/>
                            </div>
                            <div>
                                <label class={ba.dlabel} for="ct_d_input">日期</label><br/>
                                <input class={ba.dinputdate} id="ct_d_input" type="date" defaultValue={`${y}-${m+1}-${d}`} onChange={(e)=>{setzerodadate(e.target.value)}}/>
                                <img class={ba.ct_seleD} src={Group41} />
                            </div>
                            <div>
                                <label class={ba.dlabel} for="">時段</label>
                            </div>
                            <div class={ba.ct_time}>
                                <div className={ba.iimgdiv}>
                                    <select class={ba.dselect} name="ct_" id="" defaultValue={val.starttime} onChange={(e)=>{setzerodastarttime(e.target.value)}}>
                                        <option value="8">8:00</option>
                                        <option value="9">9:00</option>
                                        <option value="15">15:00</option>
                                        <option value="16">16:00</option>
                                        <option value="17">17:00</option>
                                    </select>
                                    <img src={Group41} alt="" className={ba.iimg2} />
                                </div>
                                <div className={ba.ggg}>
                                    至
                                </div>
                                <div className={ba.iimgdiv}>
                                    <select class={ba.dselect} name="ct_" id="" defaultValue={val.endtime} onChange={(e)=>{setzerodaendtime(e.target.value)}}>
                                        <option value="10">10:00</option>
                                        <option value="17">17:00</option>
                                    </select>
                                    <img src={Group41} alt="" className={ba.iimg2} />
                                </div>
                            </div>
                            <div className={ba.iimgdiv1}>
                                <label class={ba.dlabel} for="ct_range">程度</label><br />
                                <select class={ba.dselect1} name="ct_" id="ct_range" defaultValue={val.level} onChange={(e)=>{setzerodalevel(e.target.value)}}>
                                    <option value="新手">新手</option>
                                    <option value="普通">普通</option>
                                    <option value="高手">高手</option>
                                </select>
                                <img src={Group41} alt="" className={ba.iimg3} />
                            </div>
                            <div>
                                <label class={ba.dlabel} for="">人數</label><br />
                                <input class={`${ba.minus} ${ba.dinput}`} type="button" onClick={dda} value="-" />
                                <input class={`${ba.numbox} ${ba.dinputnum}`} type="number" key={number1} id="vall" defaultValue={number1}  onChange={(e)=>{setnumber1(e.target.value)}}/>
                                <input class={`${ba.minus} ${ba.dinput}`} type="button" onClick={add} value="+" />
                            </div>
                            <div>
                                <label class={ba.dlabel} for="ct_pay">費用</label><br />
                                <input class={ba.dinput} id="ct_pay" type="text" defaultValue={val.	cost} onChange={(e)=>{setzerodacost(e.target.value)}}/>
                            </div>
                            <div>
                                <label class={ba.dlabel} for="ct_discribe">描述</label><br />
                                <textarea name="" class={ba.dtextarea} id="ct_discribe" cols="30" rows="10" defaultValue={val.content} onChange={(e)=>{setzerodacontent(e.target.value)}}></textarea>
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
            <div className={`${ba.div55}`} style={{ display: (div2) ? 'block' : 'none' }}>
            <Backteam div2 = {setdiv2}/>
            </div>
            
            
        </React.Fragment>
    );
    
}

export default Backarticle2;