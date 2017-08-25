import { REQUEST_METHOD, CONTENT_TYPE } from '../constants';
// import {ENV_CONFIG} from './index';
import ENV_CONFIG from './environmentConfig/index';
// console.log("ENV_CONFIG",ENV_CONFIG)
import {getUser} from '../utils/common';

export const requestConfig = {
    getConfigData: {
        url: ENV_CONFIG.API_BASE_URL + 'rest-api/pub/api/' + ENV_CONFIG.API_VERSION + 'config',
        options: {
            method: REQUEST_METHOD.GET
        },
        auth: false
    },
    getHomeDetail: {
        url: ENV_CONFIG.API_BASE_URL + 'homescreen/pub/api/' + ENV_CONFIG.API_VERSION + 'page/HOMEPAGE',
        options: {
            method: REQUEST_METHOD.GET
        },
        auth: false
    },
    getLiveTv: {
        url: ENV_CONFIG.API_BASE_URL + 'homescreen/pub/api/' + ENV_CONFIG.API_VERSION + 'page/LIVE_HOME',
        options: {
            method: REQUEST_METHOD.GET
        },
        auth: false
    },
    getOnDemandDetail: (pageType) => {
        return {
            url: ENV_CONFIG.API_BASE_URL + `homescreen/pub/api/` + ENV_CONFIG.API_VERSION + `page/${pageType}`,
            options: {
                method: REQUEST_METHOD.GET
            },
            auth: false
        }
    },

    getContentListDetail: (id) => {
        return {
            url: ENV_CONFIG.API_BASE_URL + `homescreen/pub/api/` + ENV_CONFIG.API_VERSION + `rail/${id}`,
            options: {
                method: REQUEST_METHOD.GET
            },
            auth: false
        }

    },

    getSearchListDetail: (category) => {
        return {
            url: ENV_CONFIG.API_BASE_URL + `portal-search/pub/api/` + ENV_CONFIG.API_VERSION + `fetch${category}Content`,
            options: {
                method: REQUEST_METHOD.GET
            },
            auth: false
        }

    },
    getAutoSearchDetail: () => {
        return {
            url: ENV_CONFIG.API_BASE_URL + `portal-search/pub/api/` + ENV_CONFIG.API_VERSION + `autoComplete`,
            options: {
                method: REQUEST_METHOD.GET
            },
            auth: false
        }

    },
    getGlobalSearchDetail: () => {
        return {
            url: ENV_CONFIG.API_BASE_URL + `portal-search/pub/api/` + ENV_CONFIG.API_VERSION + `globalSearch`,
            options: {
                method: REQUEST_METHOD.GET
            },
            auth: false
        }

    },
    getVodDetail : ({id,contentType},user) => {
        const isUser = !!(user && Object.keys(user).length);
        // console.log(isUser);
        return {
            url: ENV_CONFIG.API_BASE_URL + `content-detail/${contentType != CONTENT_TYPE.FORWARD_EPG && isUser?"":"pub"}/api/` + ENV_CONFIG.API_VERSION + `${contentType==CONTENT_TYPE.FORWARD_EPG?"forwardEpg":"vod"}/${id}?platform=WEB`,
            options: {
                method: REQUEST_METHOD.GET
            },
            auth: contentType != CONTENT_TYPE.FORWARD_EPG ?  !!isUser : false,
            contentType : false
        }

    },
    getSeriesDetail : (id,user, pageType) => {
        pageType = (pageType=='catch_up') ? 'catchupEpg' : pageType;
        const isUser = !!(user && Object.keys(user).length);
        // console.log(isUser);
        return {
            url: ENV_CONFIG.API_BASE_URL + `content-detail/${isUser?"":"pub/"}api/` + ENV_CONFIG.API_VERSION + `${pageType}/${id}`,
            options: {
                method: REQUEST_METHOD.GET
            },
            auth: !!isUser,
            contentType : false
        }

    },
    getRecommendedData : (contentType,id) => {
        //get recommended content-type data
        const user = getUser();
        const isUser = !!(user && Object.keys(user).length);
        return {
            url: ENV_CONFIG.API_BASE_URL + `recommendation-api/${isUser?"":"pub/"}api/recommend/content/`+`${id}/${contentType}`,
            options: {
                method: REQUEST_METHOD.GET
            },
            auth: !!isUser,
        }

    },
    getSeriesVodData : (id) => {
        //get Series Vod data
        return {
            url: ENV_CONFIG.API_BASE_URL + `content-detail/pub/api/`+ENV_CONFIG.API_VERSION+`series/${id}/list`,
            options: {
                method: REQUEST_METHOD.GET
            },
            auth: false
        }

    },
    subscriberLookupRMN: {
        url: ENV_CONFIG.API_BASE_URL + 'rest-api/pub/api/' + ENV_CONFIG.API_VERSION + 'subscriberLookup',
        options: {
            method: REQUEST_METHOD.GET
        },
        auth: false
    },

    generateSubscriberOTP: (subscriberID) => ({
        url: ENV_CONFIG.API_BASE_URL + `rest-api/pub/api/` + ENV_CONFIG.API_VERSION + `subscribers/${subscriberID}/otp`,
        options: {
            method: REQUEST_METHOD.GET
        },
        auth: false
    }),

    loginWithOTP: () => ({
        url: ENV_CONFIG.API_BASE_URL + 'rest-api/pub/api/' + ENV_CONFIG.API_VERSION + 'otpLogin',
        options: {
            method: REQUEST_METHOD.POST
        },
        auth: false
    }),

    loginWithPassword: () => ({
        url: ENV_CONFIG.API_BASE_URL + 'rest-api/pub/api/' + ENV_CONFIG.API_VERSION + 'pwdLogin',
        options: {
            method: REQUEST_METHOD.POST
        },
        auth: false
    }),

    logout: () => ({
            url: ENV_CONFIG.API_BASE_URL + 'rest-api/api/' + ENV_CONFIG.API_VERSION + 'logout',
            options: {
                method: REQUEST_METHOD.POST
            },
            auth: true,
            contentType: false,
    }),

    getRegisteredDevices: (subscriberID) => ({
        url: ENV_CONFIG.API_BASE_URL + 'rest-api/api/' + ENV_CONFIG.API_VERSION + `subscribers/${subscriberID}/devices`,
        options: {
            method: REQUEST_METHOD.GET
        },
        auth: true,
        contentType: false,
    }),

    deleteDevice: (subscriberId, deviceId) => ({
        url: ENV_CONFIG.API_BASE_URL + 'rest-api/api/' + ENV_CONFIG.API_VERSION + `subscribers/${subscriberId}/devices/${deviceId}`,
        options: {
            method: REQUEST_METHOD.DELETE
        },
        auth: true,
        contentType: false,
    }),

    getUserBalance: (subscriberId, rrmSession = false) => ({
        url: ENV_CONFIG.API_BASE_URL + 'rest-api/api/' + ENV_CONFIG.API_VERSION + `subscribers/${subscriberId}/balance?rrmSession=${rrmSession}`,
        options: {
            method: REQUEST_METHOD.GET
        },
        auth: true,
        contentType: false,
    }),

    submitTempPassword: {
        url: ENV_CONFIG.API_BASE_URL + 'rest-api/pub/api/' + ENV_CONFIG.API_VERSION + 'subscribers',
        options: {
            method: REQUEST_METHOD.GET
        },
        auth: false
    },
    checkTempPassword: {
        url: ENV_CONFIG.API_BASE_URL + 'rest-api/pub/api/' + ENV_CONFIG.API_VERSION + 'subscribers/validate/password',
        options: {
            method: REQUEST_METHOD.PUT
        },
        auth: false
    },
    setNewPassword: {
        url: ENV_CONFIG.API_BASE_URL + 'rest-api/pub/api/' + ENV_CONFIG.API_VERSION + 'subscribers',
        options: {
            method: REQUEST_METHOD.PUT
        },
        auth: false
    },
    setForceResetPassword: {
        url: ENV_CONFIG.API_BASE_URL + 'rest-api/api/' + ENV_CONFIG.API_VERSION + 'subscribers',
        options: {
            method: REQUEST_METHOD.PUT
        },
        auth: true
    },
    getAllChannels: () => {
        return {
            url: ENV_CONFIG.API_BASE_URL + `content-detail/pub/api/` + ENV_CONFIG.API_VERSION + `channels`,
            options: {
                method: REQUEST_METHOD.GET
            },
            auth: false
        }

    },
    sso: () => {
        return {
            url: ENV_CONFIG.API_BASE_URL + 'rest-api/api/' + ENV_CONFIG.API_VERSION +  '/subscribers/auth',
            options: {
                method: REQUEST_METHOD.POST
            },
            auth: true
        }

    },
    rechargeSelfCare: (sid,mbr) => {
        return {
            url: ENV_CONFIG.API_BASE_URL + 'rest-api/api/' + ENV_CONFIG.API_VERSION +  '/subscribers/'+sid+'/recharge/'+mbr+'/amount',
            options: {
                method: REQUEST_METHOD.GET
            },
            auth: true,
            contentType: false,
        }
    },
    getHelpFaqDetail: {
        url: ENV_CONFIG.API_BASE_URL + 'rest-api/pub/api/' + ENV_CONFIG.API_VERSION + 'help',
        options: {
            method: REQUEST_METHOD.GET
        },
        auth: false
    },
    getRrmDetail: (sid) => {
        return {
            url: ENV_CONFIG.API_BASE_URL + 'rest-api/api/' + ENV_CONFIG.API_VERSION + `subscribers/${sid}/session`,
            options: {
                method: REQUEST_METHOD.GET
            },
            auth: true,
            contentType: false
        }
    },
    getWatchListDetail: (pageType, sid) => {
        return {
            url: ENV_CONFIG.API_BASE_URL + `content-detail/api/` + 'v2/'+ `subscriber/${sid}/favourites`,
            options: {
                method: REQUEST_METHOD.GET
            },
            auth: true,
            contentType: false
        }
    },
    updateFavorite : (sid) =>{
        return {
            url: ENV_CONFIG.API_BASE_URL + `content-detail/api/` + ENV_CONFIG.API_VERSION + `subscriber/${sid}/favourites`,
            options: {
                method: REQUEST_METHOD.POST
            },
            auth: true
        }
    },
    getLiveTvDetail : (id,user) => {
        const isUser = getUser();
        return {
            url: ENV_CONFIG.API_BASE_URL + `content-detail/${isUser?"":"pub/"}api/` + 'v2/' + `channels/${id}?platform=WEB`,
            options: {
                method: REQUEST_METHOD.GET
            },
            contentType : false,
            auth: !!isUser,
        }
    },
    getOtherEpisodes: (id) =>{
        return {
            url: ENV_CONFIG.API_BASE_URL + `content-detail/pub/api/v1/epg/${id}/otherEpisodes`,
            options: {
                method: REQUEST_METHOD.GET
            },
            contentType : false,
        }
    },

    getScheduleData : (id,{date}) => {
        let queryString = "";
        if(date){
            queryString = "?date="+date;
        }
        return {
            url: ENV_CONFIG.API_BASE_URL + 'content-detail/pub/api/' + ENV_CONFIG.API_VERSION + `channels/${id}/schedule${queryString}`,
            options: {
                method: REQUEST_METHOD.GET
            },
            contentType : false,
            auth: false
        }
    },
    getChannelTray: () => {
        return {
            url: ENV_CONFIG.API_BASE_URL + `content-detail/pub/api/` + ENV_CONFIG.API_VERSION + `channels?limit=1000`,
            options: {
                method: REQUEST_METHOD.GET
            },
          //  contentType : false,
            auth: false
        }

    },
    getLastAiredShows: (id) => {
        return {
            url: ENV_CONFIG.API_BASE_URL + `content-detail/pub/api/` + ENV_CONFIG.API_VERSION + `epg/${id}/airedInSevenDays`,
            options: {
                method: REQUEST_METHOD.GET
            },
            contentType : false,
            auth: false
        }

    },
    remoteRecord : () =>{
        return {
            url: ENV_CONFIG.API_BASE_URL + `rest-api/api/` + ENV_CONFIG.API_VERSION + `remoteRecord/recordRequest`,
            options: {
                method: REQUEST_METHOD.POST
            },
            auth: true
        }
    },
    isFavoriteContent : (sid) =>{
        return {
            url: ENV_CONFIG.API_BASE_URL + `content-detail/api/` + ENV_CONFIG.API_VERSION + `subscriber/${sid}/isFavouriteContent`,
            options: {
                method: REQUEST_METHOD.POST
            },
            auth: true
        }
    },

};
