import React from 'react';
import { Link } from "react-router-dom";
import activity from './activity.module.css';
import img from '../img.module.js';
import DateSearch from './dateSearch';

export default function Activity(params) {
    return(
        <>
            {/* 活動 */}
            <div className={activity.activity}>
                
                {/* 日期搜索 */}
                <DateSearch/>

                {/* 訂單資訊 */}
                <div className={activity.order}>
                    <Link to={`/gosport/user/myteam/activity/show`} className={activity.orderBtn}>檢視</Link>
                    <Link to={`/gosport/user/myteam/activity/edit`} className={activity.orderBtn}>編輯</Link>
                    <button className={activity.orderBtn}>刪除</button>    
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
                    <Link to={`/gosport/user/myteam/activity/show`} className={activity.oText}>3</Link>
                </div>

            </div>
        </>
    )
};
