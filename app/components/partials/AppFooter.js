/**
 * Created by usamaahmed on 12/24/16.
 */
import React , { Component } from 'react';
import {  Footer , Grid, Col , View , Text , Button  , FooterTab, Badge , Icon } from 'native-base';
import theme from '../../../Themes/theme';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import { vars }from '../../appConstants';

export default class AppFooter extends Component {
    constructor(props, content) {
        super(props, content);
    }

    render() {
        return (
            <Footer>
                <FooterTab theme={theme}>
                    <Button onPress={ () => Actions.Home() } active={(this.props.name === 'Home' ? true : false)}>
                        <Text styles={{ color : '#900'}}>{ _.camelCase(vars.title.news) }</Text>
                        <Icon name="md-paper" md="" size={30}/>
                    </Button>
                    <Button theme={theme} onPress={ () => Actions.Services() }
                            active={(this.props.name === 'Services' ? true : false)}>
                        { _.camelCase(vars.title.services)}
                        <Icon name='ios-refresh-circle-outline'/>
                    </Button>
                    <Button onPress={ () => Actions.Portfolio() }
                            active={(this.props.name === 'Portfolio' ? true : false)}>
                        { _.camelCase(vars.title.portfolio)}
                        <Icon name="ios-briefcase" size={30}/>
                    </Button>
                    <Button onPress={ () => Actions.More() } style={{  backgroundColor: 'yellow' , color : 'green'}}
                            active={(
                                    (this.props.name === 'More' ||
                                    this.props.name === 'Location' ||
                                    this.props.name === 'PostCreate' ||
                                    this.props.name === 'Login' ||
                                    this.props.name === 'PostCreate')
                                    ? true : false
                                    )}
                    >
                        { _.camelCase(vars.title.more)}
                        <Icon name="ios-more" size={30} color='blue'
                              style={{ backgroundColor: 'black' , color : 'green' }} textStyle={{ color: 'gold' }}/>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}


//color={(this.props.name === 'More' ? '#FFD700' : '#FFD700')}