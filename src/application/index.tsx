import React, { useEffect } from 'react';

import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';

import { rootReducer } from '../storage/redux/reducers/root-reducer';
// import { actionFireLogger } from '../storage/redux/middlewares/logger';
import {Header} from '../core/components/header/header';
import {Router} from './router';
import { authAPI } from '../services/passport/api';

const store = createStore(rootReducer);

function EntryPoint() {
  // useEffect(() => {
  //   const minute = 1000 * 60;
  //   const timeStep = minute * 3;
    // authAPI.refreshToken();

  //   const refresher = setInterval(() => {
  //     authAPI.refreshToken();
  //   }, timeStep);

  //   return () => {
  //     clearInterval(refresher);
  //   }
  // }, []);

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default EntryPoint;
