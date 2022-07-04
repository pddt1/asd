import thunk from 'redux-thunk';
import { createStore, applyMiddleware,compose } from 'redux';
import reducers from './reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(thunk);
const store = createStore(reducers, composeEnhancers(middleware));
export default store;
