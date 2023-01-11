import React, { useRef, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Axios from "axios";

import star from "./icon/star1.svg";
import alterImgbackIcon from './icon/Vector.svg';
// import notice from './icon/notice.svg'
// import user from './icon/user.svg'
import "./selfalter.css"
const Selfalter = () => {
    // input的value同時設定以及渲染
    const [username, setUsername] = useState('')
    function nameChange(e) {
        setUsername(e.target.value)
    }
    const [email, setEmail] = useState('')
    function emailChange(e) {
        setEmail(e.target.value)
    }
    const [password, setPassword] = useState('')
    function passChange(e) {
        setPassword(e.target.value)
    }
    const [tel, setTel] = useState('')
    function telChange(e) {
        setTel(e.target.value)
    }
    const [describe, setDescribe] = useState('')
    function describeChange(e) {
        setDescribe(e.target.value)
    }

    // 點擊外層div同點擊input 
    const inputFile = useRef();
    function upLoadpic() {
        inputFile.current.click();
    }


    // 讀取用戶資訊
    const account = Cookies.get('token');
    const [userInfo, setUserInfo] = useState({ userimg: { data: '' }});
    const [userInfoli, setUserInfoli] = useState([]);
    useEffect(() => {
        Axios.post("http://localhost:3001/selfinfo", {
            account: account,
        }).then((response) => {
            setUserInfoli(response.data)
            setUserInfo(response.data[0])
            console.log(response.data[0])
            setEmail(response.data[0].email)
            setPassword(response.data[0].password)
            setUsername(response.data[0].username)
            // setImageSrc(response.data[0].userimg)
            setTel(response.data[0].tel)
            setDescribe(response.data[0].userdescribe)
            setBdegree(response.data[0].badminton)
            setTdegree(response.data[0].tabletennis)
            setVdegree(response.data[0].volleyball)
        });
    }, [account]);

    // 照片自資料庫讀取
    const [imageSrc, setImageSrc] = useState('');
    const [photoBack, setBack] = useState('block')
    const [showPhoto, setPhoto] = useState('none')

    useEffect(() => {
        // console.log(userInfo.userimg.data)
        var u8Arr = new Uint8Array(userInfo.userimg.data);
        var blob = new Blob([u8Arr], { type: "image/jpeg" });
        var fr = new FileReader
        fr.onload = function () {
            setImageSrc(fr.result);
            if (imageSrc) {
                setBack('none')
                setPhoto('block')
            }
        };
        fr.readAsDataURL(blob);
    }, [userInfo])


    // 相片上傳 同時顯示 
    // const[picSourse,setPicSourse]=useState(imageSrc);
    const handleOnPreview = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            // convert image file to base64 string
            setImageSrc(reader.result)
        }, false);
        
        if (file) {
            reader.readAsDataURL(file);
        }
        setBack('none')
        setPhoto('block')
        
        // const input = event.target.files[0];
        // const reader2 = new FileReader();
        // reader2.onload = function () {
        //     setPicSourse(reader2.result)
        //     // data 是二進位資料
        //     console.log(reader2.result)
        // };
        // if (input) {
        // reader2.readAsArrayBuffer(input);
        // }
    };


    // 上傳更新
    let update = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/selfalter", {
            account: account,
            email: email,
            password: password,
            username: username,
            userimg: imageSrc, // picSourse
            tel: tel,
            userdescribe: describe,
            badminton:Bdegree,
            volleyball:Vdegree,
            tabletennis:Tdegree,

        }).then((response) => {
            console.log(response);
            window.location = '/gosport/user';
        })
    }
// 程度
console.log(userInfo)
const [Bdegree,setBdegree]= useState('新手');
const BdegreeCh = (e) =>{
    setBdegree(e.target.value)
}
const [Tdegree,setTdegree] = useState('新手')
const TdegreeCh = (e)=>{
    setTdegree(e.target.value)
}
const [Vdegree,setVdegree] = useState('新手')
const VdegreeCh = (e)=>{
    setVdegree(e.target.value)
}
// 徽章
let sta = userInfoli.map((item) => { return item.badgeid })
const allstar = Array.from(new Set(sta.filter((x, i, self) => self.indexOf(x) === i)));
console.log(allstar)
    return (
        <React.Fragment>
            {/* 主體 */}
            <div className='alter_'>
                <div className="selfalter">
                    <form className='alter_form' onSubmit={update}>
                        <div>
                            <div className="alter_PicPla">
                                <div id="picFile" onClick={upLoadpic}>
                                    <div id="picFile_backT" style={{ textAlign: "center", color: "#AAAAAA", display: photoBack }}>
                                        <embed src={alterImgbackIcon} /> <br />上傳相片
                                    </div>
                                    <input id="oploadPic" type="file" targetid="preview_img" onChange={handleOnPreview} ref={inputFile}
                                        accept="image/gif, image/jpeg, image/png" />
                                    <img id="preview_img" src={imageSrc} alt="" style={{ display: showPhoto }} />

                                </div>
                                <div id="alter_showStar">
                                    <embed src={star} type="" />
                                    <embed src={star} type="" />
                                    <embed src={star} type="" />
                                </div>
                            </div>
                            <div style={{ paddingLeft: "40px" }}>
                                <label className='alter_label' htmlFor="alter_name">姓名</label><br />
                                <input type="text" className='alter_input' id="alter_name" value={username} onChange={nameChange} /><br />
                                <label className='alter_label' htmlFor="alter_email">註冊信箱</label><br />
                                <input type="text" className='alter_input' id="alter_email" value={email} onChange={emailChange} /><br />
                                <label className='alter_label' htmlFor="alter_psw">密碼</label><br />
                                <input type="password" className='alter_input' id="alter_psw" value={password} onChange={passChange} /><br />
                                <label className='alter_label' htmlFor="alter_tel">電話</label><br />
                                <input type="tel" className='alter_input' id="alter_tel" value={tel} onChange={telChange} /><br />
                                <label className='alter_label'>我的程度</label><br />
                                <div className="alter_degree">
                                    <div>羽球</div>
                                    <input type="radio" name="Badmin" id="newB" value="新手" checked={Bdegree === '新手'} onChange={BdegreeCh}/><label htmlFor="newB">新手</label>
                                    <input type="radio" name="Badmin" id="nomalB" value="初階" checked={Bdegree === '初階'} onChange={BdegreeCh}/><label htmlFor="nomalB">初階</label>
                                    <input type="radio" name="Badmin" id="highB" value="高手" checked={Bdegree === '高手'} onChange={BdegreeCh}/><label htmlFor="highB">高手</label>
                                </div>
                                <div className="alter_degree">
                                    <div>桌球</div>
                                    <input type="radio" name="Ttennis" id="newT" value="新手" checked={Tdegree === '新手'} onChange={TdegreeCh}/><label htmlFor="newT">新手</label>
                                    <input type="radio" name="Ttennis" id="nomalT" value="初階" checked={Tdegree === '初階'} onChange={TdegreeCh}/><label htmlFor="nomalT">初階</label>
                                    <input type="radio" name="Ttennis" id="highT" value="高手" checked={Tdegree === '高手'} onChange={TdegreeCh}/><label htmlFor="highT">高手</label>
                                </div>
                                <div className="alter_degree">
                                    <div>排球</div>
                                    <input type="radio" name="Vodi" id="newV" value="新手" checked={Vdegree === '新手'} onChange={VdegreeCh}/><label htmlFor="newV">新手</label>
                                    <input type="radio" name="Vodi" id="nomalV" value="初階" checked={Vdegree === '初階'} onChange={VdegreeCh}/><label htmlFor="nomalV">初階</label>
                                    <input type="radio" name="Vodi" id="highV" value="高手" checked={Vdegree === '高手'} onChange={VdegreeCh}/><label htmlFor="highV">高手</label>
                                </div>
                                <label className='alter_label'>我的徽章</label>
                                <div className="alter_mark">
                                {allstar.map(item=><embed key={item} src={star}></embed>)}
                                </div>
                                <label className='alter_label' htmlFor="account_describe">描述</label><br />
                                <textarea className='alter_textarea' id="account_describe" value={describe} onChange={describeChange}></textarea><br />
                            </div>
                        </div>
                        <div className="alter_yesOrNot">
                            <a href="/selfpage">
                                <span className="alter_backself">取消</span>
                            </a>
                            <input type="submit" value="儲存" />
                        </div>
                    </form>
                </div>
            </div>

        </React.Fragment>
    );
}
// class Selfalter extends Component {
//     state =
//         {
//             alterInfo: { "username": "李大偉", "email": "asd1234567@gmail.com", "password": "XXXXX", "tel": '0900000555' }
//         }

//     render() {
//         const { username, email, password, tel } = this.state.alterInfo
//         return (
//             <React.Fragment>
//                 {/* 主體 */}
//                 <div className='alter_'>
//                     <div className="selfalter">
//                         <form className='alter_form' action="/selfpage">
//                             <div>
//                                 <div className="alter_PicPla">
//                                     <div id="picFile" onClick={this.upLoadpic}>
//                                         <div ref={c => this.PbackT = c} id="picFile_backT" style={{ textAlign: "center", color: "#AAAAAA" }}>
//                                             <embed src={alterImgbackIcon} /> <br />上傳相片
//                                         </div>
//                                         <input ref={c => this.oploadP = c} id="oploadPic" type="file" targetid="preview_img"
//                                             accept="image/gif, image/jpeg, image/png" />
//                                         <img ref={c => this.PImg = c} id="preview_img" style={{ display: "none" }} alt="" />
//                                     </div>
//                                     <div id="alter_showStar">
//                                         <embed src={star} type="" />
//                                         <embed src={star} type="" />
//                                         <embed src={star} type="" />
//                                     </div>
//                                 </div>
//                                 <div style={{ paddingLeft: "40px" }}>
//                                     <label className='alter_label' htmlFor="alter_name">姓名</label><br />
//                                     <input type="text" className='alter_input' id="alter_name" defaultValue={username} /><br />
//                                     <label className='alter_label' htmlFor="alter_email">註冊信箱</label><br />
//                                     <input type="email" className='alter_input' id="alter_email" defaultValue={email} /><br />
//                                     <label className='alter_label' htmlFor="alter_psw">密碼</label><br />
//                                     <input type="password" className='alter_input' id="alter_psw" defaultValue={password} /><br />
//                                     <label className='alter_label' htmlFor="alter_tel">電話</label><br />
//                                     <input type="tel" className='alter_input' id="alter_tel" defaultValue={tel} /><br />
//                                     <label className='alter_label'>我的程度</label><br />
//                                     <div className="alter_degree">
//                                         <div>羽球</div>
//                                         <input type="radio" name="Badmin" id="newB" /><label htmlFor="newB">新手</label>
//                                         <input type="radio" name="Badmin" id="nomalB" /><label htmlFor="nomalB">初階</label>
//                                         <input type="radio" name="Badmin" id="highB" /><label htmlFor="highB">高手</label>
//                                     </div>
//                                     <div className="alter_degree">
//                                         <div>桌球</div>
//                                         <input type="radio" name="Ttennis" id="newT" /><label htmlFor="newT">新手</label>
//                                         <input type="radio" name="Ttennis" id="nomalT" /><label htmlFor="nomalT">初階</label>
//                                         <input type="radio" name="Ttennis" id="highT" /><label htmlFor="highT">高手</label>
//                                     </div>
//                                     <div className="alter_degree">
//                                         <div>排球</div>
//                                         <input type="radio" name="Vodi" id="newV" /><label htmlFor="newV">新手</label>
//                                         <input type="radio" name="Vodi" id="nomalV" /><label htmlFor="nomalV">初階</label>
//                                         <input type="radio" name="Vodi" id="highV" /><label htmlFor="highV">高手</label>
//                                     </div>
//                                     <label className='alter_label'>我的徽章</label>
//                                     <div className="alter_mark">
//                                         <embed src={star} type="" />
//                                         <embed src={star} type="" />
//                                         <embed src={star} type="" />
//                                         <embed src={star} type="" />
//                                     </div>
//                                     <label className='alter_label' htmlFor="account_describe">描述</label><br />
//                                     <textarea className='alter_textarea' id="account_describe" value={"sc"}></textarea><br />
//                                 </div>
//                             </div>
//                             <div className="alter_yesOrNot">
//                                 <a href="/selfpage">
//                                     <span className="alter_backself">取消</span>
//                                 </a>
//                                 <input type="submit" value="儲存" />
//                             </div>
//                         </form>
//                     </div>
//                 </div>

//             </React.Fragment>
//         );
//     }
//     upLoadpic = () => {
//         const { oploadP } = this
//         oploadP.click()
//     }

// }

// picFile.addEventListener("click", function () {
//     oploadPic.click()
// })
// 相片上傳 同時顯示
// function readURL(input) {
//     if (input.files && input.files[0]) {
//         picFile_backT.style.display = 'none'
//         preview_img.style.display = 'block'
//         var imageTagID = input.getAttribute("targetID");
//         var reader = new FileReader();
//         reader.onload = function (e) {
//             var img = document.getElementById(imageTagID);
//             img.setAttribute("src", e.target.result)
//         }
//         reader.readAsDataURL(input.files[0]);
//     }
// }
export default Selfalter;