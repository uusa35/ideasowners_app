import React , { Component , PropTypes } from 'react';
import { Image , LayoutAnimation , Linking } from 'react-native';
import { Container, Content, Header , Footer,  Title , Button, View , H1 , Card , CardItem , Icon  } from 'native-base';
import { Actions } from 'react-native-router-flux';
import AppFooter from '../../components/partials/AppFooter'
import styles from '../../assets/styles/styles';
import theme from '../../../Themes/theme';
import { vars } from '../../appConstants';

export default class Portfolio extends Component {
    constructor(props,content) {
        super(props,content);
    }

    componentWillMount() {
        LayoutAnimation.spring();
    }

    goToGraphicDesign() {
        Linking.canOpenURL(vars.graphicDesignURL).then(supported => {
            if (supported) {
                Linking.openURL(vars.graphicDesignURL);
            } else {
                console.log('Don\'t know how to open URI: ' + vars.graphicDesignURL);
            }
        });
    }

    goToMobileApps() {
        Linking.canOpenURL(vars.mobileApsURL).then(supported => {
            if (supported) {
                Linking.openURL(vars.mobileApsURL);
            } else {
                console.log('Don\'t know how to open URI: ' + vars.mobileApsURL);
            }
        });
    }

    goToWebsites() {
        Linking.canOpenURL(vars.websitesURL).then(supported => {
            if (supported) {
                Linking.openURL(vars.websitesURL);
            } else {
                console.log('Don\'t know how to open URI: ' + vars.websitesURL);
            }
        });
    }

    render() {
        return (
            <Container theme={theme}>
                <Header>
                    <Title>{_.capitalize(this.props.title)}</Title>
                </Header>
                <Content>
                    <Card style={{ flex: 1 }} >
                        <CardItem onPress={ () => { this.goToGraphicDesign() }}>
                            <View transparent style={{ padding : 10 , margin : 10 }} >
                                <Icon name="ios-brush" style={{ textAlign : 'center' , fontSize : 60 }}/>
                                <H1 style={{ textAlign : 'center'}}>Graphic Design</H1>
                            </View>
                        </CardItem>
                        <CardItem onPress={ () => { this.goToMobileApps() }}>
                            <View transparent style={{ padding : 10 , margin : 10 }} >
                                <Icon name="logo-apple" style={{ textAlign : 'center' , fontSize : 60 }}/>
                                <H1 style={{ textAlign : 'center'}}>Mobile Apps</H1>
                            </View>
                        </CardItem>
                        <CardItem onPress={ () => { this.goToWebsites() }}>
                            <View transparent style={{ padding : 10 , margin : 10 }} >
                                <Icon name="md-globe" style={{ textAlign : 'center' , fontSize : 60 }}/>
                                <H1 style={{ textAlign : 'center'}}>Websites</H1>
                            </View>
                        </CardItem>
                    </Card>
                </Content>
                <Footer>
                    <AppFooter name={this.props.name}/>
                </Footer>
            </Container>
        );
    }
}

Portfolio.ProtoTypes = {
    title : PropTypes.string.isRequired
}