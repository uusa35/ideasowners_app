import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './app/redux/store';
import { initialState } from './app/appConstants';
import Routes from './app/Routes';
import OneSignal from 'react-native-onesignal'; // Import package from node modules

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

//OneSignal.setLogLevel(OneSignal.LOG_LEVEL.DEBUG, OneSignal.LOG_LEVEL.DEBUG);

OneSignal.configure({
    onIdsAvailablefunction(device) {
        console.log('UserId = ', device.userId);
        console.log('PushToken = ', device.pushToken);
    },
    onNotificationReceived: function(notification) {
        console.log("notification received: ", notification);
    },
    onNotificationOpened: function(openResult) {
        console.log('MESSAGE: ', openResult.notification.payload.body);
        console.log('DATA: ', openResult.notification.payload.additionalData);
        console.log('ISACTIVE: ', openResult.notification.isAppInFocus);
        console.log('openResult: ', openResult);
        // Do whatever you want with the objects here
        // _navigator.to('main.post', data.title, { // If applicable
        //  article: {
        //    title: openResult.notification.payload.body,
        //    link: openResult.notification.payload.launchURL,
        //    action: data.openResult.notification.action.actionSelected
        //  }
        // });
    }
});