import React, { useState } from 'react';
import side2 from './rentside_more.module.css';
const Sidecheck = () => {
    return (
        <React.Fragment>
                <div className={`${side2.div56check} d-flex flex-column`}>
                    <div className={side2.div56span}>訂單詳情</div>
                    <div className={side2.div56line}></div>
                    <div className={side2.div60}>
                        <span className={side2.div57}>場地</span>
                        <div className={side2.div58}>大都會永春館</div>
                    </div>
                    <div className={side2.div60}>
                        <span className={side2.div57}>日/長租</span>
                        <div className={side2.div58}>日租</div>
                    </div>
                    <div className={side2.div60}>
                        <span className={side2.div57}>日期</span>
                        <div className={side2.div58}>2023-02-11</div>
                    </div>
                    <div className={side2.div60}>
                        <span className={side2.div57}>時段</span>
                        <div className={side2.div58}>14:00~15:00</div>
                    </div>
                    <div className={side2.div60}>
                        <span className={side2.div57}>數量</span>
                        <div className={side2.div58}>1</div>
                    </div>
                    <div className={side2.div60}>
                        <span className={side2.div57}>費用</span>
                        <div className={side2.div58}>360</div>
                    </div>
                </div>
        </React.Fragment>
    );
}

export default Sidecheck;