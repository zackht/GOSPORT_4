import React, { Component,useRef } from 'react';
import { Link } from 'react-router-dom';
import activityEdit from './activityEdit.module.css';
import img from '../img.module';

export default function ActivityEdit(params) {
    // 上傳照片
    const inputFile = useRef();
    const upLoadImg=()=>{
        inputFile.current.click();
    }
    return(
        <>
            <form action="" className={activityEdit.aForm}>
                <div onClick={upLoadImg}>
                    <input type='file' ref={inputFile}></input>
                </div>
                <div>日期</div>
                <input type="date" name="" id="" 
                    min="2022-12-01" max="2023-01-31"/>
                <div>時段</div>
                <select name="" id="">
                    <option value="9">09:00</option>
                    <option value="10">10:00</option>
                    <option value="11">11:00</option>
                    <option value="12">12:00</option>
                    <option value="13">13:00</option>
                    <option value="14">14:00</option>
                    <option value="15">15:00</option>
                    <option value="16">16:00</option>
                    <option value="17">17:00</option>
                    <option value="18">18:00</option>
                    <option value="19">19:00</option>
                    <option value="20">20:00</option>
                    <option value="21">21:00</option>
                </select>
                <div className={activityEdit.fTimeTo}>至</div>
                <select name="" id="">
                    <option value="9">09:00</option>
                    <option value="10">10:00</option>
                    <option value="11">11:00</option>
                    <option value="12">12:00</option>
                    <option value="13">13:00</option>
                    <option value="14">14:00</option>
                    <option value="15">15:00</option>
                    <option value="16">16:00</option>
                    <option value="17">17:00</option>
                    <option value="18">18:00</option>
                    <option value="19">19:00</option>
                    <option value="20">20:00</option>
                    <option value="21">21:00</option>
                </select>
                <div>類型</div>
                <select name="" id="">
                    <option value="">運動</option>
                    <option value="">聚餐</option>
                    <option value="">其他</option>
                </select>
                <div>標題</div>
                <input type="text"/>
                <div>地點</div>
                <input type="text"/>
                <div>支出</div>
                <input type="text"/>
                <div>儲值成員</div>
                <div>
                    <input type="radio" id="o1" />
                    <label for="o1"><img src={img.m1}></img></label>
                    <input type="radio" id="o2" />
                    <label for="o2"><img src={img.m2}></img></label>
                    <input type="radio" id="o3" />
                    <label for="o3"><img src={img.m3}></img></label>
                </div>
                
                <div>描述</div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div>
                    <Link to={`/gosport/user/myteam/activity`}>取消</Link>
                    <input type="submit" value='儲存'/>
                </div>
            </form>
        </>
    )
};
