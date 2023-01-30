import React, { useState,useEffect,useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cc from './cc.module.css';
import Axios from "axios";
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import q from './icon/Q.png'
import team from './icon/下載.jpg'
import op from './icon/op_01.jpg';
import ten from './icon/Group 10.png';
import arr from './icon/arrowup2.svg';
import ball from './icon/球類別.png';
import io from 'socket.io-client';
import chat from './icon/Group 33.svg';
import send from './icon/按鈕.svg';
import sun1 from './icon/Vector.svg';
import fram from './icon/Frame.svg';
import bask from './icon/bask.svg';
import tennis from './icon/Group 2.svg';
//建立連線
const  socket = io.connect("http://localhost:3002");


const Handya = () =>{
    const [rentdiv, setrent] = useState('block');
    const [zerodadiv, setzeroda] = useState('none');
    const [teamdiv, setteam] = useState('none');
    const [turndiv, setturn] = useState('none');
    const [rentbtn, setrentbtn] = useState(true);
    const [zerodabtn, setzerobtn] = useState(false);
    const [teambtn, setteambtn] = useState(false);
    const [turnbtn, setturnbtn] = useState(false);
    const changerent = () => {
        setrent('block');
        setzeroda('none');
        setteam('none');
        setturn('none');
        setrentbtn(true);
        setzerobtn(false);
        setteambtn(false);
        setturnbtn(false);
    }
    const changezeroda = () => {
        setrent('none');
        setzeroda('block');
        setteam('none');
        setturn('none');
        setrentbtn(false);
        setzerobtn(true);
        setteambtn(false);
        setturnbtn(false);
    }
    const changeteam = () => {
        setrent('none');
        setzeroda('none');
        setteam('block');
        setturn('none');
        setrentbtn(false);
        setzerobtn(false);
        setteambtn(true);
        setturnbtn(false);
    }
    const changeturn = () => {
        setrent('none');
        setzeroda('none');
        setteam('none');
        setturn('block');
        setrentbtn(false);
        setzerobtn(false);
        setteambtn(false);
        setturnbtn(true);
    }
    const [Taichung, setTaichung] = useState([
        "外埔區", "東區", "西區", "南區", "北區", "西屯區", "南屯區", "北屯區", "豐原區", "大里區", "太平區", "清水區", "沙鹿區", "大甲區", "東勢區", "梧棲區", "烏日區", "神岡區", "大肚區", "大雅區", "后里區", "霧峰區", "潭子區", "龍井區", "中區", "和平區", "石岡區", "大安區", "新社區"
    ]);
    const [time, settime] = useState([
        '0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '0:00'
    ])
    const [temp,settemp] = useState('');
    const [rain,setrain] = useState('');
    const [name,setname] = useState('');
    const [sun,setsun] =  useState('');

    const changeweather = (e) => {
        const index = e.target.selectedIndex;
        const optionElement = e.target.childNodes[index];
        const optionElementId = optionElement.getAttribute('id');
        Cookies.remove('town');
        Cookies.set(
            'town',//key
            optionElementId)//value
      
        Axios.get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-073?Authorization=CWB-CD60C32C-4797-4EA9-A3B6-E5837A37F9C1')
        .then(function (response) {
            setsun(response.data.records.locations[0].location[0].weatherElement[1].time[2].elementValue[0].value)
            settemp(response.data.records.locations[0].location[0].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[0].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[0].locationName)    
            if (e.target.value=="中區"){
            settemp(response.data.records.locations[0].location[10].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[10].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[10].locationName)
            }
            else if(e.target.value=="東區"){
                settemp(response.data.records.locations[0].location[26].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[26].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[26].locationName)
            }
            else if(e.target.value=="西區"){
                settemp(response.data.records.locations[0].location[18].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[18].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[18].locationName)
            }
            else if(e.target.value=="南區"){
                settemp(response.data.records.locations[0].location[13].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[13].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[13].locationName)
            }
            else if(e.target.value=="北區"){
                settemp(response.data.records.locations[0].location[4].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[4].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[4].locationName)
            }
            else if(e.target.value=="西屯區"){
                settemp(response.data.records.locations[0].location[21].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[21].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[21].locationName)
            }
            else if(e.target.value=="南屯區"){
                settemp(response.data.records.locations[0].location[7].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[7].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[7].locationName)
            }
            else if(e.target.value=="北屯區"){
                settemp(response.data.records.locations[0].location[17].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[17].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[17].locationName)
            }
            else if(e.target.value=="豐原區"){
                settemp(response.data.records.locations[0].location[2].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[2].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[2].locationName)
            }
            else if(e.target.value=="大里區"){
                settemp(response.data.records.locations[0].location[22].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[22].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[22].locationName)
            }
            else if(e.target.value=="太平區"){
                settemp(response.data.records.locations[0].location[5].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[5].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[5].locationName)
            }
            else if(e.target.value=="清水區"){
                settemp(response.data.records.locations[0].location[25].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[25].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[25].locationName)
            }
            else if(e.target.value=="沙鹿區"){
                settemp(response.data.records.locations[0].location[12].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[12].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[12].locationName)
            }
            else if(e.target.value=="大甲區"){
                settemp(response.data.records.locations[0].location[9].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[9].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[9].locationName)
            }
            else if(e.target.value=="東勢區"){
                settemp(response.data.records.locations[0].location[16].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[16].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[16].locationName)
            }
            else if(e.target.value=="梧棲區"){
                settemp(response.data.records.locations[0].location[28].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[28].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[28].locationName)
            }
            else if(e.target.value=="烏日區"){
                settemp(response.data.records.locations[0].location[11].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[11].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[11].locationName)
            }
            else if(e.target.value=="神岡區"){
                settemp(response.data.records.locations[0].location[20].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[20].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[20].locationName)
            }
            else if(e.target.value=="大肚區"){
                settemp(response.data.records.locations[0].location[27].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[27].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[27].locationName)
            }
            else if(e.target.value=="大雅區"){
                settemp(response.data.records.locations[0].location[23].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[23].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[23].locationName)
            }
            else if(e.target.value=="后里區"){
                settemp(response.data.records.locations[0].location[3].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[3].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[3].locationName)
            }
            else if(e.target.value=="霧峰區"){
                settemp(response.data.records.locations[0].location[19].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[19].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[19].locationName)
            }
            else if(e.target.value=="潭子區"){
                settemp(response.data.records.locations[0].location[6].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[6].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[6].locationName)
            }
            else if(e.target.value=="龍井區"){
                settemp(response.data.records.locations[0].location[14].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[14].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[14].locationName)
            }
            else if(e.target.value=="外埔區"){
                settemp(response.data.records.locations[0].location[0].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[0].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[0].locationName)
            }
            else if(e.target.value=="和平區"){
                settemp(response.data.records.locations[0].location[8].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[8].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[8].locationName)
            }
            else if(e.target.value=="石岡區"){
                settemp(response.data.records.locations[0].location[15].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[15].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[15].locationName)
            }
            else if(e.target.value=="大安區"){
                settemp(response.data.records.locations[0].location[24].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[24].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[24].locationName)
            }
            // 新社區
            else{
                settemp(response.data.records.locations[0].location[1].weatherElement[2].time[0].elementValue[0].value)
            setrain(response.data.records.locations[0].location[1].weatherElement[0].time[1].elementValue[0].value)
            setname(response.data.records.locations[0].location[1].locationName)
            }
            console.log(e.target.value);
        })

      };
      const [chatdiv,setchat] =useState("none")
      const[chatimg,setchatimg] =useState("block")
      const newref = useRef(null);
      const bottomref = useRef(null);
      const[message,setmessage] =useState("");
      const[message1,setmessage1] =useState([{}]);
      const[message2,setmessage2] =useState("");
      const[mes,setmes] = useState([{}]);
      const userid = (Cookies.get('id'));
      const [userInfo, setuser] = useState([{}]);
      const[usern,setusern] = useState("")
      const[idd,setidd] = useState();
      const [type,settype] =useState('0');
      const chatbtn = () =>{
        setchat('none');
        setchatimg('block');
      }
      const chatbtn1 = () =>{
        setchat('block');
        setchatimg('none');
      }
      Cookies.remove('ball');
      Cookies.set(
          'ball',//key
         type)//value
      const startdate = (e)=>{
        Cookies.remove('startdate');
        Cookies.set(
            'startdate',//key
            e.target.value)//value
      }
      const enddate = (e)=>{
        Cookies.remove('enddate');
        Cookies.set(
            'enddate',//key
            e.target.value)//value
      }
      const starttime = (e)=>{
        Cookies.remove('starttime');
        Cookies.set(
            'starttime',//key
            e.target.value)//value
      }
      const endtime = (e)=>{
        Cookies.remove('endtime');
        Cookies.set(
            'endtime',//key
            e.target.value)//value
      }
      const keyword = (e)=>{
        Cookies.remove('keyword');
        Cookies.set(
            'keyword',//key
            e.target.value)//value
      }
      const chack = (e)=>{
        Cookies.remove('car');
        Cookies.set(
            'car',//key
            e.target.checked)//value
      }
      const wash = (e)=>{
        Cookies.remove('wash');
        Cookies.set(
            'wash',//key
            e.target.checked)//value
      }
      const nohand = (e)=>{
        Cookies.remove('nohand');
        Cookies.set(
            'nohand',//key
            e.target.checked)//value
      }
      const sendmsg = () => {

        // bottomref.current?.scrollIntoView({behavior: 'smooth'});
        // setmes([]);
        	// socket.emit(“要對 server 發送的事件名稱”,data)
        socket.emit("send_mesg",{message,name:usern,id:idd});
        // socket.emit("send_mesg1",{message});
        bottomref.current?.scrollIntoView({behavior: 'smooth'});

        // socket.emit("send_mesg1",{message});
        console.log(mes)
        setmessage('')
      }
useEffect(()=>{
    Axios.get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-073?Authorization=CWB-CD60C32C-4797-4EA9-A3B6-E5837A37F9C1')
    .then(function (response) {
        setsun(response.data.records.locations[0].location[0].weatherElement[1].time[2].elementValue[0].value)
        settemp(response.data.records.locations[0].location[0].weatherElement[2].time[0].elementValue[0].value)
        setrain(response.data.records.locations[0].location[0].weatherElement[0].time[1].elementValue[0].value)
        setname(response.data.records.locations[0].location[0].locationName) })
    // changeweather()
    setidd((Cookies.get('id')))
},[])
      useEffect(()=>{
        Axios.post("http://localhost:3001/self", {
            userid: userid,
        }).then((response) => {
            setuser(response.data)
            setusern(response.data[0].username)
        });
      },[userid])

      useEffect(()=>{
       bottomref.current.scrollIntoView({behavior: 'smooth'});
        socket.on("receive_message",(data)=>{
        setmes(data);})
       bottomref.current.scrollIntoView({behavior: 'smooth'});
     },[mes,socket]);

    //  const checkheight=()=>{
    //     alert('here');
    //     let qatext = document.getElementById('qateaxt');
    //     qatext.scrollIntoView();
    //  }        

        return (
        <React.Fragment>
            
    <div className={`${cc.dd1} container-fluid`}>
    <div className={cc.nav}>
            
        </div>

                   <div className={cc.marquee}>
        {mes.map((v,k)=>{
            if (v.message != null){
            return(
                <React.Fragment>
             
            <div className={cc.marquee1}>
                <img src={op} alt=""/>
                <div className={cc.d1}>
                    <span>{v.name}</span>
                    <p>&nbsp;&nbsp;南區&nbsp;&nbsp;</p>
                    <h4>{v.message}</h4>
                </div>
            </div>
           
            </React.Fragment>
            )
            }
        })}
      </div>
        {/* <div className={cc.marquee}>
            <div className={cc.marquee1}>
                <img src={op} alt=""/>
                <div className={cc.d1}>
                    <span>1柯智勛</span>
                    <p>&nbsp;&nbsp;南區&nbsp;&nbsp;</p>
                    <h4>好無聊</h4>
                </div>

            </div>

        </div> */}

        <div className={cc.season}>
            <div className={cc.season1}>
                <div className={cc.seasoninfo}>
                    <h1>{temp}°</h1>
                    <p>&nbsp;&nbsp;{name}&nbsp;&nbsp;</p>&nbsp;&nbsp;<span className={cc.spancolo}>降雨機率{rain}%</span>
                </div>
                <img src={sun==="晴"?sun1:ten} alt=""/>
            </div>
        </div>

        <div className={cc.ezsurch}>
            <div className={cc.ezsurch1}>
                <button className={` ${rentbtn === true ? cc.focus:cc.tablink }`} onClick={changerent}>租場地</button>
                <button className={` ${zerodabtn === true ? cc.focus:cc.tablink }`} onClick={changezeroda}>找零打</button>
                <button className={` ${teambtn === true ? cc.focus:cc.tablink }`} onClick={changeteam}>找球隊</button>
                <button className={` ${turnbtn === true ? cc.focus:cc.tablink }`} onClick={changeturn}>轉租</button>

                <div id="London" style={{display: rentdiv}} className={cc.tabcontent}>
                    <form action="">
                        <div id="local" className={cc.d2}>
                            <p className={cc.d3}>類別</p>
                            {/* <img className={cc.d4} src={ball} alt=""/> */}
                            <img className={cc.d4} src={`${type=='0'?fram:type=='1'?tennis:bask}`} alt="" /><br />
                                    <select name="" id="aaa" className={cc.d4s} onChange={(e)=>{settype(e.target.value)}}>
                                        <option value="0">羽球</option>
                                        <option value="1">桌球</option>
                                        <option value="2">籃球</option>
                                    </select>
                            <p className={cc.d5}>地區</p>
                            <img className={`${cc.d6} ${cc.selectedDate}`} src={arr}/>
                            <img className={`${cc.d7} ${cc.selectedDate}`} src={arr}/>
                            <select name="city" className={cc.county}>
                                <option value="1">台中</option>
                            </select>
                            <select name="town" onChange={changeweather} className={cc.district}>
                            {Taichung.map((val, key) => {
                                                    return (<option key={key} id={key} value={val}>{val}</option>);
                                                })}
                            </select>

                        </div>

                        <div className={cc.d8}>
                            <p className={cc.d9}>日期</p>
                            <p className={cc.d10}>開始時間</p>
                            <p className={cc.d11}>結束時間</p>
                        </div>
                        
                        <input className={cc.d12} onChange={startdate} type="date" id="start"
                            name="trip-start"/>
                        <img className={`${cc.d13} ${cc.selectedDate}`} src={arr}/>

                        <span className={cc.d14}>~</span>

                        <input className={cc.d15} onChange={enddate} type="date" id="start"
                            name="trip-start"/>
                        <img className={`${cc.d16} ${cc.selectedDate}`} src={arr}/>

                        {/* <input className={cc.d17} type="time" value="13:14"
                            step="300"/> */}
                           <select onChange={starttime} class={cc.d17}>
                                 {time.map((val, key) => {
                                       return (<option key={key} value={key + 1}>{val}</option>);
                                        })}
                                            </select>
                        <img className={`${cc.d18} ${cc.selectedDate}`} src={arr}/>

                        {/* <input className={cc.d19} type="time" value="13:14"
                            step="300"/> */}
                            <select onChange={endtime} class={cc.d19}>
                                 {time.map((val, key) => {
                                       return (<option key={key} value={key + 1}>{val}</option>);
                                        })}
                                            </select>
                        <img className={`${cc.d20} ${cc.selectedDate}`} src={arr}/>


                        <div className={cc.d21}>
                            <p className={cc.d22}>關鍵字</p>
                        </div>
                        <label className={cc.d23} for="">
                            <input onChange={keyword} className={cc.d24}
                                type="text" placeholder="請輸入關鍵字"/>
                        </label>
                        <div className={cc.d25}>
                            <p className={cc.d26}>關鍵字</p>

                        </div>

                        <label className={cc.d27}>
                            <input className={cc.d28} onChange={chack} type="checkbox" value="停車場" />
                            <span className={cc.d29}>停車場</span>
                        </label>
                        <label className={cc.d30}>
                            <input className={cc.d31} onChange={wash} type="checkbox" value="淋浴間" />
                            <span className={cc.d32}>淋浴間</span>
                        </label>
                        <label className={cc.d33}>
                            <input className={cc.d34} onChange={nohand} type="checkbox" value="身障友善" />
                            <span className={cc.d35}>身障友善</span>
                        </label>
                        <button className={cc.serch}><Link style={{color:"white"}} to='/gosport/rent'>快速搜尋</Link></button>
                    </form>
                </div>
                <div id="Paris" style={{display: zerodadiv}} className={cc.tabcontent}>
                    <div id="local1" className={cc.d36}>
                        <p className={cc.d37}>類別</p>
                        <img className={cc.d38} src={ball} alt=""/>
                        <p className={cc.d39}>地區</p>
                        <img className={`${cc.d40} ${cc.selectedDate}`} src={arr}/>
                        <img className={`${cc.d41} ${cc.selectedDate}`} src={arr}/>
                        <select name="city" className={cc.county}>
                                <option value="1">台中</option>
                            </select>
                            <select name="town" onChange={changeweather} className={cc.district}>
                            {Taichung.map((val, key) => {
                                                    return (<option key={key} value={val}>{val}</option>);
                                                })}
                            </select>
                    </div>


                    <div className={cc.d42}>
                        <p className={cc.d43}>日期</p>
                        <p className={cc.d44}>時間</p>


                    </div>
                    <input className={cc.d45}
                        type="date" id="start" name="trip-start" value="2022-12-19" min="2022-12-19" max="2033-12-31"/>
                    <img className={`${cc.d46} ${cc.selectedDate}`} src={arr}/>

                    {/* <input className={cc.d47} type="time" value="13:14"
                        step="300"/> */}
                                                   <select class={cc.d17}>
                                 {time.map((val, key) => {
                                       return (<option key={key} value={key + 1}>{val}</option>);
                                        })}
                                            </select>
                    <img className={`${cc.d48} ${cc.selectedDate}`} src={arr}/>
                    <span className={cc.d49}>至</span>
                    {/* <input className={cc.d50} type="time" value="13:14"
                        step="300"/> */}
                                                                           <select class={cc.d17}>
                                 {time.map((val, key) => {
                                       return (<option key={key} value={key + 1}>{val}</option>);
                                        })}
                                            </select>
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
                <div id="Tokyo" style={{display: teamdiv}} className={cc.tabcontent}>
                    <div id="local2" className={cc.d64}>
                        <p className={cc.d65}>類別</p>
                        <img className={cc.d66} src={ball} alt=""/>
                        <p className={cc.d67}>地區</p>
                        <img className={`${cc.d68} ${cc.selectedDate}`} src={arr}/>
                        <img className={`${cc.d69} ${cc.selectedDate}`} src={arr}/>
                        <select name="city" className={cc.county}>
                                <option value="1">台中</option>
                            </select>
                            <select name="town" onChange={changeweather} className={cc.district}>
                            {Taichung.map((val, key) => {
                                                    return (<option key={key} value={val}>{val}</option>);
                                                })}
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
                    {/* <input className={cc.d76} type="time" value="13:14"
                        step="300"/> */}
                        <select class={cc.d17}>
                                 {time.map((val, key) => {
                                       return (<option key={key} value={key + 1}>{val}</option>);
                                        })}
                                            </select>
                    <img className={`${cc.d77} ${cc.selectedDate}`} src={arr}/>
                    <span className={cc.d78}>至</span>
                    {/* <input className={cc.d79} type="time" value="13:14"
                        step="300"/> */}
                        <select class={cc.d17}>
                                 {time.map((val, key) => {
                                       return (<option key={key} value={key + 1}>{val}</option>);
                                        })}
                                            </select>
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
                <div id="Oslo" style={{display: turndiv}} className={cc.tabcontent}>
                    <div id="local3" className={cc.d93}>
                        <p className={cc.d94}>類別</p>
                        <img className={cc.d95} src={ball} alt=""/>
                        <p className={cc.d96}>地區</p>
                        <img className={`${cc.d97} ${cc.selectedDate}`} src={arr}/>
                        <img className={`${cc.d98} ${cc.selectedDate}`} src={arr}/>
                        <select name="city" className={cc.county}>
                                <option value="1">台中</option>
                            </select>
                            <select name="town" onChange={changeweather} className={cc.district}>
                            {Taichung.map((val, key) => {
                                                    return (<option key={key} value={val}>{val}</option>);
                                                })}
                            </select>
                    </div>


                    <div className={cc.d99}>
                        <p className={cc.d100}>日期</p>
                        <p className={cc.d101}>時間</p>


                    </div>
                    <input className={cc.d102} type="date" id="start"
                        name="trip-start" value="2022-12-19" min="2022-12-19" max="2033-12-31"/>
                    <img className={`${cc.d103} ${cc.selectedDate}`} src={arr}/>

                    {/* <input className={cc.d104} type="time" value="13:14"
                        step="300"/> */}
                        <select class={cc.d17}>
                                 {time.map((val, key) => {
                                       return (<option key={key} value={key + 1}>{val}</option>);
                                        })}
                                            </select>
                    <img className={`${cc.d105} ${cc.selectedDate}`} src={arr}/>
                    <span className={cc.d106}>至</span>
                    {/* <input className={cc.d107} type="time" value="13:14"
                        step="300"/> */}
                        <select class={cc.d17}>
                                 {time.map((val, key) => {
                                       return (<option key={key} value={key + 1}>{val}</option>);
                                        })}
                                            </select>
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

    <div className={cc.qa} id='qateaxt'>
        
        <div className={cc.qa1}>
            <img src={q} alt=""/>
            <h4>什麼是零打??</h4>
        </div>
        <div className={cc.qa1}>
            <img src={q} alt=""/>
            <h4>怎麼報名零打??</h4>
        </div>
    </div>

    {/* <div className={cc.d146}>
    </div> */}
       <img src={chat} style={{ display: chatimg }}  className={`${cc.d159}`} onClick={chatbtn1}></img>

    <div className={cc.d148} style={{ display: chatdiv }}>
       <img src={chat} className={`${cc.d147}`} onClick={chatbtn}></img>
        <div ref={newref} className={cc.d130}>
        <div className={cc.d158}>123</div>
        {/* {message1.map((v,k)=>{
            
            return(<div className='dwwe2'><p className='www2'>{v.message}</p></div>)
            
            // console.log(v.message);
        })} */}
        {mes.map((v,k)=>{
            if(v.id===idd)
            // return(<div className='dwwe'><p className='www'>{v.message}</p></div>)
            return(
                <React.Fragment>
            <div className='dwwe'><span className='www'>{v.message}</span></div>
            </React.Fragment>
            )
            else{
            return(
<React.Fragment>
            <div className='dwwe3'><span className='www3'>{v.name}</span></div>
            <div className='dwwe2'><span className='www2'>{v.message}</span></div>
</React.Fragment>
            )}
            
            // console.log(v.message);
        })}
<div ref={bottomref}></div>
        </div>
        <div className={cc.d157}>
        <input className={cc.d149} type="text" value={message} onChange={(e)=>{setmessage(e.target.value)}} name="" id="" />
        {/* <button className={cc.d150} onClick={sendmsg}>send</button> */}
        <img src={send} className={`${cc.d150}`}onClick={sendmsg}></img>
        </div>
    </div>
      </React.Fragment >
    
        );
    }

//     changerent =() =>{
// let newstate = {...this.state};
// newstate.rent=true;
// newstate.rentdiv=true;
// newstate.rentbtn=true;
// newstate.zeroda=false;
// newstate.zerodadiv=false;
// newstate.zerodabtn=false;
// newstate.team=false;
// newstate.teamdiv=false;
// newstate.teambtn=false;
// newstate.turn=false;
// newstate.turndiv=false;
// newstate.turnbtn=false;
// this.setState (newstate);
//     }
//     changezeroda =() =>{
//         console.log("OK");
// let newstate = {...this.state};
// newstate.rent=false;
// newstate.rentdiv=false;
// newstate.rentbtn=false;
// newstate.zeroda=true;
// newstate.zerodadiv=true;
// newstate.zerodabtn=true;
// newstate.team=false;
// newstate.teamdiv=false;
// newstate.teambtn=false;
// newstate.turn=false;
// newstate.turndiv=false;
// newstate.turnbtn=false;
// this.setState (newstate);
//     }
//     changeteam =() =>{
//         console.log("OK");
// let newstate = {...this.state};
// newstate.rent=false;
// newstate.rentdiv=false;
// newstate.rentbtn=false;
// newstate.zeroda=false;
// newstate.zerodadiv=false;
// newstate.zerodabtn=false;
// newstate.team=true;
// newstate.teamdiv=true;
// newstate.teambtn=true;
// newstate.turn=false;
// newstate.turndiv=false;
// newstate.turnbtn=false;
// this.setState (newstate);
//     }
//     changeturn =() =>{
//         console.log("OK");
// let newstate = {...this.state};
// newstate.rent=false;
// newstate.rentdiv=false;
// newstate.rentbtn=false;
// newstate.zeroda=false;
// newstate.zerodadiv=false;
// newstate.zerodabtn=false;
// newstate.team=false;
// newstate.teamdiv=false;
// newstate.teambtn=false;
// newstate.turn=true;
// newstate.turndiv=true;
// newstate.turnbtn=true;
// this.setState (newstate);
//     }



export default Handya;