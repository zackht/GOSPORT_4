import React, { Component } from 'react';
import './backside.css';
import group41 from "./icon/Group 41.png";
import 'bootstrap/dist/css/bootstrap.min.css';
class backside extends Component {
    state = {  } 
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
    <div class="container-fluid bdiv1">
        <div class="row bdiv2">
            <div class="col-md-3 d-flex flex-column boxshadow bdiv3">
                <form action="" class=" d-flex flex-column bdiv4">
                    <span class="span">日期區間</span>
                    <div class="d-flex flex-column bdiv5">
                        <div class="dateimg font">
                            <input type="date" class="bdiv6 date"/>
                            <img class="bselectedDate" src={group41} alt=""/>
                        </div>
                        <div class="dateimg bdiv7">
                            <input type="date" class="font bdiv8 date"/>
                            <img class="bselectedDate" src={group41} alt=""/>
                        </div>
                        <span class="span">球類</span>
                        <div class="selectimg font bdiv9">
                            <select name="" id="" class="bdiv10 aselect">
                                <option value="">排球</option>
                                <option value="">羽球</option>
                                <option value="">桌球</option>
                            </select>
                            <img class="" src={group41} alt=""/>
                        </div>
                    </div>
                    <div class="bdiv11">
                        <span class="span">關鍵字</span>
                        <div>
                            <input type="text" class="ccc bdiv12" placeholder="請輸入關鍵字"/>
                        </div>
                    </div>
                    <div class="mt-auto ">
                        <input type="submit" value="搜尋" class="submit"/>
                    </div>
                </form>
            </div>
            <div class="col-md boxshadow bdiv13">
                <div class="row bdiv14">
                    <div class="col-2 font1 bdiv15">申請日期</div>
                    <div class="col-1 font1 bdiv15">球類</div>
                    <div class="col-6  font1 bdiv15">場館名稱</div>
                    <div class="col-3 font1 bdiv15"></div>
                </div> 
                <div class="row bdiv16">
                    <div class="col d-flex flex-column bdiv15">
                        {/* <!-- 搜尋結果 --> */}
                        <div class="d-flex font2 bdiv17">
                            <div class="col-2 bdiv15">2022/12/09</div>
                            <div class="col-1 bdiv15">羽球</div>
                            <div class="col-6 bdiv15">群月羽球館</div>
                            <div class="col-3 d-flex justify-content-center bdiv15">
                                <div class="button1 bdiv18">編輯</div>
                                <div class="button1">刪除</div>
                            </div>
                        </div>
                        <div class="mt-auto d-flex justify-content-end">
                            <div class="button2">新增</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- footer --> */}
    <div class="footer">
        <div class="fContent">
            <div>Copyright © 2022 GOsport. 保留一切權利。</div>
        </div>
    </div>
            </React.Fragment>
        );
    }
}
 
export default backside;