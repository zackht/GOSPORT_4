import React from 'react';
import { Link } from 'react-router-dom';
import pay from './pay.module.css';

export default function Pay(params) {
    return(
        <>
            {/* 支出 */}
            <div className={pay.pay}>
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
                        <button>搜尋</button>
                    </form>
                </div>

                {/* 訂單資訊 */}
                <div className={pay.order}>
                    <Link to={`/gosport/user/myteam/pay/edit`}>編輯</Link>
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
        </>
    )
};
