/**
 * Created by usamaahmed on 12/25/16.
 */
import React , { Component , PropTypes } from 'react';
import { Image , LayoutAnimation } from 'react-native';
import { Container , Content , Header , Text , Button , Icon , Card , CardItem , Thumbnail , Title} from 'native-base';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';
import _ from 'lodash';
import styles from '../../assets/styles/styles';
import theme from '../../../Themes/theme'
import { largeImageRoute } from '../../appConstants';


export default class PostShow extends Component {
    constructor(props, content) {
        super(props, content);
    }

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    render() {
        return (
            <Container theme={theme}>
                <Header>
                    <Button transparent onPress={ () => Actions.pop() }>
                        <Icon name="ios-arrow-back"/>
                    </Button>
                    <Title>{_.capitalize(this.props.post.title)}</Title>
                </Header>
                <Content>
                    <Card style={styles.postItemCard} key={this.props.post.id}>
                        <CardItem style={styles.postShowCardItem} right
                                  onPress={ () => Actions.PostImageShow({ post : this.props.post })}>
                            <Image style={styles.postShowImage}
                                   source={{ uri : largeImageRoute + this.props.post.image }}/>
                        </CardItem>
                        <CardItem right
                                  onPress={ () => Actions.PostShow({ post : this.props.post , title : this.props.post.title }) }>
                            <Text
                                style={{ textAlign: 'center', fontSize : 20, fontWeight : 'bold' }}>{this.props.post.title}</Text>
                            <Button iconRight small transparent style={styles.btnDate}>
                                <Icon name="md-calendar"/>
                                <Text>{moment(this.props.post.updated_at, 'YYYY-MM-DD').format('LL')}</Text>
                            </Button>
                            <Text>{this.props.post.body}</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

PostShow.PropTypes = {
    post: PropTypes.object.isRequired
}