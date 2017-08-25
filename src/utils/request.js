import fetch from 'isomorphic-fetch';
import store from '../app/store';
import {logout} from '../app/actions';
import {cleanUserContent} from '../app/components/containers/Modal/Auth/action';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */

const commonHeader = {
    "pl":"android/ios/web/dongle","os":"4.1.1/9.01","ip":"115.249.185.82","lo":"en-us",
    "app":"1.0.0","net":"Wifi/3G/GPRS/2G","dn":"Nexus 5/iPhone 6s","car":"Vodafone/airtel",
    "bv":"4.1.1/9.01","bn":"Mozilla/Chrome", "ma": "asdasd723basdass"
};
function parseJSON(response) {
    let currentTime = response.headers.get("Date");
     return response.json().then(data=>{
        let servertime = response.headers.get("Date");
        data.serverTime = servertime?new Date(servertime).getTime():null;
        return new Promise((resolve)=>{return resolve(data)})
    }).catch(error => {
        return new Promise((resolve,reject)=>{return reject(error)})
    })
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status === 200) {
    return response;
  }else if(response.status === 401) {
      // c("Auth Token Invalid");
      store.dispatch(cleanUserContent());
      store.dispatch(logout(false));

  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function toQueryString(obj) {
    return Object.keys(obj).map(k => {
        return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k])
    })
        .join("&");
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request({url, options, auth = false, contentType = true, tempAccessToken=""}, query) {
    let {auth:{user:{accessToken=tempAccessToken}} } = store.getState();
    if(query) {
      url += '?' + toQueryString(query);
    }
    options.headers = options.headers || {};
    options.headers = {...options.headers,...commonHeader};
    if((auth && accessToken)|| tempAccessToken) {
        options.headers['Authorization'] = 'bearer '+accessToken;
    }
    if(contentType){
      options.headers['content-type'] = 'application/json';
    }

    return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}
