import React, { useState } from 'react';
import { Link, Route, Switch, useLocation, useParams } from "react-router-dom";
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

    // 抓網址id = 文章id
    const {id} = useParams();
    // console.log(id);

    // 球隊列表
    const [filterList, setFilterList] = useState([
        {filterName:'介紹', pathEnd:'basic'},
        {filterName:'成員', pathEnd:'member'},
        {filterName:'基金', pathEnd:`fund`},
        {filterName:'支出', pathEnd:'pay'},
        {filterName:'活動', pathEnd:'activity'}
    ]);

    // 抓 當前網址
    const location = useLocation();
    const splitLocaPath = location.pathname.split('/');



    // 依網址判斷 css
    const handleFilterCss = (e)=>{
        const ePathend = e.pathEnd.split('/');
        // if(splitLocaPath[4]===''){ 
        //     return ePathend[0]==='basic'? index.mFilteractive:index.mFilter;
        // }else{
            return ePathend[0]===splitLocaPath[5]? index.mFilteractive:index.mFilter;
        // };
    };

    // map 球隊功能列表
    const filterListMap = filterList.map((e)=>{
        // console.log(e);
        return (
            <Link to={`/gosport/user/myteam/${id}/${e.pathEnd}`}
                    key = {id} 
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
                        {/* 球隊列表 */}
                        {filterListMap}
                    </div>
                        {/* 選擇列表 切換元件 */}
                        <Switch>
                            {/* 新建球隊 */}
                            <Route path="/gosport/user/myteam/basic/edit"               component={BasicEdit} exact/>
                            {/* 有球隊 */}
                            <Route path='/gosport/user/myteam/:id/basic'                component={Basic} exact/>
                            <Route path="/gosport/user/myteam/:id/basic/edit"           component={BasicEdit} exact/>
                            <Route path="/gosport/user/myteam/:id/member"               component={Member} exact/>
                            <Route path="/gosport/user/myteam/:id/member/edit"          component={MemberEdit} exact/>
                            <Route path="/gosport/user/myteam/:id/fund/:articleid/edit" component={FundEdit} exact/>
                            <Route path="/gosport/user/myteam/:id/fund"                 component={Fund} exact/>
                            <Route path="/gosport/user/myteam/:id/fund/:articleid"      component={Fund} />
                            <Route path="/gosport/user/myteam/:id/pay/edit"             component={PayEdit} exact/>
                            <Route path="/gosport/user/myteam/:id/pay"                  component={Pay} exact/>
                            <Route path="/gosport/user/myteam/:id/pay/:articleid"       component={Pay} />
                            <Route path="/gosport/user/myteam/:id/activity/edit"        component={ActivityEdit} exact/>
                            <Route path="/gosport/user/myteam/:id/activity"             component={Activity} exact/>
                            <Route path="/gosport/user/myteam/:id/activity/:articleid"  component={Activity} exact/>
                        </Switch>
                </div>
            </div>
        </React.Fragment>
    );
};
 
