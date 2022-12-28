import React, { Component } from 'react';
import backqa from './backqa.module.css';
import notice from "./icon/notice.svg";
import user from "./icon/user.svg";
import group41 from "./icon/Group 41.png";
import 'bootstrap/dist/css/bootstrap.min.css';

class Backqa extends Component {
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
    <div className={`container-fluid ${backqa.div1}`}>
        <div className={`row ${backqa.div2}`}>
            <div className={`col-md-3 d-flex flex-column ${backqa.boxshadow} ${backqa.div3}`}>
                <form action=""className={`d-flex flex-column ${backqa.div4}`}>
                    <span className={backqa.span}>日期區間</span>
                    <div className={`d-flex flex-column ${backqa.div5}`}>
                        <div className={`${backqa.dateimg} ${backqa.font}`}>
                            <input type="date" className={`${backqa.div6} ${backqa.date}`}/><img
                                className={backqa.selectedDate} src={group41} alt=""/>
                        </div>
                        <div className={`${backqa.dateimg} ${backqa.div7}`}>
                            <input type="date" className={`${backqa.font} ${backqa.div8} ${backqa.date}`}/>
                            <img className={`${backqa.selectedDate}`} src={group41} alt=""/>
                        </div>
                        <span className={backqa.span}>類型</span>
                        <div className={`${backqa.selectimg} ${backqa.font} ${backqa.div9}`}>
                            <select name="" id="" className={backqa.div10}>
                                <option value="">零打</option>
                                <option value="">轉租</option>
                                <option value="">球隊</option>
                            </select>
                            <img className="" src={group41} alt=""/>
                        </div>
                    </div>
                    <div className={backqa.div11}>
                        <span className={backqa.span}>關鍵字</span>
                        <div>
                            <input type="text" className={`${backqa.div12} ${backqa.ccc}`} placeholder="請輸入關鍵字"/>
                        </div>
                    </div>
                    <div className={`mt-auto`}>
                        <input type="submit" value="搜尋" className={backqa.submit}/>
                    </div>
                </form>
            </div>
            <div className={`col-md ${backqa.boxshadow} ${backqa.div13}`}>
                <div className={`row ${backqa.div14}`}>
                    <div className={`col-2 ${backqa.font1} ${backqa.div15}`} >發布日期</div>
                    <div className={`col-1 ${backqa.font1} ${backqa.div15}`} >類型</div>
                    <div className={`col-5 ${backqa.font1} ${backqa.div15}`} >標題</div>
                    <div className={`col-1 ${backqa.font1} ${backqa.div15}`} >點擊數</div>
                    <div className={`col-3 ${backqa.font1} ${backqa.div15}`} ></div>
                </div>
                <div className={`row ${backqa.div16}`}>
                    <div className={`col d-flex flex-column ${backqa.div17}`}>
                        {/* <!-- 搜尋結果 --> */}
                        <div className={`d-flex ${backqa.font2} ${backqa.div18}`}>
                            <div className={`col-2 ${backqa.div15}`}>2022/12/09</div>
                            <div className={`col-1 ${backqa.div15}`}>會員</div>
                            <div className={`col-5 ${backqa.div15}`}>加入會員可以幹嘛?</div>
                            <div className={`col-1 ${backqa.div15}`}>5</div>
                            <div className={`col-3 d-flex justify-content-center ${backqa.div15}`}>
                                <div className={`${backqa.button1} ${backqa.div19}`}>編輯</div>
                                <div className={backqa.button1}>刪除</div>
                            </div>
                        </div>
                        <div className={`mt-auto d-flex justify-content-end`}>
                            <div className={backqa.button2}>新增</div>
                        </div>
                    </div>
                </div>
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
 
export default Backqa;