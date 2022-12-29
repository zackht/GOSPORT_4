import React, { Component } from 'react';
import arrowup from './icon/arrowup2.svg';
import star from './icon/star1.svg'
import pic from './icon/20130917_171106.jpg'
import './selfactive.css'
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
        activeInnerIndex:1,
        modaltoggle:false
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

    controlModal = () =>{
        let newState = {...this.state}
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
                    <div className="active_title" id="order" style={{display: isActiveShow}}>
                        {artActiveList}
                        {/* <div><button onClick={()=>this.chang(this,'','orderin')}>進行活動</button></div> */}
                        {/* <div><button onClick={()=>this.chang(this,'ing','orderin')}>未來活動</button></div> */}
                        {/* <div><button onClick={()=>this.chang(this,'end','orderin')}>結束活動</button></div> */}
                        {/* <div><button onClick={()=>this.chang(this,'end','orderin')}>不成立</button></div> */}
                    </div>
                    {/* <!-- 選項：文章 --> */}
                    <div className="active_title" id="articl" style={{display: isArticleShow}} >
                        {artAddDelList}
                        {/* <div><button onClick="chang(this,'tein','artclein')">以新增</button></div> */}
                        {/* <div><button onClick="chang(this,'teout','artclein')">已刪除</button></div> */}
                    </div>
                    <div className="active_inner">
                        {/* <!-- 訂單 --> */}
                        <div id="orderin" className="inte" style={{display: isActiveShow}}>
                            {/* <!-- 訂單日期選擇 --> */}
                            <div style={{ flex: "1", borderRight: "2px solid rgb(233, 233, 233)" }}>
                                <div>日期區間</div>
                                <div>
                                    <input type="date" /><img className="selectedDate" src={arrowup} alt='' /><br />
                                    <input type="date" /><img className="selectedDate" src={arrowup} alt='' />
                                </div>
                                <div>訂單日期</div>
                                <div className="showDate">
                                    <button>2022/12/31</button>
                                    <button>2023/1/31</button>
                                    <button>2023/1/31</button>
                                    <button>2023/1/31</button>
                                </div>
                            </div>
                            {/* <!-- 訂單詳細 --> */}
                            <div className="ordermenu">
                                <div>訂單日期</div>
                                <div>2022/12/31</div>
                                <div style={{ display: "flex" }}>
                                    <div style={{ flex: "1" }}>開始時間</div>
                                    <div style={{ flex: "1" }}>結束時間</div>
                                    <div style={{ flex: "1" }}>星期</div>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div style={{ flex: "1" }}>2022/12/31</div>
                                    <div style={{ flex: "1" }}>2022/12/31</div>
                                    <div style={{ flex: "1" }}>星期三</div>
                                </div>
                                <div>數量</div>
                                <div>1</div>
                                <div>日/長租</div>
                                <div>長租</div>
                                <div>場地</div>
                                <div>群月羽球場</div>
                                <div>地址</div>
                                <div style={{ position: "relative" }}>台中市北區福德路那條巷123號
                                    <button id='ing' className="chuse_order">取消預約</button>
                                    <button id="end" className="chuse_order">再次預約</button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- 文章 --> */}
                        <div id="artclein" className="inte" style={{display: isArticleShow}}>
                        {/* <!-- 以新增 --> */}
                        <div id="tein" style={{display:isAddShow}}>
                                <div>
                                    日期區間<br />
                                    <input type="date" /><img className="selectedDate" src={arrowup} alt='' />至&emsp;&thinsp;
                                    <input type="date" /><img className="selectedDate" src={arrowup} alt='' />
                                </div>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>新增日期</td>
                                        <td>類別</td>
                                        <td>標題</td>
                                        <td>報名/承租</td>
                                        <td>留言數</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>2022/12/21</td>
                                        <td>羽球</td>
                                        <td>一個內斂又大膽的標題</td>
                                        <td style={{ textAlign: "center", cursor: "pointer" }} onClick={this.controlModal}>66</td>
                                        <td style={{ textAlign: "center" }}>88</td>
                                        <td style={{ position: "relative" }}>
                                            <button>編輯</button>
                                            <button>刪除</button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        {/* <!-- 已刪除 --> */}
                        <div id="teout" style={{display:isDelShow}}>
                                <div>
                                    日期區間<br />
                                    <input type="date" /><img className="selectedDate" src={arrowup} alt="" />至&emsp;&thinsp;
                                    <input type="date" /><img className="selectedDate" src={arrowup} alt="" />
                                </div>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>新增日期</td>
                                        <td>類別</td>
                                        <td>標題</td>
                                        <td>報名/承租</td>
                                        <td>留言數</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>2022/12/21</td>
                                        <td>羽球</td>
                                        <td>一個內斂又大膽的標題</td>
                                        <td style={{ textAlign: "center" }}>0</td>
                                        <td style={{ textAlign: "center" }}>7</td>
                                        <td>
                                            <button>復原</button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div> 
                         </div>
                    </div>
                </div>
                <div className="active_modal" style={{display:showModal}}>
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
 




