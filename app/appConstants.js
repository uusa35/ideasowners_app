/**
 * Created by usamaahmed on 12/24/16.
 */
export const initialState = {
    properties: {
        isLoading: false,
        isError: false,
        token : null,
        isLogged : false,
        message : '',
        isConnected : true
    },
    posts: []
}

export const accept = 'application/json';
export const content = 'application/json';
//export const appRoute = 'http://ideas.app/';
export const appRoute = 'http://api.ideasowners.net/';
export const apiRoute =  appRoute + 'api/';
export const imagesRoute =  appRoute + 'storage/uploads/images/';
export const mediumImageRoute = imagesRoute + 'medium/';
export const largeImageRoute = imagesRoute + 'large/';
export const webViewLink = 'http://ideasowners.net';
export const appPhoneMeessage = 'Our Phone Number is : 98824010';
export const appTokenKey = '@Ideasowners:token';

// actions

//loading
export const toggleLoading = 'TOGGLE_LADING';
export const toggleError = 'TOGGLE_ERROR';


export const enableLoading = 'ENABLE_LOADING';
export const disableLoading = 'DISABLE_LOADING';
export const login = 'Login';
// error
export const enableError = 'ENABLE_ERROR';
export const disableError = 'DISABLE_ERROR';

export const postIndex = 'POST_INDEX';
export const postShow = 'POST_SHOW';

export const postStore = 'POST_STORE';
export const checkConnection = 'CHECK_CONNECTION';
export const goOnline = 'GO_ONLINE';

// titles
export const vars = {
    title: {
        news: 'news',
        services: 'services',
        contactus: 'contact us',
        portfolio: 'portfolio',
        ideasowners: 'idesaowners',
        postShow: 'view post',
        postCreate : 'New Post',
        postEdit : 'Edit post',
        more: 'More ...',
        webview : 'Our Site',
        location : 'Our Location',
        about : 'About',
        postStore : 'Save a Post',
        login : 'Login',

    },
    email : 'info@ideasowners.net',
    phone : '98824010',
    twitter : '@ideasowners',
    facebook : 'ideasowners',
    aboutus : "IdeasOwners Established on 2013 as a pioneering firm in the Online field.We offer you a wide range of Online services and presenting inventive solutions. It’s IdeasOwners pleasure to addresses all your Business needs and deliver the Best Quality for You and Your Business.",
    blogLink : 'http://www.ideasowners.com',
    graphicDesignURL : 'http://ideasowners.net/index.php/ads/',
    mobileApsURL : 'https://itunes.apple.com/sa/developer/ebrahim-alnassar/id590438830',
    websitesURL : 'http://ideasowners.net/index.php/websites/',
    servicesURL : 'http://ideasowners.net/index.php/our-services/',
    longitude : '47.984519',
    latitude : '29.377072'

}
