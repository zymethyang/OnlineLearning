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



const document = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_COURSE_WITH_ID:
            state = action.document;
            return state;
    }
    return state;
}

export default document;