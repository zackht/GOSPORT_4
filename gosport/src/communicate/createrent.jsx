import React, { useState } from 'react';
import com from "./createzero.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";



const CreatRent = () => {

    //交流零打新增
    const [useridcrent, setUseridcrent] = useState('');
    const [fieldnamecrent, setFieldnamecrent] = useState('');
    const [ballgamescrent, setBallgamescrent] = useState('')
    const [countycrent, setCountycrent] = useState('台中')
    const [areacrent, setAreacrent] = useState('')
    const [addresscrent, setAddresscrent] = useState('')
    const [startdatecrent, setStartdatecrent] = useState('')
    const [enddatecrent, setEnddatecrent] = useState('')
    const [starttimecrent, setStarttimecrent] = useState('')
    const [endtimecrent, setEndtimecrent] = useState('')
    const [numbercrent, setNumbercrent] = useState('')
    const [costcrent, setCostcrent] = useState('')
    const [contentcrent, setContentcrent] = useState('')

    const rentcreate = () => {
        Axios.post("http://localhost:3001/rentcreate", {
            useridcrent: useridcrent,
            fieldnamecrent: fieldnamecrent,
            ballgamescrent: ballgamescrent,
            countycrent: countycrent,
            areacrent: areacrent,
            addresscrent: addresscrent,
            startdatecrent: startdatecrent,
            enddatecrent: enddatecrent,
            starttimecrent: starttimecrent,
            endtimecrent: endtimecrent,
            numbercrent: numbercrent,
            costcrent: costcrent,
            contentcrent: contentcrent,
        }).then((response) => {
            console.log(response);
            // setZeroarticle(response.data);
        })
    }

    const time = [
        '0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '0:00'
    ];
    const Taichungarea = [
        "中區", "東區", "西區", "南區", "北區", "西屯區", "南屯區", "北屯區", "豐原區", "大里區", "太平區", "清水區", "沙鹿區", "大甲區", "東勢區", "梧棲區", "烏日區", "神岡區", "大肚區", "大雅區", "后里區", "霧峰區", "潭子區", "龍井區", "外埔區", "和平區", "石岡區", "大安區", "新社區"
    ];

    return (
        <React.Fragment>
            <div className={com.createZero}>
                <div className={com.addcontent}>
                    {/* <!-- 場館 --> */}
                    <div className={com.addplace}>
                        <label for="add-place" className={com.contenttitle}>場館</label><br />
                        <input type="text" id="add-place" className={com.contentdescribe} onChange={(e) => setFieldnamecrent(e.target.value)} />
                        <input type="text" onChange={(e) => setUseridcrent(e.target.value)}/>
                    </div>
                    {/* 球類 */}
                    <div className={com}>
                        <label for="add-ballgames" className={com.contenttitle}>球類</label><br />
                        <select onChange={(e) => setBallgamescrent(e.target.value)}>
                            <option value="羽球">羽球</option>
                            <option value="籃球">籃球</option>
                        </select>
                    </div>
                    {/* <!-- 縣市地區 --> */}
                    <div className={com.addarea}>
                        {/* <!-- 縣市 --> */}
                        <div className={com.addcity}>
                            <span className={com.contenttitle}>縣市</span><br />
                            <select className={com.option} onChange={(e) => setCountycrent(e.target.value)}>
                                <option value="台中">台中</option>
                            </select>
                        </div>
                        {/* <!-- 地區 --> */}
                        <div className={com.addArea}>
                            <span className={com.contenttitle}>地區</span><br />
                            <select className={com.option} onChange={(e) => setAreacrent(e.target.value)}>
                                {Taichungarea.map((val, key) => {
                                    return (<option key={key} value={val}>{val}</option>);
                                })}
                            </select>
                        </div>
                    </div>
                    {/* <!-- 地址 --> */}
                    <div className={com.addaddress}>
                        <label for="add-address" className={com.contenttitle}>地址</label><br />
                        <input type="text" id="add-address" className={com.contentdescribe} onChange={(e) => setAddresscrent(e.target.value)} />
                    </div>
                    {/* <!-- 日期 --> */}
                    <div className={com.adddate}>
                        <label for="add-date" className={com.contenttitle}>日期</label><br />
                        <input type="date" id="add-date" className={com.contentdescribe} onChange={(e) => setStartdatecrent(e.target.value)}/>
                        至
                        <input type="date" id="add-date" className={com.contentdescribe} onChange={(e) => setEnddatecrent(e.target.value)}/>
                    </div>
                    {/* <!-- 時段 --> */}
                    <div className={com.adddatetime}>
                        <label for="add-datetime" className={com.contenttitle}>時段</label><br />
                        <select onChange={(e) => setStarttimecrent(e.target.value)}>
                            {time.map((val, key) => {
                                return (<option key={key} value={key + 1}>{val}</option>);
                            })}
                        </select>
                        至
                        <select onChange={(e) => setEndtimecrent(e.target.value)}>
                            {time.map((val, key) => {
                                return (<option key={key} value={key + 1}>{val}</option>);
                            })}
                        </select>
                    </div>
                    {/* <!-- 人數 --> */}
                    <div className={com.addperson}>
                        <span className={com.contenttitle}>人數</span>
                        <div className={com.button_container}>
                            <input type="number" onChange={(e) => setNumbercrent(e.target.value)} />
                        </div>
                    </div>
                    {/* <!-- 費用 --> */}
                    <div className={com.addfee}>
                        <label for="add-addfee" className={com.contenttitle}>費用</label><br />
                        <input type="text" id="add-addfee" className={com.contentdescribe} onChange={(e) => setCostcrent(e.target.value)}/>
                    </div>
                    {/* <!-- 描述 --> */}
                    <div className={com.adddescribe}>
                        <label for="add-describe" className={com.contenttitle}>描述</label><br />
                        <input type="text" id="add-describe" className={com.contentdescribe_text} onChange={(e) => setContentcrent(e.target.value)}/>
                    </div>
                    {/* <!-- 取消儲存鈕 --> */}
                    <div className={com.button}>
                    <button className={com.cancel}>取消</button>
                        <button className={com.store} onClick={rentcreate}>儲存</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CreatRent;