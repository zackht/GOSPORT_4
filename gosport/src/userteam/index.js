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
import Pay from          './component/pay';
import PayEdit from      './component/payEdit';
import Activity from     './component/activity';
import ActivityEdit from './component/activityEdit';

export default function Myteam (){

    // 抓網址id = 文章id
    const {id} = useParams();

    // 最新的文章id
    const [articleid,setArticleid]=useState(null);

    // SQL參數
    const [userid, setUserid] = useState( Cookies.get('id') ); // 登入者id
    const [teamid, setTeamid] = useState( id );                // 球隊id

    // 球隊列表
    const [filterList, setFilterList] = useState([
        {filterName:'介紹', pathEnd:'basic'},
        {filterName:'成員', pathEnd:'member'},
        {filterName:'基金', pathEnd:`fund`},
        {filterName:'支出', pathEnd:'pay'},
        {filterName:'活動', pathEnd:'activity'}
    ]);

    // 依網址判斷 css
    const handleFilterCss = (e)=>{
        const ePathend = e.pathEnd.split('/');
        return ePathend[0]===splitLocaPath[5]? index.mFilteractive:index.mFilter;
    };

    // 目前網址
    const [pathend, setPathEnd] = useState('');

    // 文章類型 依網址判斷
    const location = useLocation();
    const splitLocaPath = location.pathname.split('/');
    useEffect(()=>{
        if(splitLocaPath[5]==='fund'){
            setPathEnd('fund');
        }else if(splitLocaPath[5]==='pay'){
            setPathEnd('pay');
        }else if(splitLocaPath[5]==='activity'){
            setPathEnd('activity');
        };
    },[])

    // 畫面載入 設定最新的文章id
    useEffect(()=>{

        // 基金
        if(pathend==='fund'){
            Axios.post('http://localhost:3001/teamfundall',{
                teamid:teamid
            }).then((response)=>{
                console.log(response.data[0].articleid);
                setArticleid(response.data[0].articleid);
            });

        // 支出
        }else if(pathend==='pay'){
            Axios.post('http://localhost:3001/teampayall',{
                teamid:teamid
            }).then((response)=>{
                setArticleid(response.data[0].articleid);
            });

        // 活動
        }else if(pathend==='activity'){
            Axios.post('http://localhost:3001/teamactivityall',{
                teamid:teamid
            }).then((response)=>{
                setArticleid(response.data[0].articleid);
            });
        };

    },[]);

    // pathend改變時 設定最新的文章id
    useEffect(()=>{

        // 基金
        if(pathend==='fund'){
            Axios.post('http://localhost:3001/teamfundall',{
                teamid:teamid
            }).then((response)=>{
                setArticleid(response.data[0].articleid);
            });

        // 支出
        }else if(pathend==='pay'){
            Axios.post('http://localhost:3001/teampayall',{
                teamid:teamid
            }).then((response)=>{
                setArticleid(response.data[0].articleid);
            });

        // 活動
        }else if(pathend==='activity'){
            Axios.post('http://localhost:3001/teamactivityall',{
                teamid:teamid
            }).then((response)=>{
                setArticleid(response.data[0].articleid);
            });
        };

    },[pathend]);

    // map 球隊功能列表
    const filterListMap = filterList.map((e)=>{
        if(e.pathEnd==='basic'||e.pathEnd==='member'){
            return (
                <Link to={`/gosport/user/myteam/${id}/${e.pathEnd}`}
                        key = {id} 
                        className = {handleFilterCss(e)}>
                    {e.filterName}
                </Link>
            )
        }else{
            return (
                <Link to={`/gosport/user/myteam/${id}/${e.pathEnd}/${articleid}`}
                        key = {id} 
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

                            <Route path="/gosport/user/myteam/:id/fund/new"             component={FundEdit} exact/>
                            <Route path="/gosport/user/myteam/:id/fund/:articleid/edit" component={FundEdit} exact/>
                            <Route path="/gosport/user/myteam/:id/fund/:articleid"      component={Fund} />
                            <Route path="/gosport/user/myteam/:id/fund"                 component={Fund} exact/>

                            <Route path="/gosport/user/myteam/:id/pay/new"              component={PayEdit} exact/>
                            <Route path="/gosport/user/myteam/:id/pay/edit"             component={PayEdit} exact/>
                            <Route path="/gosport/user/myteam/:id/pay/:articleid"       component={Pay} />
                            <Route path="/gosport/user/myteam/:id/pay"                  component={Pay} exact/>

                            <Route path="/gosport/user/myteam/:id/activity/new"         component={ActivityEdit} exact/>
                            <Route path="/gosport/user/myteam/:id/activity/edit"        component={ActivityEdit} exact/>
                            <Route path="/gosport/user/myteam/:id/activity/:articleid"  component={Activity} exact/>
                            <Route path="/gosport/user/myteam/:id/activity"             component={Activity} exact/>
                        </Switch>
                </div>
            </div>
        </React.Fragment>
    );
};
 
