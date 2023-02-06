
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Axios from "axios";
// import Cookies from 'js-cookie';
import user from './icon/teams_m.png'
import './selfpage.css'


const Selfroute = () => {
    // 讀取個人資料
    let { id } = useParams();
    // const userid = Cookies.get('id');
    const userid = id;
    // if (!userid) {
    //     window.location = '/gosport/home';
    // }
    const history = useHistory();
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
    const [selfBadge, setSelfBadge] = useState([{ badgeid: '', badgeurl: '' }]);
     useEffect(() => {
        console.log(id)
        Axios.post("http://localhost:3001/self", {
            userid: userid,
        }).then((response) => {
            let badge = JSON.parse(response.data[0].usebadge)
            if (badge !== null && response.data[0].usebadge !== '[]') setSelfBadge(badge)
            setSelf(response.data)
            console.log("self", response.data);
        });
        Axios.post("http://localhost:3001/selfteam", {
            userid: userid,
        }).then((response) => {
            // console.log('team', response.data);
            setSelfTeam(response.data)
        });
    }, [userid]);
    //球隊
    let alltname = []
    let restname = selfteam.map(function (item, index) { return item.tname })
    alltname = Array.from(new Set(restname.filter((x, i, self) => self.indexOf(x) === i)));
    let showtname = alltname.map(function (item, index) { return <span key={index}>{item}&nbsp;&nbsp;</span> })
    // 照片
    const [userurl, setUserurl] = useState();
    useEffect(() => {
        if (selfInfo[0].userimg !== null) {
            var u8Arr = new Uint8Array(selfInfo[0].userimg.data);
            var blob = new Blob([u8Arr], { type: "image/jpeg" });
            var fr = new FileReader
            fr.onload = function () {
                setUserurl(fr.result);
            };
            fr.readAsDataURL(blob);
        } else {
            setUserurl(user)
        }
    }, [selfInfo])


    return (
        <React.Fragment>
            {/* 主體 */}
            <div className='self_'>
                <div className="self_cover">
                    <div style={{ display: 'flex', width: '90%', height: '481px' }}>
                        <div className="self_discribe">
                            <div>姓名</div>
                            <div>{selfInfo[0].username !== null ? selfInfo[0].username : '尚無'}</div>
                            <div>程度</div>
                            <div>
                                羽球{selfInfo[0].badminton !== null ? selfInfo[0].badminton : '未知'}、
                                桌球{selfInfo[0].tabletennis !== null ? selfInfo[0].tabletennis : '未知'}、
                                排球{selfInfo[0].volleyball !== null ? selfInfo[0].volleyball : '未知'}
                            </div>
                            <div>球隊</div>
                            <div>
                                {alltname.length !== 0 ? showtname : '尚無'}
                            </div>
                            <div>活動時數</div>
                            <div>{selfInfo[0].activeTime !== null ? selfInfo[0].activeTime : '尚無'}</div>
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
                                <div className="show_star" style={{ display: selfBadge[0].badgeurl !== '' ? 'flex' : 'none' }}>
                                    {selfBadge.map(item => <img key={item.badgeid} src={item.badgeurl} alt=''></img>)}
                                </div>
                            </div>
                            <div style={{ height: "50%", width: "100%", position: "relative" }}>
                                <button className="self_edit" onClick={()=>{history.goBack()}}
                                    style={{ position: "absolute", bottom: "0px", right: "0px" }}>返回</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Selfroute;
