import * as cons from '../../appConstants';
import React from 'react';
import { Alert , AsyncStorage , NetInfo } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { setAuthToken } from '../../helpers/auth';
import { checkInternetConnection } from '../../helpers/connection'

let propertiesActions = {


    goOnline: function (isConnected) {
        return {
            type: cons.goOnline,
            isConnected: isConnected
        }
    },

    checkConnection: function () {
        return (dispatch) => {
            var isConnected = checkInternetConnection();
            console.log(isConnected);
            //if (isConnected) {
            //    return dispatch(propertiesActions.goOnline(isConnected))
            //} else {
            //    return Alert.alert('Sys Message', 'there is no connection');
            //}
        }
    },


    enableLoading: function () {
        return {
            type: cons.enableLoading,
            isLoading: true
        }
    },
    disableLoading: function () {
        return {
            type: cons.disableLoading,
            isLoading: false
        }
    },

    alertMessage(isError, message = '') {
        return (dispatch) => {
            if (isError) {
                Alert.alert('Error Message', message);
            } else {
                Alert.alert('Success Message', message);
            }
            dispatch(propertiesActions.toggleError(false));
        }
    },

    toggleError(isError, message = '') {
        return {
            type: cons.toggleError,
            isError,
            message
        }
    },

    logging: function (email, password) {
        return (dispatch) => {
            dispatch(propertiesActions.enableLoading());
            fetch(cons.apiRoute + 'auth', {
                method: 'POST',
                headers: new Headers({
                    "accept": cons.accept,
                    "content-type": cons.accept
                }),
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }).then((response) => {
                if (response.ok) {
                    response.json().then(json => {
                        dispatch(propertiesActions.login(json.token));
                        if (json.token !== null) {
                            setAuthToken(json.token).then(() => {
                                Actions.Home();
                            }).then(() => {
                                Alert.alert('Ideasowners', 'You have logged in successfully');
                            });

                        } else {
                            console.log('error occured token is null');
                        }
                    }).catch((e) => {
                        console.log(e.message);
                    });
                } else {
                    response.json().then(json => {
                        Alert.alert('Ideasowners Message', json.error);
                    }).catch((e) => {
                        console.log(e)
                    });
                    console.log('Network response was not ok.');
                }
                dispatch(propertiesActions.disableLoading());
            }).catch(e => console.log(e));

        }
    },
    login: function (token) {
        return {
            type: cons.login,
            token: token,
            isLogged: true
        }
    }
}

export default propertiesActions;