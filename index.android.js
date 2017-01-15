import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './app/redux/store';
import { initialState } from './app/appConstants';
import Routes from './app/Routes';

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