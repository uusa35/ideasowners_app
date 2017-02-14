import React from 'react';
import { Alert , Platform } from 'react-native';
import * as cons from '../../appConstants';
import propertiesActions from '../../redux/actions/propertiesActions';
import { getAuthToken } from '../../helpers/auth';
import { Actions } from 'react-native-router-flux'

let postActions = {
    postFetch: function () {
        return (dispatch) => {
            dispatch(propertiesActions.enableLoading());
            fetch(cons.apiRoute + 'posts', {
                method: 'GET',
                'headers': new Headers({
                    'accept': cons.accept,
                })
            }).then(response => response.json()).then(json => {
                dispatch(propertiesActions.disableLoading());
                dispatch(postActions.postIndex(json));
            }).catch((e) => {
                //console.log(e);
                Alert.alert('Error Message', 'Connection error with our servers ...',
                    [
                        {text: 'Cancel', onPress: () => null, style: 'cancel'},
                        {
                            text: 'Reconnect', onPress: () => {
                            dispatch(postActions.postFetch());
                            Actions.Home();
                        }
                        },
                    ]);
            });
        }
    },
    postIndex: function (posts) {
        return {
            type: cons.postIndex,
            posts
        }
    },

    postStore: function (post) {
        console.log(post);
        return (dispatch) => {
            getAuthToken().then(token => {
                let imageUpload = {
                    uri: post.image.imageFilePath,
                    type: (Platform.OS === 'ios' ) ? post.image.imageFileType : 'image/jpeg',
                    name: post.image.imageFileName
                }
                var body = new FormData();
                body.append('image', imageUpload);
                body.append('title', post.title);
                body.append('body', post.body);
                if (post.notification === "1") {
                    body.append('notification', post.notification);
                }


                console.log(post.notification);

                var xhr = new XMLHttpRequest();
                xhr.withCredentials = true;


                xhr.onreadystatechange = (e) => {

                    if (xhr.readyState !== 4) {
                        return;
                    }

                    if (xhr.status === 200) {
                        var json = JSON.parse(xhr.responseText);
                        Alert.alert('System Message : Success', json.message);
                        Actions.Home();
                    } else {
                        console.log(xhr.responseText);
                        var json = JSON.parse(xhr.responseText);
                        Alert.alert('System Message : Error', json.message);
                    }
                };

                xhr.open("POST", cons.apiRoute + 'post');
                xhr.setRequestHeader("authorization", "Bearer " + token);
                xhr.setRequestHeader("accept", cons.accept);
                xhr.setRequestHeader("cache-control", "no-cache");
                xhr.setRequestHeader("form", "multipart/form-data");
                xhr.send(body);
            });
        }
    },

    postUpdate: function (post) {
        return (dispatch) => {
            getAuthToken().then(token => {
                let imageUpload = {
                    uri: (Platform.OS === 'ios') ? post.image.imageFilePath : post.image.imageFilePath.toString(),
                    type: (Platform.OS === 'ios' ) ? post.image.imageFileType : 'image/jpeg',
                    name: post.image.imageFileName
                }
                var body = new FormData();
                if (Platform.ios === 'ios') {
                    body.append('image', imageUpload);
                }
                else {
                    if (!post.image.imageFilePath.indexOf('http') >= 0) {
                        body.append('image', imageUpload);
                    }
                }
                body.append('title', post.title);
                body.append('body', post.body);
                body.append('id', post.id);
                body.append('_method', 'PATCH');

                var xhr = new XMLHttpRequest();
                xhr.withCredentials = true;


                xhr.onreadystatechange = (e) => {

                    if (xhr.readyState !== 4) {
                        return;
                    }

                    if (xhr.status === 200) {
                        var json = JSON.parse(xhr.responseText);
                        Alert.alert('System Message : Success', json.message);
                        Actions.Home();
                    } else {
                        console.log(xhr.responseText);
                        var json = JSON.parse(xhr.responseText);
                        Alert.alert('System Message : Error', json.message);
                    }
                };

                xhr.open("POST", cons.apiRoute + 'post/' + post.id);
                xhr.setRequestHeader("authorization", "Bearer " + token);
                xhr.setRequestHeader("accept", cons.accept);
                xhr.setRequestHeader("cache-control", "no-cache");
                xhr.setRequestHeader("form", "multipart/form-data");
                xhr.send(body);
            });
        }
    },

    postDelete: function (id) {
        return (dispatch) => {
            getAuthToken().then(token => {
                var body = new FormData();
                body.append('id', id);
                body.append('_method', 'DELETE');

                var xhr = new XMLHttpRequest();
                xhr.withCredentials = true;


                xhr.onreadystatechange = (e) => {

                    if (xhr.readyState !== 4) {
                        return;
                    }

                    if (xhr.status === 200) {
                        var json = JSON.parse(xhr.responseText);
                        Alert.alert('System Message : Success', json.message);
                        Actions.Home();
                    } else {
                        var json = JSON.parse(xhr.responseText);
                        Alert.alert('System Message : Error', json.message);
                    }
                };

                xhr.open("POST", cons.apiRoute + 'post/' + id);
                xhr.setRequestHeader("authorization", "Bearer " + token);
                xhr.setRequestHeader("accept", cons.accept);
                xhr.setRequestHeader("cache-control", "no-cache");
                xhr.send(body);
            });
        }
    },
}

export default postActions;