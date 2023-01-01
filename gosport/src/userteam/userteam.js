import React, { useEffect, useState } from 'react';
import basic from './basic.module.css';
import member from './member.module.css';
import team from './img/team.jpg';

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

    return(
        <React.Fragment>
            <div className={basic.main}>
                <div className={basic.mContent}>

                    {/* Filter */}
                    <div>
                        {filterList}
                    </div>

                    {/* 基本資料 */}
                    <div style={{display:'none'}}>
                        <button>編輯</button>
                        <div><img src={team} alt='團隊的照片'></img></div>
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
                    

                    {/* 基金 */}
                    {/* 支出 */}
                    {/* 活動 */}

                </div>
            </div>
        </React.Fragment>
    )

}
 
