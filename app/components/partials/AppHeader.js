/**
 * Created by usamaahmed on 12/28/16.
 */
import React , { Component } from 'react';
import { View } from 'react-native'
import { Header , Title  , Button , Icon } from 'native-base';

//export default class AppHeader extends Component {
//    constructor(props, content) {
//        super(props, content);
//    }
//
//    render() {
//        console.log('from inside the AppHeader');
//        console.log(this.props.title);
//    }
//}

const AppHeader = (props) => {
    return (
        <Header primary>
            <Button transparent onPress={() => Actions.pop() }>
                <Icon name="ios-arrow-back"></Icon>
            </Button>
            <Title>{_.capitalize(props.title)}</Title>
        </Header>
    );
}

export default AppHeader;