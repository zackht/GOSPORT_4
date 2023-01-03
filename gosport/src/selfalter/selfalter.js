import React, { useRef, useState } from 'react';
import star from "./icon/star1.svg";
import alterImgbackIcon from './icon/Vector.svg';
// import notice from './icon/notice.svg'
// import user from './icon/user.svg'
import "./selfalter.css"
const Selfalter = () => {
    // input的value同時設定以及渲染
    const [username, setUsername] = useState('a')
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

    // 相片上傳 同時顯示 目前失敗
    const picFile_backT = useRef();
    const preview_img = useRef();
    const img = useRef();
    function readURL(input) {
        console.log(input)
        if (input.files && input.files[0]) {
            picFile_backT.style.display = 'none'
            preview_img.style.display = 'block'
            // var imageTagID = input.getAttribute("targetID");
            var reader = new FileReader();
            reader.onload = function (e) {
                // var img = document.getElementById(imageTagID);
                img.setAttribute("src", e.target.result)
            }
            reader.readAsDataURL(input.files[0]);
        }else{
            console.log('fales')
        }
    }

    return (
        <React.Fragment>
            {/* 主體 */}
            <div className='alter_'>
                <div className="selfalter">
                    <form className='alter_form' action="/selfpage">
                        <div>
                            <div className="alter_PicPla">
                                <div id="picFile" onClick={upLoadpic}>
                                    <div id="picFile_backT" ref={picFile_backT} style={{ textAlign: "center", color: "#AAAAAA" }}>
                                        <embed src={alterImgbackIcon} /> <br />上傳相片
                                    </div>
                                    <input id="oploadPic" type="file" targetid="preview_img" ref={inputFile} onChange={readURL}
                                        accept="image/gif, image/jpeg, image/png" />
                                    <img id="preview_img" ref={img} style={{ display: "none" }} alt="" />
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
                                <input type="email" className='alter_input' id="alter_email" value={email} onChange={emailChange} /><br />
                                <label className='alter_label' htmlFor="alter_psw">密碼</label><br />
                                <input type="password" className='alter_input' id="alter_psw" value={password} onChange={passChange} /><br />
                                <label className='alter_label' htmlFor="alter_tel">電話</label><br />
                                <input type="tel" className='alter_input' id="alter_tel" value={tel} onChange={telChange} /><br />
                                <label className='alter_label'>我的程度</label><br />
                                <div className="alter_degree">
                                    <div>羽球</div>
                                    <input type="radio" name="Badmin" id="newB" /><label htmlFor="newB">新手</label>
                                    <input type="radio" name="Badmin" id="nomalB" /><label htmlFor="nomalB">初階</label>
                                    <input type="radio" name="Badmin" id="highB" /><label htmlFor="highB">高手</label>
                                </div>
                                <div className="alter_degree">
                                    <div>桌球</div>
                                    <input type="radio" name="Ttennis" id="newT" /><label htmlFor="newT">新手</label>
                                    <input type="radio" name="Ttennis" id="nomalT" /><label htmlFor="nomalT">初階</label>
                                    <input type="radio" name="Ttennis" id="highT" /><label htmlFor="highT">高手</label>
                                </div>
                                <div className="alter_degree">
                                    <div>排球</div>
                                    <input type="radio" name="Vodi" id="newV" /><label htmlFor="newV">新手</label>
                                    <input type="radio" name="Vodi" id="nomalV" /><label htmlFor="nomalV">初階</label>
                                    <input type="radio" name="Vodi" id="highV" /><label htmlFor="highV">高手</label>
                                </div>
                                <label className='alter_label'>我的徽章</label>
                                <div className="alter_mark">
                                    <embed src={star} type="" />
                                    <embed src={star} type="" />
                                    <embed src={star} type="" />
                                    <embed src={star} type="" />
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