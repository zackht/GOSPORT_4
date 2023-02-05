import React, { useState,useEffect } from 'react';
import { Link, Route, Switch, useLocation, useParams } from "react-router-dom";
import index from        './index.module.css';
import Axios from 'axios';
import Cookies from 'js-cookie';
import Basic from        './component/basic';
import BasicEdit from    './component/basicEdit';
import Member from       './component/member';
import MemberEdit from   './component/memberEdit';
import Fund from         './component/fund';
import FundEdit from     './component/fundEdit';
import FundNew from     './component/fundnew';
import Pay from          './component/pay';
import PayEdit from      './component/payEdit';
import PayNew from      './component/paynew';
import Activity from     './component/activity';
import ActivityNew from './component/activitynew';
import ActivityEdit from './component/activityEdit';

export default function Myteam (){

    const location = useLocation();
    // 網址
    const LocationPath = location.pathname; 
    const splitLocaPath = location.pathname.split('/');

    // 球隊id 動態路由抓取
    const {id} = useParams();

    // 最新文章id
    const [fundId,setFundId]=useState(null);
    const [payId,setPayId]=useState(null);
    const [activityId,setActivityId]=useState(null);

    // 登入者id
    const [userid, setUserid] = useState( Cookies.get('id') ); 
    // 球隊id
    const [teamid, setTeamid] = useState( id );                

    // 球隊系統
    const [filterList, setFilterList] = useState([
        {filterName:'介紹', pathEnd:'basic'},
        {filterName:'成員', pathEnd:'member'},
        {filterName:'基金', pathEnd:`fund`},
        {filterName:'支出', pathEnd:'pay'},
        {filterName:'活動', pathEnd:'activity'}
    ]);

    // 畫面載入 設定最新文章id
    useEffect(()=>{

        Axios.post('http://localhost:3001/teamfundall',{
            teamid:teamid
        }).then((response)=>{
            // console.log(`fund${response.data[0].articleid}`)
            setFundId(response.data[0].articleid);
        });

        Axios.post('http://localhost:3001/teampayall',{
            teamid:teamid
        }).then((response)=>{
            setPayId(response.data[0].articleid);
        });

        Axios.post('http://localhost:3001/teamactivityall',{
            teamid:teamid
        }).then((response)=>{ 
            setActivityId(response.data[0].articleid); 
        });
        
    },[]);

    // 網址改變時 設定最新文章id
    useEffect(()=>{

        Axios.post('http://localhost:3001/teamfundall',{
            teamid:teamid
        }).then((response)=>{
            setFundId(response.data[0].articleid);
        });

        Axios.post('http://localhost:3001/teampayall',{
            teamid:teamid
        }).then((response)=>{
            setPayId(response.data[0].articleid);
        });

        Axios.post('http://localhost:3001/teamactivityall',{
            teamid:teamid
        }).then((response)=>{
            setActivityId(response.data[0].articleid);
        });

    },[LocationPath]);

    // 網址判斷功能列表 決定css
    const handleFilterCss = (e)=>{
        // console.log(e.pathEnd);
        const ePathend = e.pathEnd.split('/');
        return ePathend[0]===splitLocaPath[5]? index.mFilteractive:index.mFilter;
    };

    // 球隊功能列表
    const filterListMap = filterList.map((e)=>{

        if(e.pathEnd==='basic'||e.pathEnd==='member'){
            return (
                <Link to={`/gosport/user/myteam/${id}/${e.pathEnd}`}
                        key = {e.pathEnd} 
                        className = {handleFilterCss(e)}>
                    {e.filterName}
                </Link>
            )

        }else if(e.pathEnd==='fund'){
            return (
                <Link to={`/gosport/user/myteam/${id}/${e.pathEnd}/${fundId}`}
                        key = {e.pathEnd} 
                        className = {handleFilterCss(e)}>
                    {e.filterName}
                </Link>
            )

        }else if(e.pathEnd==='pay'){
            return (
                <Link to={`/gosport/user/myteam/${id}/${e.pathEnd}/${payId}`}
                        key = {e.pathEnd} 
                        className = {handleFilterCss(e)}>
                    {e.filterName}
                </Link>
            )

        }else if(e.pathEnd==='activity'){
            return (
                <Link to={`/gosport/user/myteam/${id}/${e.pathEnd}/${activityId}`}
                        key = {e.pathEnd} 
                        className = {handleFilterCss(e)}>
                    {e.filterName}
                </Link>
            )
        }
        
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
                            <Route path="/gosport/user/myteam/basic/new"                component={BasicEdit} exact/>
                            {/* 有球隊 */}
                            <Route path='/gosport/user/myteam/:id/basic'                component={Basic} exact/>
                            <Route path="/gosport/user/myteam/:id/basic/edit"           component={BasicEdit} exact/>

                            <Route path="/gosport/user/myteam/:id/member"               component={Member} exact/>
                            <Route path="/gosport/user/myteam/:id/member/edit"          component={MemberEdit} exact/>

                            <Route path="/gosport/user/myteam/:id/fund/new"             component={FundNew} exact/>
                            <Route path="/gosport/user/myteam/:id/fund/:articleid/edit" component={FundEdit} exact/>
                            <Route path="/gosport/user/myteam/:id/fund/:articleid"      component={Fund} exact/>
                            <Route path="/gosport/user/myteam/:id/fund"                 component={Fund} exact/>

                            <Route path="/gosport/user/myteam/:id/pay/new"              component={PayNew} exact/>
                            <Route path="/gosport/user/myteam/:id/pay/edit"             component={PayEdit} exact/>
                            <Route path="/gosport/user/myteam/:id/pay/:articleid"       component={Pay} exact/>
                            <Route path="/gosport/user/myteam/:id/pay"                  component={Pay} exact/>

                            <Route path="/gosport/user/myteam/:id/activity/new"         component={ActivityNew} exact/>
                            <Route path="/gosport/user/myteam/:id/activity/edit"        component={ActivityEdit} exact/>
                            <Route path="/gosport/user/myteam/:id/activity/:articleid"  component={Activity} exact/>
                            <Route path="/gosport/user/myteam/:id/activity"             component={Activity} exact/>
                        </Switch>
                </div>
            </div>
        </React.Fragment>
    );
};
 
