import {createStore,applyMiddleware,compose} from "redux";
import reducers from "./reducers";
import {baseState} from "./reducers/base_state";

export function configureStore(uninitializedStore, initialState, { sagas = [] }={}) {
    const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify here name, actionsBlacklist, actionsCreators and other options
        }) : compose;
    const enhancer = composeEnhancers(
       // other store enhancers if any
      );
  const store = createStore(uninitializedStore,initialState,enhancer);
  return store;
}

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = configureStore(reducers,baseState);
export default store