/**
 * Created by usamaahmed on 12/27/16.
 */
import React , { Component , PropTypes } from 'react';
import { Image } from 'react-native';
import { Card, CardItem,  Text , Button , Thumbnail , Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';
import styles from '../../assets/styles/styles';
import { mediumImageRoute } from '../../appConstants';


export default class PostItem extends Component {
    constructor(props, content) {
        super(props, content);
    }

    render() {
        return (
            <Card style={styles.postItemCard} key={this.props.post.id}>
                <CardItem style={styles.postItemCardItem} right onPress={ () => Actions.PostShow({ post : this.props.post , title : this.props.post.title }) }>
                    <Image style={styles.postItemImage}
                           source={{ uri : mediumImageRoute + this.props.post.image }}/>
                </CardItem>
                <CardItem right onPress={ () => Actions.PostShow({ post : this.props.post , title : this.props.post.title }) }>
                    <Text style={{ textAlign: 'center', fontSize : 20, fontWeight : 'bold' }}>{this.props.post.title}</Text>
                    <Button iconRight small transparent style={styles.btnDate}>
                        <Icon name="md-calendar"/>
                        <Text>{moment(this.props.post.updated_at, 'YYYY-MM-DD').format('LL')}</Text>
                    </Button>
                </CardItem>
            </Card>
        );
    }
}

PostItem.PropTypes = {
    posts: PropTypes.array.isRequired
}
