import React from "react";
import notice from './icon/notice.svg';
import user from './icon/user.svg';
import "./nav.css";
import Search from './search';
import com from "./createzero.module.css";

const CreatRent = () => {
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
            <div className={com.createZero}>
                <div className={com.addcontent}>
                    {/* <!-- 場館 --> */}
                    <div className={com.addplace}>
                        <label for="add-place" className={com.contenttitle}>場館</label><br />
                        <input type="text" id="add-place" className={com.contentdescribe} value="群月羽球館" />
                    </div>
                    {/* <!-- 縣市地區 --> */}
                    <div className={com.addarea}>
                        {/* <!-- 縣市 --> */}
                        <div className={com.addcity}>
                            <span className={com.contenttitl}>縣市</span><br />
                            <select className={com.option}>
                                <option>台中</option>
                                <option>彰化</option>
                                <option>南投</option>
                            </select>
                        </div>
                        {/* <!-- 地區 --> */}
                        <div className={com.addArea}>
                            <span className={com.contenttitle}>地區</span><br />
                            <select className={com.option}>
                                <option>南區</option>
                                <option>南屯</option>
                                <option>西區</option>
                            </select>
                        </div>
                    </div>
                    {/* <!-- 地址 --> */}
                    <div className={com.addaddress}>
                        <label for="add-address" className={com.contenttitle}>地址</label><br />
                        <input type="text" id="add-address" className={com.contentdescribe} value="西區民權路314巷11號" />
                    </div>
                    {/* <!-- 日期 --> */}
                    <div className={com.adddate}>
                        <label for="add-date" className={com.contenttitle}>日期</label><br />
                        <input type="date" id="add-date" className={com.contentdescribe} />
                    </div>
                    {/* <!-- 時段 --> */}
                    <div className={com.adddatetime}>
                        <label for="add-datetime" className={com.contenttitle}>時段</label><br />
                        <input type="time" id="add-datetime" value="" /> 至 <input type="time" id="add-datetime" />
                    </div>
                    {/* <!-- 程度 --> */}
                    {/* <div className={com.addlevel}>
                        <span className={com.contenttitle}>程度</span><br />
                        <select>
                            <option>新手</option>
                            <option>普通</option>
                            <option>高手</option>
                        </select>
                    </div> */}
                    {/* <!-- 人數 --> */}
                    <div className={com.addperson}>
                        <span className={com.contenttitle}>人數</span>
                        <div className={com.button_container}>
                            {/* <!-- 減一按鈕(className為"decrease") --> */}
                            <button className={com.decrease}>-</button>
                            <span id="value">0</span>
                            {/* <!-- 加一按鈕(className為"increase") --> */}
                            <button className={com.increase}>+</button>
                            {/* <!-- 歸零按鈕(className為"reset") --> */}
                            {/* <button className="btn reset">reset</button> */}
                        </div>
                    </div>
                    {/* <!-- 費用 --> */}
                    <div className={com.addfee}>
                        <label for="add-addfee" className={com.contenttitle}>費用</label><br />
                        <input type="text" id="add-addfee" className={com.contentdescribe} />
                    </div>
                    {/* <!-- 描述 --> */}
                    <div className={com.adddescribe}>
                        <label for="add-describe" className={com.contenttitle}>描述</label><br />
                        <input type="text" id="add-describe" className={com.contentdescribe} />
                    </div>
                    {/* <!-- 取消儲存鈕 --> */}
                    <div className={com.button}>
                        <input type="button" value="取消" className={com.cancel} />
                        <input type="button" value="儲存" className={com.store} />
                    </div>
                </div>
            </div>
            {/* footers */}
            <div className="footer">
                <div className="fContent">
                    <div>Copyright © 2022 GOsport. 保留一切權利。</div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CreatRent;