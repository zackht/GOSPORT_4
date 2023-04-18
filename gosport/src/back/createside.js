import React, { Component } from 'react';
// import './createside.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import aa from './icon/上傳照片.svg';
import group41 from "./icon/Group 41.png";
class createside extends Component {
    state = {
        count:0
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
    render() {
        return (
            <React.Fragment>
                <form action="">
                    <div class="container div0">
                        <div class="row div1">
                            <div class=" d-flex padding">
                                <div class="div2">
                                    <img src={aa} alt="" />
                                </div>
                            </div>
                            <div class="col d-flex flex-column padding">
                                <div>
                                    <span class="font">姓名</span>
                                    <div>
                                        <input type="text" class="div3 font2" />
                                    </div>
                                </div>
                                <div class="div24">
                                    <span class="font">球類</span>
                                    <div class="div5">
                                        <select name="" id="" class="font2 div4">
                                            <option value="">羽球</option>
                                            <option value="">桌球</option>
                                            <option value="">籃球</option>
                                        </select>
                                        <img class="div6" src={group41} alt="" />
                                    </div>
                                </div>
                                <div class="div24">
                                    <span class="font">設施</span>
                                    <div>
                                        <input type="checkbox" id="check1" class="div8" />
                                        <label for="check1" class="div7 font2">停車場</label>
                                        <input type="checkbox" id="check2" />
                                        <label for="check2" class="div7 font2">淋浴設備</label>
                                        <input type="checkbox" id="check3" />
                                        <label for="check3" class="font2">無障礙環境</label>
                                    </div>
                                </div>
                                <div class="div24">
                                    <span class="font">營業時間</span>
                                    <div class="d-flex div8">
                                        <div class="font2 div12">平日</div>
                                        <div class=" d-flex">
                                            <div class="div11">
                                                <select name="" id="" class="font2 div9">
                                                    <option value="">09:00</option>
                                                    <option value="">10:00</option>
                                                </select>
                                                <img class="div10" src={group41} alt="" />
                                            </div>
                                            <div class="font2 div13">至</div>
                                            <div class="div11">
                                                <select name="" id="" class="font2 div9">
                                                    <option value="">17:00</option>
                                                    <option value="">18:00</option>
                                                </select>
                                                <img class="div10" src={group41} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex div14">
                                        <div class="font2 div12">假日</div>
                                        <div class=" d-flex">
                                            <div class="div11">
                                                <select name="" id="" class="font2 div9">
                                                    <option value="">09:00</option>
                                                    <option value="">10:00</option>
                                                </select>
                                                <img class="div10" src={group41} alt="" />
                                            </div>
                                            <div class="font2 div13">至</div>
                                            <div class="div11">
                                                <select name="" id="" class="font2 div9">
                                                    <option value="">17:00</option>
                                                    <option value="">18:00</option>
                                                </select>
                                                <img class="div10" src={group41} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="div24">
                                    <span class="font">電話</span>
                                    <div>
                                        <input type="text" name="" id="" class="div15" />
                                    </div>
                                </div>
                                <div class="div24">
                                    <span class="font">描述</span>
                                    <div>
                                        <textarea name="" id="" cols="30" rows="10" class="div16">

                                        </textarea>
                                    </div>
                                </div>
                                <div class="div24">
                                    <span class="font">地址</span>
                                    <div>
                                        <input type="text" class="div17" />
                                    </div>
                                </div>
                                <div class="div24">
                                    <span class="font">goole地圖網址</span>
                                    <div>
                                        <input type="text" class="div17" />
                                    </div>
                                </div>
                                <div class="div24">
                                    <span class="font">租期</span>
                                    <div>
                                        <input type="checkbox" id="check1" class="div8" />
                                        <label for="check1" class="div7 font2">日租</label>
                                        <input type="checkbox" id="check2" />
                                        <label for="check2" class="div7 font2">月租</label>
                                        <input type="checkbox" id="check3" />
                                        <label for="check3" class="font2">季租</label>
                                    </div>
                                </div>
                                <div class="div24">
                                    <span class="font">可預定日期至</span>
                                    <div class="div19">
                                        <input type="date" class="div18" />
                                        <img class="div20" src={group41} alt="" />
                                    </div>
                                </div>
                                <div class="div24">
                                    <span class="font">尖峰時段</span>
                                    <div class="d-flex div21">
                                        <div class="d-flex flex-wrap div27">
                                            <div>
                                                <input type="checkbox" name="checkbox[]" value="9,10" id="checkbox1"
                                                    class="checkbox" />
                                                <label for="checkbox1" class="buttom1" >9:00~10:00</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="checkbox[]" value="10,11" id="checkbox2"
                                                    class="checkbox" />
                                                <label for="checkbox2" class="buttom1">10:00~11:00</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="checkbox[]" value="11,12" id="checkbox3"
                                                    class="checkbox" />
                                                <label for="checkbox3" class="buttom1">11:00~12:00</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="checkbox[]" value="" id="checkbox4" class="checkbox" />
                                                <label for="checkbox4" class="buttom1">12:00~13:00</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="checkbox[]" value="" id="checkbox5" class="checkbox" />
                                                <label for="checkbox5" class="buttom1">13:00~14:00</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="checkbox[]" value="" id="checkbox6" class="checkbox" />
                                                <label for="checkbox6" class="buttom1">14:00~15:00</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="checkbox[]" value="" id="checkbox7" class="checkbox" />
                                                <label for="checkbox7" class="buttom1">16:00~17:00</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="checkbox[]" value="" id="checkbox8" class="checkbox" />
                                                <label for="checkbox8" class="buttom1">17:00~18:00</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="checkbox[]" value="" id="checkbox9" class="checkbox" />
                                                <label for="checkbox9" class="buttom1">19:00~20:00</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="checkbox[]" value="" id="checkbox10" class="checkbox" />
                                                <label for="checkbox10" class="buttom1">20:00~21:00</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="checkbox[]" value="" id="checkbox11" class="checkbox" />
                                                <label for="checkbox11" class="buttom1">21:00~22:00</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="checkbox[]" value="" id="checkbox12" class="checkbox" />
                                                <label for="checkbox12" class="buttom1">22:00~23:00</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="div24">
                                    <span class="font">離峰時段</span>
                                    <div class="d-flex div21">
                                        <div class="d-flex flex-wrap div22">
                                            <div>
                                                <input type="checkbox" name="checkboxoffpeak[]" value="9,10" id="checkbox25"
                                                    class="checkbox" />
                                                <label for="checkbox25" class="buttom1" N>9:00~10:00</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="checkboxoffpeak[]" value="10,11" id="checkbox26"
                                                    class="checkbox" />
                                                <label for="checkbox26" class="buttom1">10:00~11:00</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="checkboxoffpeak[]" value="11,12" id="checkbox27"
                                                    class="checkbox" />
                                                <label for="checkbox27" class="buttom1">11:00~12:00</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="checkboxoffpeak[]" value="" id="checkbox28"
                                                    class="checkbox" />
                                                <label for="checkbox28" class="buttom1">12:00~13:00</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="checkboxoffpeak[]" value="" id="checkbox29"
                                                    class="checkbox" />
                                                <label for="checkbox29" class="buttom1">13:00~14:00</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="checkboxoffpeak[]" value="" id="checkbox30"
                                                    class="checkbox" />
                                                <label for="checkbox30" class="buttom1">14:00~15:00</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="checkboxoffpeak[]" value="" id="checkbox31"
                                                    class="checkbox" />
                                                <label for="checkbox31" class="buttom1">16:00~17:00</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="checkboxoffpeak[]" value="" id="checkbox32"
                                                    class="checkbox" />
                                                <label for="checkbox32" class="buttom1">17:00~18:00</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="checkboxoffpeak[]" value="" id="checkbox33"
                                                    class="checkbox" />
                                                <label for="checkbox33" class="buttom1">19:00~20:00</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="checkboxoffpeak[]" value="" id="checkbox34"
                                                    class="checkbox" />
                                                <label for="checkbox34" class="buttom1">20:00~21:00</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="checkboxoffpeak[]" value="" id="checkbox35"
                                                    class="checkbox" />
                                                <label for="checkbox35" class="buttom1">21:00~22:00</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="checkboxoffpeak[]" value="" id="checkbox36"
                                                    class="checkbox" />
                                                <label for="checkbox36" class="buttom1">22:00~23:00</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex div24">
                                    <div>
                                        <span class="font">尖峰時段費用</span>
                                        <div>
                                            <input type="number" class="number einputnumber"
                                                onkeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))" />
                                        </div>
                                    </div>
                                    <div>
                                        <span class="font">離峰時段費用</span>
                                        <div>
                                            <input type="number" class="number einputnumber"
                                                onkeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))" />
                                        </div>
                                    </div>
                                    <div>
                                        <span class="font">數量上限</span>
                                        <div class="d-flex">
                                            <div class="numbutton1">
                                                <div class="add" onClick={this.minus}>-</div>
                                            </div>
                                            <input type="number" class="number2 einputnumber" value={this.state.count}
                                                onkeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))" />
                                            <div class="numbutton2">
                                                <div class="minus" onClick={this.add}>+</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-around div23">
                            <div> <input type="button" value="取消" class="div25" /></div>
                            <div> <input type="submit" value="提交" class="div26" /></div>
                        </div>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default createside;