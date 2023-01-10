
import React, { useEffect, useState } from 'react';
// import React from 'react';
import Axios from "axios";
import Cookies from 'js-cookie';
import star from './icon/star1.svg'
import selfImg from './icon/20130917_171106.jpg'
import './selfpage.css'


const Selfpage = () => {
    let [userInfo, setUserInfo] = useState([{
        username: '預備中',
        userdescribe: '',
        tname: '',
        userimg:{data:''}
    }]);
    // 讀取個人資料
    const account = Cookies.get('token');
    useEffect(() => {
        Axios.post("http://localhost:3001/selfinfo", {
            account: account,
        }).then((response) => {
            console.log(response.data);
            setUserInfo(response.data)
        });
    }, []);
    //球隊
    let restname = userInfo.map(function (item, index) { return item.tname })
    const alltname = Array.from(new Set(restname.filter((x, i, self) => self.indexOf(x) === i)));
    // 照片
    const [userurl, setUserurl] = useState();
    useEffect(()=>{
        var u8Arr = new Uint8Array(userInfo[0].userimg.data);
        var blob = new Blob([u8Arr], { type: "image/jpeg" });
        var fr = new FileReader
        fr.onload = function () {
            setUserurl(fr.result);
        };
        fr.readAsDataURL(blob);
    },[userInfo])
    
    // 徽章
    let sta = userInfo.map((item) => { return item.badgeid })
    const allstar = Array.from(new Set(sta.filter((x, i, self) => self.indexOf(x) === i)));
    console.log(allstar)
    
    return (
        <React.Fragment>
            {/* 主體 */}
            <div className='self_'>
                <div className="self_cover">
                    <div style={{ display: 'flex', width: '90%', height: '481px' }}>
                        <div className="self_discribe" style={{ flex: "1.1" }}>
                            <div>姓名</div>
                            <div>{userInfo[0].username}</div>
                            {/* <div>aaa</div> */}
                            <div>程度</div>
                            <div>羽球初階、桌球新手、網球初階</div>
                            <div>球隊</div>
                            <div>
                                {alltname.map(function (item, index) { return <span key={index}>{item}&nbsp;&nbsp;</span> })}
                            </div>
                            <div>活動時數</div>
                            <div>{userInfo[0].activeTime}</div>
                            <div>描述</div>
                            {userInfo[0].userdescribe}
                            {/* <div>aaaaaaaaaaaaaaaaaaaa</div> */}
                        </div>
                        <div style={{ flex: 1, position: "relative" }}>
                            <div id="tt" style={{ height: "50%", width: "100%", position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img className='self_img' src={userurl} alt="" />
                                {/* <img className='self_img' src={selfInfo[0].teamimg} alt="" /> */}
                                <div className="show_star">
                                    {/* {allstar.map(item=><embed key={item} src={star}></embed>)} */}
                                    {/* <embed src={star}></embed> */}
                                    {/* <embed src={star}></embed> */}
                                    {/* <embed src={star}></embed> */}
                                </div>
                            </div>
                            <div style={{ height: "50%", width: "100%", position: "relative" }}>
                                <a href="/selfalter"><button className="self_edit"
                                    style={{ position: "absolute", bottom: "0px", right: "0px" }}>編輯</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
// class Selfpage extends Component {
//     state = {
//         selfInfo:{"username":"李大偉","title":"Job X -C","isComplete":1},
//     }
//     render() {
//         const {username}=this.state.selfInfo
//         return (
//             <React.Fragment>
//                 {/* 主體 */}
//                 <div className='self_'>
//                     <div className="self_cover">
//                         <div style={{ display: 'flex', width: '90%', height: '481px' }}>
//                             <div className="self_discribe" style={{ flex: "1.1" }}>
//                                 <div>姓名</div>
//                                 <div>{username}</div>
//                                 <div>程度</div>
//                                 <div>羽球初階、桌球新手、網球初階</div>
//                                 <div>球隊</div>
//                                 <div>南屯球隊、嶺東球隊</div>
//                                 <div>活動時數</div>
//                                 <div>298hr</div>
//                                 <div>描述</div>
//                                 <div>一週練球2-3次，歡迎各路神人約打球交流～ <br />
//                                     IG iamgod <br />
//                                     還有第三行 <br />
//                                     和第四行～～～～～</div>
//                             </div>
//                             <div style={{ flex: 1, position: "relative" }}>
//                                 <div id="tt" style={{ height: "50%", width: "100%", position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
//                                     <img className='self_img' src={selfImg} alt="" />
//                                     <div className="show_star">
//                                         <embed src={star}></embed>
//                                         <embed src={star}></embed>
//                                         <embed src={star}></embed>
//                                     </div>
//                                 </div>
//                                 <div style={{ height: "50%", width: "100%", position: "relative" }}>
//                                     <a href="/selfalter"><button className="self_edit"
//                                         style={{ position: "absolute", bottom: "0px", right: "0px" }}>編輯</button></a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </React.Fragment>
//         );
//     }
// }

export default Selfpage;
