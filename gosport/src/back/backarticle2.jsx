import React, { useState } from 'react';
import ba from './backarticle.module.css';
import notice from './icon/notice.svg';
import user from './icon/user.svg';
import Group41 from './icon/Group 41.png';
import Axios from "axios";
const Backarticle2 = () => {
    const [zerodaseach, setzerodaseach] = useState('block');
    const [teamseach, setteamseach] = useState('none');
    const [rentseach, setrentseach] = useState('none');
    const [zerodadiv, setzerodadiv] = useState('block');
    const [teamdiv, setteamdiv] = useState('none');
    const [rentdiv, setrentdiv] = useState('none');
    const [zeroda1, setzeroda1] = useState(true);
    const [team1, setteam1] = useState(false);
    const [rent1, setrent1] = useState(false);
    const team = () => {
        setzerodaseach('none');
        setzerodadiv('none');
        setrentseach('none');
        setrentdiv('none');
        setteamseach('block');
        setteamdiv('block');
        setzeroda1(false);
        setteam1(true);
        setrent1(false);
    }
    const rent = () => {
        setzerodaseach('none');
        setzerodadiv('none');
        setteamseach('none');
        setteamdiv('none');
        setrentseach('block');
        setrentdiv('block');
        setzeroda1(false);
        setteam1(false);
        setrent1(true);
    }
    const zeroda = () => {
        setrentseach('none');
        setrentdiv('none');
        setteamseach('none');
        setteamdiv('none');
        setzerodaseach('block');
        setzerodadiv('block');
        setzeroda1(true);
        setteam1(false);
        setrent1(false);
    }
    // 零打搜尋
    const [starttime1, setstarttime1] = useState('');
    const [endtime1, setendtime1] = useState('');
    const [ball1, setball1] = useState('');
    const [zerodalist, setzerodalist] = useState([]);
    const aaa = () => {
        Axios.post("http://localhost:3001/zeroda", {
            starttime1: starttime1,
            endtime1: endtime1,
            ball1: ball1,
        }).then((response) => {
            setzerodalist(response.data);
        });
    }
    // 球隊搜尋
    const [teamselect, setteamselect] = useState('台中市');
    const [teamselect2, setteamselect2] = useState('西屯區');
    const [teamlist, setteamlist] = useState([]);
    const bbb = () => {
        console.log(teamselect);
        console.log(teamselect2);
        Axios.post("http://localhost:3001/team", {
            teamselect: teamselect,
            teamselect2: teamselect2,
        }).then((response) => {
            console.log(response);
            setteamlist(response.data);
        });
    }
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
                    var c = new Date(val.date);
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
                                            <div class={`${ba.button1} ${ba.div42}`}>編輯</div>
                                            <div class={ba.button1}>刪除</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>

    } else if (team1) {
        title =
            <div class={`d-flex ${ba.div44}`}>
                <div class={`col-2 ${ba.font1} ${ba.div38}`}>球隊名稱</div>
                <div class={`col-2 ${ba.font1} ${ba.div38}`}>縣市</div>
                <div class={`col-2 ${ba.font1} ${ba.div38}`}>區</div>
                <div class={`col-3 ${ba.font1} ${ba.div38}`}>場館名稱</div>
                <div class={`col-3 ${ba.font1} ${ba.div38}`}></div>
            </div>
        content =
            <div className={`${ba.div54}`}>
                {teamlist.map((val, key) => {
                    return (
                        <React.Fragment>
                            <div class={` ${ba.div39}`} key={key}>
                                <div class={`col d-flex flex-column ${ba.div46}`}>
                                    {/* <!-- 搜尋結果 --> */}
                                    <div class={`d-flex ${ba.font2} ${ba.div47}`}>
                                        <div class={`col-2 ${ba.div38}`}>{val.tname}</div>
                                        <div class={`col-2 ${ba.div38}`}>{val.county}</div>
                                        <div class={`col-2 ${ba.div38}`}>{val.area}</div>
                                        <div class={`col-3 ${ba.div38}`}>{val.sidename}</div>
                                        <div class={`col-3 d-flex justify-content-center ${ba.div38}`}>
                                            <div class={`${ba.button1} ${ba.div48}`}>編輯</div>
                                            <div class={ba.button1}>刪除</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>

    } else if (rent1) {
        title =
            <div class={`d-flex ${ba.div50}`}>
                <div class={`col-2 ${ba.font1} ${ba.div38}`}>發布日期</div>
                <div class={`col-2 ${ba.font1} ${ba.div38}`}>縣市</div>
                <div class={`col-2 ${ba.font1} ${ba.div38}`}>區</div>
                <div class={`col-3 ${ba.font1} ${ba.div38}`}>場館名稱</div>
                <div class={`col-3 ${ba.font1} ${ba.div38}`}></div>
            </div>
    }
    return (
        <React.Fragment>
            {/* <!-- 導覽列 --> */}
            <div class="navbar">
                <div class="nContent">
                    <div class="nLeft">
                        <div>GOsport</div>
                    </div>
                    <div class="nRight">
                        <div><a href="">會員管理</a></div>
                        <div><a href="">場地資料</a></div>
                        <div><a href="">交流區文章</a></div>
                        <div><a href="">Q&A</a></div>
                        <img src={notice} alt="" />
                        <img src={user}></img>
                    </div>
                </div>
            </div>
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
                                    <span className={ba.span}>關鍵字</span>
                                    <div>
                                        <input type="text" class={`${ba.ccc} ${ba.div13}`}
                                            placeholder="請輸入關鍵字" />
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
                                        <span className={`${ba.div17} ${ba.span}`}>縣市</span>
                                        <div class={`${ba.selectimg} ${ba.font}`}>
                                            <select name="" id="" className={`${ba.div18} ${ba.select}`} onChange={(e) => { setteamselect(e.target.value) }}>
                                                <option value="台中市">台中市</option>
                                                <option value="台北市">台北市</option>
                                                <option value="高雄市">高雄市</option>
                                            </select>
                                            <img class="" src={Group41} alt="" className={ba.img} />
                                        </div>
                                        <span className={`${ba.div19} ${ba.span}`}>地區</span>
                                        <div class={`${ba.selectimg} ${ba.font}`}>
                                            <select name="" id="" className={`${ba.div20} ${ba.select}`} onChange={(e) => { setteamselect2(e.target.value) }}>
                                                <option value="西屯區">西屯區</option>
                                                <option value="北屯區">北屯區</option>
                                                <option value="南屯區">南屯區</option>
                                            </select>
                                            <img class="" src={Group41} alt="" className={ba.img} />
                                        </div>
                                    </div>
                                    <span className={ba.span}>球隊名稱</span>
                                    <div>
                                        <input type="text" class={`${ba.ccc} ${ba.div21}`}
                                            placeholder="請輸入關鍵字" />
                                    </div>
                                    <span className={`${ba.div23} ${ba.span}`}>場館名稱</span>
                                    <div>
                                        <input type="text" class={`${ba.ccc} ${ba.div22}`}
                                            placeholder="請輸入關鍵字" />
                                    </div>
                                </div>

                                <div class={`mt-auto`}>
                                    <input type="submit" value="搜尋" class={ba.submit} onClick={bbb} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- 轉租搜尋 --> */}
                        <div className={ba.div24} style={{ display: rentseach }} id="rentsearch">
                            <form action="" class={`d-flex flex-column ${ba.div25}`}>
                                <div className={ba.div26}>
                                    <span className={ba.span}>日期</span>
                                    <div class={`d-flex flex-column`}>
                                        <div class={`${ba.dateimg} ${ba.font}`}>
                                            <input className={`${ba.div27} ${ba.date}`} type="date" />
                                            <img class={ba.selectedDate} src={Group41} alt="" />
                                        </div>
                                        <span className={`${ba.div28} ${ba.span}`}>縣市</span>
                                        <div class={`${ba.selectimg} ${ba.font}`}>
                                            <select name="" id="" className={`${ba.div29} ${ba.select}`}>
                                                <option value="">台中市</option>
                                                <option value="">台北市</option>
                                                <option value="">高雄市</option>
                                            </select>
                                            <img src={Group41} alt="" className={ba.img} />
                                        </div>
                                        <span className={`${ba.div30} ${ba.span}`}>地區</span>
                                        <div class={`${ba.selectimg} ${ba.font}`}>
                                            <select name="" id="" className={`${ba.div31} ${ba.select}`}>
                                                <option value="">西屯區</option>
                                                <option value="">北屯區</option>
                                                <option value="">南屯區</option>
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
                                    <input type="submit" value="搜尋" class={ba.submit} />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={`col-md  d-flex flex-column ${ba.boxshadow} ${ba.div34}`}>
                        <div class={`d-flex ${ba.div35}`}>
                            {/* <!-- 按鈕 --> */}
                            <div class={`col-4 ${ba.button3} ${zeroda1 === true ? ba.focus123 : ''} `} id="zeroda" onClick={zeroda} tabIndex="0">零打</div>
                            <div class={`col-4 ${ba.button3} ${team1 === true ? ba.focus123 : ''}`} id="ballteam" onClick={team} tabIndex="0">球隊</div>
                            <div class={`col-4 ${ba.button3} ${rent1 === true ? ba.focus123 : ''}`} id="rent" onClick={rent} tabIndex="0">轉租</div>
                        </div>
                        {/* <!-- 零打文章列表 --> */}
                        <div className={`d-flex flex-column ${ba.div36}`} id="zerodadiv" style={{ display: zerodadiv }}>
                            {title}
                            {content}
                        </div>
                        {/* <!-- 轉租列表 --> */}
                        <div className={ba.div49} id="rentdiv" style={{ display: rentdiv }}>
                            <div class={`row ${ba.div51}`}>
                                <div class={`col d-flex flex-column ${ba.div38}`}>
                                    {/* <!-- 搜尋結果 --> */}
                                    <div class={`d-flex ${ba.font2} ${ba.div52}`}>
                                        <div class={`col-2 ${ba.div38}`}>2022/12/09</div>
                                        <div class={`col-2 ${ba.div38}`}>台中市</div>
                                        <div class={`col-2 ${ba.div38}`}>西屯區</div>
                                        <div class={`col-3 ${ba.div38}`}>群月羽球館</div>
                                        <div class={`col-3 d-flex justify-content-center ${ba.div38}`}>
                                            <div class={`${ba.button1} ${ba.div53}`}>編輯</div>
                                            <div class={ba.button1}>刪除</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- footer --> */}
            <div class="footer">
                <div class="fContent">
                    <div>Copyright © 2022 GOsport. 保留一切權利。</div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Backarticle2;