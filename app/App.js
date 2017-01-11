/**
 * Created by usamaahmed on 12/26/16.
 */
import React , { Component , PropTypes } from 'react';
import { Image , LayoutAnimation , AsyncStorage , Alert , NetInfo  } from 'react-native';
import { Container , Content , Header , Footer , Spinner  , Title} from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../app/assets/styles/styles'
import postActions from '../app/redux/actions/postActions';
import propertiesActions from '../app/redux/actions/propertiesActions';
import PostIndex from '../app/components/post/PostIndex';
import PostItem from '../app/components/post/PostItem';
import AppFooter from '../app/components/partials/AppFooter'
import * as cons from './appConstants';
import theme from '../Themes/theme';
import { getAuthToken } from '../app/helpers/auth';

class App extends Component {
    static propTypes = {
        routesReducers: PropTypes.object.isRequired,
    };

    constructor(props, content) {
        super(props, content);
    }

    componentDidMount() {
        try {
            getAuthToken().then((token) => {
                NetInfo.isConnected.fetch().catch(e => {
                    console.log(e);
                    Alert.alert('Sys Message', 'there is no connection');
                });

                NetInfo.addEventListener('change', (e) => {
                    if (e) {
                        this.props.postActions.postFetch();
                        if (token != null) {
                            this.props.propertiesActions.login(token);
                        }
                    } else {
                        Alert.alert('Sys Message', 'there is no connection');
                    }
                });

            }).catch(e => console.log(e));
        } catch (error) {
            console.log(error.message);
        }
    }

    render() {
        return (
            <Container theme={theme}>
                <Header>
                    <Title>{_.capitalize(this.props.title)}</Title>
                </Header>
                <Content>
                    {this.props.properties.isLoading ?

                        <Spinner color="grey" style={styles.spinner}/>
                        :
                        <PostIndex posts={this.props.posts}/>
                    }
                </Content>
                <Footer>
                    <AppFooter name={this.props.name}/>
                </Footer>
            </Container>
        );
    }
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        postActions: bindActionCreators(postActions, dispatch),
        propertiesActions: bindActionCreators(propertiesActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);