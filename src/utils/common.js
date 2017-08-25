import moment from 'moment';
import _ from 'lodash';

import { CONTENT_TYPE, CONTRACT_NAME, URL_PATH, EPG_STATE } from '../constants';
import ENV_CONFIG from '../config/environment/index';
import store from '../app/store';

/**
 * Generate cloudinary url
**/

export const getImage = (publicUrl, contentType, options) => {
    let url = '';

    // Decide base url based on CONTENT_TYPE
    if (contentType == CONTENT_TYPE.FORWARD_EPG || contentType == CONTENT_TYPE.REVERSE_EPG) {
        url = ENV_CONFIG.CLOUDINARY_URLS.CLOUD_SUB_ACCOUNT_URL;
    } else {
        url = ENV_CONFIG.CLOUDINARY_URLS.CLOUD_ACCOUNT_URL;
    }

    //Add default options for optimization
    url += 'q_80,fl_lossy,f_auto';

    // Adding options with request url eg: height, width
    if (options && options.height) {
        url += ',h_' + options.height;
    }
    if (options && options.width) {
        url += ',w_' + options.width;
    }

    return url + '/' + publicUrl;
};

/*
* Format given date */

export const formatDate = (date, format = 'DD MMMM') => {
    return moment(date).format(format);
};

export const getDate = (currentDate = null, noOfDay = 0, format = "") => {
    const d = currentDate ? new Date(currentDate) : new Date();
    if (d.toString() !== "Invalid Date") {
        const date = new Date(d.setDate(d.getDate() + (noOfDay)));
        return format ? formatDate(date, format) : date;
    }
};

/*
* Get intersection of subscribe channel
* */

export const isContentVisible = (contentType, contractName, userPackages, validPackages) => {
    if (_.includes([CONTENT_TYPE.TV_SHOWS, CONTENT_TYPE.WEB_SHORTS, CONTENT_TYPE.MOVIES, CONTENT_TYPE.CATCH_UP], contentType)) {
       return checkSubscription(contractName, userPackages, validPackages)
    }
    return false;
};

export const checkSubscription = (contractName, userPackages, validPackages) => {
    if (_.includes([CONTRACT_NAME.SUBSCRIPTION, CONTRACT_NAME.RENTAL], contractName) && (_.intersection(_.map(userPackages, 'pkgId'), validPackages)).length > 0) {
        return true;
    }
    return false;
}
export const isContentPlayable = (contentType, contractName, userPackages, validPackages, isLoggedIn) => {
    switch (contractName) {
        case CONTRACT_NAME.CLEAR:
            return true;
        case CONTRACT_NAME.FREE:
            return isLoggedIn;
        case CONTRACT_NAME.RENTAL:
        case CONTRACT_NAME.SUBSCRIPTION:
            return isLoggedIn && checkSubscription(contractName, userPackages, validPackages);
        default: break;
    }
};

export const queryStringToObject = (queryString = {}) => {
    if (_.isEmpty(queryString))
        return queryString;
    let search = queryString.substring(1);
    return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
};

/*
 * Get falt array by passsing nD array
 * */

export const flatten = (arr, result = []) => {
    for (let i = 0, length = arr.length; i < length; i++) {
        const value = arr[i];
        if (Array.isArray(value)) {
            flatten(value, result);
        } else {
            result.push(value);
        }
    }
    return result;
};

/*
 * is Valid Password return bool
 * */

export const isValidSubscriberPassword = (password) => {

    const allowedSpecialCharactersInPassword = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
        '+', '`', '-', '=', '{', '}', '[', ']', ':', ';', '"', '\'', '\\', '|', '<', '>', '?', ',', '.', '/'];

    const isAllowedSpecialCharacter = char => {
        return allowedSpecialCharactersInPassword.indexOf(char) != -1;
    };

    const isValidPassword = password => {
        if (password) {
            let conditionsSatisfied = 0;
            const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            const numbers = "0123456789";
            let specialCharacter = false, letter = false, number = false;
            let requiredConditions = isAllowedSpecialCharacter(password.charAt(0)) ? 3 : 2

            for (var index = 0; index < password.length; index++) {
                const ch = password.charAt(index);

                if (letters.indexOf(ch) != -1) {
                    if (!letter) {
                        letter = true;
                        conditionsSatisfied++;
                    }
                } else if (numbers.indexOf(ch) != -1) {
                    if (!number) {
                        number = true;
                        conditionsSatisfied++;
                    }
                } else if (isAllowedSpecialCharacter(ch)) {
                    if (!specialCharacter) {
                        specialCharacter = true;
                        conditionsSatisfied++;
                    }
                } else {
                    return false;
                }
            }
            return conditionsSatisfied >= requiredConditions;
        }
    };
    return password && password.length >= 8 && password.length <= 32 && isValidPassword(password);
}



export const getUser = () => {
    const state = store.getState();
    const user = state && state.auth && state.auth.user;
    return user && user.accessToken ? user : false;
}


export const checkResponse = (response) => {
    if (!response.message) {
        return response;
    } else {
        let error = new Error();
        error.message = response && response.message;
        throw error;
    }
}

export const createUrl = (url, { ...params } = null, { ...query } = null) => {
    params && Object.keys(params).forEach((key) => {
        url = url.replace(`/:${key}`, `/${params[key]}`);
    });
    query && typeof query === "object" && Object.keys(query).forEach((key, index) => {
        url += `${(index) ? '&' : '?'}${key}=${query[key]}`
    });
    return url;
};

export const clickEventOfItem = (contentType, data, { history, options }) => {

    switch (contentType) {
        case CONTENT_TYPE.MOVIES:
        case CONTENT_TYPE.TV_SHOWS:
        case CONTENT_TYPE.WEB_SHORTS:
        case CONTENT_TYPE.CUSTOM_MOVIES_DETAIL:
        case CONTENT_TYPE.CUSTOM_TV_SHOWS_DETAIL:
        case CONTENT_TYPE.CUSTOM_WEB_SHORTS_DETAIL:
            history.push(createUrl(URL_PATH.VOD, { id: data.id, contentType }));
            break;
        case CONTENT_TYPE.CUSTOM_SELF_CARE:
            options.openSelfCare(data.selfCareScreen);
            break;
        case CONTENT_TYPE.LIVE:
        case CONTENT_TYPE.LIVE_EVENT:
        case CONTENT_TYPE.CUSTOM_LIVE_DETAIL:
        case CONTENT_TYPE.CUSTOM_LIVE_EVENT_DETAIL:
            history.push(createUrl(URL_PATH.LIVE_TV_DETAIL, { id: data.id }));
            break;

        case CONTENT_TYPE.FORWARD_EPG:
            switch (data.epgState) {
                case EPG_STATE.FORWARD:
                    history.push(createUrl(URL_PATH.VOD, { id: data.id, contentType }));
                    break;
                case EPG_STATE.REVERSE:
                    history.push(createUrl(URL_PATH.CATCHUP,{id:data.id,pageType:CONTENT_TYPE.CATCH_UP}));
                    break;
                case EPG_STATE.ON_NOW:
                    if(data.channelId) history.push(createUrl(URL_PATH.LIVE_TV_DETAIL,{id:data.channelId}));
                    break;
                default:
                    history.push(createUrl(URL_PATH.VOD, { id: data.id, contentType }));
                    break;
            }
            break;

        case CONTENT_TYPE.REVERSE_EPG:
        case CONTENT_TYPE.CATCH_UP:
            history.push(createUrl(URL_PATH.CATCHUP, { id: data.id, pageType: contentType }));
            break;
        case CONTENT_TYPE.CUSTOM_FORWARD_EPG_DETAIL:
        case CONTENT_TYPE.CUSTOM_CATCH_UP_DETAIL:
            break;
        case CONTENT_TYPE.SERIES:
        case CONTENT_TYPE.BRAND:
        case CONTENT_TYPE.CUSTOM_SERIES_DETAIL:
        case CONTENT_TYPE.CUSTOM_BRAND_DETAIL:
            history.push(createUrl(URL_PATH.SERIES, { id: data.id, pageType: contentType }));
            break;
        case CONTENT_TYPE.CUSTOM_WEB_VIEW:
            __CLIENT__ && window.open(data.linkUrl);
            break;
        case CONTENT_TYPE.GENRE: break;
        case CONTENT_TYPE.RR_GENRE: break;
        case CONTENT_TYPE.SUBSCRIPTION_PACKAGE: break;
        case CONTENT_TYPE.RR_CHANNEL: break;
        case CONTENT_TYPE.CUSTOM_APP_TO_APP: break;
        case CONTENT_TYPE.CUSTOM_TRANSFER_APP: break;
        default:
            console.log(">>>To be implemented (Coming soon)....");
            break;
    }
};

export const contentClickHandler = (contentType, data, { options } = {}) => {
        let url ="";
    switch (contentType) {
        case CONTENT_TYPE.MOVIES:
        case CONTENT_TYPE.TV_SHOWS:
        case CONTENT_TYPE.WEB_SHORTS:
        case CONTENT_TYPE.CUSTOM_MOVIES_DETAIL:
        case CONTENT_TYPE.CUSTOM_TV_SHOWS_DETAIL:
        case CONTENT_TYPE.CUSTOM_WEB_SHORTS_DETAIL:
            url = createUrl(URL_PATH.VOD, { id: data.id, contentType });
            break;
        case CONTENT_TYPE.CUSTOM_SELF_CARE:
            options.openSelfCare(data.selfCareScreen);
            break;
        case CONTENT_TYPE.LIVE:
        case CONTENT_TYPE.LIVE_EVENT:
        case CONTENT_TYPE.CUSTOM_LIVE_DETAIL:
        case CONTENT_TYPE.CUSTOM_LIVE_EVENT_DETAIL:
            url = createUrl(URL_PATH.LIVE_TV_DETAIL, { id: data.id });
            break;
        case CONTENT_TYPE.FORWARD_EPG:
            switch (data.epgState) {
                case EPG_STATE.FORWARD:
                    url = createUrl(URL_PATH.VOD, { id: data.id, contentType });
                    break;
                case EPG_STATE.REVERSE:
                    url = createUrl(URL_PATH.CATCHUP,{id:data.id,pageType:CONTENT_TYPE.CATCH_UP});
                    break;
                case EPG_STATE.ON_NOW:
                    if(data.channelId)
                        url = createUrl(URL_PATH.LIVE_TV_DETAIL,{id:data.channelId});
                    break;
                default:
                    url = createUrl(URL_PATH.VOD, { id: data.id, contentType });
                    break;
            }
            break;

        case CONTENT_TYPE.REVERSE_EPG:
        case CONTENT_TYPE.CATCH_UP:
            url = createUrl(URL_PATH.CATCHUP, { id: data.id, pageType: contentType });
            break;
        case CONTENT_TYPE.CUSTOM_FORWARD_EPG_DETAIL:
        case CONTENT_TYPE.CUSTOM_CATCH_UP_DETAIL:
            break;
        case CONTENT_TYPE.SERIES:
        case CONTENT_TYPE.BRAND:
        case CONTENT_TYPE.CUSTOM_SERIES_DETAIL:
        case CONTENT_TYPE.CUSTOM_BRAND_DETAIL:
            url = createUrl(URL_PATH.SERIES, { id: data.id, pageType: contentType });
            break;
        case CONTENT_TYPE.CUSTOM_WEB_VIEW:
            __CLIENT__ && window.open(data.linkUrl);
            break;
        case CONTENT_TYPE.GENRE: break;
        case CONTENT_TYPE.RR_GENRE: break;
        case CONTENT_TYPE.SUBSCRIPTION_PACKAGE: break;
        case CONTENT_TYPE.RR_CHANNEL: break;
        case CONTENT_TYPE.CUSTOM_APP_TO_APP: break;
        case CONTENT_TYPE.CUSTOM_TRANSFER_APP: break;
        default:
            console.log(">>>To be implemented (Coming soon)....");
            break;
    }
    return url;
};