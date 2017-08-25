import ENV_CONFIG from '../config/environmentConfig/index';
import {getUser} from '../utils/common';
import store from '../app/store';
import {logout} from '../app/actions';
import {updateUserDetails} from '../app/components/containers/Modal/Auth/action';
import cookie from '../utils/react-cookies';
import {USER_STATUS} from '../constants';


// const mixpanel = () => {
//     if(window && window.mixpanel) {
//         window.mixpanel.init(ENV_CONFIG.MIXPANEL_KEY,{
//             debug :true,
//             autotrack : false
//         });
//     }
// };


export default () => {
    // mixpanel();
};