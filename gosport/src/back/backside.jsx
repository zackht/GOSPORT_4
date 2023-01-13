import React, { useState } from 'react';
import side from './backside.module.css';
import cside from './createside.module.css';
import group41 from "./icon/Group 41.png";
import aa from './icon/上傳照片.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
const Backside = () => {
    // 搜尋場地
    const [startdate, setstartdate] = useState('');
    const [enddate, setenddate] = useState('');
    const [type, settype] = useState('排球');
    const [text, settext] = useState('');
    const [list, setlist] = useState([]);
    const search = () => {
        Axios.post("http://localhost:3001/backsidesearch", {
            startdate: startdate,
            enddate: enddate,
            type: type,
            text: text,
        }).then((response) => {
            console.log(response);
            setlist(response.data);
        });
    }
    // 場地編輯畫面
    const [editlist, seteditlist] = useState([]);
    const [div1, setdiv1] = useState(false);
    const edit = (sideid) => {
        setdiv1(!div1)
        console.log(sideid);
        Axios.post("http://localhost:3001/backsideedit", {
            sideid: sideid,
        }).then((response) => {
            console.log(response);
            seteditlist(response.data);
        });
    }
    return (
        <React.Fragment>
            <div class={`container-fluid ${side.bdiv1}`}>
                <div class={`row ${side.bdiv2}`}>
                    {/* 搜尋欄 */}
                    <div class={`col-md-3 d-flex flex-column ${side.boxshadow} ${side.bdiv3}`}>
                        <div action="" class={`d-flex flex-column ${side.bdiv4}`}>
                            <span class={side.span}>日期區間</span>
                            <div class={`d-flex flex-column ${side.bdiv5}`}>
                                <div class={`${side.dateimg} ${side.font}`}>
                                    <input type="date" class={`${side.bdiv6} ${side.date}`} onChange={(e) => { setstartdate(e.target.value) }} />
                                    <img class={side.bselectedDate} src={group41} alt="" />
                                </div>
                                <div class={`${side.dateimg} ${side.bdiv7}`}>
                                    <input type="date" class={`${side.font} ${side.bdiv8} ${side.date}`} onChange={(e) => { setenddate(e.target.value) }} />
                                    <img class={side.bselectedDate} src={group41} alt="" />
                                </div>
                                <span class={side.span}>球類</span>
                                <div class={`${side.selectimg} ${side.font} ${side.bdiv9}`}>
                                    <select name="" id="" class={`${side.bdiv10} ${side.aselect}`} onChange={(e) => { settype(e.target.value) }} >
                                        <option value="排球">排球</option>
                                        <option value="羽球">羽球</option>
                                        <option value="桌球">桌球</option>
                                    </select>
                                    <img class="" src={group41} alt="" />
                                </div>
                            </div>
                            <div class={side.bdiv11}>
                                <span class={side.span}>關鍵字</span>
                                <div>
                                    <input type="text" class={`${side.ccc} ${side.bdiv12}`} placeholder="請輸入關鍵字" onChange={(e) => { settext(`%${e.target.value}%`) }} />
                                </div>
                            </div>
                            <div class="mt-auto ">
                                <input type="submit" value="搜尋" class={side.submit} onClick={search} />
                            </div>
                        </div>
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
                                {list.map((val, key) => {
                                    let c = new Date(val.addday);
                                    let y = c.getFullYear();
                                    let m = c.getMonth();
                                    let d = c.getDate();
                                    return (
                                        <div class={`d-flex font2 ${side.bdiv17}`} key={key}>
                                            <div class={`col-2 ${side.bdiv15}`}>{`${y}/${m + 1}/${d}`}</div>
                                            <div class={`col-1 ${side.bdiv15}`}>{val.sidetype}</div>
                                            <div class={`col-6 ${side.bdiv15}`}>{val.sidename}</div>
                                            <div class={`col-3 d-flex justify-content-center ${side.bdiv15}`}>
                                                <div class={`${side.button1} ${side.bdiv18}`} onClick={(e) => { edit(val.sideid) }} >編輯</div>
                                                <div class={side.button1}>刪除</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div class={`mt-auto d-flex justify-content-end`}>
                            <div class={side.button2}>新增</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 彈出編輯室窗 */}
            {editlist.map((val, key) => {
                return (
                    <React.Fragment>
                        <div className={`${side.div55}`} style={{ display: (div1) ? 'block' : 'none' }}>
                            <div>
                                <div class={`container ${cside.div0}`}>
                                    <div class={`row ${cside.div1}`}>
                                        <div class={`d-flex ${cside.padding}`}>
                                            <div class={cside.div2}>
                                                <img src={aa} alt="" />
                                            </div>
                                        </div>
                                        <div class={`col d-flex flex-column ${cside.padding}`}>
                                            <div>
                                                <span class={cside.font}>姓名</span>
                                                <div>
                                                    <input type="text" class={`${cside.div3} ${cside.font2}`}  defaultValue={val.bath}/>
                                                </div>
                                            </div>
                                            <div class={cside.div24}>
                                                <span class={cside.font}>球類</span>
                                                <div class={cside.div5}>
                                                    <select name="" id="" class={`${cside.font2} ${cside.div4}`}>
                                                        <option value="">羽球</option>
                                                        <option value="">桌球</option>
                                                        <option value="">排球</option>
                                                    </select>
                                                    <img class={cside.div6} src={group41} alt="" />
                                                </div>
                                            </div>
                                            <div class={cside.div24}>
                                                <span class={cside.font}>設施</span>
                                                <div>
                                                    <input type="checkbox" id="check1" class={cside.div8} />
                                                    <label for="check1" class={`${cside.div7} ${cside.font2}`}>停車場</label>
                                                    <input type="checkbox" id="check2" />
                                                    <label for="check2" class={`${cside.div7} ${cside.font2}`}>淋浴設備</label>
                                                    <input type="checkbox" id="check3" />
                                                    <label for="check3" class={cside.font2}>無障礙環境</label>
                                                </div>
                                            </div>
                                            <div class={cside.div24}>
                                                <span class={cside.font}>營業時間</span>
                                                <div class={`d-flex ${cside.div8}`}>
                                                    <div class={`${cside.font2} ${cside.div12}`}>平日</div>
                                                    <div class={`d-flex`}>
                                                        <div class={cside.div11}>
                                                            <select name="" id="" class={`${cside.font2} ${cside.div9}`}>
                                                                <option value="">09:00</option>
                                                                <option value="">10:00</option>
                                                            </select>
                                                            <img class={cside.div10} src={group41} alt="" />
                                                        </div>
                                                        <div class={`${cside.font2} ${cside.div13}`}>至</div>
                                                        <div class={cside.div11}>
                                                            <select name="" id="" class={`${cside.font2} ${cside.div9}`}>
                                                                <option value="">17:00</option>
                                                                <option value="">18:00</option>
                                                            </select>
                                                            <img class={cside.div10} src={group41} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class={`d-flex ${cside.div14}`}>
                                                    <div class={`${cside.font2} ${cside.div12}`}>假日</div>
                                                    <div class={`d-flex`}>
                                                        <div class={cside.div11}>
                                                            <select name="" id="" class={`${cside.font2} ${cside.div9}`}>
                                                                <option value="">09:00</option>
                                                                <option value="">10:00</option>
                                                            </select>
                                                            <img class={cside.div10} src={group41} alt="" />
                                                        </div>
                                                        <div class={`${cside.font2} ${cside.div13}`}>至</div>
                                                        <div class={cside.div11}>
                                                            <select name="" id="" class={`${cside.font2} ${cside.div9}`}>
                                                                <option value="">17:00</option>
                                                                <option value="">18:00</option>
                                                            </select>
                                                            <img class={cside.div10} src={group41} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class={cside.div24}>
                                                <span class={cside.font}>租期</span>
                                                <div>
                                                    <input type="checkbox" id="check1" class={cside.div8} />
                                                    <label for="check1" class={`${cside.div7} ${cside.font2}`}>日租</label>
                                                    <input type="checkbox" id="check2" />
                                                    <label for="check2" class={`${cside.div7} ${cside.font2}`}>月租</label>
                                                    <input type="checkbox" id="check3" />
                                                    <label for="check3" class={cside.font2}>季租</label>
                                                </div>
                                            </div>
                                            <div class={cside.div24}>
                                                <span class={cside.font}>可預定日期至</span>
                                                <div class={cside.div19}>
                                                    <input type="date" class={cside.div18} />
                                                    <img class={cside.div20} src={group41} alt="" />
                                                </div>
                                            </div>
                                            <div class={cside.div24}>
                                                <span class={cside.font}>尖峰時段</span>
                                                <div class={`d-flex ${cside.div21}`}>
                                                    <div class={`d-flex flex-wrap ${cside.div27}`}> 
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div class={cside.div24}>
                                                <span class={cside.font}>離峰時段</span>
                                                <div class={`d-flex ${cside.div21}`}>
                                                    <div class={`d-flex flex-wrap ${cside.div22}`}>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div class={cside.div24}>
                                                <span class={cside.font}>電話</span>
                                                <div>
                                                    <input type="text" name="" id="" class={cside.div15} />
                                                </div>
                                            </div>
                                            <div class={cside.div24}>
                                                <span class={cside.font}>描述</span>
                                                <div>
                                                    <textarea name="" id="" cols="30" rows="10" class={cside.div16}>

                                                    </textarea>
                                                </div>
                                            </div>
                                            <div class={cside.div24}>
                                                <span class={cside.font}>地址</span>
                                                <div>
                                                    <input type="text" class={cside.div17} />
                                                </div>
                                            </div>
                                            <div class={cside.div24}>
                                                <span class={cside.font}>goole地圖網址</span>
                                                <div>
                                                    <input type="text" class={cside.div17} />
                                                </div>
                                            </div>
                                            <div class={`d-flex ${cside.div24}`}>
                                                <div>
                                                    <span class={cside.font}>尖峰時段費用</span>
                                                    <div>
                                                        <input type="number" class={`${cside.number} ${cside.einputnumber}`}
                                                            onkeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <span class={cside.font}>離峰時段費用</span>
                                                    <div>
                                                        <input type="number" class={`${cside.number} ${cside.einputnumber}`}
                                                            onkeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <span class={cside.font}>數量上限</span>
                                                    <div class={`d-flex`}>
                                                        <div class={cside.numbutton1}>
                                                            <div class={cside.add}>-</div>
                                                        </div>
                                                        <input type={cside.number} class={`${cside.number2} ${cside.einputnumber}`}
                                                            onkeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))" />
                                                        <div class={cside.numbutton2}>
                                                            <div class={cside.minus} >+</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class={`row d-flex justify-content-around ${cside.div23}`}>
                                        <div> <input type="button" value="取消" class={cside.div25} onClick={()=>{setdiv1(!div1)}}/></div>
                                        <div> <input type="submit" value="提交" class={cside.div26}/></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </React.Fragment>
                );
            })}
        </React.Fragment>
    );
}

export default Backside;
