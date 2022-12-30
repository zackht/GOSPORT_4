import React, { Component } from 'react';
import arrowup from './icon/arrowup2.svg'
class Artdel extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div>
                    日期區間<br />
                    <input type="date" /><img className="selectedDate" src={arrowup} alt="" />至&emsp;&thinsp;
                    <input type="date" /><img className="selectedDate" src={arrowup} alt="" />
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
                            <td style={{ textAlign: "center" }}>0</td>
                            <td style={{ textAlign: "center" }}>7</td>
                            <td>
                                <button>復原</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Artdel;