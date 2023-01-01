import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Handya from './handya/handya';

import Testt from './side/testt';
import backqa from './back/backqa';
import rentside_more from './side/rentsid_more';
import Backteam from './back/backarticleteam';
import Backuser from './back/backuser';
import backside from './back/backside';
import createside from './back/createside';
import Client from './client/req';
import backarticle2 from './back/backarticle2';

import Selfactive from './selfactive/selfactive';
import Selfalter from './selfalter/selfalter';
import Selfpage from './selfpage/selfpage';

import Basic from './teams/basic.jsx';

// import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/testt" component={Testt} />
            <Route path="/backqa" component={backqa} />
            <Route path="/rentside_more" component={rentside_more} />
            <Route path="/Backteam" component={Backteam} />
            <Route path="/Backuser" component={Backuser} />
            <Route path="/backside" component={backside} />
            <Route path="/createside" component={createside} />
            <Route path="/Client" component={Client} />
            <Route path="/backarticle2" component={backarticle2} />

            <Route path="/handya" component={Handya} />

            <Route path="/teams/basic" component={Basic} />
            
            <Route path="/selfactive" component={Selfactive} />
            <Route path="/selfalter" component={Selfalter} />
            <Route path="/selfpage" component={Selfpage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
