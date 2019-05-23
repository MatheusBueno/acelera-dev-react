import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron from './reactotron';

import usersReducer from '../states/users';
import { usersSaga } from '../states/users';

const rootReducer = combineReducers({
  users: usersReducer
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    Reactotron.createEnhancer()
  )
);
sagaMiddleware.run(usersSaga);

export default store;
