import React from 'react';
import { Link } from 'react-router-dom';
import member from './member.module.css';
import img from '../img.module.js';

export default function Member(params) {
    return(
        <>
            {/* 成員 */}
            <div className={member.memberContent}>
                <div>
                    <Link to={"/gosport/user/myteam/member/edit"} className={member.mbtn}>編輯</Link>
                    <div className={member.mTitle}>隊長</div>
                    <img className={member.mImg} src={img.m1} alt=""/>
                    <div className={member.mTitle}>成員</div>
                    <img className={member.mImg} src={img.m2} alt=""/>
                    <img className={member.mImg} src={img.m3} alt=""/>
                    <img className={member.mImg} src={img.m4} alt=""/>
                    <img className={member.mImg} src={img.m5} alt=""/>
                    <img className={member.mImg} src={img.m6} alt=""/>
                    <div className={member.mTitle}>未審核</div>
                </div>
                {/* 未審核成員 */}
                <div className={member.checkMember}>
                    <img className={member.mImg} src={img.m7} alt=""/>
                    <div>七期許效舜</div>
                    <div>程度</div>
                    <div>高手</div>
                    <div className={member.badge}>
                        <img src={img.star} alt=""/>
                        <img src={img.star} alt=""/>
                        <img src={img.star} alt=""/>
                    </div>
                    <div className={member.checkbtn}>
                        <button>拒絕</button>
                        <button>接受</button>
                    </div>
                </div>
                <div className={member.checkMember}>
                    <img className={member.mImg}  src={img.m8} alt=""/>
                    <div>資策會羅志祥</div>
                    <div>程度</div>
                    <div>新人</div>
                    <div className={member.badge}>
                        <img src={img.star} alt=""/>
                        <img src={img.star} alt=""/>
                        <img src={img.star} alt=""/>
                    </div>
                    <div className={member.checkbtn}>
                        <button>拒絕</button>
                        <button>接受</button>
                    </div>
                </div>
                
            </div>
        </>
    )
};