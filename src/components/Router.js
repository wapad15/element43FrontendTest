import React, { Component } from 'react'
import { BrowserRouter ,  Route, Switch} from 'react-router-dom'
import Inicio from '../pages/inicio';


class Router extends Component {

  render() { 
    return ( 
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Inicio} />
        </Switch>
      </BrowserRouter>
     );
  }
}
 
export default Router;