import React from 'react';
import dateSearch from './dateSearch.module.css';

export default function DateSearch(params) {
    return(
        <>
            {/* 日期搜索 */}
            <div className={dateSearch.search}>
                <form action="">
                    <div className={dateSearch.sTitle}>日期區間</div>
                    <input type="date" name="" id=""/>
                    <input type="date" name="" id=""/>
                    <div className={dateSearch.sTitle}>訂單日期</div>
                    <div className={dateSearch.sDate}>
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
        </>
    )
};
