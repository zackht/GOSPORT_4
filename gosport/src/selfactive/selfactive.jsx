// import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';
import Axios from "axios";
import Ordering from './components/ordering';
import OrderFutrue from './components/orderfutrue'
import OrderEnd from './components/orderEnd'
import OrderNo from './components/orderNo'
import Artadd from './components/artadd';
import Artdel from './components/artdel'

import './selfactive.css'

// import star from './icon/star1.svg'
// import pic from './icon/20130917_171106.jpg'
const Selfactive = () => {
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
    const[sidename,setsidename]=useState('');
    const[sideaddress,setsideaddress]=useState('');
    const[playDate,setPlayDate]=useState('');
    const [zerodatoggle, setZerodaToggle] = useState(false);
    var showZerodaModal = zerodatoggle ? 'flex' : 'none';
    const editZeroda = (item) => {
        setZerodaToggle(!zerodatoggle)
        console.log(item)
        setsidename(item.fieldname)
        setsideaddress(item.address)
        setPlayDate(item.date.substring(0, 10))
    }

    // 轉租編輯彈窗控制
    const [subtoggle, setSubToggle] = useState(false);
    var showSubModal = subtoggle ? 'flex' : 'none';
    const editSublet = (item) => {
        setSubToggle(!zerodatoggle)
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
                                <Artadd control={controlModal} editSublet={editSublet} editZeroda={editZeroda} />
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
                {/* style={{display: 'none'}} */}
                {/* 零打編輯 */}
                <div className="zeroda_modal" style={{ display: showZerodaModal }}>
                    <div className="zeroda_modal_content">
                        <div >
                            <label htmlFor="place" >場館</label><br />
                            <input type="text" name="place" value={sidename} onChange={setsidename}/>
                        </div>
                        <div >
                            <label htmlFor="addresss">地址</label><br />
                            <input type="text" name="addresss" value={sideaddress} onChange={setsideaddress} />
                        </div>
                        <div >
                            <label htmlFor="dateee" >日期</label><br />
                            <input type="text" name="dateee" value={playDate} onChange={setPlayDate} />
                        </div>
                        <div >
                            <label htmlFor="timeee" >時段</label><br />
                            <input type="text" name="timeee" value="09:00-12:00" />
                        </div>
                        <div >
                            <label htmlFor="levelll" >程度</label><br />
                            <input type="text" name="levelll" value="新手" />
                        </div>
                        <div>
                            <label htmlFor="numberrr" >人數</label><br />
                            <input type="text" name="numberrr" value="2" />
                        </div>
                        <div>
                            <label htmlFor="costtt" >費用</label><br />
                            <input type="text" name="costtt" value="200" />
                        </div>
                        <div>
                            <label htmlFor="describeee" >描述</label><br />
                            <textarea type="text" name="describeee" value="來打球哦" />
                        </div>
                        <div className="zeroda_modal_yesOrNot">
                            <span onClick={()=>{setZerodaToggle(!zerodatoggle)}}>取消</span>
                            <input type="submit" value="儲存" />
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





