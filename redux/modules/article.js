import {createActions, handleAction} from 'redux-actions'
import {ajax} from 'rxjs/observable/dom/ajax';
import {switchMap, map, catchError} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {empty} from 'rxjs/observable/empty';

export const {fetchArticle, loadArticle} = createActions('FETCH_ARTICLE', 'LOAD_ARTICLE');

export default handleAction(loadArticle, (state, {payload}) => payload, false);

export const getArticle$ = actions$ =>
    actions$.pipe(
        ofType('FETCH_ARTICLE'),
        switchMap(({payload}) => ajax.getJSON(`http://localhost:4000/article/${payload}`).pipe(
            map(article => loadArticle(article)),
            catchError(() => empty())
            )
        )
    );
