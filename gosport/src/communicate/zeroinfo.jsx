import React from "react";
import zzz from './zeroinfo.module.css'
import star from './icon/star.svg';
import leader from './icon/Ellipse.svg';

const Zeroinfo = ({datazero}) => {
    console.log(datazero);
    return (
        <React.Fragment>
            {/* 零打內容 */}
            <div className={zzz.zeroinfocontent}>
                <div className={zzz.zerocontent}>
                    <div className={zzz.joinbutton}>
                        <button className={zzz.jjoinbutton}>參加</button>
                    </div>
                    <div className={zzz.zerouser}>
                        <h3>{datazero.username}</h3>
                    </div>
                    <div className={zzz.fieldname}>
                        <label htmlFor="place" className={zzz.title}>場館</label><br />
                        <input type="text" name="place" value={datazero.fieldname} className={zzz.iiinput} />
                    </div>
                    <div className={zzz.address}>
                        <label htmlFor="addresss" className={zzz.title}>地址</label><br />
                        <input type="text" name="addresss" value={datazero.address} className={zzz.iiinput} />
                    </div>
                    <div className={zzz.date}>
                        <label htmlFor="dateee" className={zzz.title}>日期</label><br />
                        <input type="text" name="dateee" value={datazero.startdate} className={zzz.iiinput} />
                    </div>
                    <div className={zzz.time}>
                        <label htmlFor="timeee" className={zzz.title}>時段</label><br />
                        {/* <input type="text" name="timeee" className={zzz.iiinput} /> */}
                        <span className={zzz.iiinput}>{datazero.starttime}:00-{datazero.endtime}:00</span>
                    </div>
                    <div className={zzz.levell}>
                        <label htmlFor="levelll" className={zzz.title}>程度</label><br />
                        <input type="text" name="levelll" value={datazero.level} className={zzz.iiinput} />
                    </div>
                    <div className={zzz.number}>
                        <label htmlFor="numberrr" className={zzz.title}>人數</label><br />
                        <input type="text" name="numberrr" value={datazero.number} className={zzz.iiinput} />
                    </div>
                    <div className={zzz.cost}>
                        <label htmlFor="costtt" className={zzz.title}>費用</label><br />
                        <input type="text" name="costtt" value={datazero.cost} className={zzz.iiinput} />
                    </div>
                    <div className={zzz.describe}>
                        <label htmlFor="describeee" className={zzz.title}>描述</label><br />
                        <input type="text" name="describeee" value={datazero.content} className={zzz.iiinput} />
                    </div>
                </div>
                <div className={zzz.message}>
                    <div className={zzz.msg}>
                        <div className={zzz.img}>
                            <img src={leader} alt="" /><br />
                            <img src={star} alt="" />
                        </div>
                        <div className={zzz.name}>
                            <h4>南區金城武</h4>
                            <input type="text" className={zzz.level} value="  程度" /><span>高手</span>
                        </div>
                        <div className={zzz.msgtext}>請問還有缺人嗎?</div>
                        <div className={zzz.msgtime}>2022/12/12 09:05</div>
                    </div>
                    <div className={zzz.mess}>
                        <div className={zzz.msgmsg}><h4>留言</h4></div>
                        <div className={zzz.msgmsgtext}>
                            <input type="text" className={zzz.msgmsgmsg} placeholder="哈囉 想請問..." />
                        </div>
                        <div className={zzz.submit}><input type="text" className={zzz.submitbutton} value="   送出" /></div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Zeroinfo;