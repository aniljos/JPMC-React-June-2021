import {createStore, combineReducers} from 'redux';

const initAuthState = {
    isAuthenticated: false,
    accessToken: "",
    refreshToken: ""
}
const authReducer = (currentState=initAuthState, action) => {

    return currentState;
}

const initCartState = {
    cart: []
}
const cartReducer = (currentState=initCartState, action) => {

    return currentState;
}



//export const store = createStore(authReducer);
//export const store = createStore(combineReducers({auth: authReducer, shoppingCart: cartReducer}));

export const store = createStore(combineReducers({auth: authReducer, shoppingCart: cartReducer}), 
                            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());