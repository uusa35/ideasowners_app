/**
 * Created by usamaahmed on 12/25/16.
 */
import React , { Component , PropTypes } from 'react';
import { Image , LayoutAnimation , Alert } from 'react-native';
import { Container , Content , Header , View , Text , Button , Icon , Card , CardItem , Thumbnail , Title} from 'native-base';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';
import _ from 'lodash';
import styles from '../../assets/styles/styles';
import theme from '../../../Themes/theme'
import { largeImageRoute } from '../../appConstants';
import Hr from 'react-native-hr';
import { getAuthToken } from '../../helpers/auth'


export default class PostShow extends Component {
    constructor(props, content) {
        super(props, content);
        this.state = {token: null}
    }

    componentWillMount() {
        getAuthToken().then(token => this.setState({token}));
    }

    editPost(post) {
        Alert.alert('Ideasowners', 'Are you sure you want to edit this post ?',
            [
                {text: 'Cancel', onPress: () => null, style: 'cancel'},
                {
                    text: 'Confirm', onPress: () => {
                    Actions.PostEdit(post);
                }
                },
            ]);
    }

    deletePost(id) {
        Alert.alert('Ideasowners', 'Are you sure you want to delete this post ?',
            [
                {text: 'Cancel', onPress: () => null, style: 'cancel'},
                {
                    text: 'Delete', onPress: () => {
                    this.props.postActions.postDelete(id);
                }
                },
            ]);
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
                            <Text style={styles.postShowTitle}>{_.capitalize(this.props.post.title)}</Text>
                            <Hr lineColor='#b3b3b3' textColor='steelblue' text=":::::::::::::::::::::::::::"/>
                            <View style={styles.postShowControl}>
                                <Button iconRight small transparent style={styles.btnDate}>
                                    <Icon name="md-calendar"/>
                                    <Text>{moment(this.props.post.updated_at, 'YYYY-MM-DD').format('LL')}</Text>
                                </Button>
                                { this.state.token !== null ?
                                    <View style={styles.postShowSubControl}>
                                        <Button info small style={styles.btnEdit}
                                                onPress={ () => this.editPost({ post : this.props.post})}>
                                            <Icon name="ios-paper"/>
                                        </Button>
                                        <Button danger small style={styles.btnEdit}
                                                onPress={ () => this.deletePost(this.props.post.id) }>
                                            <Icon name="md-close"/>
                                        </Button>
                                    </View>
                                    :
                                    null
                                }
                            </View>
                            <Text style={{ textAlign : 'right'}}>{this.props.post.body}</Text>
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