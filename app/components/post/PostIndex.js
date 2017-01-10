/**
 * Created by usamaahmed on 12/26/16.
 */
import React , { Component , PropTypes } from 'react';
import { View  } from 'native-base';
import PostItem from '../../components/post/PostItem';

export default class PostIndex extends Component {

    constructor(props, content) {
        super(props, content);
    }

    render() {
        return (
            <View>
                { this.props.posts.map((post) => {
                    return <PostItem post={post} key={post.id}/>
                })}
            </View>
        );
    }
}

PostIndex.PropTypes = {
    posts: PropTypes.array.isRequired
}
