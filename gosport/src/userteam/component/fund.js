import React from 'react';
import fund from './fund.module.css';
import img from '../img.module.js';
import { Link } from 'react-router-dom';

export default function Fund(params) {
    return(
        <>
            {/* 基金 */}
            <div className={fund.fund}>
            {/* 日期搜索 */}
            <div className={fund.search}>
                
                <form action="">
                    <div className={fund.sTitle}>日期區間</div>
                    <input type="date" name="" id=""/>
                    <input type="date" name="" id=""/>
                    <div className={fund.sTitle}>訂單日期</div>
                    <div className={fund.sDate}>
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
                    <button>搜尋</button>
                </form>
            </div>
            

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
