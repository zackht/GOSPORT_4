import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 

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
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
