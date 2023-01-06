import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Testt from './side/testt';
import backqa from './back/backqa';
import Backarticle from './back/backarticle';
import Basic from './teams/basic.jsx';
import rentside_more from './side/rentsid_more';
import Selfactive from './selfactive/selfactive';
import Selfalter from './selfalter/selfalter';
import Selfpage from './selfpage/selfpage';
import Search from './communicate/search';
import Create from './communicate/createzero';
import CreateRent from './communicate/createrent';
import TeamInfo from './communicate/teaminfo';


// import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Navigation /> */}
          <Switch>
            <Route path="/Backarticle" component={Backarticle} />

            <Route path="/teams/basic" component={Basic} />

            <Route path="/testt" component={Testt} />
            <Route path="/backqa" component={backqa} />
            <Route path="/rentside_more" component={rentside_more} />
            
            <Route path="/selfactive" component={Selfactive} />
            <Route path="/selfalter" component={Selfalter} />
            <Route path="/selfpage" component={Selfpage} />

            <Route path="/search" component={Search} />
            <Route path="/create" component={Create} />
            <Route path="/createrent" component={CreateRent} />
            <Route path="/teaminfo" component={TeamInfo} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
