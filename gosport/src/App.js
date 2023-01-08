import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from './communicate/search';
import Create from './communicate/createzero';
import CreateRent from './communicate/createrent';
import TeamInfo from './communicate/teaminfo';

import Header1 from "./handya/headerfooter/header";

import Header from "./headerfooter/header.js";
import Footer from "./headerfooter/footer.js";
import Handya from "./handya/handya";
import Testt from "./side/testt";
import backqa from "./back/backqa";
// import Backarticle from "./back/backarticle";
import rentside_more from "./side/rentside_more";
import rentside from "./side/rentside";
// import Backteam from "./back/backarticleteam";
import Selfactive from "./selfactive/selfactive";
import Selfalter from "./selfalter/selfalter";
import Selfpage from "./selfpage/selfpage";
import Myteam from "./userteam/index.js";
import Backuser from './back/backuser';
import backside from './back/backside';
import createside from './back/createside';
import Client from './client/req';
import Backarticle from './back/backarticle2';
import Serchdi from "./handya/serchdi.jsx";
import Applayout from './logintry/Applayout'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header1 />
          <Switch>

            {/* 首頁 */}
            <Route path="/gosport" 			     component={Handya} exact />

            {/* 租場地 */}
            {/* <Route path="/gosport/rent" 	   component={} exact/> */}
            <Route path="/gosport/rent/side/b" component={rentside_more} />
            <Route path="/gosport/rent/side" component={rentside} />

            {/* 交流區 */}
            <Route path="/gosport/communicate/search" 	  component={Search} exact/>
            {/* <Route path="/gosport/communicate/search/:id" component={} /> */}
            <Route path="/gosport/communicate/create" 	  component={Create} />
            <Route path="/gosport/communicate/createrent" 	  component={CreateRent} />
            <Route path="/gosport/communicate/teaminfo" 	  component={TeamInfo} />

            {/* 會員  */}
            <Route path="/gosport/user" 		     component={Selfpage} exact />
            <Route path="/gosport/user/settings" component={Selfalter} />
            <Route path="/gosport/user/activity" component={Selfactive} />

            {/* 球隊 */}
            <Route path="/gosport/user/myteam/"  component={Myteam} />

            {/* QA */}
            {/* <Route path="/gosport/qa" component={} /> */}

			      {/* 後台區---------------------------------------------------------- */}

            {/* 會員 */}
            <Route path="/Back/user" component={Backuser} />

            {/* 場地 */}
            <Route path="/Back/side" component={backside} />

            {/* 文章 */}
            <Route path="/Back/article" component={Backarticle} />

            {/* QA */}
            <Route path="/Back/qa" component={backqa} />

			      {/* 測試區---------------------------------------------------------- */}
            <Route path="/createside" component={createside} />
            <Route path="/Client"     component={Client} />
            <Route path="/testt"      component={Testt} />
            <Route path="/testt1"      component={Serchdi} />
            <Route path="/applayout"      component={Applayout} />

            <Route path="/testt" component={Testt} />
            <Route path="/backqa" component={backqa} />
            <Route path="/rentside_more" component={rentside_more} />
            
            <Route path="/selfactive" component={Selfactive} />
            <Route path="/selfalter" component={Selfalter} />
            <Route path="/selfpage" component={Selfpage} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
