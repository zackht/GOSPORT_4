import React, { useState, useEffect, useRef,useLayoutEffect} from 'react';
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
import { useHistory, useParams } from 'react-router-dom';
import Axios from "axios";
import Cookies from 'js-cookie';
const Side2 = () => {
  const [num, setnum] = useState(1);
  const add = () => {
    setnum(num + 1);
  }
  const minus = () => {
    if (num > 0) {
      setnum(num - 1);
    }
  }
  // 取得尖峰與離峰時間陣列
  const [peaktimelist, setpeaktimelist] = useState([]);
  const [offpeaktimelist, setoffpeaktimelist] = useState([]);
  // 取得網址參數
  const parameter = useParams();
  const sideid = parameter.id;
  // 載入時抓資料
  // useLayoutEffect比useEffect早執行
  // useLayoutEffect是同步函式會執行完再渲染畫面
  useLayoutEffect(() => {
    getside();
    gettoday();
    console.log('開始')
  }, [])
  const [sidelist, setsidelist] = useState();
  const [re, setre] = useState(false);
  const [img, setimg] = useState('');
  // 進入網頁後查詢資料
  const getside = () => {
    Axios.post("http://localhost:3001/rentsidemore", {
      sideid: sideid,
    }).then((response) => {
      // console.log(response);
      setsidelist(response.data[0]);
      setcheckbox(
        new Array(response.data[0].weekendtime - response.data[0].weekstarttime).fill(false)
        )
        sethocheckbox(
          new Array(response.data[0].holidayendtime - response.data[0].holidaystarttime).fill(false)
          )
          var u8Arr = new Uint8Array(response.data[0].sideimg.data);
          var blob = new Blob([u8Arr], { type: "image/jpeg" });
          var fr = new FileReader;
          fr.readAsDataURL(blob);
          fr.onload = function () {
            setimg(fr.result);
          };
          setre(true);
          // 尖峰時間陣列
            for (let i = response.data[0].peakstarttime; i <= response.data[0].peakendtime; i++) {
              peaktimelist.push(`${i}`);
            }
            // 離峰時間陣列
            for (let i = response.data[0].offpeakstarttime; i <= response.data[0].offpeakendtime; i++) {
              offpeaktimelist.push(`${i}`);
          }
        });
  }
  const [max,setmax]=useState(0);
  const [min,setmin]=useState(0);
  const [awaitfee,setawaitfee]=useState(0);
  const aaa = async () => {
    setdiv2(!div2);
    document.body.style.overflow = 'hidden';
    console.log(libaichi); //月租季租禮拜幾
    console.log(rentday); //日租月租季租
    console.log(date);  //日期
    setmin(Math.min(...checkboxselect));
    setmax(Math.max(...checkboxselect));
    console.log(Math.min(...checkboxselect)); //checkbox最小值
    console.log(Math.max(...checkboxselect));//checkbox最大值
    console.log(num); //數量
    console.log(checkboxselect); //所選時段
    const peaktimenum = await Promisefn();
    const offpeaktimenum = await Promisefn2();
    console.log(peaktimenum);//尖峰時段數量
    console.log(offpeaktimenum);// 離峰時段數量
    setawaitfee(await feeee(peaktimenum,offpeaktimenum));
    console.log(peaktimelist);//查詢到的尖峰時段
    console.log(offpeaktimelist);//查詢到的離峰時段
    console.log(`費用${awaitfee}`);//費用
    console.log(monthdate);//月季租日期
    if(rentday==='月租'){
      getmonthdate();
    }else{
      getmonthdate2();
    }
  }
  const Promisefn = () => {
    return new Promise((resolve, reject) => {
      let a = 0;
      checkboxselect.map(val=>{
        if (peaktimelist.includes(val)) {
          a+=1;
        }
      })
      resolve(a);
    })
  }
  const Promisefn2 = () => {
    return new Promise((resolve, reject) => {
      let b = 0;
      checkboxselect.map(val=>{
        if (offpeaktimelist.includes(val)) {
          b+=1;
        }
      })
      resolve(b);
    })
  }
  const feeee = (peaktimenum,offpeaktimenum) => {
    return new Promise((resolve, reject) => {
      let fee = 0;
      if (rentday==='日租') {
        fee = (peaktimenum*sidelist.peakfee+offpeaktimenum*sidelist.offpeakfee)*num;
      }else if(rentday==='月租'){
        fee = (peaktimenum*sidelist.peakfee+offpeaktimenum*sidelist.offpeakfee)*num*0.9;
      }else if(rentday==='季租'){
        fee = (peaktimenum*sidelist.peakfee+offpeaktimenum*sidelist.offpeakfee)*num*0.8;
      }
    
      resolve(fee);
    })
  }
  const [peaktime, setpeaktime] = useState(0);
  const [cost, setcost] = useState(0);

  // 設定radio
  const [rentday, setrentday] = useState('日租');
  const radio = (e) => {
    setrentday(e);
  }
  const [date, setdate] = useState('');
  // 取得選取的checkbox
  const [checkbox, setcheckbox] = useState([]);//平日的checkbox數量
  const [hocheckbox, sethocheckbox] = useState([]);//假日的checkbox數量
  const [checkboxselect, setcheckboxselect] = useState([]);
  const handleOnChange = (position, e) => {
    const newcheckbox = checkbox.map((item, index) =>
      index === position ? !item : item
    );
    setcheckbox(newcheckbox);
    checkboxselect.push(e);
  }
  const handleOnChange2 = (position, e) => {
    const newhocheckbox = hocheckbox.map((item, index) =>
      index === position ? !item : item
    );
    sethocheckbox(newhocheckbox);
    checkboxselect.push(e);
  }
  // 日期onchange後
  const [weekendtrue, setweekendtrue] = useState(false);
  const getweekend = (e) => {
    setdate(e);
    // 判斷是否是假日
    let date2 = new Date(e);
    let day = date2.getDay();
    if (day == 6 || day == 0) {
      setweekendtrue(true);
    } else {
      setweekendtrue(false);
    }
    // 重製選取的時段
    setcheckboxselect([]);
    // 重製checkbox的選取狀態
    sethocheckbox(
      hocheckbox.fill(false)
    );
    setcheckbox(
      checkbox.fill(false)
    );
    setpeaktime(0);

  }
  // 取得今天日期
  const [today, settoday] = useState('');
  const gettoday = () => {
    let c = new Date();
    let y = c.getFullYear();
    let m = c.getMonth() + 1;
    let d = c.getDate();
    settoday(`${y}-${m = (m < 10 ? '0' : '') + m}-${d = (d < 10 ? '0' : '') + d}`);
    //                ex: 2= 2<10?0:''+2 => 02
    setdate(`${y}-${m = (m < 10 ? '' : '') + m}-${d = (d < 10 ? '0' : '') + d}`);
    // 不知道為甚麼m多一個0
  }
  const weekday =
    checkbox.map((val, key) => {
      let c = key + sidelist.weekstarttime;
      return (
        <React.Fragment>
          <input type="checkbox" name="box" key={key} className={side2.checkbox} checked={val} value={c} id={`checkbox+${key}`} onChange={(e) => handleOnChange(key, e.target.value)} />
          <label htmlFor={`checkbox+${key}`} className={`${side2.buttom1}`} >{c}:00~{c + 1}:00</label>
        </React.Fragment>
      );
    })
  const a = () => {
    return weekday;
  }
  const howeekday = hocheckbox.map((val, key) => {
    let c = key + sidelist.holidaystarttime;
    return (
      <React.Fragment>
        <input type="checkbox" name="box2" key={key} className={side2.checkbox} checked={val} value={c} id={`checkbox+${key}`} onChange={(e) => handleOnChange2(key, e.target.value)} />
        <label htmlFor={`checkbox+${key}`} className={`${side2.buttom1}`} >{c}:00~{c + 1}:00</label>
      </React.Fragment>
    );
  })
  const b = () => {
    return howeekday;
  }
  const check =()=>{
    console.log(sidelist.park);
  }
  const[libaichi,setlibaichi]=useState('禮拜一');
  const ll=(e)=>{
    setlibaichi(e);
  }
  const select =<div>
  <select name="" id="" className={side2.div14} onChange={(e)=>{ll(e.target.value)}}>
    <option value="禮拜一">禮拜一</option>
    <option value="禮拜二">禮拜二</option>
    <option value="禮拜三">禮拜三</option>
    <option value="禮拜四">禮拜四</option>
    <option value="禮拜五">禮拜五</option>
    <option value="禮拜六">禮拜六</option>
    <option value="禮拜日">禮拜日 </option>
  </select>
  <img className={`${side2.selectedDate2}`} src={group41} alt="" />
</div>
const [div2,setdiv2]=useState(false);
const aaa2 =()=>{
  setdiv2(!div2);
  document.body.style.overflow = 'auto';
}
const userid = (Cookies.get('id'));
const confirm =()=>{
  if(rentday === '日租'){
    Axios.post("http://localhost:3001/rentsideconfirm", {
      rentday: rentday,//日租
      date: date,//日期
      max: max,//最大時段
      min: min,//最小時段
      awaitfee: awaitfee,//價錢
      num: num,//數量
      today: today,
      sidename: sidelist.sidename,
      address: sidelist.adress,
      libaichi: libaichi,
      userid,userid,
      }).then((response) => {
        alert('成功');
        setdiv2(!div2);
        gopath.push('/gosport/rent/side');
          })
  }else{
    Axios.post("http://localhost:3001/rentsideconfirm2", {
      rentday: rentday,//月租季租
      date: date,//開始日期
      monthdate: monthdate,//結束日期
      max: max,//最大時段
      min: min,//最小時段
      awaitfee: awaitfee,//價錢
      num: num,//數量
      today: today,
      sidename: sidelist.sidename,
      address: sidelist.adress,
      libaichi: libaichi,
      userid:userid,
      }).then((response) => {
        alert('成功');
        setdiv2(!div2);
        gopath.push('/gosport/rent/side');
          })
  }
}
const gopath = useHistory();
// 設定月租與季租日期
const [monthdate,setmonthdate]=useState('');
const getmonthdate =()=>{
  let c = new Date(date);
  let y = c.getFullYear();
  let m = c.getMonth() + 2;
  let d = c.getDate();
  setmonthdate(`${y}-${m = (m < 10 ? '0' : '') + m}-${d = (d < 10 ? '0' : '') + d}`);
}
const getmonthdate2 =()=>{
  let c = new Date(date);
  let y = c.getFullYear();
  let m = c.getMonth() + 4;
  let d = c.getDate();
  setmonthdate(`${y}-${m = (m < 10 ? '0' : '') + m}-${d = (d < 10 ? '0' : '') + d}`);
}
  return (
    <React.Fragment>
      {(re) ?
        <div className={`container-fluid ${side2.div1}`}>
          <div className={`row ${side2.boxshadow} d-flex ${side2.div2}`}>
            <div className={side2.thecover}>
              <img src={img} alt="" />
            </div>
            <div className={`col-xl-4 d-flex flex-column ${side2.div3x}`}>
              <div>
                <span className={side2.span} onClick={check}>設施</span>
                {sidelist.park === 'true' ? <div><img src={a1} alt="" /></div> : <div>無</div>}
                {sidelist.bath === 'true' ? <div><img src={a2} alt="" /></div> : <div>無</div>}
                {sidelist.baulk === 'true' ? <div><img src={a3} alt="" /></div> : <div>無</div>}
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
                      <input type="radio" id="radio1" className={side2.radio} name="a" defaultValue="日租" checked={rentday === '日租'} onChange={(e) => { radio(e.target.value) }} />
                      <label htmlFor="radio1" className={`${side2.buttom1}`} >日租</label>
                    </div>
                    <div >
                      <input type="radio" id="radio2" className={side2.radio} name="a" defaultValue="月租" checked={rentday === '月租'} onChange={(e) => { radio(e.target.value) }} />
                      <label htmlFor="radio2" className={`${side2.buttom1}`} >月租</label>
                    </div>
                    <div>
                      <input type="radio" id="radio3" className={side2.radio} name="a" defaultValue="季租" checked={rentday === '季租'} onChange={(e) => { radio(e.target.value) }} />
                      <label htmlFor="radio3" className={`${side2.buttom1}`} >季租</label>
                    </div>

                  </div>
                </div>
                <div className={side2.div7}>
                  <span className={side2.span}>日期</span>
                  <div className={`${side2.div8} d-flex`}>
                    <input type="date" name="inputdate" defaultValue={today} className={side2.date} onChange={(e) => { getweekend(e.target.value) }} />
                    <img className={`${side2.selectedDate}`} src={group41} alt="" />
                    {rentday==='日租'?'':select}
                  </div>
                </div>
                <div>
                  <span className={side2.span}>時段</span>
                  <div className={`d-flex ${side2.div9}`} >
                    <div className={`d-flex flex-wrap ${side2.div10}`}>
                      {weekendtrue ? b() : a()}
                    </div>
                  </div>
                </div>
                <div className={`d-flex`}>
                  <div>
                    <span className={side2.span}>數量</span>
                    <div className={`d-flex`}>
                      <div onClick={minus} className={side2.buttom3} id="add">-</div>
                      <input type="number" className={side2.input} id="my-input" key={num} min="0" max={sidelist.amount} defaultValue={num} onChange={(e) => { setnum(e.target.value) }} />
                      <div onClick={add} className={side2.buttom3} id="minus">+</div>
                    </div>
                  </div>
                  <div className={`ml-auto`}>
                    <input className={side2.aa} type="button" defaultValue="預定" onClick={aaa} />
                  </div>
                </div>
              </div>
            </div>
            <div className={side2.div4}>
              <div className={side2.div5}>
                <iframe src={sidelist.goolemapurl}
                  className={side2.div13} allowFullScreen="" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
        : ''}
        {(re)?
        (rentday==='日租')?
          <div className={`${side2.div55}`} style={{ display: (div2) ? 'block' : 'none' }}>
            <div className={`${side2.div56} d-flex flex-column`}>
              <div className={side2.div56span}>訂單詳情</div>
              <div className={side2.div56line}></div>
              <div className={side2.div60}>
                <span className={side2.div57}>場地</span>
                <div className={side2.div58}>{sidelist.sidename}</div>
              </div>
              <div className={side2.div60}>
                <span className={side2.div57}>日/長租</span>
                <div className={side2.div58}>{rentday}</div>
              </div>
              <div className={side2.div60}>
                <span className={side2.div57}>日期</span>
                <div className={side2.div58}>{date}</div>
              </div>
              <div className={side2.div60}>
                <span className={side2.div57}>時段</span>
                <div className={side2.div58}>{`${max}:00~${min+1}:00`}</div>
              </div>
              <div className={side2.div60}>
                <span className={side2.div57}>數量</span>
                <div className={side2.div58}>{num}</div>
              </div>
              <div className={side2.div60}>
                <span className={side2.div57}>費用</span>
                <div className={side2.div58}>{awaitfee}</div>
              </div>
              <div className={`${side2.div59} d-flex justify-content-around`}>
                <button className={side2.button2} onClick={aaa2}>取消</button>
                <button className={side2.button3} onClick={confirm}>確認</button>
              </div>
            </div>
          </div>
        :(rentday==='月租'||rentday==='季租')?
          <div className={`${side2.div55}`} style={{ display: (div2) ? 'block' : 'none' }}>
              <div className={`${side2.div56} d-flex flex-column`}>
                <div className={side2.div56span}>訂單詳情</div>
                <div className={side2.div56line}></div>
                <div className={side2.div60}>
                  <span className={side2.div57}>場地</span>
                  <div className={side2.div58}>{sidelist.sidename}</div>
                </div>
                <div className={side2.div60}>
                  <span className={side2.div57}>日/長租</span>
                  <div className={side2.div58}>{rentday}</div>
                </div>
                <div className={`${side2.div60} d-flex`}>
                  <div>
                    <span className={side2.div57}>開始日期</span>
                    <div className={side2.div58}>{date}</div>
                  </div>
                  <div className={side2.div61}>
                    <span className={side2.div57}>結束日期</span>
                    <div className={side2.div58}>{monthdate}</div>
                  </div>
                  <div className={side2.div61}>
                    <span className={side2.div57}>週期</span>
                    <div className={side2.div58}>{libaichi}</div>
                  </div>
                </div>
                <div className={side2.div60}>
                  <span className={side2.div57}>時段</span>
                  <div className={side2.div58}>{`${max}:00~${min+1}:00`}</div>
                </div>
                <div className={side2.div60}>
                  <span className={side2.div57}>數量</span>
                  <div className={side2.div58}>{num}</div>
                </div>
                <div className={side2.div60}>
                  <span className={side2.div57}>費用</span>
                  <div className={side2.div58}>{awaitfee}</div>
                </div>
                <div className={`${side2.div59} d-flex justify-content-around`}>
                  <button className={side2.button2} onClick={aaa2}>取消</button>
                  <button className={side2.button3} onClick={confirm}>確認</button>
                </div>
              </div>
          </div>
        :''
        :''}

    </React.Fragment>
  );
}
export default Side2;