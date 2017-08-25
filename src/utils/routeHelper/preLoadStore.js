/*
 Utility function to fetch required data for component to render in server side.
 This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js
 */
import { flatten } from './../common';
import {routes} from '../../config';
import matchRoutes from './matchRoutes'

const sequence = (items, consumer)=>{
  const results = [];
  const runner = () => {
    const item = items.shift();
    if (item) {
      return consumer(item)
          .then((result) => {
            results.push(result);
          })
          .then(runner);
    }
    return Promise.resolve(results);
  };
  return runner();
}

export default (location,store) => {
  const matchedRoutes = matchRoutes(routes, location.uri);
  // console.log("matchedRoutes===",JSON.stringify(matchedRoutes));
  if(matchedRoutes.length == 0 ){
    return Promise.resolve(true);
  }
  // console.log("matchedRoutes",JSON.stringify(matchedRoutes));
  const paramsWithActions = matchedRoutes.reduce((paramsList,{ route, match })=>
      (route.loadData && route.loadData.length > 0 )?
          paramsList.concat({actions:route.loadData,params:match.params})
          :paramsList,[]);
  // console.log("Before NEED==============",paramsWithActions);

  const actionList = paramsWithActions.reduce((actionList,{ actions, params })=>(actions.length > 0 )?
      actionList.concat(actions.map((action)=>({action,params})))
      :actionList,[]);
  // needs = flatten(needs);
  // console.log("After NEED==============",actionList);

  const promisesObj = actionList.reduce((promisesObj,actionObj)=>{
    typeof actionObj.action == "object"?promisesObj.sequential.push(actionObj):promisesObj.parallel.push(actionObj)
    return promisesObj;
  },{sequential:[],parallel:[]})
  const actionPara = {
    queryString:location.queryString,
    params:{},
    store:{},
  };
  const sortedSequentialPromises = promisesObj.sequential.sort((a,b)=>a.action.priority-b.action.priority);
  // console.log("sortedSequentialPromises############",JSON.stringify(sortedSequentialPromises));


  const parallelPromisesArray = promisesObj.parallel.map((actionObj)=>store.dispatch(actionObj.action({...actionPara,store:store.getState(),params:actionObj.params})));
  const sequentialPromises = sequence(sortedSequentialPromises,actionObj => store.dispatch(actionObj.action.actionName({...actionPara,store:store.getState(),params:actionObj.params})));
  return Promise.all([...parallelPromisesArray,sequentialPromises]);
  // return sequence(actionList,actionObj => store.dispatch(actionObj.action({...actionPara,store:store.getState(),params:actionObj.params})));
}
