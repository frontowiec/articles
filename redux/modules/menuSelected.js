import {createAction, handleAction} from 'redux-actions'
import {ofType} from 'redux-observable';
import {map} from 'rxjs/operators';
import {fetchArticle} from "./article";

export const selectMenuItem = createAction('SELECT_MENU_ITEM');

export default handleAction(selectMenuItem, (state, {payload}) => payload, false);

export const selectedMenuItem$ = actions$ =>
    actions$.pipe(
        ofType('SELECT_MENU_ITEM'),
        map(({payload}) => fetchArticle(payload))
    );
