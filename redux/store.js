import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'

import {initialState, rootEpic, rootReducer} from "./modules";
import {createEpicMiddleware} from 'redux-observable';

let init = initialState;

if (typeof window !== 'undefined') {
    init = __NEXT_DATA__.props.initialState;
}

const epicMiddleware = createEpicMiddleware(rootEpic);

export default () => createStore(rootReducer, init, composeWithDevTools(applyMiddleware(epicMiddleware)));
