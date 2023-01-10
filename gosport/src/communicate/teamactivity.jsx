import React from 'react';
import commmm from "./teamactivity.module.css";
import activitypic from "./icon/Rectangle 640.svg";
import leader from "./icon/Ellipse.svg";
import star from "./icon/star.svg";

const TeamActivity = () => {

    // const [message, setMessage] = suseState('');


    return (
        <React.Fragment>
            <div className={commmm.activitydetail}>
                {/* 活動內容 */}
                <div className={commmm.activityinfo}>
                    <div className={commmm.activity_img}><img src={activitypic} alt="" /></div>
                    <div className={commmm.activityInfo}>
                        <h1>12月聖誕隊聚</h1>
                        <input type="text" value="   聚餐" className={commmm.relation} />
                        <div className={commmm.date}>
                            <span className={commmm.span}>日期</span><br />
                            <input type="text" value="2022/12/25" className={commmm.dateinput} />
                        </div>
                        <div className={commmm.time}>
                            <span className={commmm.span}>時間</span><br />
                            <input type="text" value="19:00-20:00" className={commmm.timeinput} />
                        </div>
                        <div className={commmm.place}>
                            <span className={commmm.span}>地點</span><br />
                            <input type="text" value="金色三麥" className={commmm.placeinput} />
                        </div>
                        <div className={commmm.describe}>
                            <span className={commmm.span}>描述</span><br />
                            <input type="text" value="歡迎一起打球~" className={commmm.describeinput} />
                        </div>
                        <div className={commmm.fee}>
                            <span className={commmm.span}>費用</span><br />
                            <input type="text" value="300" className={commmm.feeinput} />
                        </div>
                        <div className={commmm.member}>
                            <span className={commmm.span}>成員</span><br />
                            <img src={leader} alt="" />
                            <img src={leader} alt="" />
                            <img src={leader} alt="" />
                            <img src={leader} alt="" />
                            <img src={leader} alt="" />
                            <img src={leader} alt="" />
                            <img src={leader} alt="" />
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