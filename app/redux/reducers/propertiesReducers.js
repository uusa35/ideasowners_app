import * as cons from '../../appConstants';

let propertiesReducer = function (properties = {}, action) {

    switch (action.type) {

        case cons.enableLoading :
            return Object.assign({}, properties, {

                isLoading: action.isLoading

            });

        case cons.disableLoading :
            //return {...properties,{}}
            return Object.assign({}, properties, {
                isLoading: action.isLoading
            });

        case cons.login :
            return Object.assign({}, properties, {

                token: action.token,
                isLogged: true

            });

        case cons.toggleError :
            return Object.assign({}, properties, {
                isError: action.isError,
                message: action.errorMessage
            });

        case cons.goOnline :
            return Object.assign({}, properties, {
                isConnected: action.isConnected
            })
        default :
            return properties;
    }
}

export default propertiesReducer;

