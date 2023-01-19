import React from 'react';
import { useState , useEffect} from 'react';
import {  Link } from 'react-router-dom';

import Axios from "axios";
import Cookies from 'js-cookie';

import arrowup from '../icon/arrowup2.svg'

const OrderNo = () => {
    // 接取資料 起訖查詢時間 查詢人
    const [orderInfo, setOrderInfo] = useState([{ orderdate: '', orderid: '' }]);
    const [stratDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const userid = Cookies.get('id');
    // console.log(stratDate , endDate , userid)
    // 資料查詢
    const getdata = () => {
        Axios.post("http://localhost:3001/orderfalse", {
            stratFind: stratDate,
            endFind: endDate,
            userid: userid
        }).then((response) => {
            console.log(response.data);
            setOrderInfo(response.data)
        });
    }
    const activeTimeList = orderInfo.map((item, index) => <button key={item.orderid} onClick={() => { showdata(index) }}>{item.orderdate.substring(0, 10)}</button>)
    // 點擊活動日期顯示查詢結果
    const [orderNone, setOderNoneOut] = useState('flex')
    const [ordermenu, setShowOrder] = useState('none');
    const [orderData, setOrderData] = useState({
        starttime: "",
        endtime:"",
        duringtype: "",
        enddate: "",
        flag: "",
        ordercount: '',
        orderdate: "",
        sideaddr: "",
        sidename: "",
        startdate: "",
        week: ""
    });
    const[rentType,setRentType] = useState(false)
    const showdata = (index) => {
        setOderNoneOut('none')
        setShowOrder('block')
        setOrderData(orderInfo[index])
    }
    useEffect(() => {
        if (orderData.duringtype === '月租' || orderData.duringtype === '季租') {
            console.log('長租')
            setRentType(true)
        }else{
            console.log('日租')
            setRentType(false)
        }
    }, [orderData])
    return (
        <React.Fragment>
            {/* 場地訂單 */}
            {/* <!-- 訂單日期選擇 --> */}
            <div style={{ flex: "1", borderRight: "2px solid rgb(233, 233, 233)" }}>
                <div>下單日期區間</div>
                <div className='ordergettime'>
                    <input type="date" onChange={(e) => { setStartDate(e.target.value) }} /><img className="selectedDate" src={arrowup} alt='' /><br />
                    <input type="date" onChange={(e) => { setEndDate(e.target.value) }} /><img className="selectedDate" src={arrowup} alt='' /><br />
                    <span className='searchbox' onClick={getdata}>搜尋</span>
                </div>
                <div>訂單日期</div>
                <div className="showDate" >
                    {activeTimeList}
                </div>
            </div>
            {/* <!-- 訂單詳細 --> */}
            <div className='ordermenu' id="notalready" style={{ display: orderNone }}> <span>尚未選擇下單日期</span>  </div>
            <div className="ordermenu" id='ordering' style={{ display: ordermenu }}>
                <div>訂單日期</div>
                <div>{orderData.orderdate.substring(0, 10)}</div>
                <div style={{ display: rentType? 'flex':'none' }}>
                    <div style={{ flex: "1" }}>開始時間</div>
                    <div style={{ flex: "1" }}>結束時間</div>
                    <div style={{ flex: "1" }}>星期</div>
                </div>
                <div style={{ display: rentType? 'none':'flex' }}>
                    <div style={{ flex: "1" }}>活動日期</div>
                    <div style={{ flex: "2" }}>時段</div>
                </div>
                <div style={{ display: rentType? 'flex':'none' }}>
                    <div style={{ flex: "1" }}>{orderData.startdate.substring(0, 10)}</div>
                    <div style={{ flex: "1" }}>{orderData.enddate.substring(0, 10)}</div>
                    <div style={{ flex: "1" }}>{orderData.week}</div>
                </div>
                <div style={{ display: rentType? 'none':'flex' }}>
                    <div style={{ flex: "1" }}>{orderData.startdate.substring(0, 10)}</div>
                    <div style={{ flex: "2" }}>{orderData.starttime}:00-{orderData.endtime}:00</div>
                </div>
                <div>數量</div>
                <div>{orderData.ordercount}</div>
                <div>日/長租</div>
                <div>{orderData.duringtype}</div>
                <div>場地</div>
                <div>{orderData.sidename}</div>
                <div>地址</div>
                <div style={{ position: "relative" }}>{orderData.sideaddr}
                <Link to="/gosport/rent"><button id='ing' className="chuse_order">再次預約</button></Link>
                </div>
            </div>
        </React.Fragment>

    );
}
export default OrderNo;
