import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"
import './App.css';
import Main from './MainPage/Main'
import Catalog from './CatalogPage/Catalog';

class App extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div className="App">
        <Switch>
          <Route history={history} path='/catalog' component={Catalog} />
          <Route history={history} path='/home' component={Main} />
          <Redirect from='/' to='/home' />
        </Switch>
      </div>
    )
  }
}

export default App;
