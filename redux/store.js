import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'

import {initialState, rootEpic, rootReducer} from "./modules";
import {createEpicMiddleware} from 'redux-observable';

const epicMiddleware = createEpicMiddleware(rootEpic);

export default () => createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(epicMiddleware)));
