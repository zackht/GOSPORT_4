import React from "react";
import "./nav.css";
import notice from './icon/notice.svg';
import user from './icon/user.svg';
import Search from './search';
import commm from './teaminfo.module.css'
import pic from './icon/Rectangle 639.svg';
import leader from './icon/Ellipse.svg';
import actitive from './icon/Rectangle.svg';
import star from './icon/star.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

const TeamInfo = () => {
    return (
        <React.Fragment>
            {/* navbar */}
            <div className="navbar position_relative">
                <div className="nContent">
                    <div className="nLeft">
                        <div>GOsport</div>
                    </div>
                    <div className="nRight">
                        <div><a href="/#">首頁</a></div>
                        <div><a href="/#">租場地</a></div>
                        <div><a href={Search}>交流區</a></div>
                        <div><a href="/#">Q&A</a></div>
                        <img src={notice} alt=""></img>
                        <img src={user} alt=""></img>
                    </div>
                </div>
            </div>
            <div className={commm.Team}>
                {/* 球隊 */}
                <div className={`row ${commm.teamInfo}`}>
                    {/* 圖片 */}
                    <div className={`col-3 ${commm.teamimg}`}>
                        <img src={pic} alt="" />
                        <div className={commm.leader}>隊長 <br />
                            <div><img src={leader} alt="" /></div>
                        </div>
                        <div className={commm.member}>成員 <br />
                            <div>
                                <img src={leader} alt="" />
                                <img src={leader} alt="" />
                                <img src={leader} alt="" />
                                <img src={leader} alt="" />
                                <br />
                                <img src={leader} alt="" />
                                <img src={leader} alt="" />
                                <img src={leader} alt="" />
                            </div>
                        </div>
                    </div>
                    {/* 資訊 */}
                    <div className={`col-8 ${commm.teamname}`}>
                        <h1>鐵血軍團</h1> <br />
                        <span className={commm.title}>場館</span> <br />
                        <span className={commm.content}>群月羽球館</span> <br /><br />
                        <span className={commm.title}>地址</span><br />
                        <span className={commm.content}>台中市西區</span> <br /><br />
                        <span className={commm.title}>週期</span><br />
                        <span className={commm.content}>星期三</span> <br /><br />
                        <span className={commm.title}>時段</span><br />
                        <span className={commm.content}>09:00-10:00</span> <br /><br />
                        <span className={commm.title}>程度</span><br />
                        <span className={commm.content}>不限</span> <br /><br />
                        <span className={commm.title}>會費</span><br />
                        <span className={commm.content}>300</span> <br /><br />
                        <span className={commm.title}>描述</span><br />
                        <span className={commm.content}>限男性</span> <br /><br />
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
                <div className={commm.activity}>
                    <div className={`row ${commm.activity_info}`}>
                        <div className={`col-3 ${commm.activity_img}`}> <img src={actitive} alt="" /></div>
                        <div className={`col-8 ${commm.activity_in}`}>
                            <h2>九月競賽</h2>
                            <span>2022/12/20</span><br /><br /><br />
                            <input type="text" className={commm.activity_fo} value="  人數" /><span>  8    </span>
                            <input type="text" className={commm.activity_fo} value="  地點" /><span>群月羽球館</span>
                            <input type="text" className={commm.activity_fo} value="  支出" /><span>  300</span>
                        </div>
                    </div>
                    <div className={`row ${commm.activity_info}`}>
                        <div className={`col-3 ${commm.activity_img}`}> <img src={actitive} alt="" /></div>
                        <div className={`col-8 ${commm.activity_in}`}>
                            <h2>九月競賽</h2>
                            <span>2022/12/20</span><br /><br /><br />
                            <input type="text" className={commm.activity_fo} value="  人數" /><span>  8    </span>
                            <input type="text" className={commm.activity_fo} value="  地點" /><span>群月羽球館</span>
                            <input type="text" className={commm.activity_fo} value="  支出" /><span>  300</span>
                        </div>
                    </div>
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
                            <input type="text" className={commm.msgmsgmsg} placeholder="哈囉 想請問..."/>
                        </div>
                        <div className={commm.submit}><input type="text" className={commm.submitbutton} value="   送出" /></div>
                    </div>
                </div>
            </div>

            {/* footer */}
            <div className="footer">
                <div className="fContent">
                    <div>Copyright © 2022 GOsport. 保留一切權利。</div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default TeamInfo;