import React from 'react';
import { Link } from "react-router-dom";
import basic from './basic.module.css';
import img from '../img.module.js';

export default function Basic(params) {
    return(
        <>
            <div className={basic.basic}>
            <Link to={`/gosport/user/myteam/basic/edit`}>編輯</Link>
            <div><img src={img.team} className={basic.mBimg} alt='團隊的照片'/></div>
            <div className={basic.mBigTitle}>鐵血軍團</div>
            <div className={basic.mTitle}>場館</div>
            <div className={basic.mText}>群月羽球館</div>
            <div className={basic.mTitle}>縣市</div>
            <div className={basic.mText}>台中市</div>
            <div className={basic.mTitle}>區域</div>
            <div className={basic.mText}>后里區</div>
            <div className={basic.mTitle}>週期</div>
            <div className={basic.mText}>星期三</div>
            <div className={basic.mTitle}>時段</div>
            <div className={basic.mText}>09:00-11:00</div>
            <div className={basic.mTitle}>程度</div>
            <div className={basic.mText}>新手</div>
            <div className={basic.mTitle}>零打費用</div>
            <div className={basic.mText}>300</div>
            <div className={basic.mTitle}>描述</div>
            <div className={basic.mText}>
                歡迎一起打球～<br />
                我們每個月固定繳三百元當作共同支出耗材費唷～～～<br />
                我們每個月固定繳三百元當作共同支出耗材費唷～～～<br />
                我們每個月固定繳三百元當作共同支出耗材費唷～～～</div>
            </div>
        </>
    )
};