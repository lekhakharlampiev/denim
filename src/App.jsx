import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom"
import './App.css';
import Main from './MainPage/Main'
import Catalog from './CatalogPage/Catalog';
import Footer from './Footer/Footer';
import Card from './Card/Card';

class App extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div className="App">
        <Switch>
          <Route history={history} path='/catalog' component={Catalog} />
          <Route history={history} path='/home' component={Main} />
          <Route history={history} path='/card' component={Card} />
          <Redirect from='/' to='/home' />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
