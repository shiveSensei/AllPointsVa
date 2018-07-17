import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Facilities } from './components/Facilities/Facilities';
import { Hardwares } from './components/Hardwares/Hardwares';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/hardwares' component={Hardwares} />
            <Route path='/fetchdata' component={Facilities} />
      </Layout>
    );
  }
}
