import * as Type from '../constants/ActionTypes';
var initialState = [
    {
        _id: null,
        id: null,
        name: null,
        description: null,
        image: null,
        startedAt: null,
        updatedAt: null,
        __v: 0,
        document: [],
        stream: [],
        member: [
        ]
    }]
const course = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_COURSE_BY_USER:
            state = action.course;
            return state;
    }
    return state;
}

export default course;