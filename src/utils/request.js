import fetch from 'isomorphic-fetch';
import store from '../app/store';
import {logout} from '../app/actions';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */

const commonHeader = { };

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
}
