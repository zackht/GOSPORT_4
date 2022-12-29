import React, { Component } from 'react';
import star from "./icon/star1.svg";
import alterImgbackIcon from './icon/Vector.svg';
import "./selfalter.css"
class Selfalter extends Component {
    state = 
    {}
    render() {
        return (
            <div className="selfalter">
                <form className='alter_form' action="/selfpage">
                    <div>
                        <div className="alter_PicPla">
                            <div id="picFile" onClick={this.upLoadpic}>
                                <div ref={c => this.PbackT = c} id="picFile_backT" style={{ textAlign: "center", color: "#AAAAAA" }}>
                                    <embed src={alterImgbackIcon} /> <br />上傳相片
                                </div>
                                <input ref={c => this.oploadP = c} id="oploadPic" type="file" targetid="preview_img"
                                    accept="image/gif, image/jpeg, image/png" />
                                <img ref={c => this.PImg = c} id="preview_img"  style={{ display: "none" }} alt="" />
                            </div>
                            <div id="alter_showStar">
                                <embed src={star} type="" />
                                <embed src={star} type="" />
                                <embed src={star} type="" />
                            </div>
                        </div>
                        <div style={{ paddingLeft: "40px" }}>
                            <label className='alter_label' htmlFor="alter_name">姓名</label><br />
                            <input type="text" className='alter_input' id="alter_name" /><br />
                            <label className='alter_label' htmlFor="alter_email">註冊信箱</label><br />
                            <input type="email" className='alter_input' id="alter_email" /><br />
                            <label className='alter_label' htmlFor="alter_psw">密碼</label><br />
                            <input type="password" className='alter_input' id="alter_psw" /><br />
                            <label className='alter_label' htmlFor="alter_tel">電話</label><br />
                            <input type="tel" className='alter_input' id="alter_tel" /><br />
                            <label className='alter_label'>我的程度</label><br />
                            <div className="alter_degree">
                                <div>羽球</div>
                                <input type="radio" name="Badmin" id="newB" /><label  htmlFor="newB">新手</label>
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
                            <textarea className='alter_textarea' id="account_describe"></textarea><br />
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
        );
    }
    upLoadpic = () => {
        const { oploadP } = this
        oploadP.click()
    }

}
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