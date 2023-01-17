import React, { useState, useEffect } from 'react';
import Rectangle from "./icon/Rectangle 639.png";
import a1 from "./icon/停車場.svg";
import a2 from "./icon/淋浴間.svg";
import a3 from "./icon/無障礙.svg";
import group41 from "./icon/Group 41.png";
import notice from "./icon/notice.svg";
import user from "./icon/user.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import side2 from './rentside_more.module.css';
import team from './icon/team.jpg';
import map from './icon/map.png'
import { useParams } from 'react-router-dom';
import Axios from "axios";
const Side2 = () => {
  const add = () => {
  }
  const minus = () => {
  }
  // 取得網址參數
  const parameter = useParams();
  const sideid = parameter.id;
  // 載入時抓資料
  useEffect(()=>{
    getside();
    console.log('開始')
  },[])
  const [sidelist,setsidelist]=useState();
  const [re,setre]=useState(false);

  const getside = async ()=>{
  await Axios.post("http://localhost:3001/rentsidemore", {
      sideid: sideid,
  }).then((response) => {
      // console.log(response);
      setsidelist(response.data[0]);
      setre(true);
      setcheckbox(
        new Array(response.data[0].weekendtime-response.data[0].weekstarttime).fill(false)
        )
      setboxl(response.data[0].weekendtime-response.data[0].weekstarttime);
  });
  }
  const [boxl,setboxl]=useState(0);
  const aaa =()=>{
    console.log(rentday);
    console.log(date);
    console.log(Math.min(...checkboxselect)); //checkbox最小值
    console.log(Math.max(...checkboxselect));//checkbox最大值

  }
  // 設定radio
  const [rentday,setrentday]=useState('日租');
  const radio=(e)=>{
    setrentday(e);
  }
  const [date,setdate]=useState('');
  // 取得選取的checkbox
  const [checkbox,setcheckbox]=useState([]);
  const [checkboxselect,setcheckboxselect]=useState([]);
  const handleOnChange = (position,e) => {
    const newcheckbox = checkbox.map((item, index) =>
      index === position ? !item : item
    );
    setcheckbox(newcheckbox);
    checkboxselect.push(e);
  }
  return (
    <React.Fragment>
      {(re)?
      <div className={`container-fluid ${side2.div1}`}>
        <div className={`row ${side2.boxshadow} d-flex ${side2.div2}`}>
            <div className={side2.thecover}>
              <img src={team} alt="" />
            </div>
          <div className={`col-xl-4 d-flex flex-column ${side2.div3x}`}>
            <div>
              <span className={side2.span}>設施</span>
                {sidelist.park ===true?<div><img src={a1} alt="" /></div>:<div>無</div>}
                {sidelist.bath ===true?<div><img src={a2} alt="" /></div>:<div>無</div>}
                {sidelist.baulk===true?<div><img src={a3} alt="" /></div>:<div>無</div>}
            </div>
            <div><span className={side2.span}>開放時間</span></div>
            <div className={side2.font}>平日{sidelist.weekstarttime}:00~{sidelist.weekendtime}:00</div>
            <div className={side2.font}>假日{sidelist.holidaystarttime}:00~{sidelist.holidayendtime}:00</div>
            <div><span className={side2.span}>收費標準</span></div>
            <div>尖峰 {sidelist.peakfee}元/hr</div>
            <div>離峰 {sidelist.offpeakfee}元/hr</div>
            <div>
              <div className={`d-flex`}>
                <div>
                <span className={side2.smlspan}>平日</span>
                <div>尖峰 {sidelist.peakstarttime}:00~{sidelist.peakendtime}:00</div>
                <div>離峰 {sidelist.offpeakstarttime}:00~{sidelist.offpeakendtime}:00</div>
                </div>
                <div className={side2.smlspan2}>
                <span className={side2.smlspan}>假日</span>
                <div>尖峰 {sidelist.ho_peakstarttime}:00~{sidelist.ho_peakendtime}:00</div>
                <div>離峰 {sidelist.ho_offpeakstarttime}:00~{sidelist.ho_offpeakendtime}:00</div>
                </div>
              </div>
            </div>
            <div><span className={side2.span}>電話</span></div>
            <div className={side2.font}>{sidelist.tel}</div>
            <div><span className={side2.span}>描述</span></div>
            <div className={side2.font}>{sidelist.text} 
              </div>
              <div><span className={side2.span}>地址</span></div>
            <div className={side2.font}>{sidelist.adress}</div>
          </div>
          <div className={`col-xl-8 d-flex flex-column ${side2.div3}`}>
            <div >
              <div className={`d-flex`}>
                <div>
                  <b className={side2.fontsize1}>{sidelist.sidename}</b>
                </div>
              </div>
              <div>
                <span className={side2.span}>日/長租</span>
                <div className={`d-flex`}>
                  <div>
                    <input type="radio" id="radio1" className={side2.radio} name="a" defaultValue="日租" checked={rentday==='日租'} onChange={(e)=>{radio(e.target.value)}}/>
                    <label htmlFor="radio1" className={`${side2.buttom1}`} >日租</label>
                  </div>
                  <div >
                    <input type="radio" id="radio2" className={side2.radio} name="a" defaultValue="月租" checked={rentday==='月租'} onChange={(e)=>{radio(e.target.value)}}/>
                    <label htmlFor="radio2" className={`${side2.buttom1}`} >月租</label>
                  </div>
                  <div>
                    <input type="radio" id="radio3" className={side2.radio} name="a" defaultValue="季租" checked={rentday==='季租'} onChange={(e)=>{radio(e.target.value)}}/>
                    <label htmlFor="radio3" className={`${side2.buttom1}`} >季租</label>
                  </div>

                </div>
              </div>
              <div className={side2.div7}>
                <span className={side2.span}>日期</span>
                <div className={side2.div8}>
                  <input type="date" name="inputdate" className={side2.date} onChange={(e)=>{setdate(e.target.value)}}/><img className={`${side2.selectedDate}`} src={group41} alt="" />
                </div>
              </div>
              <div>
                <span className={side2.span}>時段</span>
                <div className={`d-flex ${side2.div9}`} >
                  <div className={`d-flex flex-wrap ${side2.div10}`}>
                      {checkbox.map((val,key)=>{
                        let c = key+sidelist.weekstarttime;
                        return (
                            <React.Fragment>
                              <input type="checkbox" name="box" className={side2.checkbox}  checked={val[key]} value={c} id={`checkbox+${key}`} onChange={(e) => handleOnChange(key,e.target.value)}/>
                              <label htmlFor={`checkbox+${key}`} className={`${side2.buttom1}`} >{c}:00~:{c+1}00</label>
                            </React.Fragment>
                          );
                        })}
                  </div>
                </div>
              </div>
              <div className={`d-flex`}>
                <div>
                  <span className={side2.span}>數量</span>
                  <div className={`d-flex`}>
                    <div onClick={minus} className={side2.buttom3} id="add">-</div>
                    <input type="number" className={side2.input} id="my-input" min="0" max="10" step="1" defaultValue={1}/>
                    <div onClick={add} className={side2.buttom3} id="minus">+</div>
                  </div>
                </div>
                <div className={`${side2.div11}`}>
                  <span className={side2.span}>費用</span>
                  <div>
                    <span className={side2.div12}>700</span>
                    <span className={side2.span}>元</span>
                  </div>
                </div>
                <div className={`ml-auto`}>
                  <input className={side2.aa} type="button" defaultValue="預定" onClick={aaa}/>
                </div>
              </div>
            </div>
          </div>
          <div className={side2.div4}>
            <div className={side2.div5}>
            <iframe src={sidelist.goolemapurl} 
            className={side2.div13} allowfullscreen="" loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
      :''}
      
    </React.Fragment>
  );
}
export default Side2;