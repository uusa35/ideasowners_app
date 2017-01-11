import React , { Component , PropTypes } from 'react';
import { LayoutAnimation , Image , Linking , Alert  , AsyncStorage } from 'react-native';
import { Container , Content  , Header , Footer , Grid, Col , Title , View , Text , Button , FooterTab , Icon , List , ListItem} from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import postActions from '../../redux/actions/postActions';
import propertiesActions from '../../redux/actions/propertiesActions';
import { Actions } from 'react-native-router-flux';
import styles from '../../assets/styles/styles';
import AppFooter from '../../components/partials/AppFooter';
import theme from '../../../Themes/theme';
import { webViewLink , appPhoneMeessage } from '../../appConstants';
import { vars , appTokenKey } from '../../appConstants';
import { getAuthToken } from '../../helpers/auth';

class More extends Component {

    constructor(props) {
        super(props);
        this.state = ({isLogged: false , token : null });
    }

    componentWillMount() {
        LayoutAnimation.spring();
        try {
            getAuthToken().then( (e) => {
                if (e !== null) {
                    this.setState({isLogged: true , token : e});
                    this.props.propertiesActions.login(e);
                }
            });

        } catch (error) {
            console.log(error.message);
        }
    }


    goToSite() {
        Linking.canOpenURL(webViewLink).then(supported => {
            if (supported) {
                Linking.openURL(webViewLink);
            } else {
                console.log('Don\'t know how to open URI: ' + webViewLink);
            }
        });
    }

    goToBlog() {
        Linking.canOpenURL(vars.blogLink).then(supported => {
            if (supported) {
                Linking.openURL(vars.blogLink);
            } else {
                console.log('Don\'t know how to open URI: ' + vars.blogLink);
            }
        });
    }

    logout() {
        Alert.alert('Ideasowners', 'Are you sure you want to logout ?',
            [
                {text: 'Cancel', onPress: () => null, style: 'cancel'},
                {
                    text: 'Confirm', onPress: () => {
                    AsyncStorage.removeItem(appTokenKey).then((e) => {
                        this.setState({isLogged: false});
                    });
                }
                },
            ]);
    }

    render() {
        return (
            <Container theme={theme}>
                <Header>
                    <Button transparent>
                        <Text></Text>
                    </Button>
                    <Title>{_.capitalize(this.props.title)}</Title>
                    { this.state.isLogged ?
                        <Button transparent onPress={ () => { this.logout() }}>
                            <Title>Log out</Title>
                        </Button>
                        :
                        <Button transparent onPress={ () => { Actions.Login() }}>
                        <Title>Login</Title>
                        </Button>
                    }
                </Header>
                <Content>
                    <List>
                        <ListItem itemDivider style={styles.listItemMore}>
                            <Text>About</Text>
                        </ListItem>
                        <ListItem iconLeft style={styles.cellMore}>
                            <Icon name="ios-information-circle" style={styles.iconMore}/>
                            <Button transparent onPress={() => { Actions.About() }}>
                                <Text style={styles.textMore}>About</Text>
                            </Button>
                        </ListItem>

                        <ListItem itemDivider style={styles.listeItemMore}>
                            <Text>GET IN TOUCH</Text>
                        </ListItem>
                        <ListItem iconLeft style={styles.cellMore}>
                            <Icon name="ios-globe" style={styles.iconMore}/>
                            <Button transparent onPress={ () => { this.goToSite() }}>
                                <Text style={styles.textMore}>Website</Text>
                            </Button>
                        </ListItem>
                        <ListItem iconLeft style={styles.cellMore}>
                            <Icon name="md-call" style={styles.iconMore}/>
                            <Button transparent onPress={() => { Alert.alert( 'Our Phone', vars.phone)}}>
                                <Text style={styles.textMore}>Phone</Text>
                            </Button>
                        </ListItem>
                        <ListItem iconLeft style={styles.cellMore}>
                            <Icon name="ios-map-outline" style={styles.iconMore}/>
                            <Button transparent onPress={ () => { Actions.Location({ name : 'Location'})} }>
                                <Text style={styles.textMore}>Location</Text>
                            </Button>
                        </ListItem>
                        <ListItem iconLeft style={styles.cellMore}>
                            <Icon name="ios-mail" style={styles.iconMore}/>
                            <Button transparent onPress={ () => {
                            Alert.alert( 'Our Email', vars.email)}
                            }>
                                <Text style={styles.textMore}>Email</Text>
                            </Button>
                        </ListItem>


                        <ListItem itemDivider style={styles.listeItemMore}>
                            <Text>SOCIAL MEDIA</Text>
                        </ListItem>
                        <ListItem iconLeft style={styles.cellMore}>
                            <Icon name="logo-twitter" style={styles.iconMore}/>
                            <Button transparent onPress={ () => {
                            Alert.alert( 'Twitter Account', vars.twitter)}
                            }>
                                <Text style={styles.textMore}>Twitter</Text>
                            </Button>
                        </ListItem>
                        <ListItem iconLeft style={styles.cellMore}>
                            <Icon name="logo-facebook" style={styles.iconMore}/>
                            <Button transparent onPress={ () => {
                            Alert.alert( 'Facebook Account', vars.facebook)}
                            }>
                                <Text style={styles.textMore}>Facebook</Text>
                            </Button>
                        </ListItem>
                        <ListItem iconLeft style={styles.cellMore}>
                            <Icon name="logo-wordpress" style={styles.iconMore}/>
                            <Button transparent onPress={ () => { this.goToBlog() }}>
                                <Text style={styles.textMore}>Blog</Text>
                            </Button>
                        </ListItem>
                        { this.state.isLogged ?
                        <ListItem iconLeft style={styles.cellMore}>
                            <Icon name="ios-create-outline" style={styles.iconMore}/>
                            <Button transparent onPress={ () => Actions.PostCreate({ token : this.props.properties.token }) }>
                                <Text style={styles.textMore}>{vars.title.postCreate}</Text>
                            </Button>
                        </ListItem>
                            :
                            <ListItem iconLeft style={styles.cellMore}>
                                <Icon name="md-person" style={styles.iconMore}/>
                                <Button transparent onPress={ () => {
                                Actions.Login()
                                }}>
                                    <Text style={styles.textMore}>Login</Text>
                                </Button>
                            </ListItem>
                        }
                    </List>
                </Content>
                <Footer>
                    <AppFooter name={this.props.name}/>
                </Footer>
            </Container>
        );
    }
}

More.ProtoTypes = {
    title : PropTypes.string.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(More);