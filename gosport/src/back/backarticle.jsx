import React, { Component } from 'react';
import ba from './backarticle.module.css';
import notice from './icon/notice.svg';
import user from './icon/user.svg';
import Group41 from './icon/Group 41.png';

class Backarticle extends Component {
    constructor(props) {
        super(props);
        this.team = React.createRef();
      }
    state = {
        zeroda : true,
        team:false,
        rent:false,
        zerodadiv : true,
        teamdiv:false,
        rentdiv:false,
        zerodabutton: true,
        teambutton : false,
        rentbutton : false
    }

    changezeroda= ()=>{
        let newstate ={...this.state};
        if (newstate.team === true || newstate.rent=== true
            ||newstate.teamdiv === true ||newstate.rentdiv===true
            ||newstate.rentbutton===true || newstate.teambutton ===true) {
            newstate.team=false;
            newstate.teamdiv=false;
            newstate.teambutton =false;
            newstate.rent=false;
            newstate.rentdiv=false;
            newstate.rentbutton =false;
            newstate.zeroda = true;
            newstate.zerodadiv=true;
            newstate.zerodabutton =true;  
        }
        this.setState(newstate);
    }
    changeteam = ()=>{
        let newstate ={...this.state};
        if (newstate.zeroda === true || newstate.rent === true
            ||newstate.zerodadiv === true ||newstate.rentdiv===true
            ||newstate.zerodabutton===true || newstate.rentbutton ===true) {
            newstate.rent=false;
            newstate.rentdiv = false;
            newstate.rentbutton=false;
            newstate.zeroda = false;
            newstate.zerodadiv = false;
            newstate.zerodabutton=false  
            newstate.team=true;
            newstate.teamdiv = true;
            newstate.teambutton=true;
        }
        this.setState(newstate);
    }
    changerent=()=>{
        let newstate ={...this.state};
        if (newstate.zeroda === true || newstate.team === true
            ||newstate.zerodadiv === true ||newstate.teamdiv===true
            ||newstate.zerodabutton===true || newstate.teambutton ===true) {
            newstate.zeroda = false;  
            newstate.zerodadiv = false;  
            newstate.zerodabutton=false;
            newstate.team=false;
            newstate.teamdiv=false;
            newstate.teambutton=false;
            newstate.rent=true;
            newstate.rentdiv=true;
            newstate.rentbutton=true;
        }
        this.setState(newstate);
    }
    render() {
        return (
            <React.Fragment>
                {/* <!-- 導覽列 --> */}
                <div class="navbar">
                    <div class="nContent">
                        <div class="nLeft">
                            <div>GOsport</div>
                        </div>
                        <div class="nRight">
                            <div><a href="">會員管理</a></div>
                            <div><a href="">場地資料</a></div>
                            <div><a href="">交流區文章</a></div>
                            <div><a href="">Q&A</a></div>
                            <img src={notice} alt=""/>
                                <img src={user}></img>
                        </div>
                    </div>
                </div>
                <div class={`container-fluid ${ba.div1}`}>
                    <div class={`row ${ba.div2}`}>
                        <div class={`col-md-3 d-flex flex-column ${ba.boxshadow} ${ba.div3}`}>
                            {/* <!-- 零打搜尋 --> */}
                            <div className={ba.div4} style={{display: (this.state.zeroda ===true) ? "block" : "none"}} id="zerosearch">
                                <form action="" class={`d-flex flex-column ${ba.div5}`}>
                                    <span>日期區間</span>
                                    <div class={`d-flex flex-column ${ba.div6}`} >
                                        <div class={`${ba.dateimg} ${ba.font}`}>
                                            <input type="date" className={ba.div7} />
                                            <img class={ba.selectedDate} src={Group41} alt="" />
                                        </div>
                                        <div class={`${ba.dateimg} ${ba.div8}`}>
                                            <input type="date" class={`${ba.font} ${ba.div9}`} />
                                            <img class={ba.selectedDate} src={Group41} alt="" />
                                        </div>
                                        <span>球類</span>
                                        <div class={`${ba.selectimg} ${ba.font} ${ba.div10}`}>
                                            <select name="" id="" className={ba.div11}>
                                                <option value="">羽球</option>
                                                <option value="">排球</option>
                                                <option value="">桌球</option>
                                            </select>
                                            <img class="" src={Group41} alt="" />
                                        </div>
                                    </div>
                                    <div className={ba.div12}>
                                        <span>關鍵字</span>
                                        <div>
                                            <input type="text" class={`${ba.ccc} ${ba.div13}`}
                                                placeholder="請輸入關鍵字" />
                                        </div>
                                    </div>
                                    <div class={`mt-auto`}>
                                        <input type="submit" value="搜尋" class={ba.submit} />
                                    </div>
                                </form>
                            </div>
                            {/* <!-- 球隊搜尋 --> */}
                            <div className={ba.div14} style={{display: (this.state.team ===true) ? "block" : "none"}} id="ballteamsearch">
                                <form action="" class={`d-flex flex-column ${ba.div15}`}>
                                    <div class={`d-flex flex-column`} >
                                        <div class={`d-flex flex-column ${ba.div16}`}>
                                            <span className={ba.div17}>縣市</span>
                                            <div class={`${ba.selectimg} ${ba.font}`}>
                                                <select name="" id="" className={ba.div18}>
                                                    <option value="">台中市</option>
                                                    <option value="">台北市</option>
                                                    <option value="">高雄市</option>
                                                </select>
                                                <img class="" src={Group41} alt="" />
                                            </div>
                                            <span className={ba.div19}>地區</span>
                                            <div class={`${ba.selectimg} ${ba.font}`}>
                                                <select name="" id="" className={ba.div20}>
                                                    <option value="">西屯區</option>
                                                    <option value="">北屯區</option>
                                                    <option value="">南屯區</option>
                                                </select>
                                                <img class="" src={Group41} alt="" />
                                            </div>
                                        </div>
                                        <span>球隊名稱</span>
                                        <div>
                                            <input type="text" class={`${ba.ccc} ${ba.div21}`}
                                                placeholder="請輸入關鍵字" />
                                        </div>
                                        <span className={ba.div23}>場館名稱</span>
                                        <div>
                                            <input type="text" class={`${ba.ccc} ${ba.div22}`}
                                                placeholder="請輸入關鍵字" />
                                        </div>
                                    </div>

                                    <div class={`mt-auto`}>
                                        <input type="submit" value="搜尋" class={ba.submit} />
                                    </div>
                                </form>
                            </div>
                            {/* <!-- 轉租搜尋 --> */}
                            <div className={ba.div24} style={{display: (this.state.rent ===true) ? "block" : "none"}} id="rentsearch">
                                <form action="" class={`d-flex flex-column ${ba.div25}`}>
                                    <div className={ba.div26}>
                                        <span>日期</span>
                                        <div class={`d-flex flex-column`}>
                                            <div class={`${ba.dateimg} ${ba.font}`}>
                                                <input className={ba.div27} type="date" />
                                                <img class={ba.selectedDate} src={Group41}alt="" />
                                            </div>
                                            <span className={ba.div28}>縣市</span>
                                            <div class={`${ba.selectimg} ${ba.font}`}>
                                                <select name="" id="" className={ba.div29}>
                                                    <option value="">台中市</option>
                                                    <option value="">台北市</option>
                                                    <option value="">高雄市</option>
                                                </select>
                                                <img src={Group41} alt="" />
                                            </div>
                                            <span className={ba.div30}>地區</span>
                                            <div class={`${ba.selectimg} ${ba.font}`}>
                                                <select name="" id="" className={ba.div31}>
                                                    <option value="">西屯區</option>
                                                    <option value="">北屯區</option>
                                                    <option value="">南屯區</option>
                                                </select>
                                                <img src={Group41} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={ba.div32}>
                                        <span>場館名稱</span>
                                        <div>
                                            <input type="text" class={`${ba.ccc} ${ba.div33}`}
                                                placeholder="請輸入關鍵字" />
                                        </div>
                                    </div>
                                    <div class={`mt-auto`}>
                                        <input type="submit" value="搜尋" class={ba.submit} />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className={`col-md ${ba.boxshadow} ${ba.div34}`}>
                            <div class={`row d-flex ${ba.div35}`}>
                                {/* <!-- 按鈕 --> */}
                                <div class={`col-4 ${ba.button3} ${this.state.zerodabutton === true? ba.focus123:''}`} id="zeroda" tabIndex="0"onClick={this.changezeroda}>零打</div>
                                <div class={`col-4 ${ba.button3} ${this.state.teambutton === true? ba.focus123:''}`} id="ballteam" tabIndex="0" onClick={this.changeteam}>球隊</div>
                                <div class={`col-4 ${ba.button3} ${this.state.rentbutton === true? ba.focus123:''}`} id="rent" tabIndex="0"onClick={this.changerent}>轉租</div>
                            </div>
                            {/* <!-- 零打文章列表 --> */}
                            <div className={ba.div36} id="zerodadiv" style={{display: (this.state.zerodadiv ===true) ? "block" : "none"}}>
                                <div class={`row ${ba.div37}`}>
                                    <div class={`col-2 ${ba.font1} ${ba.div38}`}>發布日期</div>
                                    <div class={`col-2 ${ba.font1} ${ba.div38}`}>類型</div>
                                    <div class={`col-5 ${ba.font1} ${ba.div38}`}>文章內容</div>
                                    <div class={`col-3 ${ba.font1} ${ba.div38}`}></div>
                                </div>
                                <div class={`row ${ba.div39}`}>
                                    <div class={`col d-flex flex-column ${ba.div40}`}>
                                        {/* <!-- 搜尋結果 --> */}
                                        <div class={`d-flex ${ba.font2} ${ba.div41}`}>
                                            <div class={`col-2 ${ba.div38}`}>2022/12/09</div>
                                            <div class={`col-2 ${ba.div38}`}>羽球</div>
                                            <div class={`col-5 ${ba.div38}`}>大家都很親切</div>
                                            <div class={`col-3 d-flex justify-content-center ${ba.div38}`}>
                                                <div class={`${ba.button1} ${ba.div42}`}>編輯</div>
                                                <div class={ba.button1}>刪除</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 球隊列表 --> */}
                            <div className={ba.div43} id="ballteamdiv" style={{display: (this.state.teamdiv ===true) ? "block" : "none"}}>
                                <div class={`row ${ba.div44}`}>
                                    <div class={`col-2 ${ba.font1} ${ba.div38}`}>球隊名稱</div>
                                    <div class={`col-2 ${ba.font1} ${ba.div38}`}>縣市</div>
                                    <div class={`col-2 ${ba.font1} ${ba.div38}`}>區</div>
                                    <div class={`col-3 ${ba.font1} ${ba.div38}`}>場館名稱</div>
                                    <div class={`col-3 ${ba.font1} ${ba.div38}`}></div>
                                </div>
                                <div class={`row ${ba.div45}`}>
                                    <div class={`col d-flex flex-column ${ba.div46}`}>
                                        {/* <!-- 搜尋結果 --> */}
                                        <div class={`d-flex ${ba.font2} ${ba.div47}`}>
                                            <div class={`col-2 ${ba.div38}`}>鐵血軍團</div>
                                            <div class={`col-2 ${ba.div38}`}>台中市</div>
                                            <div class={`col-2 ${ba.div38}`}>西屯區</div>
                                            <div class={`col-3 ${ba.div38}`}>群月羽球館</div>
                                            <div class={`col-3 d-flex justify-content-center ${ba.div38}`}>
                                                <div class={`${ba.button1} ${ba.div48}`}>編輯</div>
                                                <div class={ba.button1}>刪除</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 轉租列表 --> */}
                            <div className={ba.div49} id="rentdiv" style={{display: (this.state.rentdiv ===true) ? "block" : "none"}}>
                                <div class={`row ${ba.div50}`}>
                                    <div class={`col-2 ${ba.font1} ${ba.div38}`}>發布日期</div>
                                    <div class={`col-2 ${ba.font1} ${ba.div38}`}>縣市</div>
                                    <div class={`col-2 ${ba.font1} ${ba.div38}`}>區</div>
                                    <div class={`col-3 ${ba.font1} ${ba.div38}`}>場館名稱</div>
                                    <div class={`col-3 ${ba.font1} ${ba.div38}`}></div>
                                </div>
                                <div class={`row ${ba.div51}`}>
                                    <div class={`col d-flex flex-column ${ba.div38}`}>
                                        {/* <!-- 搜尋結果 --> */}
                                        <div class={`d-flex ${ba.font2} ${ba.div52}`}>
                                            <div class={`col-2 ${ba.div38}`}>2022/12/09</div>
                                            <div class={`col-2 ${ba.div38}`}>台中市</div>
                                            <div class={`col-2 ${ba.div38}`}>西屯區</div>
                                            <div class={`col-3 ${ba.div38}`}>群月羽球館</div>
                                            <div class={`col-3 d-flex justify-content-center ${ba.div38}`}>
                                                <div class={`${ba.button1} ${ba.div53}`}>編輯</div>
                                                <div class={ba.button1}>刪除</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- footer --> */}
                <div class="footer">
                    <div class="fContent">
                        <div>Copyright © 2022 GOsport. 保留一切權利。</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
    
}

export default Backarticle;