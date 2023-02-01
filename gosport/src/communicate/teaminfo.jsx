import React, { useState } from "react";
import commm from './teaminfo.module.css'
import pic from './icon/Rectangle 639.svg';
import leader from './icon/Ellipse.svg';
import m1 from './icon/Ellipse 16.jpg';
import m2 from './icon/Ellipse 17.jpg';
import m3 from './icon/Ellipse 18.jpg';
import m4 from './icon/Ellipse 19.jpg';
import m5 from './icon/Ellipse 20.jpg';
import m6 from './icon/Ellipse 21.jpg';
import m7 from './icon/Ellipse 22.jpg';
import actitive from './icon/Rectangle.svg';
import star from './icon/star.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Teamactiviity from './teamactivity'

const TeamInfo = ({ datateam, activityinfo }) => {
    // const datateam = props.datateam;
    console.log(datateam);
    console.log(activityinfo);

    const [activtiydata, setActivtiydata] = useState({})
    const [activityteamdiv, setActivityteamdiv] = useState(false);
    const opendataactivity = (ind) => {
        setActivtiydata(activityinfo[ind])
        setActivityteamdiv(!false);
    }
    const Teamactivitydiv = activityteamdiv === true ? 'block' : 'none';


    return (
        <React.Fragment>
            <div className={commm.Team}>
                {/* 球隊 */}
                <div className={`row ${commm.teamInfo}`}>
                    {/* 圖片 */}
                    <div className={`col-3 ${commm.teamimg}`}>
                        <img src={pic} alt="" />
                        <div className={commm.leader}>隊長 <br />
                            <div><img src={leader} alt="" /></div>
                        </div>
                        <div>成員 <br />
                            <div>
                                <img src={m1} alt="" className={commm.member} />
                                <img src={m2} alt="" className={commm.member} />
                                <img src={m3} alt="" className={commm.member} />
                                <img src={m4} alt="" className={commm.member} />
                                <br />
                                <img src={m5} alt="" className={commm.member} />
                                <img src={m6} alt="" className={commm.member} />
                                <img src={m7} alt="" className={commm.member} />
                            </div>
                        </div>
                    </div>
                    {/* 資訊 */}
                    <div className={`col-8 ${commm.teamname}`}>
                        <h1>{datateam.tname}</h1> <br />
                        <span className={commm.title}>場館</span> <br />
                        <span className={commm.content}>{datateam.sidename}</span> <br /><br />
                        <span className={commm.title}>地址</span><br />
                        <span className={commm.content}>{datateam.address}</span> <br /><br />
                        <span className={commm.title}>週期</span><br />
                        <span className={commm.content}>{datateam.week}</span> <br /><br />
                        <span className={commm.title}>時段</span><br />
                        <span className={commm.content}>{datateam.starttime}:00-{datateam.endtime}:00</span> <br /><br />
                        <span className={commm.title}>程度</span><br />
                        <span className={commm.content}>{datateam.level}</span> <br /><br />
                        <span className={commm.title}>會費</span><br />
                        <span className={commm.content}>{datateam.fee}</span> <br /><br />
                        <span className={commm.title}>描述</span><br />
                        <span className={commm.content}>{datateam.text}</span> <br /><br />
                    </div>
                    {/* 加入按鈕 */}
                    <div className={commm.join}>
                        <input type="text" value="        報名" className={commm.joinbutton} />
                    </div>
                </div>
                {/* 按鈕 */}
                <div className={commm.button}>
                    <input type="text" value="     打球" className={commm.relation} />
                    <input type="text" value="     聚餐" className={commm.relation} />
                    <input type="text" value="     其他" className={commm.relation} />
                </div>
                {/* 活動 */}
                <div className={commm.teamactivity}>
                    {activityinfo.map((v, k) => {
                        return (
                            <React.Fragment>
                                <div className={commm.activity} onClick={() => { opendataactivity(k) }}>
                                    <div className={`row ${commm.activity_info}`}>
                                        <div className={`col-3 ${commm.activity_img}`}> <img src={actitive} alt="" /></div>
                                        <div className={`col-8 ${commm.activity_in}`}>
                                            <h2>{v.title}</h2>
                                            <span>{v.startdate}</span><br /><br /><br />
                                            <input type="text" className={commm.activity_fo} value="  人數" /><span>  6    </span>
                                            <input type="text" className={commm.activity_fo} value="  地點" /><span>{v.location}</span>
                                            <input type="text" className={commm.activity_fo} value="  支出" /><span>{v.pay}</span>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>
                {/* 留言 */}
                <div className={commm.message}>
                    <div className={commm.msg}>
                        <div className={commm.img}>
                            <img src={leader} alt="" /><br />
                            <img src={star} alt="" />
                        </div>
                        <div className={commm.name}>
                            <h4>南區金城武</h4>
                            <input type="text" className={commm.level} value="  程度" /><span>高手</span>
                        </div>
                        <div className={commm.msgtext}>請問不參加對句可以參加球隊嗎?</div>
                        <div className={commm.msgtime}>2022/12/12 09:05</div>
                    </div>
                    <div className={commm.mess}>
                        <div className={commm.msgmsg}><h4>留言</h4></div>
                        <div className={commm.msgmsgtext}>
                            <input type="text" className={commm.msgmsgmsg} placeholder="哈囉 想請問..." />
                        </div>
                        <div className={commm.submit}><input type="text" className={commm.submitbutton} value="   送出" /></div>
                    </div>
                </div>
            </div>
            <div className={commm.teamteamteam} style={{ display: Teamactivitydiv }}>
                <Teamactiviity activtiydata={activtiydata}/>
            </div>
        </React.Fragment>
    );

}

export default TeamInfo;