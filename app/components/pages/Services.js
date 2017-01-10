import React , { Component , PropTypes } from 'react';
import { LayoutAnimation , Linking } from 'react-native';
import theme from './../../../Themes/theme'
import { Container , Content  , Header , Footer , Title , View , H3 , Text,  Button , FooterTab , Card , CardItem, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from '../../assets/styles/styles'
import { vars } from '../../appConstants';
import AppFooter from '../../components/partials/AppFooter';
import AppHeader from '../../components/partials/AppHeader';
import Hr from 'react-native-hr';

export default class Services extends Component {
    constructor(props) {
        super(props);
    }


    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    goToServices() {
        Linking.canOpenURL(vars.servicesURL).then(supported => {
            if (supported) {
                Linking.openURL(vars.servicesURL);
            } else {
                console.log('Don\'t know how to open URI: ' + webViewLink);
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
                        <CardItem onPress={ () => { this.goToServices() }}>
                            <View transparent style={{ padding : 10 , margin : 10 }} >
                                <Icon name="md-globe" style={{ textAlign : 'center' , fontSize : 60 }}/>
                                <H3 style={{ textAlign : 'center'}}>Website Design & Development</H3>
                                <Hr lineColor='#b3b3b3' text=' ::: ' textColor='steelblue' />
                                <Text style={{ textAlign : 'justify' }}>
                                    Lots of people design websites.
                                    So why IdeasOwners?
                                    We understand that a website is more than a collection of pretty pages and links.
                                    We know that for your customers, it needs to be a satisfying, enjoyable experience where people find what they’re looking for and accomplish their goals. That’s why we also provide user-experience (UX) design. It’s where thinking meets technology to make user-friendly a reality.
                                    In other words, a website that’s intuitive to use, pleasing to look at, and is built with rich content that invites exploration.
                                </Text>
                            </View>
                        </CardItem>
                        <CardItem onPress={ () => { this.goToServices() }}>
                            <View transparent style={{ padding : 10 , margin : 10 }} >
                                <Icon name="ios-phone-landscape" style={{ textAlign : 'center' , fontSize : 60 }}/>
                                <H3 style={{ textAlign : 'center'}}>Mobile Apps Design & Development</H3>
                                <Hr lineColor='#b3b3b3' text=' ::: ' textColor='steelblue' />
                                <Text style={{ textAlign : 'justify' }}>
                                    Mobile App Design and mobile app development are essential components to almost every single business today.
                                    From employees to customers, mobile apps make it possible for people to stay constantly connected and productive.
                                    We’re committed to understanding how customers interact with your business online,
                                    and taking this understanding to the next level to tailor your project to reach and engage them most effectively.
                                    We give you good reason to be confident that your mobile app development is in safe hands. We are proactive in our approach and we’re enthusiastically invested in our clients’ projects which drives us to meet your deadlines in a timely manner.
                                </Text>
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

Services.ProtoTypes = {
    title : PropTypes.string.isRequired
}