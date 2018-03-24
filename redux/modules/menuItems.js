import {createActions, handleActions} from 'redux-actions'
import {ofType} from 'redux-observable';
import {ajax} from 'rxjs/observable/dom/ajax';
import {catchError, map, switchMap} from "rxjs/operators";
import {empty} from "rxjs/observable/empty";

export const {fetchMenu, loadMenu, fetchSubItems, loadSubItems} = createActions('FETCH_MENU', 'LOAD_MENU', 'FETCH_SUB_ITEMS', 'LOAD_SUB_ITEMS');

export default handleActions({
    [loadMenu]: (state, {payload}) => payload,
    [loadSubItems]: (state, {payload}) => ({...state, ...payload})
}, false);

export const fetchSubItems$ = action$ =>
    action$.pipe(
        ofType('FETCH_SUB_ITEMS'),
        switchMap(({payload}) => ajax.getJSON(`http://localhost:3000/api/menu/${payload}/children`).pipe(
            map(subItems => loadSubItems(subItems)),
            catchError(() => empty())
            )
        )
    );
