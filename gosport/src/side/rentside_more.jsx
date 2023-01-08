import React, { Component } from 'react';
import Rectangle from "./icon/Rectangle 639.png";
import a1 from "./icon/停車場.svg";
import a2 from "./icon/淋浴間.svg";
import a3 from "./icon/無障礙.svg";
import group41 from "./icon/Group 41.png";
import notice from "./icon/notice.svg";
import user from "./icon/user.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import side2 from './rentside_more.module.css';
class Side2 extends Component {
  state = {
    count:0
  }
  render() {
    return (
      <React.Fragment>
        {/* <!-- navbar --> */}
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
              <img src={notice}></img>
              <img src={user}></img>
            </div>
          </div>
        </div>
        <div className={`container-fluid ${side2.div1}`}>
          <div className={`row ${side2.boxshadow} d-flex ${side2.div2}`}>
            <div className={`col-xl-4 d-flex flex-column ${side2.div3}`}>
              <div className={side2.thecover}>
                <img src={Rectangle} alt="" />
              </div>
              <div>
                <span className={side2.span}>設施</span>
                <div className={`d-flex`}>
                  <div><img src={a1} alt="" /></div>
                  <div><img src={a2} alt="" /></div>
                  <div><img src={a3} alt="" /></div>
                </div>
              </div>
              <div><span className={side2.span}>營業時間</span></div>
              <div className={side2.font}>平日9:00~19:00</div>
              <div className={side2.font}>假日9:00~20:00</div>
              <div><span className={side2.span}>電話</span></div>
              <div className={side2.font}>04-22256322</div>
              <div><span className={side2.span}>描述</span></div>
              <div className={side2.font}>共五面、9.8M挑高場地
                提供羽球教學課程
                共245坪 </div>
            </div>
            <div className={`col-xl-8 d-flex flex-column ${side2.div3}`}>
              <form action="http://127.0.0.1/phpd03/aaa.php" method="get">
                <div className={`d-flex`}>
                  <div>
                    <b className={side2.fontsize1}>群月羽球館</b>
                  </div>
                  <div className={`ml-auto`}>
                    <input className={side2.aa} type="submit" defaultValue="預定" />
                  </div>
                </div>
                <div>
                  <span className={side2.span}>租期</span>
                  <div className={`d-flex`}>
                    <div>
                      <input type="radio" id="radio1" className={side2.radio} name="a" defaultValue="date" />
                      <label htmlFor="radio1" className={`${side2.buttom1}`}>日租</label>
                    </div>
                    <div >
                      <input type="radio" id="radio2" className={side2.radio} name="a" defaultValue="month" />
                      <label htmlFor="radio2" className={`${side2.buttom1}`}>月租</label>
                    </div>
                    <div>
                      <input type="radio" id="radio3" className={side2.radio} name="a" defaultValue="season" />
                      <label htmlFor="radio3" className={`${side2.buttom1}`}>季租</label>
                    </div>

                  </div>
                </div>
                <div className={side2.div7}>
                  <span className={side2.span}>租期</span>
                  <div className={side2.div8}>
                    <input type="date" name="inputdate" className={side2.date} /><img className={`${side2.selectedDate}`} src={group41} alt="" />
                  </div>
                </div>
                <div>
                  <span className={side2.span}>時段</span>
                  <div className={`d-flex ${side2.div9}`} >
                    <div className={`d-flex flex-wrap ${side2.div10}`}>
                      <div>
                        <input type="checkbox" name="checkbox[]" className={side2.checkbox} value="9,10" id="checkbox1" />
                        <label htmlFor="checkbox1" className={`${side2.buttom1}`} >9:00~10:00</label>
                      </div>
                      <div>
                        <input type="checkbox" name="checkbox[]" className={side2.checkbox} value="10,11" id="checkbox2" />
                        <label htmlFor="checkbox2" className={`${side2.buttom1}`}>10:00~11:00</label>
                      </div>
                      <div>
                        <input type="checkbox" name="checkbox[]" className={side2.checkbox} value="11,12" id="checkbox3" />
                        <label htmlFor="checkbox3" className={`${side2.buttom1}`}>11:00~12:00</label>
                      </div>
                      <div>
                        <input type="checkbox" name="checkbox[]" className={side2.checkbox} value="12,13" id="checkbox4" />
                        <label htmlFor="checkbox4" className={`${side2.buttom1}`}>12:00~13:00</label>
                      </div>
                      <div>
                        <input type="checkbox" name="checkbox[]" className={side2.checkbox} value="13,14" id="checkbox5" />
                        <label htmlFor="checkbox5" className={`${side2.buttom1}`}>13:00~14:00</label>
                      </div>
                      <div>
                        <input type="checkbox" name="checkbox[]" className={side2.checkbox} value="14,15" id="checkbox6" />
                        <label htmlFor="checkbox6" className={`${side2.buttom1}`}>14:00~15:00</label>
                      </div>
                      <div>
                        <input type="checkbox" name="checkbox[]" className={side2.checkbox} value="16,17" id="checkbox7" />
                        <label htmlFor="checkbox7" className={`${side2.buttom1}`}>15:00~16:00</label>
                      </div>
                      <div>
                        <input type="checkbox" name="checkbox[]" className={side2.checkbox} value="16,17" id="checkbox8" />
                        <label htmlFor="checkbox8" className={`${side2.buttom1}`}>16:00~17:00</label>
                      </div>
                      <div>
                        <input type="checkbox" name="checkbox[]" className={side2.checkbox} value="17,18" id="checkbox9" />
                        <label htmlFor="checkbox9" className={`${side2.buttom1}`}>17:00~18:00</label>
                      </div>
                      <div>
                        <input type="checkbox" name="checkbox[]" className={side2.checkbox} value="18,19" id="checkbox10" />
                        <label htmlFor="checkbox10" className={`${side2.buttom1}`}>18:00~19:00</label>
                      </div>
                      <div>
                        <input type="checkbox" name="checkbox[]" className={side2.checkbox} value="19,20" id="checkbox11" />
                        <label htmlFor="checkbox11" className={`${side2.buttom1}`}>19:00~20:00</label>
                      </div>
                      <div>
                        <input type="checkbox" name="checkbox[]" className={side2.checkbox} value="20,21" id="checkbox12" />
                        <label htmlFor="checkbox12" className={`${side2.buttom1}`}>20:00~21:00</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`d-flex`}>
                  <div>
                    <span className={side2.span}>數量</span>
                    <div className={`d-flex`}>
                      <div onClick={this.minus} className={side2.buttom3} id="add">-</div>
                      <input type="number" className={side2.input} id="my-input" value={this.state.count} min="0" max="10" step="1" />
                      <div onClick={this.add} className={side2.buttom3} id="minus">+</div>
                    </div>
                  </div>
                  <div className={side2.div11}>
                    <span className={side2.span}>費用</span>
                    <div>
                      <span className={side2.div12}>700</span>
                      <span className={side2.span}>元</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className={side2.div4}>
              <span className={side2.span}>地址</span>
              <div className={side2.div5}>

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
  add=()=>{
    this.state.count+=1;
    this.setState({});
  }
  minus = ()=>{
    if (this.state.count >0) {
      this.state.count-=1;
    }
    this.setState({});
  }
}

export default Side2;