import React, { Component } from 'react';
import './backuser.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import group41 from "./icon/Group 41.png";
class Backuser extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                {/* <!-- 導覽列 --> */}
                <div class="navbar">
                    <div class="nContent">
                        <div class="nLeft">
                            <div>GOsport</div>
                        </div>
                        <div class="nRight">
                            <div><a href="">會員管理</a></div>
                            <div><a href="">場地資料</a></div>
                            <div><a href="">交流區文章</a></div>
                            <div><a href="">Q&A</a></div>
                            <img src="./icon/notice.svg" alt=""/>
                                <img src="./icon/user.svg"></img>
                        </div>
                    </div>
                </div>
                <div class="container-fluid adiv1">
                    <div class="row adiv2">
                        <div class="col-md-3 d-flex flex-column boxshadow adiv3">
                            <form action="" class=" d-flex flex-column adiv4">
                                <span className='span'>日期區間</span>
                                <div class="d-flex flex-column adiv5">
                                    <div class="dateimg font">
                                        <input type="date" className='adiv6 adate' />
                                        <img class="selectedDate1" src={group41} alt="" />
                                    </div>
                                    <div class="dateimg adiv7">
                                        <input type="date" class="font adiv8 adate" />
                                        <img class="selectedDate1" src={group41} alt="" />
                                    </div>
                                    <span className='span'>狀態</span>
                                    <div class="selectimg font adiv9">
                                        <select name="" id="" className='adiv10 aselect'>
                                            <option value="">未驗證</option>
                                            <option value="">以驗證</option>
                                        </select>
                                        <img class="" src={group41} alt="" />
                                    </div>
                                </div>
                                <div className='adiv11'>
                                    <span className='span'>會員名稱</span>
                                    <div>
                                        <input type="text" class="ccc adiv12" placeholder="請輸入文字" />
                                    </div>
                                </div>
                                <div class="mt-auto ">
                                    <input type="submit" value="搜尋" class="submit" />
                                </div>
                            </form>
                        </div>
                        <div class="col-md boxshadow adiv13">
                            <div class="row adiv14">
                                <div class="col-2 font1 adiv15">申請日期</div>
                                <div class="col-2 font1 adiv15">狀態</div>
                                <div class="col-5  font1 adiv15">會員名稱</div>
                                <div class="col-3 font1 adiv15"></div>
                            </div>
                            <div class="row adiv16">
                                <div class="col d-flex flex-column adiv15">
                                    {/* <!-- 搜尋結果 --> */}
                                    <div class="d-flex font2 adiv17">
                                        <div class="col-2 adiv15">2022/12/09</div>
                                        <div class="col-2 adiv15">未驗證</div>
                                        <div class="col-5 adiv15">豐原顆顆顆</div>
                                        <div class="col-3 d-flex justify-content-center adiv15">
                                            <div class="button1 adiv18">編輯</div>
                                            <div class="button1">刪除</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- footer --> */}
                < div class="footer" >
                    <div class="fContent">
                        <div>Copyright © 2022 GOsport. 保留一切權利。</div>
                    </div>
                </div >
            </React.Fragment >
        );
    }
}

export default Backuser;