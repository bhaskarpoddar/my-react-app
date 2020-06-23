import { compose, createStore, applyMiddleware } from 'redux';
import { loadUser } from 'redux-oidc';
import reducers from './reducers';
import { userService } from 'services';
import thunk from 'redux-thunk';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ })
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

const store = createStore(reducers, {}, enhancer);
loadUser(store, userService.userManager);

export default store;
