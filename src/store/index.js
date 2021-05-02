import ReduxThunk from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/index';
import { loggerMiddleware } from '../middlewares/index';

const middlewares = [ReduxThunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (__DEV__) {
  middlewares.push(loggerMiddleware);
}

const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

export default store;
