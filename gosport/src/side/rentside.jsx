import React, { useState } from 'react';
import side from './rentside.module.css';
import cc from './cc.module.css';
import arr from './icon/arrowup2.svg';
import ball from './icon/球類別.png';
import a1 from "./icon/方向 (3).png";
import a2 from "./icon/方向.png";
import a3 from "./icon/方向 (1).png";
import a4 from "./icon/方向 (2).png";
import a5 from "./icon/Group 41.png";


const Rentside = () => {
    return (
        <React.Fragment>
            <div className={side.div7}>
                <div style={{ height: 325 }} className={cc.ezsurch1}>
                    <div id="London" style={{ padding: 0, paddingRight: 50, paddingLeft: 50 }} className={cc.tabcontent}>
                        <form action="">
                            <div id="local" className={cc.d2}>
                                <p className={cc.d3}>類別</p>
                                <img className={cc.d4} src={ball} alt="" />
                                <p className={cc.d5}>地區</p>
                                <img className={`${cc.d6} ${cc.selectedDate}`} src={arr} />
                                <img className={`${cc.d7} ${cc.selectedDate}`} src={arr} />
                                <select name="city" className={cc.county} onChange={(e) => this.change(e)}>
                                    <option value="1">台中</option>
                                </select>
                                <select name="town" className={cc.district}>
                                    <option value="中區">中區</option>
                                    <option value="北區">北區</option>
                                    <option value="南區">南區</option>

                                </select>

                            </div>

                            <div className={cc.d8}>
                                <p className={cc.d9}>日期</p>
                                <p className={cc.d10}>開始時間</p>
                                <p className={cc.d11}>結束時間</p>
                            </div>

                            <input className={cc.d12} type="date" id="start"
                                name="trip-start" value="2022-12-19" min="2022-12-19" max="2033-12-31" />
                            <img className={`${cc.d13} ${cc.selectedDate}`} src={arr} />

                            <span className={cc.d14}>~</span>

                            <input className={cc.d15} type="date" id="start"
                                name="trip-start" value="2018-07-22" min="2022-12-19" max="2033-12-31" />
                            <img className={`${cc.d16} ${cc.selectedDate}`} src={arr} />

                            <input className={cc.d17} type="time" value="13:14"
                                step="300" />
                            <img className={`${cc.d18} ${cc.selectedDate}`} src={arr} />

                            <input className={cc.d19} type="time" value="13:14"
                                step="300" />
                            <img className={`${cc.d20} ${cc.selectedDate}`} src={arr} />


                            <div className={cc.d21}>
                                <p className={cc.d22}>關鍵字</p>
                            </div>
                            <label className={cc.d23} for="">
                                <input className={cc.d24}
                                    type="text" placeholder="請輸入關鍵字" />
                            </label>
                            <div className={cc.d25}>
                                <p className={cc.d26}>關鍵字</p>

                            </div>

                            <label className={cc.d27}>
                                <input className={cc.d28} type="checkbox" value="停車場" />
                                <span className={cc.d29}>停車場</span>
                            </label>
                            <label className={cc.d30}>
                                <input className={cc.d31} type="checkbox" value="淋浴間" />
                                <span className={cc.d32}>淋浴間</span>
                            </label>
                            <label className={cc.d33}>
                                <input className={cc.d34} type="checkbox" value="身障友善" />
                                <span className={cc.d35}>身障友善</span>
                            </label>
                            <button type="submit" className={cc.serch}>快速搜尋</button>
                        </form>
                    </div>
                </div>
                {/* <!-- 標籤欄 --> */}
                <div class={`row d-flex ${side.div8}`}>
                    <div class="d-flex">
                        <div class={side.buttom1}>
                            羽球
                        </div>
                    </div>
                    <div class="d-flex ml-auto">
                        <div class={side.typecol}>價格由低到高
                            <img src={a5} alt="" />
                        </div>
                    </div>
                </div>
                {/* <!-- 球場顯示 --> */}
                <div class={`row ${side.search} d-flex ${side.div1}`}>
                    <div class={`col-md-4 ${side.div2}`}>
                        <img src="" alt="" />
                    </div>
                    <div class={`col-md-8 d-flex flex-column ${side.div3}`}>
                        <div class={`${side.fontsize1} ${side.div4}`}>群月羽球場</div>
                        <div class={side.fontsize3}>台中市西屯區大溪路32號</div>
                        <div class={`d-flex ${side.div5}`}>
                            <div class={`${side.sidediv} ${side.fontsize4}`}>場地費用</div>
                            <span class={`${side.sidespan} ${side.fontsize4}`}>700元</span>
                            <div class={`${side.sidediv} ${side.fontsize4}`}>剩餘數量</div>
                            <span class={`${side.sidespan} ${side.fontsize4}`}>3</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="d-flex justify-content-center col-md-12">
                        <div class={`d-flex ${side.div6}`}>
                            <button class={side.buttom2}><img src={a1} alt="" /></button>
                            <button class={side.buttom2}><img src={a2} alt="" /></button>
                            <div class={side.typecol}>第一頁</div>
                            <button class={side.buttom2}><img src={a3} alt="" /></button>
                            <button class={side.buttom2}><img src={a4} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Rentside;