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
import { webViewLink , appPhoneMeessage , vars , appTokenKey} from '../../appConstants';
import { getAuthToken } from '../../helpers/auth';

class More extends Component {

    constructor(props) {
        super(props);
        this.state = ({isLogged: false, token: null});
    }

    componentWillMount() {
        LayoutAnimation.spring();
        try {
            getAuthToken().then((e) => {
                if (e !== null) {
                    this.setState({isLogged: true, token: e});
                    this.props.propertiesActions.login(e);
                }
            });

        } catch (error) {
            console.log(error.message);
        }
    }


    goToSite(link) {
        Linking.canOpenURL(link).then(supported => {
            if (supported) {
                Linking.openURL(link);
            } else {
                console.log('Don\'t know how to open URI: ' + link);
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
                        <ListItem iconLeft style={styles.cellMore} transparent onPress={() => { Actions.About() }}>
                            <Icon name="ios-information-circle" style={styles.iconMore}/>
                                <Text style={styles.textMore}>About</Text>
                        </ListItem>

                        <ListItem itemDivider style={styles.listeItemMore}>
                            <Text>GET IN TOUCH</Text>
                        </ListItem>
                        <ListItem iconLeft style={styles.cellMore} onPress={ () => { this.goToSite(webViewLink) }}>
                            <Icon name="ios-globe" style={styles.iconMore}/>
                                <Text style={styles.textMore}>Website</Text>
                        </ListItem>
                        <ListItem iconLeft style={styles.cellMore}
                                  onPress={() => { Alert.alert( 'Our Phone', vars.phone)}}>
                            <Icon name="md-call" style={styles.iconMore}/>
                                <Text style={styles.textMore}>Phone</Text>
                        </ListItem>
                        <ListItem iconLeft style={styles.cellMore}
                                  onPress={ () => { Actions.Location({ name : 'Location'})} }>
                            <Icon name="ios-map-outline" style={styles.iconMore}/>
                                <Text style={styles.textMore}>Location</Text>
                        </ListItem>
                        <ListItem iconLeft style={styles.cellMore}
                                  onPress={ () => {Alert.alert( 'Our Email', vars.email)}}>
                            <Icon name="ios-mail" style={styles.iconMore}/>
                                <Text style={styles.textMore}>Email</Text>
                        </ListItem>
                        <ListItem itemDivider style={styles.listeItemMore}>
                            <Text>SOCIAL MEDIA</Text>
                        </ListItem>
                        <ListItem iconLeft style={styles.cellMore} onPress={ () => { this.goToSite(vars.twitter)}}>
                            <Icon name="logo-twitter" style={styles.iconMore}/>
                            <Text style={styles.textMore}>Twitter</Text>
                        </ListItem>
                        <ListItem iconLeft style={styles.cellMore} onPress={ () => {this.goToSite(vars.facebook)}}>
                            <Icon name="logo-facebook" style={styles.iconMore}/>
                            <Text style={styles.textMore}>Facebook</Text>
                        </ListItem>
                        <ListItem iconLeft style={styles.cellMore} onPress={ () => { this.goToSite(vars.blogLink) }}>
                            <Icon name="logo-wordpress" style={styles.iconMore}/>
                            <Text style={styles.textMore}>Blog</Text>
                        </ListItem>
                        { this.state.isLogged ?
                            <ListItem iconLeft style={styles.cellMore}
                                      onPress={ () => Actions.PostCreate({ token : this.props.properties.token }) }>
                                <Icon name="ios-create-outline" style={styles.iconMore}/>

                                <Text style={styles.textMore}>{vars.title.postCreate}</Text>
                            </ListItem>
                            :
                            <ListItem iconLeft style={styles.cellMore} onPress={ () => {Actions.Login()}}>
                                <Icon name="md-person" style={styles.iconMore}/>

                                <Text style={styles.textMore}>Login</Text>
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
    title: PropTypes.string.isRequired,
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