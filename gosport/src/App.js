import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 

import backqa from './back/backqa';
import Backarticle from './back/backarticle';
import Teams from './teams/basic.js';
import NavFoot from './navfoot/navfoot.js';
// import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          {/* <Navigation /> */}
            <Switch>
            <Route path="/Backarticle" component={Backarticle}/>
             
            <Route path="/teams/basic" component={Teams}/>
            <Route path="/navfoot" component={NavFoot}/>
            
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
