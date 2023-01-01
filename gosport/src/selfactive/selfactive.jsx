import React, { Component } from 'react';
import Orderin from './orderin';
import Artadd from './artadd';
import Artdel from './artdel';

import './selfactive.css'

import star from './icon/star1.svg'
import pic from './icon/20130917_171106.jpg'

class Selfactive extends Component {
    state = {
        tabs: [
            { tabName: "我的訂單", id: 1 },
            { tabName: "我的文章", id: 2 },
        ],
        activeCho: [
            { tabName: "進行活動", id: 1 },
            { tabName: "未來活動", id: 2 },
            { tabName: "結束活動", id: 3 },
            { tabName: "不成立", id: 4 },
        ],
        articleCho: [
            { tabName: "已新增", id: 1 },
            { tabName: "已刪除", id: 2 },
        ],
        tabIndex: 1,
        artInnerIndex: 1,
        activeInnerIndex: 1,
        modaltoggle: false
    }
    tabChoicedTab = (id) => {
        //tab切方法
        this.setState({
            tabIndex: id
        });
    }
    choicedArtInner = (id) => {
        //文章切內容
        this.setState({
            artInnerIndex: id
        });
    }
    choicedActiveInner = (id) => {
        //訂單切內容
        this.setState({
            activeInnerIndex: id
        });
    }
    controlModal = () => {
        let newState = { ...this.state }
        newState.modaltoggle = !newState.modaltoggle
        this.setState(newState)
    }


    render() {
        var _this = this;
        var isActiveShow = this.state.tabIndex === 1 ? 'flex' : 'none';
        var isArticleShow = this.state.tabIndex === 2 ? 'flex' : 'none';
        var isAddShow = this.state.artInnerIndex === 1 ? 'block' : 'none';
        var isDelShow = this.state.artInnerIndex === 2 ? 'block' : 'none';
        var showModal = this.state.modaltoggle ? 'flex' : 'none';


        var tabList = this.state.tabs.map(function (res, index) {
            let tabStyle = res.id === this.state.tabIndex ? 'active_subCtrl active_act' : 'active_subCtrl';
            return <div key={index}><button onClick={this.tabChoicedTab.bind(_this, res.id)} className={tabStyle}>{res.tabName}</button></div>
        }.bind(_this));

        var artAddDelList = this.state.articleCho.map(function (res, index) {
            let tabStyle = res.id === this.state.artInnerIndex ? 'active_subCtrl active_act' : 'active_subCtrl';
            return <div key={index}><button onClick={this.choicedArtInner.bind(_this, res.id)} className={tabStyle}>{res.tabName}</button></div>
        }.bind(_this));

        var artActiveList = this.state.activeCho.map(function (res, index) {
            let tabStyle = res.id === this.state.activeInnerIndex ? 'active_subCtrl active_act' : 'active_subCtrl';
            return <div key={index}><button onClick={this.choicedActiveInner.bind(_this, res.id)} className={tabStyle}>{res.tabName}</button></div>
        }.bind(_this));


        return (
            <React.Fragment>
                <div className="selfactive">
                    {/* <!-- 訂單or文章--> */}
                    <div className="active_type" >
                        {tabList}
                    </div>
                    {/* <!-- 選項：訂單--> */}
                    <div className="active_title" id="order" style={{ display: isActiveShow }}>
                        {artActiveList}
                    </div>
                    {/* <!-- 選項：文章 --> */}
                    <div className="active_title" id="articl" style={{ display: isArticleShow }} >
                        {artAddDelList}
                    </div>
                    <div className="active_inner">
                        {/* <!-- 訂單 --> */}
                        <div id="orderin" className="inte" style={{ display: isActiveShow }}>
                            <Orderin />
                        </div>
                        {/* <!-- 文章 --> */}
                        <div id="artclein" className="inte" style={{ display: isArticleShow }}>
                            {/* <!-- 以新增 --> */}
                            <div id="tein" style={{ display: isAddShow }}>
                            <Artadd controlModal={this.controlModal}/>
                            </div>
                            {/* <!-- 已刪除 --> */}
                            <div id="teout" style={{ display: isDelShow }}>
                            <Artdel  />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="active_modal" style={{ display: showModal }}>
                    <div className="modal-content">
                        <span className="active_close" onClick={this.controlModal}>&times;</span>
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
            </React.Fragment>
        );
    }

}

export default Selfactive;





