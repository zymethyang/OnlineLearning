import * as Type from '../constants/ActionTypes';
import * as firebase from "firebase";
import * as config from '../shared/firebase';

firebase.initializeApp(config.config);


export const login = ({ email, password }) => {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(data => {
                dispatch(loginDispatch(data));
            })
    }
}

export const loginDispatch = (data) => {
    return {
        users: data,
        type: Type.LOGIN
    }
}

export const logout = () => {
    return dispatch => {
        firebase.auth().signOut().then(data => {
            dispatch(logoutDispatch(data));
        })
    }
}

export const logoutDispatch = (data) => {
    return {
        type: Type.LOGOUT,
        users: data
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        var user = firebase.auth().onAuthStateChanged(user => {
            dispatch(getCurrentUserDispatch(user));
        });
    }
}

export const getCurrentUserDispatch = (data) => {
    return {
        type: Type.GET_CURRENT_USER,
        users: data
    }
}

