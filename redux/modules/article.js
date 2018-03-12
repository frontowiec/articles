import {createActions, handleAction} from 'redux-actions'
import {ajax} from 'rxjs/observable/dom/ajax';
import {switchMap, map, catchError, mapTo} from 'rxjs/operators';
import {ofType, combineEpics} from 'redux-observable';
import {empty} from 'rxjs/observable/empty';
import {isFetching} from "./isFetching";

export const {fetchArticle, loadArticle} = createActions('FETCH_ARTICLE', 'LOAD_ARTICLE');

export default handleAction(loadArticle, (state, {payload}) => payload, false);

const getArticle$ = actions$ =>
    actions$.pipe(
        ofType('FETCH_ARTICLE'),
        switchMap(({payload}) => ajax.getJSON(`http://localhost:3000/api/article/${payload}`).pipe(
            map(article => loadArticle(article)),
            catchError(() => empty())
            )
        )
    );

const startFetchingArticle$ = actions$ =>
    actions$.pipe(
        ofType('FETCH_ARTICLE'),
        mapTo(isFetching(true))
    );

const stopFetchingArticle$ = actions$ =>
    actions$.pipe(
        ofType('LOAD_ARTICLE'),
        mapTo(isFetching(false))
    );

export const fetchArticle$ = combineEpics(
    getArticle$,
    startFetchingArticle$,
    stopFetchingArticle$
);
