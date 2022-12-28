import React, { Component } from 'react';
import basic from './basic.module.css';
import notice from "./icon/notice.svg";
import user from "./icon/user.svg";
import team1 from './img/team1.jpg';

class Basic extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                {/* <!-- 導覽列 --> */}
                <div className="navbar">
                    <div className="nContent">
                        <div className="nLeft">
                            <div>GOsport</div>
                        </div>
                        <div className="nRight">
                            <div><a href="">租場地</a></div>
                            <div><a href="">交流區</a></div>
                            <div><a href="">成為場地方</a></div>
                            <div><a href="">Q&A</a></div>
                            <img src={notice} alt=""/>
                            <img src={user}></img>
                        </div>
                    </div>
                </div>
                {/* <!-- 主要內容 --> */}
                <div className={`${basic.main}`}>
                <div className={`${basic.mContent}`}>
                    <div>
                        <div className={`${basic.mFilter}`}>基本資料</div>
                        <div className={`${basic.mFilter}`}>成員</div>
                        <div className={`${basic.mFilter}`}>基金</div>
                        <div className={`${basic.mFilter}`}>支出</div>
                        <div className={`${basic.mFilter}`}>活動</div>
                    </div>
                    <div>
                        <button>編輯</button>
                        <div><img src={team1}></img></div>
                        <div className={`${basic. mBigTitle}`}>鐵血軍團</div>
                        <div className={`${basic.mTitle}`}>場館</div>
                        <div className={`${basic.mText}`}>群月羽球館</div>
                        <div className={`${basic.mTitle}`}>縣市</div>
                        <div className={`${basic.mText}`}>台中市</div>
                        <div className={`${basic.mTitle}`}>區域</div>
                        <div className={`${basic.mText}`}>后里區</div>
                        <div className={`${basic.mTitle}`}>週期</div>
                        <div className={`${basic.mText}`}>星期三</div>
                        <div className={`${basic.mTitle}`}>時段</div>
                        <div className={`${basic.mText}`}>09:00-11:00</div>
                        <div className={`${basic.mTitle}`}>程度</div>
                        <div className={`${basic.mText}`}>新手</div>
                        <div className={`${basic.mTitle}`}>零打費用</div>
                        <div className={`${basic.mText}`}>300</div>
                        <div className={`${basic.mTitle}`}>描述</div>
                        <div className={`${basic.mText}`}>歡迎一起打球～<br />我們每個月固定繳三百元當作共同支出耗材費唷～～～<br />我們每個月固定繳三百元當作共同支出耗材費唷～～～<br />我們每個月固定繳三百元當作共同支出耗材費唷～～～</div>
                        
                    </div>
                </div>
            </div>
                {/* <!-- footer --> */}
                <div className="footer">
                    <div className="fContent">
                        <div>Copyright © 2022 GOsport. 保留一切權利。</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Basic;