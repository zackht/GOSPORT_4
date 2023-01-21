
import React, { useEffect, useState } from 'react';
// import React from 'react';
import Axios from "axios";
import Cookies from 'js-cookie';
import star from './icon/star1.svg'
// import selfImg from './icon/20130917_171106.jpg'
import './selfpage.css'


const Selfpage = () => {
    // 讀取個人資料
    const userid = Cookies.get('id');
    if(!userid){
        window.location = '/gosport/home';
    }
    const [selfInfo, setSelf] = useState([{
        activeTime: '預備中',
        username: '預備中',
        userdescribe: '預備',
        userimg: { data: '' },
        badminton: '',
        volleyball: '',
        tabletennis: '',
        usebadge: ''
    }]);
    const [selfteam, setSelfTeam] = useState([{ tname: '' }]);
    const [selfBadge, setSelfBadge] = useState([{ badgeid: '', badgeurl: '#' }]);
    useEffect(() => {

        Axios.post("http://localhost:3001/self", {
            userid: userid,
        }).then((response) => {
            // console.log("self", response.data);
            setSelf(response.data)
            let badge = JSON.parse(response.data[0].usebadge)
            setSelfBadge(badge)
        });
        Axios.post("http://localhost:3001/selfteam", {
            userid: userid,
        }).then((response) => {
            // console.log('team', response.data);
            setSelfTeam(response.data)
        });
        // Axios.post("http://localhost:3001/selfbadge", {
        //     userid: userid,
        // }).then((response) => {
        //     console.log('baddge', response.data);
        //     setSelfBadge(response.data)
        // });
    }, [userid]);
    //球隊
    let restname = selfteam.map(function (item, index) { return item.tname })
    const alltname = Array.from(new Set(restname.filter((x, i, self) => self.indexOf(x) === i)));
    // 照片
    const [userurl, setUserurl] = useState();
    useEffect(() => {
        var u8Arr = new Uint8Array(selfInfo[0].userimg.data);
        var blob = new Blob([u8Arr], { type: "image/jpeg" });
        var fr = new FileReader
        fr.onload = function () {
            setUserurl(fr.result);
        };
        fr.readAsDataURL(blob);
    }, [selfInfo])
    console.log(selfBadge)

    // 徽章
    // let sta = selfBadge.map((item) => { return item.badgeid })
    // const allstar = Array.from(new Set(sta.filter((x, i, self) => self.indexOf(x) === i)));
    // console.log(allstar)

    return (
        <React.Fragment>
            {/* 主體 */}
            <div className='self_'>
                <div className="self_cover">
                    <div style={{ display: 'flex', width: '90%', height: '481px' }}>
                        <div className="self_discribe">
                            <div>姓名</div>
                            <div>{selfInfo[0].username}</div>
                            <div>程度</div>
                            <div>
                                羽球{selfInfo[0].badminton}、
                                桌球{selfInfo[0].tabletennis}、
                                排球{selfInfo[0].volleyball}
                            </div>
                            <div>球隊</div>
                            <div>
                                {alltname.map(function (item, index) { return <span key={index}>{item}&nbsp;&nbsp;</span> })}
                            </div>
                            <div>活動時數</div>
                            <div>{selfInfo[0].activeTime}</div>
                            <div>描述</div>
                            <article className='describe'>
                                {selfInfo[0].userdescribe}
                            </article>
                        </div>
                        <div className="self_right" >
                            <div className='self_imgbox'>
                                <span>
                                    <img className='self_img' src={userurl} alt="" />
                                </span>
                                <div className="show_star">
                                    {selfBadge.map(item => <embed key={item.badgeid} src={item.badgeurl}></embed>)}
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
