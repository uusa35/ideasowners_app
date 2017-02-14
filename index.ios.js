/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React , { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './app/redux/store';
import { initialState } from './app/appConstants';
import Routes from './app/Routes';
//import OneSignal from 'react-native-onesignal';

let store = configureStore(initialState);
//const _XHR = GLOBAL.originalXMLHttpRequest ?
//    GLOBAL.originalXMLHttpRequest :
//    GLOBAL.XMLHttpRequset;
//XMLHttpRequest = _XHR;

export default class ideasowners extends Component {
    render() {
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('ideasowners', () => ideasowners);



//OneSignal.configure({
//    onIdsAvailable: function(device) {
//        console.log('UserId = ', device.userId);
//        console.log('PushToken = ', device.pushToken);
//    },
//    onNotificationReceived: function(notification) {
//        console.log('NOTIFICATION RECEIVED: ', notification);
//    },
//    onNotificationOpened: function(openResult) {
//        console.log('NOTIFICATION OPENED: ', openResult);
//        //if (!_navigator) { // Check if there is a navigator object. If not, waiting with the notification.
//        //    console.log('Navigator is null, adding notification to pending list...');
//        pendingNotifications.push(notification);
//        //    return;
//        // }
//        handleNotificationAction(openResult);
//    }
//});