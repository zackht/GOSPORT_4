// import React, { Component } from 'react';
import React, { useEffect, useState, useRef } from 'react';
import Axios from "axios";
import Cookies from 'js-cookie';
import Ordering from './components/ordering';
import OrderFutrue from './components/orderfutrue'
import OrderEnd from './components/orderEnd'
import OrderNo from './components/orderNo'
import Artadd from './components/artadd';
import Artdel from './components/artdel'

import SelectDown from './icon/Group 41.png'

import './selfactive.css'

// import star from './icon/star1.svg'
// import pic from './icon/20130917_171106.jpg'
const Selfactive = () => {
    const userid = Cookies.get('id');
    if (!userid) {
        window.location = '/gosport/home';
    }
    const tabList = [
        { tabName: "我的訂單", id: 1 },
        { tabName: "我的文章", id: 2 },
    ];
    const [tabIndex, setTabIndex] = useState(1);
    var tabChoicedTab = (id) => {
        //tab切方法
        setTabIndex(id);
    }
    var isActiveShow = tabIndex === 1 ? 'flex' : 'none';
    var isArticleShow = tabIndex === 2 ? 'flex' : 'none';

    const activeList = [
        { tabName: "進行活動", id: 1 },
        { tabName: "未來活動", id: 2 },
        { tabName: "結束活動", id: 3 },
        { tabName: "不成立", id: 4 },
    ]
    const [activeInnerIndex, setActiveInnerIndex] = useState(1);
    var choicedActiveInner = (id) => {
        setActiveInnerIndex(id);
    }
    var isOrderingShow = activeInnerIndex === 1 ? 'flex' : 'none';
    var isOrderFutrueShow = activeInnerIndex === 2 ? 'flex' : 'none';
    var isOrderEndShow = activeInnerIndex === 3 ? 'flex' : 'none';
    var isOrderNoShow = activeInnerIndex === 4 ? 'flex' : 'none';

    const articleList = [
        { tabName: "已新增", id: 1 },
        { tabName: "已刪除", id: 2 },
    ]
    const [artInnerIndex, setArtInnerIndex] = useState(1);
    var choicedArtInner = (id) => {
        setArtInnerIndex(id)
    }
    var isAddShow = artInnerIndex === 1 ? 'block' : 'none';
    var isDelShow = artInnerIndex === 2 ? 'block' : 'none';

    // 取得文章報名/承租人資料
    // 彈窗控制
    const [modaltoggle, setModalToggle] = useState(false);
    var showModal = modaltoggle ? 'flex' : 'none';
    // 資料初值
    const [followdata, setFollowData] = useState([{
        badminton: '',
        tabletennis: '',
        volleyball: '',
        usebadge: '',
        username: '',
        userimg: '',
        usebadge: '[{}]'
    }]);
    const [degree, setdegree] = useState('');
    // 取得follow人
    const controlModal = (data) => {
        setModalToggle(!modaltoggle)
        console.log(data)
        setdegree(data.ballgames)
        Axios.post("http://localhost:3001/followzeroda", {
            articleid_zeroda: data.articleid_zeroda
        }).then((response) => {
            // console.log(response.data);
            setFollowData(response.data)
        })
    }
    const [userimglist, setuserimglist] = useState({});
    useEffect(() => {
        // follow人的照片
        followdata.forEach((val, key) => {
            if (val.userimg !== null) {
                let u8Arr = new Uint8Array(val.userimg.data);
                let blob = new Blob([u8Arr], { type: "image/jpeg" });
                let fr = new FileReader;
                fr.readAsDataURL(blob);
                fr.onload = function () {
                    setuserimglist(e => {
                        return { ...e, [key]: fr.result }
                    });
                }
            }
        });
    }, [followdata])
    const closeModal = () => {
        console.group(followdata)
        setModalToggle(!modaltoggle)
        // clearTimeout(time);
    }

    // 零打編輯彈窗控制
    const [zerodaid, setZerodaid] = useState('');
    const [sidename, setsidename] = useState('');
    const [sideaddress, setsideaddress] = useState('');
    const [playDate, setPlayDate] = useState('');
    const [starttime, setStartTime] = useState('');
    const [endtime, setEndTime] = useState('');

    const [level, setLevel] = useState('');
    const [number, setNumber] = useState('');
    const [cost, setCost] = useState('');
    const [describe, setDescribe] = useState('');

    const [articleToggle, setArticleToggle] = useState(false);
    var showZerodaModal = articleToggle ? 'flex' : 'none';
    const editZeroda = (item) => {
        setArticleToggle(!articleToggle)
        // console.log(item)
        setZerodaid(item.articleid_zeroda)
        setsidename(item.fieldname)
        setsideaddress(item.address)
        if (item.startdate) {
            let playDate = item.startdate.substring(0, 10)
            setPlayDate(playDate)
        }
        setStartTime(item.starttime)
        setEndTime(item.endtime)
        setLevel(item.level)
        setNumber(item.number)
        setCost(item.cost)
        setDescribe(item.content)
    }

    // 轉租編輯彈窗控制
    const [subid, setSubid] = useState('');
    const editSublet = (item) => {
        console.log(item)
        setArticleToggle(!articleToggle)
        setSubid(item.articleid_sublet)
        setsidename(item.fieldname)
        setsideaddress(item.address)
        if (item.startdate) {
            let playDate = item.startdate.substring(0, 10)
            setPlayDate(playDate)
        }
        setStartTime(item.starttime)
        setEndTime(item.endtime)
        setLevel(item.level)
        setNumber(item.amount)
        setCost(item.cost)
        setDescribe(item.content)
    }
    // 取消編輯按鍵
    const closeEdit = () => {
        setZerodaid('')
        setArticleToggle(!articleToggle)
    }

    // 父傳子搜尋按鍵識別
    const find = useRef();
    // 零打文章更新
    const updateZeroda = () => {
        Axios.post("http://localhost:3001/updatezeroda", {
            articleid_zeroda: zerodaid,
            sidename: sidename,
            sideaddress: sideaddress,
            playDate: playDate,
            starttime: starttime,
            endtime: endtime,
            level: level,
            number: number,
            cost: cost,
            describe: describe
        }).then((response) => {
            // console.log(response.data);
            setZerodaid('')
            setArticleToggle(!articleToggle)
            find.current.click();
        })
    }
    // 轉租文章更新
    const updateSublet = () => {
        Axios.post("http://localhost:3001/updatesub", {
            articleid_sublet: subid,
            sidename: sidename,
            sideaddress: sideaddress,
            playDate: playDate,
            starttime: starttime,
            endtime: endtime,
            number: number,
            cost: cost,
            describe: describe
        }).then((response) => {
            // console.log(response.data);
            setArticleToggle(!articleToggle)
            find.current.click();
        })
    }
    return (
        <React.Fragment>
            <div className='active_'>
                <div className="selfactive">
                    {/* <!-- 訂單or文章--> */}
                    <div className="active_type" >
                        {tabList.map(function (res, index) {
                            let tabStyle = res.id === tabIndex ? 'active_subCtrl active_act' : 'active_subCtrl';
                            return <div key={index}><button onClick={() => { tabChoicedTab(res.id) }} className={tabStyle}>{res.tabName}</button></div>
                        })}
                    </div>
                    {/* <!-- 選項：訂單--> */}
                    <div className="active_title" id="order" style={{ display: isActiveShow }}>
                        {activeList.map(function (res, index) {
                            let tabStyle = res.id === activeInnerIndex ? 'active_subCtrl active_act' : 'active_subCtrl';
                            return <div key={index}><button onClick={() => { choicedActiveInner(res.id) }} className={tabStyle}>{res.tabName}</button></div>
                        })}
                    </div>
                    {/* <!-- 選項：文章 --> */}
                    <div className="active_title" id="articl" style={{ display: isArticleShow }} >
                        {articleList.map(function (res, index) {
                            let tabStyle = res.id === artInnerIndex ? 'active_subCtrl active_act' : 'active_subCtrl';
                            return <div key={index}><button onClick={() => { choicedArtInner(res.id) }} className={tabStyle}>{res.tabName}</button></div>
                        })}
                    </div>
                    <div className="active_inner">
                        {/* <!-- 訂單 --> */}
                        <div id="orderin" style={{ display: isActiveShow }}>
                            <div className='eachOrder' style={{ display: isOrderingShow }}>
                                <Ordering />
                            </div>
                            <div className='eachOrder' style={{ display: isOrderFutrueShow }}>
                                <OrderFutrue />
                            </div>
                            <div className='eachOrder' style={{ display: isOrderEndShow }}>
                                <OrderEnd />
                            </div>
                            <div className='eachOrder' style={{ display: isOrderNoShow }}>
                                <OrderNo />
                            </div>
                        </div>
                        {/* <!-- 文章 --> */}
                        <div id="artclein" style={{ display: isArticleShow }}>
                            {/* <!-- 以新增 --> */}
                            <div id="tein" style={{ display: isAddShow }}>
                                <Artadd control={controlModal} editSublet={editSublet} editZeroda={editZeroda} find={find} />
                            </div>
                            {/* <!-- 已刪除 --> */}
                            <div id="teout" style={{ display: isDelShow }}>
                                <Artdel />
                            </div>
                        </div>
                    </div>
                </div>
                {/* follow視窗 */}
                <div className="active_modal" style={{ display: showModal }}>
                    <div className="modal-content">
                        <span className="active_close" onClick={() => { closeModal() }}>&times;</span>
                        <div>
                            {followdata.map((item, index) => {
                                // var u8Arr = new Uint8Array(item.userimg.data);
                                // var blob = new Blob([u8Arr], { type: "image/jpeg" });
                                // var fr = new FileReader;
                                // fr.readAsDataURL(blob);
                                // fr.onload = function (e) {
                                //     userimglist.push(e.target.result);
                                // };
                                return (
                                    <div key={index}>
                                        <div className="clientPic">
                                            <img src={userimglist[index]} alt="" className="clientImg" />
                                            <div className='clientBadge'>
                                                {JSON.parse(item.usebadge).map((item, index) => {
                                                    return (
                                                        <img key={index} src={item.badgeurl} alt="badge" />
                                                    )
                                                })}
                                                {/* <img src={JSON.parse(item.usebadge)[0].badgeurl} alt="aa" /> */}
                                                {/* <img src={star} alt="" /> */}
                                                {/* <img src={star} alt="" /> */}
                                                {/* <img src={star} alt="" /> */}
                                            </div>
                                        </div>
                                        <div className="clientIntro">
                                            <div>{item.username}</div>
                                            <div >
                                                <span>程度</span>
                                                <span style={{ display: degree === "羽球" ? "inline" : "none" }}>{item.badminton}</span>
                                                <span style={{ display: degree === "排球" ? "inline" : "none" }}>{item.volleyball}</span>
                                                <span style={{ display: degree === "桌球" ? "inline" : "none" }}>{item.tabletennis}</span>
                                            </div>
                                        </div>
                                        <div className="clientYesNo">
                                            <div>
                                                2022/12/22 9:05
                                            </div>
                                            <div>
                                                <button>拒絕</button>
                                                <button>接受</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                {/* 零打編輯 */}
                <div className="zeroda_modal" style={{ display: showZerodaModal }}>
                    <div className="zeroda_modal_content">
                        <div >
                            <label htmlFor="zplace" >場館</label><br />
                            <input type="text" id="zplace" value={sidename} onChange={(e) => { setsidename(e.target.value) }} />
                        </div>
                        <div >
                            <label htmlFor="zaddress">地址</label><br />
                            <input type="text" id="zaddress" value={sideaddress} onChange={(e) => { setsideaddress(e.target.value) }} />
                        </div>
                        <div >
                            <label htmlFor="zdate" >日期</label><br />
                            <input type="text" id="zdate" value={playDate} onChange={(e) => { setPlayDate(e.target.value) }} />
                        </div>
                        <div style={{ position: 'relative' }}>
                            <label >時段</label><br />
                            <select onChange={(e) => setStartTime(e.target.value)}>
                                {[6, 7, 8, 9, 10, 11, 12].map(item => {
                                    return <option value={item} selected={item === starttime}>{item}:00</option>
                                })}
                            </select>
                            <img style={{ left: '63px' }} src={SelectDown} alt="" />
                            至
                            <select onChange={(e) => setEndTime(e.target.value)}>
                                {[11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22].map(item => {
                                    return <option value={item} selected={item === endtime}>{item}:00</option>
                                })}
                            </select>
                            <img style={{ left: '172px' }} src={SelectDown} alt="" />
                        </div>
                        <div style={{ display: "flex" }}>
                            <div style={{ display: zerodaid === '' ? 'none' : 'block' }}>
                                <label htmlFor="zlevel" >程度</label><br />
                                <input type="text" id="zlevel" value={level} onChange={(e) => { setLevel(e.target.value) }} />
                            </div>
                            <div>
                                <label htmlFor="znumber" >人數</label><br />
                                <input type="text" id="znumber" value={number} onChange={(e) => { setNumber(e.target.value) }} />
                            </div>
                            <div>
                                <label htmlFor="zcost" >費用</label><br />
                                <input type="text" id="zcost" value={cost} onChange={(e) => { setCost(e.target.value) }} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="zdescribe" >描述</label><br />
                            <textarea type="text" id="zdescribe" value={describe} onChange={(e) => { setDescribe(e.target.value) }} />
                        </div>
                        <div className="zeroda_modal_yesOrNot">
                            <span onClick={() => { closeEdit() }}>取消</span>
                            <input type="submit" onClick={() => { if (zerodaid !== '') { updateZeroda() } else { updateSublet() } }} value="儲存" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
// class Selfactive extends Component {
//     state = {
//         tabs: [
//             { tabName: "我的訂單", id: 1 },
//             { tabName: "我的文章", id: 2 },
//         ],
//         activeCho: [
//             { tabName: "進行活動", id: 1 },
//             { tabName: "未來活動", id: 2 },
//             { tabName: "結束活動", id: 3 },
//             { tabName: "不成立", id: 4 },
//         ],
//         articleCho: [
//             { tabName: "已新增", id: 1 },
//             { tabName: "已刪除", id: 2 },
//         ],
//         tabIndex: 1,
//         artInnerIndex: 1,
//         activeInnerIndex: 1,
//         modaltoggle: false
//     }
//     tabChoicedTab = (id) => {
//         //tab切方法
//         this.setState({
//             tabIndex: id
//         });
//     }
//     choicedArtInner = (id) => {
//         //文章切內容
//         this.setState({
//             artInnerIndex: id
//         });
//     }
//     choicedActiveInner = (id) => {
//         //訂單切內容
//         this.setState({
//             activeInnerIndex: id
//         });
//     }
//     controlModal = () => {
//         let newState = { ...this.state }
//         newState.modaltoggle = !newState.modaltoggle
//         this.setState(newState)
//     }


//     render() {
//         var _this = this;
//         var isActiveShow = this.state.tabIndex === 1 ? 'flex' : 'none';
//         var isArticleShow = this.state.tabIndex === 2 ? 'flex' : 'none';
//         var isAddShow = this.state.artInnerIndex === 1 ? 'block' : 'none';
//         var isDelShow = this.state.artInnerIndex === 2 ? 'block' : 'none';
//         var showModal = this.state.modaltoggle ? 'flex' : 'none';


//         var tabList = this.state.tabs.map(function (res, index) {
//             let tabStyle = res.id === this.state.tabIndex ? 'active_subCtrl active_act' : 'active_subCtrl';
//             return <div key={index}><button onClick={this.tabChoicedTab.bind(_this, res.id)} className={tabStyle}>{res.tabName}</button></div>
//         }.bind(_this));

//         var artAddDelList = this.state.articleCho.map(function (res, index) {
//             let tabStyle = res.id === this.state.artInnerIndex ? 'active_subCtrl active_act' : 'active_subCtrl';
//             return <div key={index}><button onClick={this.choicedArtInner.bind(_this, res.id)} className={tabStyle}>{res.tabName}</button></div>
//         }.bind(_this));

//         var artActiveList = this.state.activeCho.map(function (res, index) {
//             let tabStyle = res.id === this.state.activeInnerIndex ? 'active_subCtrl active_act' : 'active_subCtrl';
//             return <div key={index}><button onClick={this.choicedActiveInner.bind(_this, res.id)} className={tabStyle}>{res.tabName}</button></div>
//         }.bind(_this));


//         return (
//             <React.Fragment>
//                 <div className='active_'>
//                     <div className="selfactive">
//                         {/* <!-- 訂單or文章--> */}
//                         <div className="active_type" >
//                             {tabList}
//                         </div>
//                         {/* <!-- 選項：訂單--> */}
//                         <div className="active_title" id="order" style={{ display: isActiveShow }}>
//                             {artActiveList}
//                         </div>
//                         {/* <!-- 選項：文章 --> */}
//                         <div className="active_title" id="articl" style={{ display: isArticleShow }} >
//                             {artAddDelList}
//                         </div>
//                         <div className="active_inner">
//                             {/* <!-- 訂單 --> */}
//                             <div id="orderin" className="inte" style={{ display: isActiveShow }}>
//                                 <Orderin />
//                             </div>
//                             {/* <!-- 文章 --> */}
//                             <div id="artclein" className="inte" style={{ display: isArticleShow }}>
//                                 {/* <!-- 以新增 --> */}
//                                 <div id="tein" style={{ display: isAddShow }}>
//                                     <Artadd controlModal={this.controlModal} />
//                                 </div>
//                                 {/* <!-- 已刪除 --> */}
//                                 <div id="teout" style={{ display: isDelShow }}>
//                                     <Artdel />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="active_modal" style={{ display: showModal }}>
//                         <div className="modal-content">
//                             <span className="active_close" onClick={this.controlModal}>&times;</span>
//                             <div>
//                                 <div>
//                                     <div className="clientPic">
//                                         <img className="clientImg" src={pic} alt="" />
//                                         <div>
//                                             <img src={star} alt="" />
//                                             <img src={star} alt="" />
//                                             <img src={star} alt="" />
//                                         </div>
//                                     </div>
//                                     <div className="clientIntro">
//                                         <div>南區金城武</div>
//                                         <div><span>程度</span><span>高手</span></div>
//                                     </div>
//                                     <div className="clientYesNo">
//                                         <div>
//                                             2022/12/22 9:05
//                                         </div>
//                                         <div>
//                                             <button>拒絕</button>
//                                             <button>接受</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div></div>
//                                 <div></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </React.Fragment>
//         );
//     }

// }

export default Selfactive;





