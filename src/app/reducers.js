import { createStore, combineReducers, applyMiddleware } from 'redux';

//views
// import HomeReducer from './components/views/Home/reducer';
//container

import {ACTION} from '../constants';

const configReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTION.GET_CONFIG_SUCCESS :
            // s(JSON.stringify(action));
            return {...state, ...action.data};
        default:
            return state;
    }
};

const commonReducer = (state = {isLoading: false,pendingTask:{}}, action) => {
    switch (action.type) {
        case ACTION.SHOW_MAIN_LOADER :
            return {...state,  isLoading: true};
        case ACTION.HIDE_MAIN_LOADER :
            return {...state,  isLoading: false};
        case ACTION.ADD_PENDING_TASK :
            return {...state,  pendingTask: action.data};
        case ACTION.REMOVE_PENDING_TASK :
            return {...state,  pendingTask: {}};
        default:
            return state;
    }
};

export default {
    common:commonReducer,
    config:configReducer,
    // homeData: HomeReducer,

};