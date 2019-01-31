import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import store from './store'
import Header from './common/header'
import Home from './page/home'
import Detail from './page/detail'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header/>
        <BrowserRouter>
          <Switch>
            <Route path="/detail" component={Detail} />
            <Route path="/" component={Home}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
