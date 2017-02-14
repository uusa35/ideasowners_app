import { combineReducers } from 'redux';
import postsReducers from '../reducers/postsReducers';
import propertiesReducers from '../reducers/propertiesReducers';

let rootReducers = combineReducers({
    posts: postsReducers,
    properties: propertiesReducers
});

export default rootReducers;
