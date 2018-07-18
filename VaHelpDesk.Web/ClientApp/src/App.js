import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';

import { Facilities } from './components/Facilities/Facilities';
import { SingleFacility } from './components/Facilities/SingleFacility';

import { Hardwares } from './components/Hardwares/Hardwares';
import { SingleHardware } from './components/Hardwares/SingleHardware';
import { AddFacility } from './components/Facilities/AddFacility';
import { AddHardware } from './components/Hardwares/AddHardware';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
            <Route exact path='/' component={Home} />

            <Route exact path='/hardwares' component={Hardwares} />
            <Route exact path='/addhardwares' component={AddHardware} />
            <Route exact path='/hardwares/:id' component={SingleHardware} />

            <Route exact path='/facilities' component={Facilities} />
            <Route exact path='/addFacilities' component={AddFacility} />
            <Route exact path='/facilities/:id' component={SingleFacility} />
      </Layout>
    );
  }
}
