import {createActions, handleAction} from 'redux-actions'

export const {fetchArticle, loadArticle} = createActions('FETCH_ARTICLE', 'LOAD_ARTICLE');

export default handleAction(loadArticle, (state, {payload}) => payload, false);
