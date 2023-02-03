import React, { useState, useRef } from 'react';
// import React from 'react';
import Axios from "axios";
import Cookies from 'js-cookie';

import arrowup from '../icon/arrowup2.svg'
// import star from '../icon/star1.svg'
// import pic from '../icon/20130917_171106.jpg'
const Artadd = ({ control, editZeroda, editSublet, find, follow }) => {
    // 查詢date
    const [stratDate, setStartDate] = useState('');
    const [endDate, setEndtDate] = useState('');
    // 資料初值
    const [sublist, setSubList] = useState([{
        articleid_sublet: '',
        startdate: '',
        content: '',
        ballgames: '',
        amount: ''
    }]);
    const [zerolist, setZeroList] = useState([{
        startdate: '',
        content: '',
        ballgames: '',
        number: ''
    }]);
    const userid = Cookies.get('id');
    // 留言數
    const [countsub, setcountsublist] = useState([]);
    const [countzero, setcountcountzero] = useState([]);
    // tr取資料操作
    const [showsub, setsubShow] = useState('none');
    const [showzero, setzeroShow] = useState('none');
    let findArticle = () => {
        setcountcountzero([])
        setcountsublist([])
        Axios.post("http://localhost:3001/findzoro", {
            stratDate: stratDate,
            endDate: endDate,
            userid: userid
        }).then((response) => {
            console.log(response.data);
            setZeroList(response.data);
            for (let i = 0; i < response.data.length; i++) {
                Axios.post("http://localhost:3001/countzero", {
                    articleid: response.data[i].articleid_zeroda
                }).then((response) => {
                    console.log(response.data[i]);
                    let count = response.data[i].a
                    setcountcountzero(pre => { return [...pre, count] })
                }).catch((err)=>{
                    let count = 0
                    setcountcountzero(pre => { return [...pre, count] })
                })
            }
            if (response.data[0].startdate && chuseZ === true) {
                setzeroShow('table-row')
            }else{
                setzeroShow('none')
            }
        });
        Axios.post("http://localhost:3001/findsub", {
            stratDate: stratDate,
            endDate: endDate,
            userid: userid
        }).then((response) => {
            console.log(response.data);
            setSubList(response.data);
            // 取得每筆留言數包成陣列
            for (let i = 0; i < response.data.length; i++) {
                Axios.post("http://localhost:3001/countsub", {
                    articleid: response.data[i].articleid_sublet
                }).then((response) => {
                    console.log(response.data[i].a);
                    let count = response.data[i].a
                    setcountsublist(pre => { return [...pre, count] })
                }).catch((err) => {
                    let count = 0
                    setcountsublist(pre => { return [...pre, count] })
                })
            }
            if (response.data[0].startdate && chuseS === true) {
                setsubShow('table-row')
            }else{
                setsubShow('none')
            }
        });
    }
    // 刪除
    const deleZero = (trdata) => {
        Axios.post("http://localhost:3001/insertdelezeroda", {
            articleid_zeroda: trdata.articleid_zeroda
        }).then((response) => {
            console.log(response.data);
            Axios.post("http://localhost:3001/delezeroda", {
                articleid_zeroda: trdata.articleid_zeroda
            }).then((response) => {
                console.log(response.data);
                find.current.click();
            });
        });
    }
    const deleSublet = (trdata) => {
        Axios.post("http://localhost:3001/insertdelesublet", {
            articleid_sublet: trdata.articleid_sublet
        }).then((response) => {
            console.log(response.data);
            Axios.post("http://localhost:3001/delesublet", {
                articleid_sublet: trdata.articleid_sublet
            }).then((response) => {
                console.log(response.data);
                find.current.click();
            });
        });
    }
    // 讓substring不失效
    const getStartDate = (time) => {
        if (time !== undefined)
            return time.substring(0, 10)
    }
    //過濾搜尋
    const [chuseS,setChuseS]=useState(true);
    const [chuseZ,setChuseZ]=useState(true);

    return (
        <React.Fragment>
            <div>
                文章類別選擇：
                <input type="checkbox" id='chfinds' style={{opacity:"0"}} checked={chuseS} onChange={()=>{setChuseS(!chuseS)}}/>
                <label htmlFor="chfinds" className={chuseS?'chfind article_chusefind':'notchfind article_chusefind'}>轉租</label>
                <input type="checkbox" id='chfindz' style={{opacity:"0"}} checked={chuseZ} onChange={()=>{setChuseZ(!chuseZ)}}/>
                <label htmlFor="chfindz" className={chuseZ?'chfind article_chusefind':'notchfind article_chusefind'}>零打</label>
                <br/>
                活動日期區間：&nbsp;&nbsp;&nbsp;  
                {/* <br /> */}
                <input type="date" onChange={(e) => { setStartDate(e.target.value) }} /><img className="selectedDate selectedfromart" src={arrowup} alt='' />至&emsp;&thinsp;
                <input type="date" onChange={(e) => { setEndtDate(e.target.value) }} /><img className="selectedDate selectedfromart" src={arrowup} alt='' />
                <span onClick={findArticle} ref={find} className="active_articlefind">搜尋</span>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>活動日期</td>
                        <td>類別</td>
                        <td>標題</td>
                        <td style={{ textAlign: "center" }}>需求人數</td>
                        <td style={{ textAlign: "center" }}>留言數</td>
                        <td></td>
                    </tr>
                    {zerolist.map((item, index) => {
                        return (
                            <tr key={index} style={{ display: showzero , cursor: "default"}}>
                                <td>{getStartDate(item.startdate)}</td>
                                <td>零打</td>
                                <td className='articlecontent' >{item.content}</td>
                                <td className='articlefollow' ref={follow} onClick={() => { control(item) }}>{item.number}</td>
                                <td style={{ textAlign: "center" }}>{countzero[index]}</td>
                                <td style={{ position: "relative" }}>
                                    <button onClick={() => { editZeroda(item) }}>編輯</button>
                                    <button onClick={() => { deleZero(item) }}>刪除</button>
                                </td>
                            </tr>
                        )
                    })}
                    {/* .substring(0, 10) */}
                    {sublist.map((item, index) => {
                        return (
                            <tr style={{ display: showsub ,cursor: "default"}}>
                                <td>{getStartDate(item.startdate)}</td>
                                {/* <td>{item.startdate}</td> */}
                                <td>轉租</td>
                                <td className='articlecontent'>{item.content}</td>
                                <td style={{ textAlign: "center" }}>{item.amount}</td>
                                <td style={{ textAlign: "center" }}>{countsub[index]}</td>
                                <td style={{ position: "relative" }}>
                                    <button onClick={() => { editSublet(item) }}>編輯</button>
                                    <button onClick={() => { deleSublet(item) }}>刪除</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>



        </React.Fragment>
    );
}

export default Artadd;