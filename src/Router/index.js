import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Album from '../screens/Album';
import Artist from '../screens/Artist';
import Home from '../screens/Home';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/artist/:artistID/album/:albumID' component={Album} />
        <Route path='/artist/:artistID' component={Artist} />
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
