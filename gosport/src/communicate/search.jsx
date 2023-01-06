import React, { useState } from 'react';
import "./nav.css";
import comm from "./search.module.css";
import notice from './icon/notice.svg';
import user from './icon/user.svg';
import badminton from './icon/badminton.svg';
import 'bootstrap/dist/css/bootstrap.min.css';




const Search = () => {

    const tabList = [
        { tabName: "零打", id: 1 },
        { tabName: "球隊", id: 2 },
        { tabName: "轉租", id: 3 },
    ];
    const [tabIndex, setTabIndex] = useState(1);
    var tabChoicedTab = (id) => {
        //tab切方法
        setTabIndex(id);
    }
    var isZeroShow = tabIndex === 1 ? 'block' : 'none';
    var isTeamShow = tabIndex === 2 ? 'block' : 'none';
    var isRentShow = tabIndex === 3 ? 'block' : 'none';

    // const [modaltoggle, setModalToggle] = useState(false);
    // function controlModal() {
    //     setModalToggle(!modaltoggle)
    // }
    // var showModal = modaltoggle ? 'flex' : 'none';




    return (
        <React.Fragment>
            {/* navbar */}
            <div className="navbar position_relative">
                <div className="nContent">
                    <div className="nLeft">
                        <div>GOsport</div>
                    </div>
                    <div className="nRight">
                        <div><a href="/#">首頁</a></div>
                        <div><a href="/#">租場地</a></div>
                        <div><a href={Search}>交流區</a></div>
                        <div><a href="/#">Q&A</a></div>
                        <img src={notice} alt=""></img>
                        <img src={user} alt=""></img>
                    </div>
                </div>
            </div>
            {/* 搜尋匡 */}
            <div className={comm.searchbox}>
                <div className={comm.active_type} >
                    {tabList.map(function (res, index) {
                        let tabStyle = res.id === tabIndex ? 'active_subCtrl active_act' : 'active_subCtrl';
                        return <div key={index}><button onClick={() => { tabChoicedTab(res.id) }} className={tabStyle}>{res.tabName}</button></div>
                    })}
                </div>
                {/* <!-- 零打 --> */}
                <div style={{ display: isZeroShow }} className={comm.tablink}>
                    <div id="Zero" className={`row ${comm.tabcontent}`}>
                        {/* <!-- 運動類別 --> */}
                        <div className={`col-3 row ${comm.type}`}>
                            <div className={comm.type1}>類別</div> <br />
                            <div className={comm.img}><img src={badminton} alt="" /></div> <br />
                            <div>羽球</div>
                        </div>
                        {/* <!-- 搜尋資料 --> */}
                        <div className={`col-9 ${comm.data}`}>
                            {/* <!-- 上層 --> */}
                            <div className={comm.time}>
                                <div className={comm.date}>
                                    <label htmlFor="start_d_input">時間</label><br />
                                    <input id="start_d_input" type="date" /><img className={comm.selectedDate} src="./icon/arrowup2.svg" alt="" />
                                </div>
                                <div className={comm.datatime}>
                                    <label htmlFor="">時段</label><br />
                                    <input type="time" /> 至 <input type="time" />
                                </div>
                                <div className={comm.fee}>
                                    <span>費用上限</span><br />
                                    <select>
                                        <option>350</option>
                                        <option>400</option>
                                        <option>450</option>
                                        <option>500</option>
                                    </select>
                                </div>
                            </div>
                            {/* <!-- 下層 --> */}
                            <div className={comm.place}>
                                <div className={comm.cityname1}>
                                    <h5>縣市</h5>
                                    <select style={{ width: '150px' }}>
                                        <option>台中</option>
                                        <option>彰化</option>
                                        <option>南投</option>
                                        <option>苗栗</option>
                                    </select>
                                </div>
                                <div className={comm.cityarea}>
                                    <h5>地區</h5>
                                    <select style={{ width: '150px' }}>
                                        <option>南屯</option>
                                        <option>西屯</option>
                                        <option>西</option>
                                        <option>東</option>
                                    </select>
                                </div>
                                <div className={comm.level}>
                                    <h5>程度</h5>
                                    <select style={{ width: '150px' }}>
                                        <option>新手</option>
                                        <option>普通</option>
                                        <option>高手</option>
                                    </select>
                                </div>
                                <div className={comm.search_input}>
                                    <input type="button" value="搜尋" className={comm.buttoninput} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- 球隊 --> */}
                <div style={{ display: isTeamShow }}>
                    <div id="Team" className={`row ${comm.tabcontent}`}>
                        {/* <!-- 運動類別 --> */}
                        <div className={`col-3 row ${comm.type}`}>
                            <div className={comm.type1}>類別<br /><img src={badminton} alt="" /><br />羽球</div>
                            <div className={comm.aeracity}>
                                <h5>縣市</h5>
                                <select style={{ width: '150px' }}>
                                    <option>台中</option>
                                    <option>彰化</option>
                                    <option>南投</option>
                                    <option>苗栗</option>
                                </select>
                            </div>
                            <div className={comm}>
                                <h5>地區</h5>
                                <select style={{ width: '150px' }}>
                                    <option>南屯</option>
                                    <option>西屯</option>
                                    <option>西</option>
                                    <option>東</option>
                                </select>
                            </div>
                        </div>
                        {/* <!-- 搜尋資料 --> */}
                        <div className={`col-9 ${comm.data}`}>
                            {/* <!-- 上層 --> */}
                            <div className={comm.time}>
                                <div className={comm.date}>
                                    <span>週期</span><br />
                                    <select style={{ width: '150px' }}>
                                        <option>星期一</option>
                                        <option>星期二</option>
                                        <option>星期三</option>
                                        <option>星期四</option>
                                        <option>星期五</option>
                                        <option>星期六</option>
                                        <option>星期日</option>
                                    </select>
                                </div>
                                <div className={comm.datatime}>
                                    <label htmlFor="">打球時段</label><br />
                                    <input type="time" /> 至 <input type="time" />
                                </div>
                            </div>
                            {/* 中層 */}
                            <div className={comm.searchtext}>
                                <span>關鍵字</span><br />
                                <input type="text" className={comm.textsearch} placeholder="請輸入關鍵字" />
                            </div>
                            {/* 下層 */}
                            <div className={comm.place}>
                                <div className={comm.level}>
                                    <h5>程度</h5>
                                    <select style={{ width: '150px' }}>
                                        <option>新手</option>
                                        <option>普通</option>
                                        <option>高手</option>
                                    </select>
                                </div>
                                <div className={comm.fee}>
                                    <span>費用上限</span><br />
                                    <select style={{ width: '150px' }}>
                                        <option>300</option>
                                        <option>400</option>
                                        <option>500</option>
                                        <option>600</option>
                                        <option>700</option>
                                    </select>
                                </div>
                                <div className={comm.search_input}>
                                    <input type="button" value="搜尋" className={comm.buttoninput_1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- 轉租 --> */}
                <div style={{ display: isRentShow }}>
                    <div id="Team" className={`row ${comm.tabcontent}`}>
                        {/* <!-- 運動類別 --> */}
                        <div className={`col-3 row ${comm.type}`}>
                            <div className={comm.type1}>類別<br /><img src={badminton} alt="" /><br />羽球</div>
                            <div className={comm.aeracity}>
                                <h5>縣市</h5>
                                <select style={{ width: '150px' }}>
                                    <option>台中</option>
                                    <option>彰化</option>
                                    <option>南投</option>
                                    <option>苗栗</option>
                                </select>
                            </div>
                            <div className={comm}>
                                <h5>地區</h5>
                                <select style={{ width: '150px' }}>
                                    <option>南屯</option>
                                    <option>西屯</option>
                                    <option>西</option>
                                    <option>東</option>
                                </select>
                            </div>
                        </div>
                        {/* <!-- 搜尋資料 --> */}
                        <div className={`col-9 ${comm.data}`}>
                            {/* <!-- 上層 --> */}
                            <div className={comm.time}>
                                <div className={comm.date}>
                                    <label htmlFor="start_d_input">日期</label><br />
                                    <input id="start_d_input" type="date" /><img className={comm.selectedDate} src="./icon/arrowup2.svg" alt="" />
                                </div>
                                <div className={comm.datatime}>
                                    <label htmlFor="">打球時段</label><br />
                                    <input type="time" /> 至 <input type="time" />
                                </div>
                            </div>
                            {/* 中層 */}
                            <div className={comm.searchtext}>
                                <span>關鍵字</span><br />
                                <input type="text" className={comm.textsearch} placeholder="請輸入關鍵字" />
                            </div>
                            {/* 下層 */}
                            <div className={comm.place}>
                                <div className={comm.level}>
                                    <h5>程度</h5>
                                    <select style={{ width: '150px' }}>
                                        <option>新手</option>
                                        <option>普通</option>
                                        <option>高手</option>
                                    </select>
                                </div>
                                <div className={comm.fee}>
                                    <span>數量</span><br />
                                    <select style={{ width: '150px' }}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className={comm.search_input}>
                                    <input type="button" value="搜尋" className={comm.buttoninput_1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 零打 */}
            <div style={{ display: isZeroShow }} className={comm.zeroInfo}>
                {/* <!-- 新增文章 --> */}
                <div className={comm.addarticle}>
                    <input type="button" value="新建文章" className={comm.article} />
                </div>
                {/* <!-- 標籤按鈕 --> */}
                <div className={comm.addrelated}>
                    <input type="button" value="羽球" className={comm.related} />
                    <input type="button" value="台中市" className={comm.related} />
                    <input type="button" value="后里區" className={comm.related} />
                    <select className={comm.searchcontent}>
                        <option>時間近到遠</option>
                        <option>費用多到少</option>
                    </select>
                </div>
                {/* <!-- 文章列表 --> */}
                <div className={comm.articlelist}>
                    <div className={comm.articlecontent}>
                    </div>
                    <div className={comm.articlecontent} s>
                    </div>
                    <div className={comm.articlecontent}>
                    </div>
                </div>
            </div>
            {/* 球隊 */}
            <div style={{ display: isTeamShow }} className={comm.teamInfo} >
                {/* <!-- 標籤按鈕 --> */}
                <div className={comm.addrelated}>
                    <input type="button" value="羽球" className={comm.related} />
                    <input type="button" value="台中市" className={comm.related} />
                    <input type="button" value="后里區" className={comm.related} />
                    <input type="button" value="星期一" className={comm.related} />
                    <input type="button" value="新手" className={comm.related} />
                    <select className={comm.searchcontent}>
                        <option>時間近到遠</option>
                        <option>費用多到少</option>
                    </select>
                </div>
                {/* <!-- 文章列表 --> */}
                <div className={comm.articlelist}>
                    <div className={comm.articlecontent}>
                    </div>
                    <div className={comm.articlecontent} s>
                    </div>
                    <div className={comm.articlecontent}>
                    </div>
                </div>
            </div>
            {/* 轉租 */}
            <div style={{ display: isRentShow }} className={comm.rentInfo}>
                {/* <!-- 新增文章 --> */}
                <div className={comm.addarticle}>
                    <input type="button" value="新建文章" className={comm.article} />
                </div>
                {/* <!-- 標籤按鈕 --> */}
                <div className={comm.addrelated}>
                    <input type="button" value="羽球" className={comm.related} />
                    <input type="button" value="台中市" className={comm.related} />
                    <input type="button" value="后里區" className={comm.related} />
                    <select className={comm.searchcontent}>
                        <option>時間近到遠</option>
                        <option>費用多到少</option>
                    </select>
                </div>
                {/* <!-- 文章列表 --> */}
                <div className={comm.articlelist}>
                    <div className={comm.articlecontent}>
                    </div>
                    <div className={comm.articlecontent} s>
                    </div>
                    <div className={comm.articlecontent}>
                    </div>
                </div>
            </div>
            {/* footer */}
            <div className="footer">
                <div className="fContent">
                    <div>Copyright © 2022 GOsport. 保留一切權利。</div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Search;

































// {/* 搜尋匡 */}
// <div className={comm.searchbox}>
// <button className={comm.tablink} onClick={handleClick} id="defaultOpen">零打</button>
// <button className={comm.tablink} onClick={handleClick}>轉租</button>
// <button className={comm.tablink} onClick={handleClick}>球隊</button>
// {/* <!-- 零打 --> */}
// <div id="Zero" className={comm.tabcontent}>
//     {/* <!-- 運動類別 --> */}
//     <div className={comm.type}>
//         <div className={comm.type1}>類別</div>
//         <div className={comm.img}><img src={badminton} alt="" /></div>
//         <div>羽球</div>
//     </div>
//     {/* <!-- 搜尋資料 --> */}
//     <div className={comm.data}>
//         {/* <!-- 上層 --> */}
//         <div className={comm.time}>
//             <div className={comm.date}>
//                 <label htmlFor="start_d_input">時間</label><br />
//                 <input id="start_d_input" type="date" /><img className={comm.selectedDate} src="./icon/arrowup2.svg" alt="" />
//             </div>
//             <div className={comm.datatime}>
//                 <label htmlFor="">時段</label><br />
//                 <input type="time" /> 至 <input type="time" />
//             </div>
//             <div className={comm.fee}>
//                 <span>費用上限</span><br />
//                 <select>
//                     <option>350</option>
//                     <option>400</option>
//                     <option>450</option>
//                     <option>500</option>
//                 </select>
//             </div>
//         </div>
//         {/* <!-- 下層 --> */}
//         <div className={comm.place}>
//             <div className={comm.cityname1}>
//                 <h5>縣市</h5>
//                 <select style={{ width: '150px' }}>
//                     <option>台中</option>
//                     <option>彰化</option>
//                     <option>南投</option>
//                     <option>苗栗</option>
//                 </select>
//             </div>
//             <div className={comm.cityarea}>
//                 <h5>地區</h5>
//                 <select style={{ width: '150px' }}>
//                     <option>南屯</option>
//                     <option>西屯</option>
//                     <option>西</option>
//                     <option>東</option>
//                 </select>
//             </div>
//             <div className={comm.level}>
//                 <h5>程度</h5>
//                 <select style={{ width: '150px' }}>
//                     <option>新手</option>
//                     <option>普通</option>
//                     <option>高手</option>
//                 </select>
//             </div>
//             <div className={comm.search_input}>
//                 <input type="button" value="搜尋" className={comm.buttoninput} />
//             </div>
//         </div>
//     </div>
// </div>
// {/* <!-- 球隊 --> */}
// <div id="Paris" className={comm.tabcontent}>

// </div>
// {/* <!-- 轉租 --> */}
// <div id="Tokyo" className={comm.tabcontent}>

// </div>
// </div>
// {/* <!-- 新增文章 --> */}
// <div className={comm.addarticle}>
// <input type="button" value="新建文章" className={comm.article} />
// </div>
// {/* <!-- 標籤按鈕 --> */}
// <div className={comm.addrelated}>
// <input type="button" value="羽球" className={comm.related} />
// <input type="button" value="台中市" className={comm.related} />
// <input type="button" value="后里區" className={comm.related} />
// <select className={comm.searchcontent}>
//     <option>時間近到遠</option>
//     <option>費用多到少</option>
// </select>
// </div>
// {/* <!-- 文章列表 --> */}
// <div className={comm.articlelist}>
// <div className={comm.articlecontent}>

// </div>
// <div className={comm.articlecontent} s>

// </div>
// <div className={comm.articlecontent}>

// </div>
// </div>