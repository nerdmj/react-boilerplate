import {URL_PATH} from '../constants';

import Home from '../app/components/landing/Home';
import {getHomeContent} from '../app/components/landing/Home/action';
import {getConfigData,loginWithCookie} from '../app/actions';

import AboutUs from '../app/components/landing/About';


const initlLoadAction = [
    getConfigData
];

export default [
    {
        path: `${URL_PATH.DEFAULT}`,
        component: Home,
        loadData: [...initlLoadAction, getHomeContent],
        // decorator:"PrivateRoute"
    },{
        path: `${URL_PATH.ABOUT_US}`,
        component: AboutUs,
    },
];
