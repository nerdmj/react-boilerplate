import {URL_PATH} from '../constants';

import Home from '../app/components/landing/Home';
import PrivacyPolicy from '../app/components/landing/PrivacyPolicy';
import AboutUs from '../app/components/landing/About';


// const initlLoadAction = [
//    
// ];

export default [
    {
        path: `/privacy-policy`,
        component: PrivacyPolicy,
    },
    {
        path: `${URL_PATH.ABOUT_US}`,
        component: AboutUs,
    },
    {
        path: `${URL_PATH.DEFAULT}`,
        component: Home,
    }
];
