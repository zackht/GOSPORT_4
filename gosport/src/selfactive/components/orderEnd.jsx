import React from 'react';
import arrowup from '../icon/arrowup2.svg'

const OrderEnd = () =>{
    return (
        <React.Fragment>
            {/* 場地訂單 */}
            {/* <!-- 訂單日期選擇 --> */}
            <div style={{ flex: "1", borderRight: "2px solid rgb(233, 233, 233)" }}>
                <div>日期區間</div>
                <div>
                    <input type="date" /><img className="selectedDate" src={arrowup} alt='' /><br />
                    <input type="date" /><img className="selectedDate" src={arrowup} alt='' />
                </div>
                <div>訂單日期</div>
                <div className="showDate">
                    <button>2022/12/31</button>
                    <button>2023/1/31</button>
                    <button>2023/1/31</button>
                    <button>2023/1/31</button>
                </div>
            </div>
            {/* <!-- 訂單詳細 --> */}
            <div className="ordermenu">
                <div>訂單日期</div>
                <div>2022/12/31</div>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: "1" }}>開始時間</div>
                    <div style={{ flex: "1" }}>結束時間</div>
                    <div style={{ flex: "1" }}>星期</div>
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: "1" }}>2022/12/31</div>
                    <div style={{ flex: "1" }}>2022/12/31</div>
                    <div style={{ flex: "1" }}>星期三</div>
                </div>
                <div>數量</div>
                <div>1</div>
                <div>日/長租</div>
                <div>長租</div>
                <div>場地</div>
                <div>群月羽球場</div>
                <div>地址</div>
                <div style={{ position: "relative" }}>台中市北區福德路那條巷123號
                    <button id="end" className="chuse_order">再次預約</button>
                </div>
            </div>
        </React.Fragment>

    );
}

export default OrderEnd;