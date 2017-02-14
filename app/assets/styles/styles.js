import  React , { Component } from 'react';
import { StyleSheet , Platform , Dimensions } from 'react-native';

let { height , width } = Dimensions.get('window');

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: height,
        width: width
    },
    bg: {
        flex: 1,
        resizeMode: 'cover',
        width: undefined,
        height: undefined
    },
    headerTitle: {
        color: 'gold',
        fontSize: 30,
        fontWeight: 'bold'
    },
    postItemControl: {
        flex: 1,
        flexDirection: 'row',
        paddingRight: 25,
        width: width,
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    postShowControl: {
        flex: 1,
        flexDirection: 'row-reverse',
        padding: 20,
        paddingTop: 5,
        width: width,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    postShowSubControl: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    btnDate: {
        width: width / 3
    },
    btnEdit: {
        borderRadius: 8,
        marginRight: 25,
    },
    cardMain: {
        flex: 1,
        shadowColor: 'lightgrey',
        shadowOpacity: 3,
        shadowRadius: 3,
        minHeight: height - 100
    },
    cardImage: {
        resizeMode: 'center',
        maxWidth: width,
    },
    textBody: {
        padding: 5,
        textAlign: 'right',
        borderWidth: 0,
        borderTopWidth: 3,
        borderColor: 'transparent',
        borderTopColor: 'red'
    },
    cellMore: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4
    },
    listItemMore: {
        backgroundColor: '#f2f2f2',
        marginTop: 0
    },
    iconMore: {
        fontSize: 20,
        color: '#331100'
    },
    textMore: {
        paddingLeft: 7,
        fontSize: 20,
        lineHeight: 23,
        color: '#262626',
        fontWeight: 'bold'
    },
    map: {
        width: width,
        height: height
    },
    imagePostShow: {
        resizeMode: 'cover',
        width: null,
        minHeight: height - 300
    },

    // PostItem + PostShow
    postItemCard: {
        flex: 0,
    },
    postItemCardItem: {
        height: height / 2 + 100,
        width: width
    },
    postItemImage: {
        resizeMode: 'cover',
        width: width,
        height: height / 2 + 100
    },
    postShowCard: {
        flex: 0,
    },
    postShowCardItem: {
        height: height / 2 + 100,
        width: width
    },
    postShowTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 7
    },
    postShowImage: {
        resizeMode: 'cover',
        width: width,
        height: height / 2 + 100
    },
    PostImageShowModalcontainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        backgroundColor: 'black',
    },
    postShowImageModal: {
        marginTop: (Platform.OS === 'ios' ) ? null : 70,
        height: (Platform.OS === 'ios' ) ? height - 50 : height,
        width: width
    },
    postShowBtnModal: {
        alignSelf: 'flex-end',
        marginTop: 15
    },
});

export default styles;