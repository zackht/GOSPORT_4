import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import memberEdit from './memberEdit.module.css';
import img from '../img.module.js';

export default function MemberEdit(params) {
    return(
        <>
            <form action="" className={memberEdit.mForm}>
                <div className={memberEdit.mTitle}>隊長</div>

                <input type="radio" id="o1" name="teamL" value="o1"/>
                <label for="o1">
                    <img src={img.m1} alt=""/>
                </label>

                <input type="radio" id="o2" name="teamL" value="o2"/>
                <label for="o2">
                    <img src={img.m2} alt=""/>
                </label>

                <input type="radio" id="o3" name="teamL" value="o3"/>
                <label for="o3">
                    <img src={img.m3} alt=""/>
                </label>

                <div className={memberEdit.mTitle}>成員</div>

                <div className={memberEdit.checkMember}>
                    <img src={img.m1} alt=""/>
                    <div>豐原大哥</div>
                    <div>程度</div>
                    <div>普通</div>
                    <div className={memberEdit.badge}>
                        
                        <img src={img.star} alt=""/>
                        <img src={img.star} alt=""/>
                    </div>
                    <div className={memberEdit.checkbtn}>
                        <button>刪除</button>
                    </div>
                </div>
                <div className={memberEdit.checkMember}>
                    <img src={img.m2} alt=""/>
                    <div>南區金城武</div>
                    <div>程度</div>
                    <div>高手</div>
                    <div className={memberEdit.badge}>
                        <img src={img.star} alt=""/>
                        <img src={img.star} alt=""/>
                        <img src={img.star} alt=""/>
                    </div>
                    <div className={memberEdit.checkbtn}>
                        <button>刪除</button>
                    </div>
                </div>
                <div className={memberEdit.checkMember}>
                    <img src={img.m3} alt=""/>
                    <div>南區謝震武</div>
                    <div>程度</div>
                    <div>新手</div>
                    <div className={memberEdit.badge}>
                        <img src={img.star} alt=""/>
                        <img src={img.star} alt=""/>
                        <img src={img.star} alt=""/>
                    </div>
                    <div className={memberEdit.checkbtn}>
                        <button>刪除</button>
                    </div>
                </div>
                <div className={memberEdit.formbtn}>
                    <Link to={`/gosport/user/myteam/member`}>取消</Link>
                    <input type="submit" value="儲存" id="formSubmit"/>
                </div>

            </form>
        </>
    )
};
