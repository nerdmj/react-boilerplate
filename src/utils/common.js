import moment from 'moment';
import _ from 'lodash';

import { CONTENT_TYPE, CONTRACT_NAME, URL_PATH, EPG_STATE } from '../constants';
import ENV_CONFIG from '../config/environment/index';

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


export const createUrl = (url, { ...params } = null, { ...query } = null) => {
    params && Object.keys(params).forEach((key) => {
        url = url.replace(`/:${key}`, `/${params[key]}`);
    });
    query && typeof query === "object" && Object.keys(query).forEach((key, index) => {
        url += `${(index) ? '&' : '?'}${key}=${query[key]}`
    });
    return url;
};
