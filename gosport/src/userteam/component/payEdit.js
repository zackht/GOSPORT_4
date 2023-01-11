import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import payEdit from './payEdit.module.css';

export default function PayEdit(params) {
    return(
        <>
            <form className={payEdit.pForm}>
                <div>日期</div>
                <input type="date" name="" id="" 
                    min="2022-01-01" max="2018-12-31"/>
                <div>項目</div>
                <input type="text"/>
                <div>支出</div>
                <input type="text"/>
                <div>描述</div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div>
                    <Link to={`/gosport/user/myteam/pay`}>取消</Link>
                    <input type="submit" value='儲存'/>
                </div>
            </form>
            
        </>
    )
};
