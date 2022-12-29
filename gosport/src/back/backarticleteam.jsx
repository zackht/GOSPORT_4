import React, { Component } from 'react';
import backteam from './backarticleteam.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import group41 from "./icon/Group 41.png";
import a from "./icon/上傳照片.svg";


class Backteam extends Component {
    state = {}

    render() {
        return (
            <React.Fragment>
                <div className={`container ${backteam.div0}`}>
                    <div className={`row ${backteam.div7}`}>
                        <div>
                            <div className={backteam.div1}>
                                <span className={backteam.font1}>日期</span>
                                <div className={backteam.dateimg}>
                                    <input type="date" name="inputdate" className={`${backteam.date} ${backteam.font}`} />
                                    <img className={backteam.selectedDate} src={group41} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={backteam.div4}>
                            <span className={backteam.font1}>時間</span>
                            <div className={`d-flex`}>
                                <div className={backteam.div2}>
                                    <select name="" id="" className={`${backteam.div3} ${backteam.font}`}>
                                        <option value="">1:00</option>
                                        <option value="">2:00</option>
                                        <option value="">3:00</option>
                                        <option value="">4:00</option>
                                        <option value="">5:00</option>
                                    </select>
                                    <img className={backteam.selectimg} src={group41} alt="" />
                                </div>
                                <div className={backteam.font}>
                                    至
                                </div>
                                <div className={backteam.div5}>
                                    <select name="" id="" className={`${backteam.div3} ${backteam.font}`}>
                                        <option value="">1:00</option>
                                        <option value="">2:00</option>
                                        <option value="">3:00</option>
                                        <option value="">4:00</option>
                                        <option value="">5:00</option>
                                    </select>
                                    <img className={backteam.selectimg} src={group41} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={backteam.div6}>
                            <img src={a} alt="" />
                        </div>
                    </div>
                    <div>
                        <span className={backteam.font1}>類型</span>
                        <div className={`d-flex`}>
                            <div className={backteam.div2}>
                                <select name="" id="" className={`${backteam.div3} ${backteam.font}`}>
                                    <option value="">運動</option>
                                    <option value="">聚餐</option>
                                </select>
                                <img className={backteam.selectimg} src={group41} alt="" />
                            </div>
                            <div className={backteam.font}>
                            </div>
                        </div>
                    </div>
                    <div className={backteam.div8}>
                        <span className={backteam.font1}>標題</span>
                        <div>
                            <input type="text" className={`${backteam.input1} ${backteam.font}`} />
                        </div>
                    </div>
                    <div className={backteam.div8}>
                        <span className={backteam.font1}>標題</span>
                        <div>
                            <textarea name="" id="" cols="30" rows="10" maxlength="100" className={`${backteam.input2} ${backteam.font}`}>

                            </textarea>
                        </div>
                    </div>
                    <div className={backteam.div8}>
                        <span className={backteam.font1}>地點</span>
                        <div>
                            <input type="text" className={`${backteam.input1} ${backteam.font}`} />
                        </div>
                    </div>
                    <div className={backteam.div8}>
                        <span className={backteam.font1}>支出</span>
                        <div>
                            <input type="number" className={`${backteam.input3} ${backteam.font}`} />
                        </div>
                    </div>
                    <div className={backteam.div9}>
                        <span className={backteam.font}>成員</span>
                        <div>
                            成員頭向
                        </div>
                    </div>
                    <div className={`${backteam.div10} d-flex justify-content-around`}>
                        <button className={backteam.button1}>取消</button>
                        <button className={backteam.button2}>儲存</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Backteam;