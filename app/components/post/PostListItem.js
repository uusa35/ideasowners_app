import React , { Component } from 'react';
import { View , Text , ListItem , Thumbnail , Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-redux-router';
import moment from 'moment';
import _ from 'lodash';

export default class PostListItem extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <ListItem key={this.props.post.id} onPress={ () => Actions.postshow({ post : this.props.post })}>
                <Thumbnail square size={80} source={{ uri : this.props.post.image , isStatic : true }}/>
                <Text>{_.split(this.props.post.title, ' ', 5)}</Text>
                <Text note>{moment(this.props.post.created_at, 'YYYY-MM-DD').format('LL')}</Text>
                <Text >{_.split(this.props.post.body, ' ', 10)}</Text>
            </ListItem>

        );
    }
}