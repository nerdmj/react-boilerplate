/**
 * Created by swati on 13/7/17.
 */

export const URL = {
    VOD : 'vod',
    SEE_ALL : "see-all",
    RECOMMENDED : "recommended",
    FAQ : 'faq',
    SEARCH : 'search',
    LIVE_TV : 'live-tv',
    ALL_CHANNELS : 'all-channels',
    ON_DEMAND : 'on-demand',
    SETTINGS : 'settings',
    WATCHLIST : 'watch-list',
    MY_BOX : 'my-box',
    TEST : 'test',
    ONE : 'one',
    TWO : 'two',
    STATIC_HTML: 'static-html',
    SERIES:'series',
    CATCHUP:'catchup',
    OTHER_EPISODES: 'other-episodes',
};

export default {
    SEE_ALL : `/${URL.SEE_ALL}/:id`,
    RECOMMENDED_SEE_ALL : `/${URL.RECOMMENDED}/${URL.SEE_ALL}/:id/:contentType`,
    SEARCH_SEE_ALL : `/${URL.SEARCH}/${URL.SEE_ALL}/:category`,
    FAQ : `/${URL.FAQ}`,
    SEARCH : `/${URL.SEARCH}`,
    LIVE_TV : `/${URL.LIVE_TV}`,
    ALL_CHANNELS : `/${URL.ALL_CHANNELS}`,
    ON_DEMAND : `/${URL.ON_DEMAND}/:pageType`,
    SETTINGS : `/${URL.SETTINGS}`,
    VOD : `/${URL.VOD}/:id/:contentType`,
    WATCHLIST : `/${URL.WATCHLIST}/:pageType`,
    MY_BOX : `/${URL.MY_BOX}`,
    TEST_ONE : `/${URL.TEST}/${URL.ONE}/:id`,
    TEST_TWO : `/${URL.TEST}/${URL.TWO}`,
    STATIC_HTML: `/${URL.STATIC_HTML}`,
    SERIES:`/${URL.SERIES}/:id/:pageType`,
    LIVE_TV_DETAIL : `/${URL.LIVE_TV}/:id`,
    OTHER_EPISODES : `/${URL.OTHER_EPISODES}/:id`,
    CATCHUP : `/${URL.CATCHUP}/:id/:pageType`,
    DEFAULT : `/`
}