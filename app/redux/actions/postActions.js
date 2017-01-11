import React from 'react';
import { Alert } from 'react-native';
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
                console.log(e);
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
        return (dispatch) => {
            getAuthToken().then(token => {
                let imageUpload = {
                    uri: post.image.imageFilePath,
                    type: post.image.imageFileType,
                    name: post.image.imageFileName
                }
                var body = new FormData();
                body.append('image', imageUpload);
                body.append('title', post.title);
                body.append('body', post.body);

                var data = new FormData();
                data.append("image", imageUpload);
                data.append("title", post.title);
                data.append("body", post.body);

                var xhr = new XMLHttpRequest();
                xhr.withCredentials = true;


                xhr.onreadystatechange = (e) => {

                    if (xhr.readyState !== 4) {
                        return;
                    }

                    if (xhr.status === 200) {
                        var json = JSON.parse(xhr.responseText);
                        Alert.alert('System Message', json.message + 'Post saved successfully .. thank u');
                        dispatch(postActions.postFetch());
                        Actions.Home();
                    } else {
                        console.log('the whole response');
                        console.log(xhr.response);
                        dispatch(propertiesActions.alertMessage(true, xhr.response + 'Post not saved successfully !!'));
                    }
                };

                xhr.open("POST", "http://api.ideasowners.net/api/post");
                xhr.setRequestHeader("authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL2FwaS5pZGVhc293bmVycy5uZXRcL2FwaVwvYXV0aCIsImlhdCI6MTQ4Mzk3NDIyOSwiZXhwIjoxNDg2NjAyMjI5LCJuYmYiOjE0ODM5NzQyMjksImp0aSI6IjEzMDJhY2E5Mjg2ZjNjMTA4Njk4MTY0YjgzYTE0NzM4In0.T4cZUSH9Ll7JOqXreUn5p19yWa8iGQsVuGiSkxYLEsA");
                xhr.setRequestHeader("accept", "application/json");
                xhr.setRequestHeader("cache-control", "no-cache");
                xhr.setRequestHeader("postman-token", "86bcef01-9207-45cd-c234-b24466aa3ac7");

                xhr.send(data);
            });
        }
    }
}

export default postActions;