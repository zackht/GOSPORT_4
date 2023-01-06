import React, { Component } from 'react';
import cc from './cc.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import q from './icon/Q.png'
import team from './icon/下載.jpg'
import op from './icon/op_01.jpg';
import ten from './icon/Group 10.png';
import arr from './icon/arrowup2.svg';
import notice from './icon/notice.svg';
import user from './icon/user.svg';
import google from './icon/google快速註冊.svg'
import ball from './icon/球類別.png';
import cancel from './icon/快速搜尋＿取消.svg'
import sigh from './icon/快速搜尋＿註冊.svg'
import login from './icon/快速搜尋.svg'
class Handya extends Component {
    state = {
        a: <option value="">西屯區</option>,
        b: <option value="">南屯區</option>,
        c: <option value="">北屯區</option>,
        rent:true,
        rentdiv:true,
        rentbtn:true,
zeroda:false,
zerodadiv:false,
zerodabtn:false,
team:false,
teamdiv:false,
teambtn:false,
turn:false,
turndiv:false,
turnbtn:false,
loginbtn:false,
logindiv:false,
sighbtn:true,
sighdiv:true
    }

    render() {
        return (
        <React.Fragment>
    <div className={`${cc.dd1} container-fluid`}>
    {/* <div className={`${cc.back} container-fluid`}>
        <div className={`${cc.aa1} container-fluid`}>

        </div>
        <div class={cc.apple}> 
            
            <button className={` ${this.state.sighbtn === true ? cc.focus1:cc.tablink1 }`} onClick={this.changesigh}>註冊</button>
            <button className={` ${this.state.loginbtn === true ? cc.focus1:cc.tablink1 }`} onClick={this.changelogin}>登入</button>
            <div id="Londo" style={{display: (this.state.sighdiv === true) ?  "block":"none"}} className={cc.tabcontent}>
                <img className={cc.d131} src={google} alt="" />
              <p className={cc.d132}>註冊信箱</p>
              <form action="">
              <input className={cc.d133} type="text" />
              <p className={cc.d134}>密碼</p>
              <input className={cc.d135} type="text" />
              <p className={cc.d136}>至少8個字,含至少1個數字及1個英文字母</p>
              <p className={cc.d137}>確認密碼</p>
              <input className={cc.d138} type="text" />
              <div className={cc.d139}>
                <img src={cancel} alt="" />
                <img src={sigh} alt="" />
              </div>
              
              </form>
            </div>
            <div id="Pari" style={{display: (this.state.logindiv === true) ?  "block":"none"}} className={cc.tabcontent}>
            <p className={cc.d140}>註冊信箱</p>
              <form className={cc.d145} action="">
              <input className={cc.d133} type="text" />
              <p className={cc.d141}>密碼</p>
              <input className={cc.d142} type="text" />
               <p className={cc.d143}>忘記密碼</p></form>
               <div className={cc.d144}>
                <img src={cancel} alt="" />
                <img src={login} alt="" />
              </div>
              
             
            </div>
        </div>
    </div> */}
        <div className={cc.marquee}>
            <div className={cc.marquee1}>
                <img src={op} alt=""/>
                <div className={cc.d1}>
                    <span>1柯智勛</span>
                    <p>&nbsp;&nbsp;南區&nbsp;&nbsp;</p>
                    <h4>好無聊</h4>
                </div>

            </div>

        </div>
        <div className={cc.season}>
            <div className={cc.season1}>
                <div className={cc.seasoninfo}>
                    <h1>21-33°</h1>
                    <p>&nbsp;&nbsp;后里區&nbsp;&nbsp;</p>&nbsp;&nbsp;<span className={cc.spancolo}>降雨機率30%</span>
                </div>
                <img src={ten} alt=""/>
            </div>
        </div>
        <div className={cc.ezsurch}>
            <div className={cc.ezsurch1}>
                <button className={` ${this.state.rentbtn === true ? cc.focus:cc.tablink }`} onClick={this.changerent}>租場地</button>
                <button className={` ${this.state.zerodabtn === true ? cc.focus:cc.tablink }`} onClick={this.changezeroda}>找零打</button>
                <button className={` ${this.state.teambtn === true ? cc.focus:cc.tablink }`} onClick={this.changeteam}>找球隊</button>
                <button className={` ${this.state.turnbtn === true ? cc.focus:cc.tablink }`} onClick={this.changeturn}>轉租</button>

                <div id="London" style={{display: (this.state.rentdiv === true) ?  "block":"none"}} className={cc.tabcontent}>
                    <form action="">
                        <div id="local" className={cc.d2}>
                            <p className={cc.d3}>類別</p>
                            <img className={cc.d4} src={ball} alt=""/>
                            <p className={cc.d5}>地區</p>
                            <img className={`${cc.d6} ${cc.selectedDate}`} src={arr}/>
                            <img className={`${cc.d7} ${cc.selectedDate}`} src={arr}/>
                            <select name="city" className={cc.county} onChange={(e)=>this.change(e)}>
                                <option value="1">台中</option>
                            </select>
                            <select name="town" className={cc.district}>
                            <option value="">{this.state.a}</option>
                            <option value="">{this.state.b}</option>
                            <option value="">{this.state.c}</option>

                            </select>

                        </div>

                        <div className={cc.d8}>
                            <p className={cc.d9}>日期</p>
                            <p className={cc.d10}>開始時間</p>
                            <p className={cc.d11}>結束時間</p>
                        </div>
                        
                        <input className={cc.d12} type="date" id="start"
                            name="trip-start" value="2022-12-19" min="2022-12-19" max="2033-12-31"/>
                        <img className={`${cc.d13} ${cc.selectedDate}`} src={arr}/>

                        <span className={cc.d14}>~</span>

                        <input className={cc.d15} type="date" id="start"
                            name="trip-start" value="2018-07-22" min="2022-12-19" max="2033-12-31"/>
                        <img className={`${cc.d16} ${cc.selectedDate}`} src={arr}/>

                        <input className={cc.d17} type="time" value="13:14"
                            step="300"/>
                        <img className={`${cc.d18} ${cc.selectedDate}`} src={arr}/>

                        <input className={cc.d19} type="time" value="13:14"
                            step="300"/>
                        <img className={`${cc.d20} ${cc.selectedDate}`} src={arr}/>


                        <div className={cc.d21}>
                            <p className={cc.d22}>關鍵字</p>
                        </div>
                        <label className={cc.d23} for="">
                            <input className={cc.d24}
                                type="text" placeholder="請輸入關鍵字"/>
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
                <div id="Paris" style={{display: (this.state.zerodadiv === true) ?  "block":"none"}} className={cc.tabcontent}>
                    <div id="local1" className={cc.d36}>
                        <p className={cc.d37}>類別</p>
                        <img className={cc.d38} src={ball} alt=""/>
                        <p className={cc.d39}>地區</p>
                        <img className={`${cc.d40} ${cc.selectedDate}`} src={arr}/>
                        <img className={`${cc.d41} ${cc.selectedDate}`} src={arr}/>
                        <select name="city" className={cc.county} onChange={(e)=>this.change(e)}>
                                <option value="1">台中</option>
                                <option value="2">台北</option>
                                <option value="3">高雄</option>
                            </select>
                            <select name="town" className={cc.district}>
                            <option value="">{this.state.a}</option>
                            <option value="">{this.state.b}</option>
                            <option value="">{this.state.c}</option>
                            </select>
                    </div>


                    <div className={cc.d42}>
                        <p className={cc.d43}>日期</p>
                        <p className={cc.d44}>時間</p>


                    </div>
                    <input className={cc.d45}
                        type="date" id="start" name="trip-start" value="2022-12-19" min="2022-12-19" max="2033-12-31"/>
                    <img className={`${cc.d46} ${cc.selectedDate}`} src={arr}/>

                    <input className={cc.d47} type="time" value="13:14"
                        step="300"/>
                    <img className={`${cc.d48} ${cc.selectedDate}`} src={arr}/>
                    <span className={cc.d49}>至</span>
                    <input className={cc.d50} type="time" value="13:14"
                        step="300"/>
                    <img className={`${cc.d51} ${cc.selectedDate}`} src={arr}/>

                    <div className={cc.d52}>
                        <p className={cc.d53}>關鍵字</p>
                    </div>
                    <input
                        className={cc.d54}
                        type="text" placeholder="請輸入關鍵字"/>

                    <div className={cc.d55}>
                        <p className={cc.d56}>費用上限</p>
                        <p className={cc.d57}>程度</p>
                    </div>
                    <select className={`${cc.d58} ${cc.county}`} name="" id="">
                        <option value="">100</option>
                        <option value="">200</option>
                        <option value="">300</option>
                        <option value="">400</option>
                        <option value="">500</option>
                        <option value="">600</option>
                        <option value="">700</option>
                    </select>
                    <img className={`${cc.d59} ${cc.selectedDate}`} src={arr}/>
                    <select className={`${cc.d60} ${cc.county}`} name="" id="">
                        <option value="">高手</option>
                        <option value="">一般</option>
                        <option value="">新手</option>
                    </select>
                    <img className={`${cc.d61} ${cc.selectedDate}`} src={arr}/>
                    <button className={cc.serch1}>快速搜尋</button>
                </div>
                <div id="Tokyo" style={{display: (this.state.teamdiv === true) ?  "block":"none"}} className={cc.tabcontent}>
                    <div id="local2" className={cc.d64}>
                        <p className={cc.d65}>類別</p>
                        <img className={cc.d66} src={ball} alt=""/>
                        <p className={cc.d67}>地區</p>
                        <img className={`${cc.d68} ${cc.selectedDate}`} src={arr}/>
                        <img className={`${cc.d69} ${cc.selectedDate}`} src={arr}/>
                        <select name="city" className={cc.county} onChange={(e)=>this.change(e)}>
                                <option value="1">台中</option>
                                <option value="2">台北</option>
                                <option value="3">高雄</option>
                            </select>
                            <select name="town" className={cc.district}>
                            <option value="">{this.state.a}</option>
                            <option value="">{this.state.b}</option>
                            <option value="">{this.state.c}</option>
                            </select>
                    </div>


                    <div className={cc.d70}>
                        <p className={cc.d71}>週期</p>
                        <p className={cc.d72}>時間</p>


                    </div>
                    <div className={cc.d73}>
                        <select className={`${cc.d74} ${cc.county}`} name="" id="">
                            <option value="">星期一</option>
                            <option value="">星期二</option>
                            <option value="">星期三</option>
                            <option value="">星期四</option>
                            <option value="">星期五</option>
                            <option value="">星期六</option>
                            <option value="">星期日</option>
                        </select><img className={`${cc.d75} ${cc.selectedDate}`} src={arr}/>
                    </div>
                    <input className={cc.d76} type="time" value="13:14"
                        step="300"/>
                    <img className={`${cc.d77} ${cc.selectedDate}`} src={arr}/>
                    <span className={cc.d78}>至</span>
                    <input className={cc.d79} type="time" value="13:14"
                        step="300"/>
                    <img className={`${cc.d80} ${cc.selectedDate}`} src={arr}/>


                    <div className={cc.d81}>
                        <p className={cc.d82}>關鍵字</p>
                    </div>
                    <input
                        className={cc.d83}
                        type="text" placeholder="請輸入關鍵字"/>

                    <div className={cc.d84}>
                        <p className={cc.d85}>費用上限</p>
                        <p className={cc.d86}>程度</p>
                    </div>
                    <select className={`${cc.d87} ${cc.county}`} name="" id="">
                        <option value="">100</option>
                        <option value="">200</option>
                        <option value="">300</option>
                        <option value="">400</option>
                        <option value="">500</option>
                        <option value="">600</option>
                        <option value="">700</option>
                    </select><img className={`${cc.d88} ${cc.selectedDate}`} src={arr}/>
                    <select className={`${cc.d89} ${cc.county}`} name="" id="">
                        <option value="">高手</option>
                        <option value="">一般</option>
                        <option value="">新手</option>

                    </select><img className={`${cc.d90} ${cc.selectedDate}`} src={arr}/>
                    <button className={`${cc.d91} ${cc.serch1}`}>快速搜尋</button>
                </div>
                <div id="Oslo" style={{display: (this.state.turndiv === true) ?  "block":"none"}} className={cc.tabcontent}>
                    <div id="local3" className={cc.d93}>
                        <p className={cc.d94}>類別</p>
                        <img className={cc.d95} src={ball} alt=""/>
                        <p className={cc.d96}>地區</p>
                        <img className={`${cc.d97} ${cc.selectedDate}`} src={arr}/>
                        <img className={`${cc.d98} ${cc.selectedDate}`} src={arr}/>
                        <select name="city" className={cc.county} onChange={(e)=>this.change(e)}>
                                <option value="1">台中</option>
                                <option value="2">台北</option>
                                <option value="3">高雄</option>
                            </select>
                            <select name="town" className={cc.district}>
                            <option value="">{this.state.a}</option>
                            <option value="">{this.state.b}</option>
                            <option value="">{this.state.c}</option>
                            </select>
                    </div>


                    <div className={cc.d99}>
                        <p className={cc.d100}>日期</p>
                        <p className={cc.d101}>時間</p>


                    </div>
                    <input className={cc.d102} type="date" id="start"
                        name="trip-start" value="2022-12-19" min="2022-12-19" max="2033-12-31"/>
                    <img className={`${cc.d103} ${cc.selectedDate}`} src={arr}/>

                    <input className={cc.d104} type="time" value="13:14"
                        step="300"/>
                    <img className={`${cc.d105} ${cc.selectedDate}`} src={arr}/>
                    <span className={cc.d106}>至</span>
                    <input className={cc.d107} type="time" value="13:14"
                        step="300"/>
                    <img className={`${cc.d108} ${cc.selectedDate}`} src={arr}/>


                    <div className={cc.d109}>
                        <p className={cc.d110}>關鍵字</p>
                    </div>
                    <input
                        className={cc.d111}
                        type="text" placeholder="請輸入關鍵字"/>

                    <div className={cc.d112}>
                        <p className={cc.d113}>費用上限</p>
                        <p className={cc.d114}>數量</p>
                    </div>
                    <select className={`${cc.d115} ${cc.county}`} name="" id="">
                        <option value="">100</option>
                        <option value="">200</option>
                        <option value="">300</option>
                        <option value="">400</option>
                        <option value="">500</option>
                        <option value="">600</option>
                        <option value="">700</option>
                    </select><img className={`${cc.d116} ${cc.selectedDate}`} src={arr}/>
                    <select className={`${cc.d117} ${cc.county}`} name="" id="">
                        <option value="">高手</option>
                        <option value="">一般</option>
                        <option value="">新手</option>

                    </select><img className={`${cc.d118} ${cc.selectedDate}`} src={arr}/>
                    <button className={`${cc.d119} ${cc.serch1}`}>快速搜尋</button>
                </div>
            </div>
        </div>
    </div>
    <div className={cc.event}>
        <div className={cc.event1}>
            <img src={team} alt=""/>
            <div className={`${cc.d120} ${cc.eventinfo}`}>
                <h2>鐵血軍團</h2>
                <p className={cc.d121}>12月聖誕團聚</p>
                <div>
                    <span
                        className={cc.d122}>&nbsp;&nbsp;週期&nbsp;&nbsp;</span>
                    <span className={cc.d123}>星期三</span>
                    <span
                        className={cc.d124}>&nbsp;&nbsp;時段&nbsp;&nbsp;</span><span
                        className={cc.d125}>15:00-17:00</span>
                    <span
                        className={cc.d126}>&nbsp;&nbsp;費用&nbsp;&nbsp;</span><span
                        className={cc.d127}>300</span>
                    <span
                        className={cc.d128}>&nbsp;&nbsp;程度&nbsp;&nbsp;</span><span
                        className={cc.d129}>不限</span>
                </div>

            </div>

        </div>

    </div>

    <div className={cc.qa}>
        <div className={cc.qa1}>
            <img src={q} alt=""/>
            <h4>什麼是零打??</h4>
        </div>
        <div className={cc.qa1}>
            <img src={q} alt=""/>
            <h4>怎麼報名零打??</h4>
        </div>
    </div>

    <div className={cc.d130}>
    </div>


    
    {/* <div class="footer">
        <div class="fContent">
            <div>Copyright © 2022 GOsport. 保留一切權利。</div>
        </div>
    </div> */}


        </React.Fragment >

        );
    }
changelogin=()=>{
    let newstate = {...this.state};
    newstate.loginbtn=true;
    newstate.logindiv=true;
    newstate.sighbtn=false;
    newstate.sighdiv=false;
    this.setState (newstate);
}
changesigh=()=>{
    let newstate = {...this.state};
    newstate.sighbtn=true;
    newstate.sighdiv=true;
    newstate.loginbtn=false;
    newstate.logindiv=false;
    this.setState (newstate);
}
    
    changerent =() =>{
let newstate = {...this.state};
newstate.rent=true;
newstate.rentdiv=true;
newstate.rentbtn=true;
newstate.zeroda=false;
newstate.zerodadiv=false;
newstate.zerodabtn=false;
newstate.team=false;
newstate.teamdiv=false;
newstate.teambtn=false;
newstate.turn=false;
newstate.turndiv=false;
newstate.turnbtn=false;
this.setState (newstate);
    }
    changezeroda =() =>{
        console.log("OK");
let newstate = {...this.state};
newstate.rent=false;
newstate.rentdiv=false;
newstate.rentbtn=false;
newstate.zeroda=true;
newstate.zerodadiv=true;
newstate.zerodabtn=true;
newstate.team=false;
newstate.teamdiv=false;
newstate.teambtn=false;
newstate.turn=false;
newstate.turndiv=false;
newstate.turnbtn=false;
this.setState (newstate);
    }
    changeteam =() =>{
        console.log("OK");
let newstate = {...this.state};
newstate.rent=false;
newstate.rentdiv=false;
newstate.rentbtn=false;
newstate.zeroda=false;
newstate.zerodadiv=false;
newstate.zerodabtn=false;
newstate.team=true;
newstate.teamdiv=true;
newstate.teambtn=true;
newstate.turn=false;
newstate.turndiv=false;
newstate.turnbtn=false;
this.setState (newstate);
    }
    changeturn =() =>{
        console.log("OK");
let newstate = {...this.state};
newstate.rent=false;
newstate.rentdiv=false;
newstate.rentbtn=false;
newstate.zeroda=false;
newstate.zerodadiv=false;
newstate.zerodabtn=false;
newstate.team=false;
newstate.teamdiv=false;
newstate.teambtn=false;
newstate.turn=true;
newstate.turndiv=true;
newstate.turnbtn=true;
this.setState (newstate);
    }




    change = (e) => {
        if (e.target.value === "1") {
            console.log("台中");
            let newstate = { ...this.state };
            newstate.a = <option value="">西屯區</option>;
            newstate.b = <option value="">南屯區</option>;
            newstate.c = <option value="">北屯區</option>;
            this.setState(newstate);
        } else if (e.target.value === "2") {
            console.log("台北");
            let newstate = { ...this.state };
            newstate.a = <option value="">大安區</option>;
            newstate.b = <option value="">士林區</option>;
            newstate.c = '';
            this.setState(newstate);
        } else if (e.target.value === "3") {
            console.log("高雄");
            let newstate = { ...this.state };
            newstate.a = <option value="">大社區</option>;
            newstate.b = <option value="">三民區</option>;
            newstate.c = '';
            this.setState(newstate);
        }

    }
}

export default Handya;