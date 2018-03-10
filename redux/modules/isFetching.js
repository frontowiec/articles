import {createAction, handleAction} from 'redux-actions'

export const isFetching = createAction('IS_FETCHING');

export default handleAction(isFetching, (state, {payload}) => payload, false);
