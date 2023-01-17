import React, { useState } from 'react';
// import "./nav.css";
import comm from "./search.module.css";
// import notice from './icon/notice.svg';
// import user from './icon/user.svg';
// import cc from './icon/Rect.svg';
import badminton from './icon/badminton.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";




const Search = () => {

    const tabList = [
        { tabName: "零打", id: 1 },
        { tabName: "球隊", id: 2 },
        { tabName: "轉租", id: 3 },
    ];
    const [tabIndex, setTabIndex] = useState(1);
    var tabChoicedTab = (id) => {
        //tab切方法
        setTabIndex(id);
    }
    var isZeroShow = tabIndex === 1 ? 'block' : 'none';
    var isTeamShow = tabIndex === 2 ? 'block' : 'none';
    var isRentShow = tabIndex === 3 ? 'block' : 'none';

    // const [modaltoggle, setModalToggle] = useState(false);
    // function controlModal() {
    //     setModalToggle(!modaltoggle)
    // }
    // var showModal = modaltoggle ? 'flex' : 'none';

    //零打搜尋
    // let dt = new Date();
    // console.log(typeof dt.getMonth());
    const [ballgameszero, setBallgameszero] = useState('');
    const [startdatezero, setStartdatezero] = useState('');
    const [enddatezero, setEnddatezero] = useState('');
    const [starttimezero, setStarttimezero] = useState('');
    const [endtimezero, setEndtimezero] = useState('');
    const [costzero, setCostzero] = useState('');
    const [countyzero, setCountyzero] = useState('台中');
    const [areazero, setAreazero] = useState('');
    const [zerolevel, setZerolevel] = useState('');

    const [zeroarticle, setZeroarticle] = useState([]);
    const zerosearch = () => {
        // console.log(cost);
        Axios.post("http://localhost:3001/searchzero", {
            ballgameszero: ballgameszero,
            startdatezero: startdatezero,
            enddatezero: enddatezero,
            starttimezero: starttimezero,
            endtimezero: endtimezero,
            costzero: costzero,
            countyzero: countyzero,
            areazero: areazero,
            zerolevel: zerolevel,
            // zeroinput: zeroinput,
        }).then((response) => {
            console.log(response);
            setZeroarticle(response.data);
        })
    }

    //轉租搜尋
    const [ballgamesrent, setBallgamesrent] = useState('');
    const [countyrent, setCountyrent] = useState('台中');
    const [arearent, setArearent] = useState('');
    const [startdaterent, setStartdaterent] = useState('');
    const [enddaterent, setEnddaterent] = useState('');
    const [starttimerent, setStarttimerent] = useState('');
    const [endtimerent, setEndtimerent] = useState('');
    const [fieldnamerent, setFieldnamerent] = useState('');
    const [costrent, setCostrent] = useState('');
    const [numberrent, setNumberrent] = useState('');

    const [rentarticle, setRentarticle] = useState([]);

    const rentsearch = () => {
        Axios.post("http://localhost:3001/rentsearch", {
            ballgamesrent: ballgamesrent,
            countyrent: countyrent,
            arearent: arearent,
            startdaterent: startdaterent,
            enddaterent: enddaterent,
            starttimerent: starttimerent,
            endtimerent: endtimerent,
            fieldnamerent: fieldnamerent,
            costrent: costrent,
            numberrent: numberrent,
        }).then((response) => {
            console.log(response);
            setRentarticle(response.data);
        })
    }

    //球隊搜尋
    const [ballgamesteam, setBallgamesteam] = useState('');
    const [countyteam, setCountyteam] = useState('台中');
    const [areateam, setAreateam] = useState('');
    const [weekteam, setWeekteam] = useState('');
    const [starttimeteam, setStarttimeteam] = useState('');
    const [endtimeteam, setEndtimeteam] = useState('');
    const [tnameteam, setTnameteam] = useState('');
    const [levelteam, setLevelteam] = useState('');
    const [costteam, setCostteam] = useState('');
    const [teaminfo, setTeaminfo] = useState([]);
    // const [u, setu] = useState('');

    const teamsearch = () => {
        Axios.post("http://localhost:3001/teamsearch", {
            ballgamesteam: ballgamesteam,
            countyteam: countyteam,
            areateam: areateam,
            weekteam: weekteam,
            starttimeteam: starttimeteam,
            endtimeteam: endtimeteam,
            tnameteam: tnameteam,
            levelteam: levelteam,
            costteam: costteam,
            teaminfo: teaminfo,
            // u: u,
        }).then((response) => {
            console.log(response);
            setTeaminfo(response.data);
            for (let i = 0; i < response.data.length; i++) {
                var u8Arr = new Uint8Array(response.data[i].teamimg.data);
                var blob = new Blob([u8Arr], { type: "image/jpeg" });
                var fr = new FileReader;
                fr.readAsDataURL(blob);
                fr.onload = function (e) {
                    userlist1.push(e.target.result);
                };
            }
        })
        setUserlist(userlist1);
    }

    const [userlist, setUserlist] = useState([]);
    const [userlist1, setUserlist1] = useState([]);
    const [h1, seth1] = useState(false);
    const ee = (key) => {
        const time = setTimeout(() => { seth1(true) }, 100);
        if (h1) {
            return userlist1[key];
        }
    }

    // console.log(val.teamimg);
    const time = [
        '0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '0:00'
    ];
    const Taichungarea = [
        "中區", "東區", "西區", "南區", "北區", "西屯區", "南屯區", "北屯區", "豐原區", "大里區", "太平區", "清水區", "沙鹿區", "大甲區", "東勢區", "梧棲區", "烏日區", "神岡區", "大肚區", "大雅區", "后里區", "霧峰區", "潭子區", "龍井區", "外埔區", "和平區", "石岡區", "大安區", "新社區"
    ];

    return (
        <React.Fragment>
            <div className={comm.contentcontent}>
                {/* 搜尋匡 */}
                <div className={comm.searchbox}>
                    <div className={comm.active_type} >
                        {tabList.map(function (res, index) {
                            let tabStyle = res.id === tabIndex ? 'active_subCtrl active_act' : 'active_subCtrl';
                            return <div key={index}><button onClick={() => { tabChoicedTab(res.id) }} className={tabStyle}>{res.tabName}</button></div>
                        })}
                    </div>
                    {/* <!-- 零打 --> */}
                    <div style={{ display: isZeroShow }} className={comm.tablink}>
                        <div id="Zero" className={`row ${comm.tabcontent}`}>
                            {/* <!-- 運動類別 --> */}
                            <div className={`col-3 row ${comm.type}`}>
                                <div className={comm.type1}>類別</div> <br />
                                <div className={comm.img}><img src={badminton} alt="" /></div> <br />
                                <div>
                                    <select onChange={(e) => setBallgameszero(e.target.value)}>
                                        <option value="羽球">羽球</option>
                                        <option value="籃球">籃球</option>
                                    </select>
                                </div>
                            </div>
                            {/* <!-- 搜尋資料 --> */}
                            <div className={`col-9 ${comm.data}`}>
                                {/* <!-- 上層 --> */}
                                <div className={comm.time}>
                                    <div className={comm.date}>
                                        <label htmlFor="start_d_input">時間</label><br />
                                        <input name="start_d_input" type="date" onChange={(e) => setStartdatezero(e.target.value)} /><img className={comm.selectedDate} alt="" />至
                                        <input name="start_d_input" type="date" onChange={(e) => setEnddatezero(e.target.value)} /><img className={comm.selectedDate} alt="" />
                                    </div>
                                    <div className={comm.datatime}>
                                        <label htmlFor="">時段</label><br />
                                        <select onChange={(e) => setStarttimezero(e.target.value)}>
                                            {time.map((val, key) => {
                                                return (<option key={key} value={key + 1}>{val}</option>);
                                            })}
                                        </select>
                                        至
                                        <select onChange={(e) => setEndtimezero(e.target.value)}>
                                            {time.map((val, key) => {
                                                return (<option key={key} value={key + 1}>{val}</option>);
                                            })}
                                        </select>
                                    </div>
                                    <div className={comm.fee}>
                                        <label htmlFor="fee_input">費用上限</label><br />
                                        <input type="number" name="fee_input" onChange={(e) => setCostzero(e.target.value)} />
                                    </div>
                                </div>
                                {/* <!-- 下層 --> */}
                                <div className={comm.place}>
                                    <div className={comm.cityname1}>
                                        <h5>縣市</h5>
                                        <select style={{ width: '150px' }} onChange={(e) => setCountyzero(e.target.value)}>
                                            <option value="台中">台中</option>
                                        </select>
                                    </div>
                                    <div className={comm.cityarea}>
                                        <h5>地區</h5>
                                        <select style={{ width: '150px' }} onChange={(e) => setAreazero(e.target.value)}>
                                            {Taichungarea.map((val, key) => {
                                                return (<option key={key} value={val}>{val}</option>);
                                            })}
                                        </select>
                                    </div>
                                    <div className={comm.level}>
                                        <h5>程度</h5>
                                        <select style={{ width: '150px' }} onChange={(e) => setZerolevel(e.target.value)} >
                                            <option value="新手">新手</option>
                                            <option value="普通">普通</option>
                                            <option value="高手">高手</option>
                                            <option value="高手">不限</option>
                                        </select>
                                    </div>
                                    <div className={comm.search_input}>
                                        <button className={comm.buttoninput} onClick={zerosearch}>搜尋</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- 球隊 --> */}
                    <div style={{ display: isTeamShow }}>
                        <div id="Team" className={`row ${comm.tabcontent}`}>
                            {/* <!-- 運動類別 --> */}
                            <div className={`col-3 row ${comm.type}`}>
                                <div className={comm.type1}>類別<br /><img src={badminton} alt="" />
                                    <div>
                                        <select onChange={(e) => setBallgamesteam(e.target.value)}>
                                            <option value="羽球">羽球</option>
                                            <option value="籃球">籃球</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={comm.aeracity}>
                                    <h5>縣市</h5>
                                    <select style={{ width: '150px' }} onChange={(e) => setCountyteam(e.target.value)}>
                                        <option value="台中">台中</option>
                                    </select>
                                </div>
                                <div className={comm}>
                                    <h5>地區</h5>
                                    <select style={{ width: '150px' }} onChange={(e) => setAreateam(e.target.value)}>
                                        {Taichungarea.map((val, key) => {
                                            return (<option key={key} value={val}>{val}</option>);
                                        })}
                                    </select>
                                </div>
                            </div>
                            {/* <!-- 搜尋資料 --> */}
                            <div className={`col-9 ${comm.data}`}>
                                {/* <!-- 上層 --> */}
                                <div className={comm.time}>
                                    <div className={comm.date}>
                                        <span>週期</span><br />
                                        <select style={{ width: '150px' }} onChange={(e) => setWeekteam(e.target.value)}>
                                            <option value="星期一">星期一</option>
                                            <option value="星期二">星期二</option>
                                            <option value="星期三">星期三</option>
                                            <option value="星期四">星期四</option>
                                            <option value="星期五">星期五</option>
                                            <option value="星期六">星期六</option>
                                            <option value="星期日">星期日</option>
                                        </select>
                                    </div>
                                    <div className={comm.datatime}>
                                        <label htmlFor="">打球時段</label><br />
                                        <select onChange={(e) => setStarttimeteam(e.target.value)}>
                                            {time.map((val, key) => {
                                                return (<option key={key} value={key + 1}>{val}</option>);
                                            })}
                                        </select>
                                        至
                                        <select onChange={(e) => setEndtimeteam(e.target.value)}>
                                            {time.map((val, key) => {
                                                return (<option key={key} value={key + 1}>{val}</option>);
                                            })}
                                        </select>
                                    </div>
                                </div>
                                {/* 中層 */}
                                <div className={comm.searchtext}>
                                    <span>關鍵字</span><br />
                                    <input type="text" className={comm.textsearch} placeholder="請輸入關鍵字" onChange={(e) => setTnameteam(`%${e.target.value}%`)} />
                                </div>
                                {/* 下層 */}
                                <div className={comm.place}>
                                    <div className={comm.level}>
                                        <h5>程度</h5>
                                        <select style={{ width: '150px' }} onChange={(e) => setLevelteam(e.target.value)}>
                                            <option value="新手">新手</option>
                                            <option value="普通">普通</option>
                                            <option value="高手">高手</option>
                                            <option value="不限">不限</option>
                                        </select>
                                    </div>
                                    <div className={comm.fee}>
                                        <label htmlFor="costrent_input">費用上限</label><br />
                                        <input type="number" name="costrent_input" onChange={(e) => setCostteam(e.target.value)} />
                                    </div>
                                    <div className={comm.search_input}>
                                        <button className={comm.buttoninput_1} onClick={teamsearch}>搜尋</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- 轉租 --> */}
                    <div style={{ display: isRentShow }}>
                        <div id="Team" className={`row ${comm.tabcontent}`}>
                            {/* <!-- 運動類別 --> */}
                            <div className={`col-3 row ${comm.type}`}>
                                <div className={comm.type1}>類別<br /><img src={badminton} alt="" /></div>
                                <div>
                                    <select onChange={(e) => setBallgamesrent(e.target.value)}>
                                        <option value="羽球">羽球</option>
                                        <option value="籃球">籃球</option>
                                    </select>
                                </div>
                                <div className={comm.aeracity}>
                                    <h5>縣市</h5>
                                    <select style={{ width: '150px' }} onChange={(e) => setCountyrent(e.target.value)}>
                                        <option value="台中">台中</option>
                                    </select>
                                </div>
                                <div className={comm}>
                                    <h5>地區</h5>
                                    <select style={{ width: '150px' }} onChange={(e) => setArearent(e.target.value)}>
                                        {Taichungarea.map((val, key) => {
                                            return (<option key={key} value={val}>{val}</option>);
                                        })}
                                    </select>
                                </div>
                            </div>
                            {/* <!-- 搜尋資料 --> */}
                            <div className={`col-9 ${comm.data}`}>
                                {/* <!-- 上層 --> */}
                                <div className={comm.time}>
                                    <div className={comm.date}>
                                        <label htmlFor="start_d_input">日期</label><br />
                                        <input id="start_d_input" type="date" onChange={(e) => setStartdaterent(e.target.value)} /><img className={comm.selectedDate} src="./icon/arrowup2.svg" alt="" />至
                                        <input id="start_d_input" type="date" onChange={(e) => setEnddaterent(e.target.value)} /><img className={comm.selectedDate} src="./icon/arrowup2.svg" alt="" />
                                    </div>
                                    <div className={comm.datatime}>
                                        <label htmlFor="">打球時段</label><br />
                                        <select onChange={(e) => setStarttimerent(e.target.value)}>
                                            {time.map((val, key) => {
                                                return (<option key={key} value={key + 1}>{val}</option>);
                                            })}
                                        </select>
                                        至
                                        <select onChange={(e) => setEndtimerent(e.target.value)}>
                                            {time.map((val, key) => {
                                                return (<option key={key} value={key + 1}>{val}</option>);
                                            })}
                                        </select>
                                    </div>
                                </div>
                                {/* 中層 */}
                                <div className={comm.searchtext}>
                                    <span>關鍵字</span><br />
                                    <input type="text" className={comm.textsearch} placeholder="請輸入關鍵字" onChange={(e) => setFieldnamerent(`%${e.target.value}%`)} />
                                </div>
                                {/* 下層 */}
                                <div className={comm.place}>
                                    <div className={comm.level}>
                                        <label htmlFor="costrent_input">費用上限</label><br />
                                        <input type="number" name="costrent_input" onChange={(e) => setCostrent(e.target.value)} />
                                    </div>
                                    <div className={comm.fee}>
                                        <label htmlFor="numberrent_input">數量</label><br />
                                        <input type="number" name="numberrent_input" onChange={(e) => setNumberrent(e.target.value)} />
                                    </div>
                                    <div className={comm.search_input}>
                                        <button className={comm.buttoninput_1} onClick={rentsearch}>搜尋</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 零打 */}
                <div style={{ display: isZeroShow }} className={comm.zeroInfo}>
                    {/* <!-- 新增文章 --> */}
                    <div className={comm.addarticle}>
                        <input type="button" value="新建文章" className={comm.article} />
                    </div>
                    {/* <!-- 標籤按鈕 --> */}
                    {zeroarticle.map((val, key) => {
                        return (
                            <React.Fragment>
                                <div className={comm.addrelated}>
                                    <input type="button" value={val.ballgames} key={key} className={comm.related} />
                                    <input type="button" value={val.county} key={key} className={comm.related} />
                                    <input type="button" value={val.area} key={key} className={comm.related} />
                                    <select className={comm.searchcontent}>
                                        <option>時間近到遠</option>
                                        <option>費用多到少</option>
                                    </select>
                                </div>
                            </React.Fragment>

                        );
                    })}
                    {/* <input type="button" value="羽球" className={comm.related} /> */}
                    {/* <input type="button" value="台中市" className={comm.related} />
                    <input type="button" value="后里區" className={comm.related} /> */}
                    {/* <!-- 文章列表 --> */}
                    <div className={comm.articlelist}>
                        <div className={comm.articlecontent}>
                            {zeroarticle.map((val, key) => {
                                return (
                                    <React.Fragment>
                                        <div className={comm.articlecontent_key}>
                                            <h3 className={comm.msgh} key={key}>{val.username}</h3><br />
                                            <h6 className={comm.msghh}>{val.county}｜{val.area}</h6>
                                            <div className={comm.magmm}>
                                                <input type="text" value="球館" className={comm.msghhh} /><label htmlFor="" className={comm.msgi} key={key}> {val.fieldname}</label>
                                                <input type="text" value="日期" className={comm.msghhh} /><label htmlFor="" className={comm.msgi} key={key}> {val.startdate.slice(0, 10)}</label>
                                                <input type="text" value="時段" className={comm.msghhh} /><label htmlFor="" className={comm.msgi} key={key}> {val.starttime}:00-{val.endtime}:00</label>
                                                <input type="text" value="費用" className={comm.msghhh} /><label htmlFor="" className={comm.msgi} key={key}> {val.cost}</label>
                                                <input type="text" value="程度" className={comm.msghhh} /><label htmlFor="" className={comm.msgi} key={key}> {val.level}</label>
                                                <input type="text" value="人數" className={comm.msghhh} /><label htmlFor="" className={comm.msgi} key={key}> {val.number}</label>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                );
                            })}
                            {/* <h3 className={comm.msgh}>南區金城武</h3><br /> */}
                            {/* <h6 className={comm.msghh}>台中市｜南區</h6> */}
                            {/* <div className={comm.magmm}>
                            <input type="text" value="球館" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 群月羽球館</label>
                            <input type="text" value="日期" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 2022/12/25</label>
                            <input type="text" value="時段" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 15:00-17:00</label>
                            <input type="text" value="費用" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 400</label>
                            <input type="text" value="程度" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 新手</label>
                            <input type="text" value="人數" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 3</label>
                        </div> */}
                        </div>
                        {/* <div className={comm.articlecontent}>
                        <h3 className={comm.msgh}>南區金城武</h3><br />
                        <h6 className={comm.msghh}>台中市｜南區</h6>
                        <div className={comm.magmm}>
                            <input type="text" value="球館" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 群月羽球館</label>
                            <input type="text" value="日期" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 2022/12/25</label>
                            <input type="text" value="時段" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 15:00-17:00</label>
                            <input type="text" value="費用" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 400</label>
                            <input type="text" value="程度" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 新手</label>
                            <input type="text" value="人數" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 3</label>
                        </div>
                    </div>
                    <div className={comm.articlecontent}>
                        <h3 className={comm.msgh}>南區金城武</h3><br />
                        <h6 className={comm.msghh}>台中市｜南區</h6>
                        <div className={comm.magmm}>
                            <input type="text" value="球館" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 群月羽球館</label>
                            <input type="text" value="日期" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 2022/12/25</label>
                            <input type="text" value="時段" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 15:00-17:00</label>
                            <input type="text" value="費用" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 400</label>
                            <input type="text" value="程度" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 新手</label>
                            <input type="text" value="人數" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 3</label>
                        </div>
                    </div> */}
                    </div>
                </div>
                {/* 球隊 */}
                <div style={{ display: isTeamShow }} className={comm.teamInfo} >
                    {/* <!-- 標籤按鈕 --> */}
                    {teaminfo.map((val, key) => {
                        return (
                            <React.Fragment>
                                <div className={comm.addrelated}>
                                    <input type="button" key={key} value={val.type} className={comm.related} />
                                    <input type="button" key={key} value={val.county} className={comm.related} />
                                    <input type="button" key={key} value={val.area} className={comm.related} />
                                    <input type="button" key={key} value={val.week} className={comm.related} />
                                    <input type="button" key={key} value={val.level} className={comm.related} />
                                    <select className={comm.searchcontent}>
                                        <option>時間近到遠</option>
                                        <option>費用多到少</option>
                                    </select>
                                </div>
                            </React.Fragment>

                        );
                    })}
                    {/* <div className={comm.addrelated}>
                    <input type="button" value="羽球" className={comm.related} />
                    <input type="button" value="台中市" className={comm.related} />
                    <input type="button" value="后里區" className={comm.related} />
                    <input type="button" value="星期一" className={comm.related} />
                    <input type="button" value="新手" className={comm.related} />
                    <select className={comm.searchcontent}>
                        <option>時間近到遠</option>
                        <option>費用多到少</option>
                    </select>
                </div> */}
                    {/* <!-- 文章列表 --> */}
                    <div className={comm.articlelist}>
                        <div className={comm.articlecontent}>
                            {teaminfo.map((val, key) => {
                                // var u8Arr = new Uint8Array(val.userimg.data);
                                // var blob = new Blob([u8Arr], "image/jpeg");
                                // var ft = new FileReader;
                                // ft.onload = function () {
                                //     setu(ft.result);
                                //     // console.log(ft.result);
                                // };
                                // ft.readAsDataURL(blob);
                                return (
                                    <React.Fragment>
                                        <div className={`row ${comm.articlecontent_key}`}>
                                            <div className={`col-3 ${comm.imgimgimg}`}> <img src={ee(key)} key={key} alt="" className={comm.imggg} /></div>
                                            <div className={`col-8 ${comm.articlecontent_mm}`}>
                                                <h5 className={comm.msgq} key={key}>{val.tname}</h5><br />
                                                <h6 className={comm.msgqq} key={key}>{val.county}｜{val.area}</h6>
                                                <div className={comm.magqqq}>
                                                    <input type="text" value="週期" className={comm.msghhh} /><label htmlFor="" className={comm.msgi} key={key}> {val.week}</label>
                                                    <input type="text" value="時段" className={comm.msghhh} /><label htmlFor="" className={comm.msgi} key={key}> {val.starttime}:00-{val.endtime}:00</label>
                                                    <input type="text" value="費用" className={comm.msghhh} /><label htmlFor="" className={comm.msgi} key={key}> {val.fee}</label>
                                                    <input type="text" value="程度" className={comm.msghhh} /><label htmlFor="" className={comm.msgi} key={key}> {val.level}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            })}

                        </div>
                        {/* <div className={`row ${comm.articlecontent}`}>
                        <div className={`col-3 ${comm.imgimgimg}`}> <img src={cc} alt="" /></div>
                        <div className={`col-8 ${comm.articlecontent_mm}`}>
                            <h5 className={comm.msgq}>鐵血軍團</h5><br />
                            <h6 className={comm.msgqq}>台中市｜南區</h6>
                            <div className={comm.magqqq}>
                                <input type="text" value="週期" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 星期五</label>
                                <input type="text" value="時段" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 17:00-20:00</label>
                                <input type="text" value="費用" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 200</label>
                                <input type="text" value="程度" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 不限</label>
                            </div>
                        </div>
                    </div>
                    <div className={`row ${comm.articlecontent}`}>
                        <div className={`col-3 ${comm.imgimgimg}`}> <img src={cc} alt="" /></div>
                        <div className={`col-8 ${comm.articlecontent_mm}`}>
                            <h5 className={comm.msgq}>鐵血軍團</h5><br />
                            <h6 className={comm.msgqq}>台中市｜南區</h6>
                            <div className={comm.magqqq}>
                                <input type="text" value="週期" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 星期五</label>
                                <input type="text" value="時段" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 17:00-20:00</label>
                                <input type="text" value="費用" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 200</label>
                                <input type="text" value="程度" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 不限</label>
                            </div>
                        </div>
                    </div> */}
                    </div>
                </div>
                {/* 轉租 */}
                <div style={{ display: isRentShow }} className={comm.rentInfo}>
                    {/* <!-- 新增文章 --> */}
                    <div className={comm.addarticle}>
                        <input type="button" value="新建文章" className={comm.article} />
                    </div>
                    {/* <!-- 標籤按鈕 --> */}
                    {rentarticle.map((val, key) => {
                        return (
                            <React.Fragment>
                                <div className={comm.addrelated}>
                                    <input type="button" value={val.ballgames} key={key} className={comm.related} />
                                    <input type="button" value={val.county} key={key} className={comm.related} />
                                    <input type="button" value={val.area} key={key} className={comm.related} />
                                    <select className={comm.searchcontent}>
                                        <option>時間近到遠</option>
                                        <option>費用多到少</option>
                                    </select>
                                </div>
                            </React.Fragment>
                        )
                    })}
                    {/* <div className={comm.addrelated}>
                    <input type="button" value="羽球" className={comm.related} />
                    <input type="button" value="台中市" className={comm.related} />
                    <input type="button" value="后里區" className={comm.related} />
                    <select className={comm.searchcontent}>
                        <option>時間近到遠</option>
                        <option>費用多到少</option>
                    </select>
                </div> */}
                    {/* <!-- 文章列表 --> */}
                    <div className={comm.articlelist}>
                        <div className={comm.articlecontent}>
                            {rentarticle.map((val, key) => {
                                return (
                                    <React.Fragment>
                                        <div className={comm.articlecontent_key}>
                                            <h3 className={comm.msgh} key={key}>{val.username}</h3><br />
                                            <h6 className={comm.msghh} key={key}>{val.county}｜{val.area}</h6>
                                            <div className={comm.magmm}>
                                                <input type="text" value="球館" className={comm.msghhh} /><label htmlFor="" className={comm.msgi} key={key}> {val.fieldname}</label>
                                                <input type="text" value="數量" className={comm.msghhh} /><label htmlFor="" className={comm.msgi} key={key}> {val.amount}</label>
                                                <input type="text" value="日期" className={comm.msghhh} /><label htmlFor="" className={comm.msgi} key={key}> {val.startdate}</label>
                                                <input type="text" value="時段" className={comm.msghhh} /><label htmlFor="" className={comm.msgi} key={key}> {val.starttime}:00-{val.endtime}:00</label>
                                                <input type="text" value="費用" className={comm.msghhh} /><label htmlFor="" className={comm.msgi} key={key}> {val.cost}</label>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            }
                            )}

                        </div>
                        {/* <div className={comm.articlecontent}>
                        <h3 className={comm.msgh}>南區金城武</h3><br />
                        <h6 className={comm.msghh}>台中市｜南區</h6>
                        <div className={comm.magmm}>
                            <input type="text" value="球館" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 群月羽球館</label>
                            <input type="text" value="數量" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 1</label>
                            <input type="text" value="日期" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 2022/12/25</label>
                            <input type="text" value="時段" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 15:00-17:00</label>
                            <input type="text" value="費用" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 400</label>
                        </div>
                    </div> */}
                        {/* <div className={comm.articlecontent}>
                        <h3 className={comm.msgh}>南區金城武</h3><br />
                        <h6 className={comm.msghh}>台中市｜南區</h6>
                        <div className={comm.magmm}>
                            <input type="text" value="球館" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 群月羽球館</label>
                            <input type="text" value="數量" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 1</label>
                            <input type="text" value="日期" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 2022/12/25</label>
                            <input type="text" value="時段" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 15:00-17:00</label>
                            <input type="text" value="費用" className={comm.msghhh} /><label htmlFor="" className={comm.msgi}> 400</label>
                        </div>
                    </div> */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Search;












