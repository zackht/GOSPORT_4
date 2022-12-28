import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Testt from './side/testt';
import backqa from './back/backqa';
import Backarticle from './back/backarticle';
import rentside_more from './side/rentsid_more';
import Backteam from './back/backarticleteam';

import Basic from './teams/basic.jsx';

// import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          {/* <Navigation /> */}
            <Switch>
             <Route path="/Backarticle" component={Backarticle}/>
             <Route path="/testt" component={Testt}/>
             <Route path="/backqa" component={backqa}/>
             <Route path="/rentside_more" component={rentside_more}/>
             <Route path="/Backteam" component={Backteam}/>
             
             <Route path="/teams/basic" component={Basic}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
