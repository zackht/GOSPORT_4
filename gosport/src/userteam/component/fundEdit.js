import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fund from './fundEdit.module.css';
import img from '../img.module';

export default function fundEdit(params) {
    return(
        <>
            <form className={fund.fForm}>
                <div>日期</div>
                <input type="date" name="" id="" 
                    min="2022-01-01" max="2018-12-31"/>
                <div>儲值成員</div>
                <div>
                    <input type="radio" id="o1" name="member"/>
                    <label for="o1"><img src={img.m1}></img></label>
                    <input type="radio" id="o2" name="member"/>
                    <label for="o2"><img src={img.m2}></img></label>
                    <input type="radio" id="o3" name="member"/>
                    <label for="o3"><img src={img.m3}></img></label>
                </div>
                <div>金額</div>
                <input type="text"/>
                <div>描述</div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div>
                    <Link to={`/gosport/user/myteam/fund`}>取消</Link>
                    <input type="submit" value='儲存'/>
                </div>
            </form>
        </>
    )
};
