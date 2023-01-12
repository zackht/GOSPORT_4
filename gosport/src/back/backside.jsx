import React, { useState } from 'react';
import side from './backside.module.css';
import group41 from "./icon/Group 41.png";
import 'bootstrap/dist/css/bootstrap.min.css';
const backside = () => {
        return (
            <React.Fragment>
                <div class={`container-fluid ${side.bdiv1}`}>
                    <div class={`row ${side.bdiv2}`}>
                        {/* 搜尋欄 */}
                        <div class={`col-md-3 d-flex flex-column ${side.boxshadow} ${side.bdiv3}`}>
                            <form action="" class={`d-flex flex-column ${side.bdiv4}`}>
                                <span class={side.span}>日期區間</span>
                                <div class={`d-flex flex-column ${side.bdiv5}`}>
                                    <div class={`${side.dateimg} ${side.font}`}>
                                        <input type="date" class={`${side.bdiv6} ${side.date}`} />
                                        <img class={side.bselectedDate} src={group41} alt="" />
                                    </div>
                                    <div class={`${side.dateimg} ${side.bdiv7}`}>
                                        <input type="date" class={`${side.font} ${side.bdiv8} ${side.date}`} />
                                        <img class={side.bselectedDate} src={group41} alt="" />
                                    </div>
                                    <span class={side.span}>球類</span>
                                    <div class={`${side.selectimg} ${side.font} ${side.bdiv9}`}>
                                        <select name="" id="" class={`${side.bdiv10} ${side.aselect}`}>
                                            <option value="">排球</option>
                                            <option value="">羽球</option>
                                            <option value="">桌球</option>
                                        </select>
                                        <img class="" src={group41} alt="" />
                                    </div>
                                </div>
                                <div class={side.bdiv11}>
                                    <span class={side.span}>關鍵字</span>
                                    <div>
                                        <input type="text" class={`${side.ccc} ${side.bdiv12}`} placeholder="請輸入關鍵字" />
                                    </div>
                                </div>
                                <div class="mt-auto ">
                                    <input type="submit" value="搜尋" class={side.submit} />
                                </div>
                            </form>
                        </div>
                        {/* 顯示欄 */}
                        <div class={`col-md ${side.boxshadow} ${side.bdiv13}`}>
                            <div class={`row ${side.bdiv14}`}>
                                <div class={`col-2 ${side.font1} ${side.bdiv15}`}>申請日期</div>
                                <div class={`col-1 ${side.font1} ${side.bdiv15}`}>球類</div>
                                <div class={`col-6 ${side.font1} ${side.bdiv15}`}>場館名稱</div>
                                <div class={`col-3 ${side.font1} ${side.bdiv15}`}></div>
                            </div>
                            <div class={`row ${side.bdiv16}`}>
                                <div class={`col d-flex flex-column ${side.bdiv15}`}>
                                    {/* <!-- 搜尋結果 --> */}
                                    <div class={`d-flex font2 ${side.bdiv17}`}>
                                        <div class={`col-2 ${side.bdiv15}`}>2022/12/09</div>
                                        <div class={`col-1 ${side.bdiv15}`}>羽球</div>
                                        <div class={`col-6 ${side.bdiv15}`}>群月羽球館</div>
                                        <div class={`col-3 d-flex justify-content-center ${side.bdiv15}`}>
                                            <div class={`${side.button1} ${side.bdiv18}`}>編輯</div>
                                            <div class={side.button1}>刪除</div>
                                        </div>
                                    </div>
                                    <div class={`mt-auto d-flex justify-content-end`}>
                                        <div class={side.button2}>新增</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
}

export default backside;
// SELECT * FROM (side inner join sidedevice 
//     on side.sideid = sidedevice.sideid AND side.sideid=1) inner JOIN
//     sidetime 
//     on side.sideid = sidetime.sideid AND side.sideid=1
// 搜尋所有場地資料