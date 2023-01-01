import React, { useState } from 'react';
import style from './userteam.module.css';
import team from './img/team.jpg';

export default function Myteam (){
    const[filterActive, setFilterActive] = useState('false');
    
    const handleFilterToggle = () => {
        setFilterActive(!filterActive);
    };

    return(
        <React.Fragment>
            <div className={style.main}>
                <div className={style.mContent}>
                    <div>
                        <button className={filterActive? style.mFilter:style.mFilteractive} 
                                onClick={handleFilterToggle}>
                            基本資料
                        </button>
                        

                        
                        <button className={style.mFilter} onClick={handleFilterToggle}>成員</button>
                        <button className={style.mFilter} onClick={handleFilterToggle}>基金</button>
                        <button className={style.mFilter} onClick={handleFilterToggle}>支出</button>
                        <button className={style.mFilter} onClick={handleFilterToggle}>活動</button>
                    </div>
                    <div>
                        <button>編輯</button>
                        <div><img src={team} alt='團隊的照片'></img></div>
                        <div className={style.mBigTitle}>鐵血軍團</div>
                        <div className={style.mTitle}>場館</div>
                        <div className={style.mText}>群月羽球館</div>
                        <div className={style.mTitle}>縣市</div>
                        <div className={style.mText}>台中市</div>
                        <div className={style.mTitle}>區域</div>
                        <div className={style.mText}>后里區</div>
                        <div className={style.mTitle}>週期</div>
                        <div className={style.mText}>星期三</div>
                        <div className={style.mTitle}>時段</div>
                        <div className={style.mText}>09:00-11:00</div>
                        <div className={style.mTitle}>程度</div>
                        <div className={style.mText}>新手</div>
                        <div className={style.mTitle}>零打費用</div>
                        <div className={style.mText}>300</div>
                        <div className={style.mTitle}>描述</div>
                        <div className={style.mText}>
                            歡迎一起打球～<br />
                            我們每個月固定繳三百元當作共同支出耗材費唷～～～<br />
                            我們每個月固定繳三百元當作共同支出耗材費唷～～～<br />
                            我們每個月固定繳三百元當作共同支出耗材費唷～～～</div>
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
    
}
 
