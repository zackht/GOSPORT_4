import React, { useState,useEffect } from 'react';
import fund from './fund.module.css';
import img from '../img.module.js';
import { Link } from 'react-router-dom';
import DateSearch from './dateSearch';
import Axios from 'axios';

export default function Fund(params) {
    return(
        <>
            {/* 基金 */}
            <div className={fund.fund}>

                {/* 日期搜索 */}
                <DateSearch/>
                
                {/* 訂單資訊 */}
                <div className={fund.order}>
                    <Link to={`/gosport/user/myteam/fund/edit`}>編輯</Link>
                    
                    <button>刪除</button>
                    <div className={fund.oTitle}>日期</div>
                    <div className={fund.oText}>2022/12/31</div>
                    <div className={fund.oTitle}>儲值成員</div>
                    <img src={img.m1}/>
                    <div className={fund.oTitle}>金額</div>
                    <div className={fund.oText}>200</div>
                    <div className={fund.oTitle}>描述</div>
                    <div className={fund.oText}>南屯羅志祥儲值囉～</div>
                </div>

            </div>
        </>
    )
};
