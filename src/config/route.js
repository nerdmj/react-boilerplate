import {URL_PATH} from '../constants';

import Home from '../app/components/views/Home';

import {getHomeContent} from '../app/components/views/Home/action';

import {getConfigData,loginWithCookie} from '../app/actions';

const initlLoadAction = [
    getConfigData
];

export default [
    {
        path: `${URL_PATH.DEFAULT}`,
        component: Home,
        loadData: [...initlLoadAction,getHomeContent],
        // decorator:"PrivateRoute"
    },
];
