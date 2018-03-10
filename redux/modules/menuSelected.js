import {createAction, handleAction} from 'redux-actions'

export const selectMenuItem = createAction('SELECT_MENU_ITEM');

export default handleAction(selectMenuItem, (state, {payload}) => payload, false);
