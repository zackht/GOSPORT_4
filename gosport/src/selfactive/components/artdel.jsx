// import React, { Component } from 'react';
import React, { useState , useRef } from 'react';
import Axios from "axios";
import Cookies from 'js-cookie';

import arrowup from '../icon/arrowup2.svg'
const Artdel = () => {
    // 查詢date
    const [stratDate, setStartDate] = useState('');
    const [endDate, setEndtDate] = useState('');
    // 資料初值
    const [sublist, setSubList] = useState([{
        articleid_sublet: '',
        date: '',
        content: '',
        ballgames: '',
        amount: ''
    }]);
    const [zerolist, setZeroList] = useState([{
        date: '',
        content: '',
        ballgames: '',
        number: ''
    }]);
    const userid = Cookies.get('id');
    // tr取資料操作
    const [showsub, setsubShow] = useState('none');
    const [showzero, setzeroShow] = useState('none');
    // 找資料
    let findArticle = () => {
        Axios.post("http://localhost:3001/finddelezoro", {
            stratDate: stratDate,
            endDate: endDate,
            userid: userid
        }).then((response) => {
            console.log(response.data);
            setZeroList(response.data);
            if (response.data[0].date) {
                setzeroShow('table-row')
            }
        });
        Axios.post("http://localhost:3001/finddelesub", {
            stratDate: stratDate,
            endDate: endDate,
            userid: userid
        }).then((response) => {
            console.log(response.data);
            setSubList(response.data);
            if (response.data[0].date) {
                setsubShow('table-row')
            }
        });
    }
    // 復原按鈕
    const  find = useRef();
    const zeroReBuild = (trdata) => {
        Axios.post("http://localhost:3001/insertzeroda", {
            articleid_zeroda: trdata.articleid_zeroda
        }).then((response) => {
            console.log(response.data);
        });
        Axios.post("http://localhost:3001/deledelezeroda", {
            articleid_zeroda: trdata.articleid_zeroda
        }).then((response) => {
            console.log(response.data);
        });
        find.current.click();
    }
    // 
    const subReBuild = (trdata) => {
        Axios.post("http://localhost:3001/insertsub", {
            articleid_sublet: trdata.articleid_sublet
        }).then((response) => {
            console.log(response.data);
        });
        Axios.post("http://localhost:3001/deledelesublet", {
            articleid_sublet: trdata.articleid_sublet
        }).then((response) => {
            console.log(response.data);
        });
        find.current.click();
    }
    return (
        <React.Fragment>
            <div>
                活動日期區間<br />
                <input type="date" onChange={(e) => { setStartDate(e.target.value) }} /><img className="selectedDate selectedfromart" src={arrowup} alt="" />至&emsp;&thinsp;
                <input type="date" onChange={(e) => { setEndtDate(e.target.value) }} /><img className="selectedDate selectedfromart" src={arrowup} alt="" />
                <span onClick={findArticle} ref={find}>搜尋</span>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>新增日期</td>
                        <td>類別</td>
                        <td>標題</td>
                        <td>報名/承租</td>
                        {/* <td>留言數</td> */}
                        <td></td>
                    </tr>
                    {/* <tr style={{display:showsub}}>
                        <td>2022/12/21</td>
                        <td>羽球</td>
                        <td>一個內斂又大膽的標題</td>
                        <td style={{ textAlign: "center" }}>0</td>
                        <td style={{ textAlign: "center" }}>7</td>
                        <td>
                            <button>復原</button>
                        </td>
                    </tr>
                    <tr style={{display:showzero}}>
                        <td>2022/12/21</td>
                        <td>羽球</td>
                        <td>一個內斂又大膽的標題</td>
                        <td style={{ textAlign: "center" }}>0</td>
                        <td style={{ textAlign: "center" }}>7</td>
                        <td>
                            <button>復原</button>
                        </td>
                    </tr> */}
                    {zerolist.map((item) => {
                        return (
                            <tr style={{ display: showzero }}>
                                <td>{item.date.substring(0, 10)}</td>
                                <td>零打</td>
                                <td>{item.content}</td>
                                <td style={{ textAlign: "center" }} >{item.number}</td>
                                <td>
                                        <button onClick={() => { zeroReBuild(item) }}>復原</button>
                                </td>
                            </tr>
                        )
                    })}
                    {sublist.map((item) => {
                        return (
                            <tr style={{ display: showsub }}>
                                <td>{item.date.substring(0, 10)}</td>
                                <td>轉租</td>
                                <td>{item.content}</td>
                                <td style={{ textAlign: "center" }}>{item.amount}</td>
                                <td>
                                        <button onClick={() => { subReBuild(item) }}>復原</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </React.Fragment>
    );
}
// class Artdel extends Component {
//     state = {}
//     render() {
//         return (
//             <React.Fragment>
//                 <div>
//                     日期區間<br />
//                     <input type="date" /><img className="selectedDate" src={arrowup} alt="" />至&emsp;&thinsp;
//                     <input type="date" /><img className="selectedDate" src={arrowup} alt="" />
//                 </div>
//                 <table>
//                     <tbody>
//                         <tr>
//                             <td>新增日期</td>
//                             <td>類別</td>
//                             <td>標題</td>
//                             <td>報名/承租</td>
//                             <td>留言數</td>
//                             <td></td>
//                         </tr>
//                         <tr>
//                             <td>2022/12/21</td>
//                             <td>羽球</td>
//                             <td>一個內斂又大膽的標題</td>
//                             <td style={{ textAlign: "center" }}>0</td>
//                             <td style={{ textAlign: "center" }}>7</td>
//                             <td>
//                                 <button>復原</button>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </React.Fragment>
//         );
//     }
// }

export default Artdel;