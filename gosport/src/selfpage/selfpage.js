
import React, { Component } from 'react';
import star from './star1.svg'
import selfImg from './20130917_171106.jpg'
import './selfpage.css'
class Selfpage extends Component {
    state = {}
    render() {
        return (
            <div className="self_cover">
                <div style={{display: 'flex',width: '90%',height:'481px'}}>
                    <div className="self_discribe" style={{flex: "1.1"}}>
                        <div>姓名
                        </div>
                        <div>吳天良</div>
                        <div>程度</div>
                        <div>羽球初階、桌球新手、網球初階</div>
                        <div>球隊</div>
                        <div>南屯球隊、嶺東球隊</div>
                        <div>活動時數</div>
                        <div>298hr</div>
                        <div>描述</div>
                        <div>一週練球2-3次，歡迎各路神人約打球交流～ <br/>
                            IG iamgod <br/>
                                還有第三行 <br/>
                                    和第四行～～～～～</div>
                            </div>
                            <div style={{flex: 1,position: "relative"}}>
                                <div id="tt" style={{height: "50%",width: "100%",position: "relative",display: "flex",flexDirection: "column",alignItems: "center"}}>
                                    <img className='self_img' src={selfImg} alt=""/>
                                        <div className="show_star">
                                            <embed src={star}></embed>
                                            <embed src={star}></embed>
                                            <embed src={star}></embed>
                                        </div>
                                </div>
                                <div style={{height: "50%",width: "100%",position: "relative"}}>
                                    <a href="/selfalter"><button className="self_edit"
                                        style={{position: "absolute",bottom: "0px",right: "0px"}}>編輯</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    );
    }
}

export default Selfpage;
