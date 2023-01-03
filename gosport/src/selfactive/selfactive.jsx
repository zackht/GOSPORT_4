// import React, { Component } from 'react';
import React, { useState } from 'react';
import Ordering from './components/ordering';
import OrderFutrue from './components/orderfutrue'
import OrderEnd from './components/orderEnd'
import OrderNo from './components/orderNo'
import Artadd from './components/artadd';
import Artdel from './components/artdel'

import './selfactive.css'

import star from './icon/star1.svg'
import pic from './icon/20130917_171106.jpg'
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

    const [modaltoggle, setModalToggle] = useState(false);
    function controlModal() {
        setModalToggle(!modaltoggle)
    }
    var showModal = modaltoggle ? 'flex' : 'none';


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
                        <div id="orderin"  style={{ display: isActiveShow }}>
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
                        <div id="artclein"  style={{ display: isArticleShow }}>
                            {/* <!-- 以新增 --> */}
                            <div id="tein" style={{ display: isAddShow }}>
                                <Artadd controlModal={controlModal} />
                            </div>
                            {/* <!-- 已刪除 --> */}
                            <div id="teout" style={{ display: isDelShow }}>
                                <Artdel />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="active_modal" style={{ display: showModal }}>
                    <div className="modal-content">
                        <span className="active_close" onClick={controlModal}>&times;</span>
                        <div>
                            <div>
                                <div className="clientPic">
                                    <img className="clientImg" src={pic} alt="" />
                                    <div>
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                    </div>
                                </div>
                                <div className="clientIntro">
                                    <div>南區金城武</div>
                                    <div><span>程度</span><span>高手</span></div>
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
                            <div></div>
                            <div></div>
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





