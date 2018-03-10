import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'

import {initialState, rootReducer} from "./modules";

export default () => createStore(rootReducer, initialState, composeWithDevTools());
