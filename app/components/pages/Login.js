import React , { Component , PropTypes,  AsyncStorage } from 'react';
import { LayoutAnimation  } from 'react-native';
import theme from './../../../Themes/theme'
import { Container , Content  , Header , Footer , View,  List , ListItem , Input , InputGroup, Title , Button , FooterTab , Spinner , Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from '../../assets/styles/styles'
import { apiRoute , accept } from '../../appConstants';

import AppFooter from '../../components/partials/AppFooter';
import AppHeader from '../../components/partials/AppHeader';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = ({email: '', password: ''});
    }

    static propTypes = {

        properties : PropTypes.object.isRequired
    }


    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    componentWillMount() {
    }

    login() {
        this.props.propertiesActions.logging(this.state.email, this.state.password);
    }

    render() {
        if(this.props.properties.isLoading) {
            console.log('logign started');
        }
        return (
            <Container theme={theme}>
                <Header>
                    <Button transparent onPress={ () => Actions.pop() }>
                        <Icon name="ios-arrow-back"/>
                    </Button>
                    <Title>{_.capitalize(this.props.title)}</Title>
                </Header>
                <Content>
                    { this.props.properties.isLoading ?
                        <Spinner color="grey" style={styles.spinner}/> :

                        <List>
                            <ListItem>
                                <InputGroup>
                                    <Icon name="ios-person" style={{ color: '#0A69FE' }}/>
                                    <Input placeholder="EMAIL@EMAIL.COM"
                                           keyboardType="email-address"
                                           onChangeText={ (email) => this.setState({ email })}/>
                                </InputGroup>
                            </ListItem>
                            <ListItem>
                                <InputGroup>
                                    <Icon name="ios-unlock" style={{ color: '#0A69FE' }}/>
                                    <Input placeholder="PASSWORD" secureTextEntry
                                           keyboardType="email-address"
                                           onChangeText={ (password) => this.setState({ password })}/>
                                </InputGroup>
                            </ListItem>
                            <ListItem>
                                <Button block primary
                                        style={{ flex : 1, alignSelf: 'center', marginTop: 20, marginBottom: 20 }}
                                        onPress={ () => this.login()}>
                                    <Icon name='ios-contact'/>
                                    Login
                                </Button>
                            </ListItem>
                        </List>
                    }
                </Content>
                <Footer>
                    <AppFooter name={this.props.name}/>
                </Footer>
            </Container>

        );
    }
}