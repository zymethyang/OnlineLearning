import * as Type from '../constants/ActionTypes';
import * as firebase from "firebase";
import * as config from '../shared/firebase';
import callApi from '../utils/callAPI';

firebase.initializeApp(config.config);
var database = firebase.database();

export const register = ({ email, password, teacher = false, img, name, course }) => {
    return dispatch => {
        
    }
}

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


export const getDetailUser = (uid) => {
    return dispatch => {
        return callApi(`users?uid=${uid}`, 'GET', null).then(res => {
            dispatch(dispatchDetailUser(res.data));
        })
    }
}

export const dispatchDetailUser = (data) => {
    return {
        type: Type.GET_DETAIL_USER,
        detail: data
    }
}

export const getCourseByUser = (data) => {
    return dispatch => {
        return callApi(`course/${data}`, 'GET', null).then(res => {
            dispatch(dispatchCourseByUser(res.data));
        })
    }
}

export const dispatchCourseByUser = (data) => {
    return {
        type: Type.GET_COURSE_BY_USER,
        course: data
    }
}

export const postCourse = ({ id, name, description, img, uid }) => {
    return dispatch => {
        return callApi(`users?uid=${uid}`).then(res => {
            dispatch(dispatchPostCourse(res.data));
        })
    }
}

export const dispatchPostCourse = (data) => {
    return {
        type: Type.ADD_COURSE,
        data: data
    }
}