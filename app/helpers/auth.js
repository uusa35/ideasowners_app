/**
 * Created by usamaahmed on 1/3/17.
 */
import React from 'react'
import { AsyncStorage } from 'react-native';
import { appTokenKey , tokenValue } from '../appConstants';

export function setAuthToken(token) {
    return AsyncStorage.setItem(appTokenKey, token);
}

export function getAuthToken() {
    return AsyncStorage.getItem(appTokenKey);
}
