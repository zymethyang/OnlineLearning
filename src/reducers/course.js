import * as Type from '../constants/ActionTypes';
var initialState = { uid: '' };
const course = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_COURSE_BY_USER:
            console.log(action);
            return state;
    }
    return state;
}

export default course;