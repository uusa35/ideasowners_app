import * as cons from '../../appConstants';

let postsReducers = function (posts = [], action) {
    switch (action.type) {

        case cons.postIndex :
            return action.posts;

        case cons.postShow :
            return action.post

        default :
            return posts;
    }
}
export default postsReducers;