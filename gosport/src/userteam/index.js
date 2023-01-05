import React, { useState } from 'react';
import { Link, Route, Switch, useLocation } from "react-router-dom";
import index from        './index.module.css';

import Basic from        './component/basic';
import BasicEdit from    './component/basicEdit';
import Member from       './component/member';
import MemberEdit from   './component/memberEdit';
import Fund from         './component/fund';
import FundEdit from     './component/fundEdit';
import Pay from          './component/pay';
import PayEdit from      './component/payEdit';
import Activity from     './component/activity';
import ActivityEdit from './component/activityEdit';

export default function Myteam (){

    // 分類bar 狀態
    const [filterList, setFilterList] = useState([
        {filterName:'基本資料', id:'1', pathEnd:'basic'},
        {filterName:'成員',    id:'2', pathEnd:'member'},
        {filterName:'基金',    id:'3', pathEnd:'fund'},
        {filterName:'支出',    id:'4', pathEnd:'pay'},
        {filterName:'活動',    id:'5', pathEnd:'activity'}
    ]);

    // 當前的網址尾巴 [ basic | basic | fund | pay | activity ] 
    const [activedFilterPE, setActivedFilterPE] = useState('basic');
    
    // 抓當前網址
    const location = useLocation();
    const splitLocaPath = location.pathname.split('/');

    // 控制 分類bar的Css
    const handleFilterCss = (e)=>{
        if(splitLocaPath[4]===''){
            return e.pathEnd==='basic'? index.mFilteractive:index.mFilter;
        }else{
            return e.pathEnd===splitLocaPath[4]? index.mFilteractive:index.mFilter;
        };
    };

    // map 分類bar
    const filterListMap = filterList.map((e,id)=>{
        return (
            <Link to={`/gosport/user/myteam/${e.pathEnd}`}
                    key = {id} 
                    onClick = {()=>{setActivedFilterPE(e.pathEnd)}}
                    className = {handleFilterCss(e)}>
                {e.filterName}
            </Link>
        )
    });

    return(
        <React.Fragment>
            <div className={index.main}>
                <div className={index.mContent}>
                    <div>
                        {/* 分類 bar */}
                        {filterListMap}
                    </div>
                        {/* 依據分類 切換內容 */}
                        <Switch>
                            <Route path="/gosport/user/myteam"               component={Basic} exact/>   
                            <Route path="/gosport/user/myteam/basic"         component={Basic} exact/>
                            <Route path="/gosport/user/myteam/basic/edit"    component={BasicEdit}/>
                            <Route path="/gosport/user/myteam/member"        component={Member} exact/>
                            <Route path="/gosport/user/myteam/member/edit"   component={MemberEdit} exact/>
                            <Route path="/gosport/user/myteam/fund"          component={Fund} exact/>
                            <Route path="/gosport/user/myteam/fund/edit"     component={FundEdit} exact/>
                            <Route path="/gosport/user/myteam/pay"           component={Pay} exact/>
                            <Route path="/gosport/user/myteam/pay/edit"      component={PayEdit} exact/>
                            <Route path="/gosport/user/myteam/activity"      component={Activity} exact/>
                            <Route path="/gosport/user/myteam/activity/edit" component={ActivityEdit} exact/>
                        </Switch>
                </div>
            </div>
        </React.Fragment>
    );
};
 
