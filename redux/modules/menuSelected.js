import {createAction, handleAction} from 'redux-actions'
import {ofType} from 'redux-observable';
import {mapTo} from 'rxjs/operators/mapTo';

export const selectMenuItem = createAction('SELECT_MENU_ITEM');

export default handleAction(selectMenuItem, (state, {payload}) => payload, false);

export const testEpic$ = actions$ =>
    actions$.pipe(
        ofType('SELECT_MENU_ITEM'),
        mapTo({type: 'TEST_ONE'})
    );
