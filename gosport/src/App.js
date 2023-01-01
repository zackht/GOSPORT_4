import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./headerfooter/header.js";
import Footer from "./headerfooter/footer.js";
import Handya from "./handya/handya";
import Testt from "./side/testt";
import backqa from "./back/backqa";
import Backarticle from "./back/backarticle";
import rentside_more from "./side/rentsid_more";
import Backteam from "./back/backarticleteam";
import Selfactive from "./selfactive/selfactive";
import Selfalter from "./selfalter/selfalter";
import Selfpage from "./selfpage/selfpage";
import Myteam from "./userteam/userteam.js";
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Handya from './handya/handya';
import Backuser from './back/backuser';
import backside from './back/backside';
import createside from './back/createside';
import Client from './client/req';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>

            {/* 首頁 */}
            <Route path="/gosport" 			 component={Handya} exact />

            {/* 租場地 */}
            {/* <Route path="/gosport/rent" 	 component={} exact/> */}
            <Route path="/gosport/rent/side" component={rentside_more} />

            {/* 交流區 */}
            {/* <Route path="/gosport/communicate/search" 	  component={} exact/> */}
            {/* <Route path="/gosport/communicate/search/:id" component={} /> */}
            {/* <Route path="/gosport/communicate/create" 	  component={} /> */}

            {/* 會員  */}
            <Route path="/gosport/user" 		 component={Selfpage} exact />
            <Route path="/gosport/user/settings" component={Selfalter} />
            <Route path="/gosport/user/activity" component={Selfactive} />

            {/* 球隊 */}
            <Route path="/gosport/user/myteam" 	 	  component={Myteam} exact />
            {/* <Route path="/gosport/user/myteam/detail" component={} /> */}

            {/* QA */}
            {/* <Route path="/gosport/qa" component={} /> */}

			      {/* 後台區---------------------------------------------------------- */}

            {/* 會員 */}
            <Route path="/Back/user" component={Backuser} />

            {/* 場地 */}
            <Route path="/Back/side" component={backside} />

            {/* 文章 */}
            <Route path="/Back/article" 	component={Backarticle} />
            <Route path="/Back/article/:id" component={Backteam} />

            {/* QA */}
            <Route path="/Back/qa" component={backqa} />

			      {/* 測試區---------------------------------------------------------- */}
            <Route path="/createside" component={createside} />
            <Route path="/Client" component={Client} />
            <Route path="/testt" component={Testt} />

			      {/* 以下舊版 供對照--------------------------------------------------- */}
            {/* <Route path="/handya" component={Handya} /> */}
            {/* <Route path="/Backarticle" component={Backarticle} /> */}
            {/* <Route path="/backqa" component={backqa} /> */}
            {/* <Route path="/rentside_more" component={rentside_more} /> */}
            {/* <Route path="/Backteam" component={Backteam} /> */}
            {/* <Route path="/selfactive" component={Selfactive} /> */}
            {/* <Route path="/selfalter" component={Selfalter} /> */}
            {/* <Route path="/selfpage" component={Selfpage} /> */}
            {/* <Route path="/Backuser" component={Backuser} /> */}
            {/* <Route path="/backside" component={backside} /> */}

          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
