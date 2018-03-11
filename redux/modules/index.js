import {combineReducers} from 'redux';

import article, {getArticle$} from "./article";
import menuItems from "./menuItems";
import menuSelected, {selectedMenuItem$, testEpic$} from "./menuSelected";
import isFetching from "./isFetching";

import menuData from '../../data/menu';
import {combineEpics} from 'redux-observable';


export const initialState = {
    article: null,
    menu: {
        items: menuData,
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
    getArticle$
);
