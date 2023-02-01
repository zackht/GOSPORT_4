import React from 'react';
import commmm from "./teamactivity.module.css";
import activitypic from "./icon/Rectangle 640.svg";
import leader from "./icon/Ellipse.svg";
import star from "./icon/star.svg";
import m1 from './icon/Ellipse 16.jpg';
import m2 from './icon/Ellipse 17.jpg';
import m3 from './icon/Ellipse 18.jpg';
import m4 from './icon/Ellipse 19.jpg';
import m5 from './icon/Ellipse 20.jpg';
import m6 from './icon/Ellipse 21.jpg';

const TeamActivity = ({activtiydata}) => {
    // console.log(activtiydata)
    // const [message, setMessage] = suseState('');


    return (
        <React.Fragment>
            <div className={commmm.activitydetail}>
                {/* 活動內容 */}
                <div className={commmm.activityinfo}>
                    <div className={commmm.activity_img}><img src={activitypic} alt="" /></div>
                    <div className={commmm.activityInfo}>
                        <h1>{activtiydata.title}</h1>
                        <input type="text" value={activtiydata.type} className={commmm.relation} />
                        <div className={commmm.date}>
                            <span className={commmm.span}>日期</span><br />
                            <input type="text" value={activtiydata.startdate} className={commmm.dateinput} />
                        </div>
                        <div className={commmm.time}>
                            <span className={commmm.span}>時間</span><br />
                            {/* <input type="text" value="19:00-20:00" className={commmm.timeinput} /> */}
                            <span className={commmm.timeinput}>{activtiydata.starttime}:00-{activtiydata.endtime}:00</span>
                        </div>
                        <div className={commmm.place}>
                            <span className={commmm.span}>地點</span><br />
                            <input type="text" value={activtiydata.location} className={commmm.placeinput} />
                        </div>
                        <div className={commmm.describe}>
                            <span className={commmm.span}>描述</span><br />
                            <input type="text" value={activtiydata.text} className={commmm.describeinput} />
                        </div>
                        <div className={commmm.fee}>
                            <span className={commmm.span}>費用</span><br />
                            <input type="text" value={activtiydata.pay} className={commmm.feeinput} />
                        </div>
                        <div className={commmm.member}>
                            <span className={commmm.span}>成員</span><br />
                            <img className={commmm.teamteamimg} src={m1} alt="" />
                            <img className={commmm.teamteamimg} src={m2} alt="" />
                            <img className={commmm.teamteamimg} src={m3} alt="" />
                            <img className={commmm.teamteamimg} src={m4} alt="" />
                            <img className={commmm.teamteamimg} src={m5} alt="" />
                            <img className={commmm.teamteamimg} src={m6} alt="" />
                        </div>
                    </div>
                </div>
                {/* 留言板 */}
                <div className={commmm.message}>
                    <div className={commmm.msg}>
                        <div className={commmm.img}>
                            <img src={leader} alt="" /><br />
                            <img src={star} alt="" />
                        </div>
                        <div className={commmm.name}>
                            <h4>南區金城武</h4>
                            <input type="text" className={commmm.level} value=" 程度" /><span>高手</span>
                        </div>
                        <div className={commmm.msgtext}>
                            <input type="text" value="今天好開心" className={commmm.Msgtext} /> 
                        </div>
                        <div className={commmm.msgtime}>2022/12/12 09:05</div>
                    </div>
                    <div className={commmm.board}>
                        <span className={commmm.msgmsgmsg}>留言</span>
                        <div className={commmm.msboard}>
                        <input type="text" className={commmm.msgboard} placeholder="請問..."/>
                        </div>
                        <div className={commmm.msgmsgtime}>2022/12/12 09:05</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default TeamActivity;