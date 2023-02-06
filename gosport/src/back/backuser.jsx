import React, { useState } from 'react';
import './backuser.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import group41 from "./icon/Group 41.png";
import Axios from "axios";
import U from './backuseredit.module.css';
const Backuser = () => {
    const [startdate, setstartdate] = useState('');
    const [enddate, setenddate] = useState('');
    const [username, setusername] = useState('');
    const [responselist, setresponselist] = useState([]);
    const [editlist, seteditlist] = useState([]);
    const [userurl, setuserurl] = useState('');

    const search = () => {
        Axios.post("http://localhost:3001/backusersearch", {
            startdate: startdate,
            enddate: enddate,
            username: username,
        }).then((response) => {
            console.log(response);
            setresponselist(response.data);
        });
    }
    const [div1, setdiv1] = useState(false);
    const edit = (e) => {
        Axios.post("http://localhost:3001/backuseredit", {
            userid: e,
        }).then((response) => {
            console.log(response);
            seteditlist(response.data);
        });
        setdiv1(true);
    }
    const userdelete =(e)=>{
        Axios.post("http://localhost:3001/backuserdelete", {
            userid: e,
        }).then((response) => {
            search();
            alert('刪除成功');
        });
    }
    const [ss,setss]= useState('');
    const udd =(e)=>{
        userdelete(e);
        setss('');
    }
    const ccaa =()=>{
        setdiv1(false);
        seteditlist([]);
    }
    return (
        <React.Fragment>
            <div class="container-fluid adiv1">
                <div class="row adiv2">
                    {/* 搜尋框 */}
                    <div class="col-md-3 d-flex flex-column boxshadow adiv3">
                        <div action="" class=" d-flex flex-column adiv4">
                            <span className='span'>日期區間</span>
                            <div class="d-flex flex-column adiv5">
                                <div class="dateimg font">
                                    <input type="date" className='adiv6 adate' onChange={(e) => { setstartdate(e.target.value) }} />
                                    <img class="selectedDate1" src={group41} alt="" />
                                </div>
                                <div class="dateimg adiv7">
                                    <input type="date" class="font adiv8 adate" onChange={(e) => { setenddate(e.target.value) }} />
                                    <img class="selectedDate1" src={group41} alt="" />
                                </div>
                            </div>
                            <div className='adiv11'>
                                <span className='span'>會員名稱</span>
                                <div>
                                    <input type="text" class="ccc adiv12" placeholder="請輸入文字" onChange={(e) => { setusername(`%${e.target.value}%`) }} />
                                </div>
                            </div>
                            <div class="mt-auto ">
                                <input type="button" value="搜尋" class="submit" onClick={search} />
                            </div>
                        </div>
                    </div>
                    <div class="col-md boxshadow adiv13">
                        <div class="row adiv14">
                            <div class="col-2 font1 adiv15">申請日期</div>
                            <div class="col-2 font1 adiv15">會員編號</div>
                            <div class="col-5  font1 adiv15" onClick={()=>{console.log(ss)}}>會員名稱</div>
                            <div class="col-3 font1 adiv15"></div>
                        </div>
                        <div class="row adiv16">
                            <div class="col d-flex flex-column adiv15">
                                {/* <!-- 搜尋結果 --> */}
                                {responselist.map((val, key) => {
                                    let c = new Date(val.adddate);
                                    let y = c.getFullYear();
                                    let m = c.getMonth() + 1;
                                    let d = c.getDate();
                                    return (
                                        <div class="d-flex font2 adiv17" key={key}>
                                            <div class="col-2 adiv15">{`${y}/${m + 1}/${d}`}</div>
                                            <div class="col-2 adiv15">{val.userid}</div>
                                            <div class="col-5 adiv15">{val.username}</div>
                                            <div class="col-3 d-flex justify-content-center adiv15">
                                                <div class="button1 adiv18" onClick={()=>{edit(val.userid)}}>查看</div>
                                                {/* <div class="button1" onClick={()=>{userdelete(val.userid)}}>刪除</div> */}
                                                <div class="button1" onClick={()=>{setss(key);}} style={{display:ss===''?'block':'none'}}>刪除</div>
                                                
                                                {ss===key?
                                                <div>
                                                <div class="button11"onClick={()=>{udd(val.userid)}} style={{marginBottom:10}}>我要刪除</div>
                                                <div class="button11"onClick={()=>{setss('')}}>我在想想</div>
                                                </div>
                                                :''}
                                                

                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="adiv55" style={{ display: (div1) ? 'block' : 'none' }}>
                    {editlist.map((val,key)=>{
                        var u8Arr = new Uint8Array(val.userimg.data);
                        var blob = new Blob([u8Arr], { type: "image/jpeg" });
                        var fr = new FileReader;
                        fr.onload = function () {
                            setuserurl(fr.result);
                        };
                        fr.readAsDataURL(blob);
                        return (
                            <div class={U.selfalter} key={key}>
                                <div className={U.form}>
                                    <div>
                                        <div class={U.alter_PicPla}>
                                            <div id="picFile">
                                                <div className={U.div2} id="picFile_backT"> 
                                                    <img src={userurl} alt="" /><br />
                                                </div>
                                                <input id="oploadPic" type="file"  targetID="preview_img"
                                                    accept="image/gif, image/jpeg, image/png" className={`${U.file} ${U.input2}`}/>
                                                <img id="preview_img" className={U.div4} src="#" />
                                            </div>
                                            <div id="star">
                                                {/* <embed src="./icon/star1.svg" type="" />
                                                <embed src="./icon/star1.svg" type="" />
                                                <embed src="./icon/star1.svg" type="" /> */}
                                            </div>
                                        </div>
                                        <div className={U.div5}>
                                            <label for="alter_name" className={U.label}>姓名</label><br />
                                            <input type="text" id="alter_name" className={`${U.input22}`} defaultValue={val.username}/><br />
                                            <label for="alter_email" className={U.label}>註冊信箱</label><br />
                                            <input type="email" id="alter_email" className={`${U.input22}`} defaultValue={val.email}/><br />
                                            <label for="alter_psw" className={U.label}>密碼</label><br />
                                            <input type="password" id="alter_psw" className={`${U.input22}`} defaultValue={val.password}/><br />
                                            <label for="alter_tel" className={U.label}>電話</label><br />
                                            <input type="tel" id="alter_tel" className={`${U.input22}`} defaultValue={val.tel}/><br />
                                            <label className={U.label}>我的程度</label><br />
                                            <div class={U.degree}>
                                                <div>羽球</div>
                                                <input type="radio" name="Badmin" id="newB" className={`${U.input2}`} checked={val.badminton==='新手'?'checked': ''}/><label for="newB" className={U.label}>新手</label>
                                                <input type="radio" name="Badmin" id="nomalB" className={`${U.input2}`} checked={val.badminton==='初階'?'checked': ''}/><label for="nomalB" className={U.label}>初階</label>
                                                <input type="radio" name="Badmin" id="highB" className={`${U.input2}`} checked={val.badminton==='高手'?'checked': ''}/><label for="highB" className={U.label}>高手</label>
                                            </div>
                                            <div class={U.degree}>
                                                <div>桌球</div>
                                                <input type="radio" name="Ttennis" id="newT" className={`${U.input2}`} checked={val.tabletennis==='新手'?'checked': ''}/><label for="newT" className={U.label}>新手</label>
                                                <input type="radio" name="Ttennis" id="nomalT" className={`${U.input2}`} checked={val.tabletennis==='初階'?'checked': ''}/><label for="nomalT" className={U.label}>初階</label>
                                                <input type="radio" name="Ttennis" id="highT" className={`${U.input2}`} checked={val.tabletennis==='高手'?'checked': ''}/><label for="highT" className={U.label}>高手</label>
                                            </div>
                                            <div class={U.degree}>
                                                <div>排球</div>
                                                <input type="radio" name="Vodi" id="newV" className={`${U.input2}`} checked={val.volleyball==='新手'?'checked': ''}/><label for="newV" className={U.label}>新手</label>
                                                <input type="radio" name="Vodi" id="nomalV" className={`${U.input2}`} checked={val.volleyball==='初階'?'checked': ''}/><label for="nomalV" className={U.label}>初階</label>
                                                <input type="radio" name="Vodi" id="highV" className={`${U.input2}`} checked={val.volleyball==='高手'?'checked': ''}/><label for="highV" className={U.label}>高手</label>
                                            </div>
                                            <label className={U.label}>我的徽章</label>
                                            <div class={U.mark}>
                                                {/* <embed src="./icon/star1.svg" type="" />
                                                <embed src="./icon/star1.svg" type="" />
                                                <embed src="./icon/star1.svg" type="" />
                                                <embed src="./icon/star2.svg" type="" />
                                                <embed src="./icon/star2.svg" type="" />
                                                <embed src="./icon/star2.svg" type="" />
                                                <embed src="./icon/star2.svg" type="" />
                                                <embed src="./icon/star2.svg" type="" />
                                                <embed src="./icon/star2.svg" type="" /> */}
                                            </div>
                                            <label for="account_describe" className={U.label}>描述</label><br />
                                            <textarea className={U.textarea} id="account_describe" defaultValue={val.userdescribe}></textarea><br />
                                            <div className={`row`}>
                                                <div className={`col-3 `}>
                                                    <label htmlFor="" className={U.label}>零打次數</label> <br />
                                                    <label htmlFor="" className={U.label}>場地預約次數</label>
                                                </div>
                                                <div className={`col-2`}>
                                                <input type="number" className={`${U.input4}`} defaultValue='20'/>
                                                <input type="number" className={`${U.input4}`} defaultValue='5'/>
                                                </div>
                                                <div className={`col-3 `}>
                                                    <label htmlFor="" className={U.label}>轉租成功次數</label> <br />
                                                    <label htmlFor="" className={U.label}>餐羽球隊聚餐次數</label>
                                                </div>
                                                <div className={`col-2`}>
                                                <input type="number" className={`${U.input4}`} defaultValue='3'/>
                                                <input type="number" className={`${U.input4}`} defaultValue='10'/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class={U.alter_yesOrNot}>
                                        <span class={U.alter_backself} onClick={ccaa}>取消</span>
                                        <input type="submit" className={`${U.input} ${U.input2}`} value="儲存" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </React.Fragment >
    );
}

export default Backuser;