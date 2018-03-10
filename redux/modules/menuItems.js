import {createActions, handleAction} from 'redux-actions'

export const {fetchMenu, loadMenu} = createActions('FETCH_MENU', 'LOAD_MENU');

export default handleAction(loadMenu, (state, {payload}) => payload, false);
