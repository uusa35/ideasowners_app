import React , { Component } from 'react';
import { LayoutAnimation , Image} from 'react-native';
import theme from './../../../Themes/theme'
import { Container , Content  , Header , Footer , Text , H3, Title ,  Button , View , FooterTab , Thumbnail, Card , CardItem, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from '../../assets/styles/styles'
import AppFooter from '../../components/partials/AppFooter';
import Hr from 'react-native-hr';

let logo = require('../../assets/images/slogan.png');

export default class About extends Component {
    constructor(props) {
        super(props);
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
                    <Title>{_.capitalize(this.props.title)}</Title>
                </Header>
                <Content>

                    <Card style={{ flex: 1 }}>
                        <CardItem onPress={ () => { this.goToGraphicDesign() }}>
                            <View transparent style={{ padding : 10 , margin : 10 }}>
                                <Thumbnail square source={logo} size={100} style={{ margin : 13, alignSelf : 'center'}}/>
                                <H3 style={{ textAlign : 'center'}}>Ideasowners</H3>
                                <Hr lineColor='#b3b3b3' text=' ::: ' textColor='steelblue' />
                                <Text style={{ textAlign : 'justify'}}>
                                    IdeasOwners Established on 2013 as a pioneering firm in the Online field.
                                    We offer you a wide range of Online services and presenting inventive solutions. It’s IdeasOwners pleasure to addresses all your Business needs and deliver the Best Quality for You and Your Business.
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