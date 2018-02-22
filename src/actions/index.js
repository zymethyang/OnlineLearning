import * as Type from '../constants/ActionTypes';
import * as firebase from "firebase";
import * as config from '../shared/firebase';
import callApi from '../utils/callAPI';
import syncData from '../utils/syncData';

firebase.initializeApp(config.config);


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

export const getToken = () => {
    return dispatch => {
        var user = firebase.auth().onAuthStateChanged(user => {
            dispatch(dispatchToken(user.pa));
        });
    }
}

export const dispatchToken = (data) => {
    return {
        type: Type.GET_TOKEN,
        token: data
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


export const getDetailUser = (token) => {
    return dispatch => {
        return syncData(`user`, 'GET', null, token).then(res => {
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

export const getCourseByUser = (data, token) => {
    return dispatch => {
        return syncData(`course/id`, 'POST', data, token).then(res => {
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

export const postCourse = (data, token) => {
    return dispatch => {
        return syncData(`course`, 'POST', data, token).then(res => {
            console.log(res);
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
