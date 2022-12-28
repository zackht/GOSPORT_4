import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
 

import backqa from './back/backqa';
import Backarticle from './back/backarticle';
=======
import Basic from './teams/basic.jsx';
>>>>>>> 5805181 (2022.12.27 16:39 Basic完成)
// import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          {/* <Navigation /> */}
            <Switch>
<<<<<<< HEAD
             <Route path="/Backarticle" component={Backarticle}/>
=======
             
            <Route path="/teams/basic" component={Basic}/>
            
>>>>>>> 5805181 (2022.12.27 16:39 Basic完成)
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
