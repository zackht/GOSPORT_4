import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Handya from './handya/handya';

import backqa from './back/backqa';
import Backarticle from './back/backarticle';
// import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          {/* <Navigation /> */}
            <Switch>
             <Route path="/Backarticle" component={Backarticle}/>
             <Route path="/handya" component={Handya}/>
             
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
