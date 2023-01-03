import React, { useState } from 'react';
import basic from './basic.module.css';
import member from './member.module.css';
import money from './money.module.css';
import pay from './pay.module.css';
import activity from './activity.module.css';
import img from './img.module.js';


export default function Myteam (){

    // filter change
    const [filter, setFilter] = useState([
        {filterName:'基本資料', id:'1'},
        {filterName:'成員', id:'2'},
        {filterName:'基金', id:'3'},
        {filterName:'支出', id:'4'},
        {filterName:'活動', id:'5'}
    ]);
    const [filterId, setFilterId] = useState('1');
    const filterList = filter.map( 
        (e,id)=>{
            let filterCss = e.id===filterId? basic.mFilteractive:basic.mFilter;
            return (
                <button key = {id} 
                        onClick = {()=>{setFilterId(e.id)}} 
                        className = {filterCss}>
                    {e.filterName}
                </button>
            )
        }
    );

    // filter內容 show
    const isBasicShow =     filterId==='1'? '':'none';
    const isMemberShow =    filterId==='2'? '':'none';
    const isMoneyShow =     filterId==='3'? '':'none';
    const isPayShow =       filterId==='4'? '':'none';
    const isActivityShow =  filterId==='5'? '':'none';
    

    return(
        <React.Fragment>
            <div className={basic.main}>
                <div className={basic.mContent}>

                    {/* Filter */}
                    <div>
                        {filterList}
                    </div>

                    {/* 基本資料 */}
                    <div style={{display:isBasicShow}}>
                        <button>編輯</button>
                        <div><img src={img.team} className={basic.mBimg} alt='團隊的照片'/></div>
                        <div className={basic.mBigTitle}>鐵血軍團</div>
                        <div className={basic.mTitle}>場館</div>
                        <div className={basic.mText}>群月羽球館</div>
                        <div className={basic.mTitle}>縣市</div>
                        <div className={basic.mText}>台中市</div>
                        <div className={basic.mTitle}>區域</div>
                        <div className={basic.mText}>后里區</div>
                        <div className={basic.mTitle}>週期</div>
                        <div className={basic.mText}>星期三</div>
                        <div className={basic.mTitle}>時段</div>
                        <div className={basic.mText}>09:00-11:00</div>
                        <div className={basic.mTitle}>程度</div>
                        <div className={basic.mText}>新手</div>
                        <div className={basic.mTitle}>零打費用</div>
                        <div className={basic.mText}>300</div>
                        <div className={basic.mTitle}>描述</div>
                        <div className={basic.mText}>
                            歡迎一起打球～<br />
                            我們每個月固定繳三百元當作共同支出耗材費唷～～～<br />
                            我們每個月固定繳三百元當作共同支出耗材費唷～～～<br />
                            我們每個月固定繳三百元當作共同支出耗材費唷～～～</div>
                    </div>

                    {/* 成員 */}
                    <div style={{display:isMemberShow}} className={member.memberContent}>
                        <div>
                            <button className={member.mbtn}>編輯</button>
                            <div className={member.mTitle}>隊長</div>
                            <img className={member.mImg} src={img.m1} alt=""/>
                            <div className={member.mTitle}>成員</div>
                            <img className={member.mImg} src={img.m2} alt=""/>
                            <img className={member.mImg} src={img.m3} alt=""/>
                            <img className={member.mImg} src={img.m4} alt=""/>
                            <img className={member.mImg} src={img.m5} alt=""/>
                            <img className={member.mImg} src={img.m6} alt=""/>
                            <div className={member.mTitle}>未審核</div>
                        </div>
                        {/* <!-- 未審核成員 --> */}
                        <div className={member.checkMember}>
                            <img className={member.mImg} src={img.m7} alt=""/>
                            <div>七期許效舜</div>
                            <div>程度</div>
                            <div>高手</div>
                            <div className={member.badge}>
                                <img src={img.star} alt=""/>
                                <img src={img.star} alt=""/>
                                <img src={img.star} alt=""/>
                            </div>
                            <div className={member.checkbtn}>
                                <button>拒絕</button>
                                <button>接受</button>
                            </div>
                        </div>
                        <div className={member.checkMember}>
                            <img className={member.mImg}  src={img.m8} alt=""/>
                            <div>資策會羅志祥</div>
                            <div>程度</div>
                            <div>新人</div>
                            <div className={member.badge}>
                                <img src={img.star} alt=""/>
                                <img src={img.star} alt=""/>
                                <img src={img.star} alt=""/>
                            </div>
                            <div className={member.checkbtn}>
                                <button>拒絕</button>
                                <button>接受</button>
                            </div>
                        </div>
                        
                    </div>

                    {/* 基金 */}
                    <div style={{display:isMoneyShow}} className={money.money}>
                        {/* 日期搜索 */}
                        <div className={money.search}>
                            
                            <form action="">
                                <div className={money.sTitle}>日期區間</div>
                                <input type="date" name="" id=""/>
                                <input type="date" name="" id=""/>
                                <div className={money.sTitle}>訂單日期</div>
                                <div className={money.sDate}>
                                    <div>2022/12/31</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                </div>
                                <button>新增</button>
                            </form>
                        </div>
                        

                        {/* 訂單資訊 */}
                        <div className={money.order}>
                            <button>編輯</button>
                            <button>刪除</button>
                            <div className={money.oTitle}>日期</div>
                            <div className={money.oText}>2022/12/31</div>
                            <div className={money.oTitle}>儲值成員</div>
                            <img src={img.m1}/>
                            <div className={money.oTitle}>金額</div>
                            <div className={money.oText}>200</div>
                            <div className={money.oTitle}>描述</div>
                            <div className={money.oText}>南屯羅志祥儲值囉～</div>
                        </div>

                    </div>

                    {/* 支出 */}
                    <div style={{display:isPayShow}} className={pay.pay}>
                        <div className={pay.search}>
                            <form action="">
                                <div className={pay.sTitle}>日期區間</div>
                                <input type="date" name="" id=""/>
                                <input type="date" name="" id=""/>
                                <div className={pay.sTitle}>訂單日期</div>
                                <div className={pay.sDate}>
                                    <div>2022/12/31</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                </div>
                                <button>新增</button>
                            </form>
                        </div>

                        {/* 訂單資訊 */}
                        <div className={pay.order}>
                            <button>編輯</button>
                            <button>刪除</button>
                            <div className={pay.oTitle}>日期</div>
                            <div className={pay.oText}>2022/12/31</div>
                            <div className={pay.oTitle}>項目</div>
                            <div className={pay.oText}>耗材</div>
                            <div className={pay.oTitle}>金額</div>
                            <div className={pay.oText}>200</div>
                            <div className={pay.oTitle}>描述</div>
                            <div className={pay.oText}>羽球統一之</div>
                        </div>

                    </div>

                    {/* 活動 */}
                    <div style={{display:isActivityShow}} className={activity.activity}>
                        <div className={activity.search}>
                            <form action="">
                                <div className={activity.sTitle}>日期區間</div>
                                <input type="date" name="" id=""/>
                                <input type="date" name="" id=""/>
                                <div className={activity.sTitle}>訂單日期</div>
                                <div className={activity.sDate}>
                                    <div>2022/12/31</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                    <div>2022/12/29</div>
                                </div>
                                <button>新增</button>
                            </form>
                        </div>

                        {/* 訂單資訊 */}
                        <div className={activity.order}>
                            <button>檢視</button>
                            <button>編輯</button>
                            <button>刪除</button>    
                            <div className={activity.oTitle}>日期</div>
                            <div className={activity.oText}>2022/12/31</div>
                            <div className={activity.oTitle}>類型</div>
                            <div className={activity.oText}>運動</div>
                            <div className={activity.oTitle}>標題</div>
                            <div className={activity.oText}>十月隊聚</div>
                            <div className={activity.oTitle}>地點</div>
                            <div className={activity.oText}>海底撈</div>
                            <div className={activity.oTitle}>支出</div>
                            <div className={activity.oText}>0</div>
                            <div className={activity.oTitle}>描述</div>
                            <div className={activity.oText}> ㄟㄟㄟ天氣冷吃個飯ㄅ～～</div>
                            
                            <div className={activity.oTitle}>參加成員</div>
                            <img src={img.m1}></img>
                            <img src={img.m2}></img>
                            <img src={img.m3}></img>
                            <img src={img.m4}></img>
                            <div className={activity.oTitle}>留言</div>
                            <a href="" className={activity.oText}>3</a>
                            
                        </div>

                    </div>

                </div>
            </div>
            
        </React.Fragment>
    )

}
 
