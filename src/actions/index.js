import * as Type from '../constants/ActionTypes';
import callApi from '../utils/callAPI';
import syncData from '../utils/syncData';
const firebase = require('../shared/firebase');

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

const exportImage = (url) => {
    return new Promise((resolve, reject) => {
        var storageRef = firebase.storage().ref(url);
        storageRef.getDownloadURL().then(link => {
            resolve(link);
        })
    })
}

export const getCourseByUser = (data, token) => {
    return dispatch => {
        return syncData(`course/id`, 'POST', data, token).then(res => {

            var promise = new Promise((resolve, reject) => {
                res.data.map(course => {
                    exportImage(course.image).then(image => {
                        course.image = image
                    })
                    return course
                })
                resolve(true);
            })

            promise.then(() => {
                setTimeout(() => {
                    dispatch(dispatchCourseByUser(res.data));
                }, 1000)
            })
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

export const postDocument = (data, token) => {
    return dispatch => {
        return syncData(`course/add/document`, 'POST', data, token).then(res => {
            dispatch(disptachDocument(res.data));
        })
    }
}

export const disptachDocument = (data) => {
    return {
        type: Type.ADD_DOCUMENT,
        data: data
    }
}



export const getCourseWithID = (data, token) => {
    return dispatch => {
        return syncData(`course/id`, 'POST', data, token).then(res => {
            if (res.data[0]) {
                var promise = new Promise((resolve, reject) => {
                    res.data[0].document.map(doc => {
                        exportImage(doc.link).then(link => {
                            doc.link = link
                        })
                        return doc;
                    })
                    resolve(true);
                })

                promise.then(() => {
                    setTimeout(() => {
                        dispatch(dispatchCourseWithID(res.data[0]));
                    }, 1000)
                })
            }
        })
    }
}

export const dispatchCourseWithID = (data) => {
    return {
        type: Type.GET_COURSE_WITH_ID,
        document: data
    }
}