export URL_PATH,{URL} from './routes';
export MIXPANEL from './mixpanel';

export const REQUEST_METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',

};
export const PAGE_LIMIT = 12;
export const SECTION_TYPE = {
    HERO_BANNER: 'HERO_BANNER',
    RAIL : 'RAIL',
    ALL_CHANNELS: 'ALL_CHANNELS'

};

export const LAYOUT_TYPE = {
    LANDSCAPE: 'LANDSCAPE',
    PORTRAIT: 'PORTRAIT',
    CIRCLE: 'CIRCLE'

};

export const CONTENT_TYPE = {
    LIVE : 'LIVE',
    GENRE : 'GENRE',
    FORWARD_EPG : 'FORWARD_EPG',
    REVERSE_EPG : 'REVERSE_EPG',
    CATCH_UP : 'CATCH_UP',
    BRAND : 'BRAND',
    MOVIES : 'MOVIES',
    TV_SHOWS : 'TV_SHOWS',
    SERIES : 'SERIES',
    WEB_SHORTS: 'WEB_SHORTS',
    SUBSCRIPTION_PACKAGE: 'SUBSCRIPTION_PACKAGE',
    CUSTOM_SELF_CARE: 'CUSTOM_SELF_CARE',
    RR_CHANNEL : "RR_CHANNEL",
    RR_GENRE : "RR_GENRE",
    LIVE_EVENT : "LIVE_EVENT",
    CUSTOM_LIVE_DETAIL : "CUSTOM_LIVE_DETAIL",
    CUSTOM_FORWARD_EPG_DETAIL : "CUSTOM_FORWARD_EPG_DETAIL",
    CUSTOM_CATCH_UP_DETAIL : "CUSTOM_CATCH_UP_DETAIL",
    CUSTOM_SERIES_DETAIL : "CUSTOM_SERIES_DETAIL",
    CUSTOM_BRAND_DETAIL : "CUSTOM_BRAND_DETAIL",
    CUSTOM_MOVIES_DETAIL : "CUSTOM_MOVIES_DETAIL",
    CUSTOM_TV_SHOWS_DETAIL : "CUSTOM_TV_SHOWS_DETAIL",
    CUSTOM_WEB_SHORTS_DETAIL : "CUSTOM_WEB_SHORTS_DETAIL",
    CUSTOM_LIVE_EVENT_DETAIL : "CUSTOM_LIVE_EVENT_DETAIL",
    CUSTOM_WEB_VIEW : "CUSTOM_WEB_VIEW",
    CUSTOM_APP_TO_APP : "CUSTOM_APP_TO_APP",
    CUSTOM_TRANSFER_APP : "CUSTOM_TRANSFER_APP"
};

export const EPG_STATE = {
    REVERSE:'REVERSE',
    FORWARD:'FORWARD',
    ON_NOW:'ON_NOW',
}

export const CONTRACT_NAME = {
    CLEAR: 'CLEAR',
    FREE: 'FREE',
    SUBSCRIPTION: 'SUBSCRIPTION',
    RENTAL: 'RENTAL'
};

export const MODAL = {
    IS_MODAL_OPEN: 'IS_MODAL_OPEN',
    IS_CLOSE: 'IS_CLOSE',
    LOGIN_MODAL: 'LOGIN_MODAL',
    LANGUAGE_GENRE_MODAL: 'LANGUAGE_GENRE_MODAL',
    SIGNUP_MODAL: 'SIGNUP_MODAL',
};

export const SSO_ACTION = {
    recharge: 'recharge',
    showcase: 'showcase',
    mobileServices: 'mobileServices',
    record: 'record',
    connection: 'connection',
    chat: 'chat',
    accountDetails: 'accountDetails',
    helpdesk: 'helpdesk',
    login: 'login',
    signup: 'signup',
};

export const USER_STATUS = {
    ACTIVE: 'ACTIVE',
    DEACTIVATED: 'DEACTIVATED',
    TEMP_SUSPENSION: 'TEMP_SUSPENSION',
    PENDING: 'PENDING',
    WRITTEN_OFF: 'WRITTEN_OFF',
    CANCELLED: 'CANCELLED',
    BLACKLISTED: 'BLACKLISTED',
    PARTIAL_DUNNED: 'PARTIAL_DUNNED',
};

export const ACTION = {
    GET_CONFIG_SUCCESS: 'GET_CONFIG_SUCCESS',
    LOGIN_WITH_COOKIE_SUCCESS: 'LOGIN_WITH_COOKIE_SUCCESS',
    LOGIN_WITH_COOKIE_FAILURE: 'LOGIN_WITH_COOKIE_FAILURE',
    SHOW_MAIN_LOADER: 'SHOW_MAIN_LOADER',
    HIDE_MAIN_LOADER: 'HIDE_MAIN_LOADER',
    GET_RECOMMENDED_SECTION: 'GET_RECOMMENDED_SECTION',
    ADD_PENDING_TASK: 'ADD_PENDING_TASK',
    REMOVE_PENDING_TASK: 'REMOVE_PENDING_TASK',
};

export const SUB_HEADER = {
    TV_SHOWS_HOME : "TV_SHOWS_HOME",
    MOVIES_HOME : "MOVIES_HOME",
    WEB_SHORTS_HOME : "WEB_SHORTS_HOME",
    PURCHASES: "PURCHASES",
    FAVORITES : "FAVORITES"
};

export const PLAYER_SOURCE = {
    WIDEVINE : "widevine",
    PLAYREADY : "playready",
    SS_PLAYREADY : ""
};
