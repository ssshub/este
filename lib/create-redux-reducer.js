// @flow
import type { Reducers } from '../types';
import { combineReducers } from 'redux';

import app from './app/reducer';
import auth from './auth/reducer';
import users from './users/reducer';

const createReduxReducer = (platformReducers: Reducers): Reducers =>
  combineReducers({
    ...platformReducers,
    app,
    auth,
    users,
  });

export default createReduxReducer;