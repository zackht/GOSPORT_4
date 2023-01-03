// import React, { Component } from 'react';
import React from 'react';
import arrowup from '../icon/arrowup2.svg'
// import star from '../icon/star1.svg'
// import pic from '../icon/20130917_171106.jpg'
const Artadd = ({controlModal})=>{
    return (
        <React.Fragment>
            <div>
                日期區間<br />
                <input type="date" /><img className="selectedDate" src={arrowup} alt='' />至&emsp;&thinsp;
                <input type="date" /><img className="selectedDate" src={arrowup} alt='' />
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>新增日期</td>
                        <td>類別</td>
                        <td>標題</td>
                        <td>報名/承租</td>
                        <td>留言數</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2022/12/21</td>
                        <td>羽球</td>
                        <td>一個內斂又大膽的標題</td>
                        <td style={{ textAlign: "center", cursor: "pointer" }} onClick={controlModal}>66</td>
                        <td style={{ textAlign: "center" }}>88</td>
                        <td style={{ position: "relative" }}>
                            <button>編輯</button>
                            <button>刪除</button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </React.Fragment>
    );
}
// class Artadd extends Component {
//     state = {
//     }

//     render() {
//         const {controlModal}=this.props
//         return (
//             <React.Fragment>
//                 <div>
//                     日期區間<br />
//                     <input type="date" /><img className="selectedDate" src={arrowup} alt='' />至&emsp;&thinsp;
//                     <input type="date" /><img className="selectedDate" src={arrowup} alt='' />
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
//                             <td style={{ textAlign: "center", cursor: "pointer" }} onClick={controlModal}>66</td>
//                             <td style={{ textAlign: "center" }}>88</td>
//                             <td style={{ position: "relative" }}>
//                                 <button>編輯</button>
//                                 <button>刪除</button>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>

//             </React.Fragment>
//         );
//     }
// }

export default Artadd;