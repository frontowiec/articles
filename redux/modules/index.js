import {combineReducers} from 'redux';

import article, {fetchArticle$} from "./article";
import menuItems, {fetchSubItems$} from "./menuItems";
import menuSelected, {selectedMenuItem$} from "./menuSelected";
import isFetching from "./isFetching";

import {combineEpics} from 'redux-observable';

export const initialState = {
    article: {
        title: null,
        content: null,
        createDate: null
    },
    menu: {
        items: null,
        selected: null
    },
    isFetching: false
};

export const rootReducer = combineReducers({
    article,
    menu: combineReducers({
        items: menuItems,
        selected: menuSelected
    }),
    isFetching
});

export const rootEpic = combineEpics(
    selectedMenuItem$,
    fetchArticle$,
    fetchSubItems$
);
