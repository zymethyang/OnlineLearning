import * as Type from '../constants/ActionTypes';
var initialState = '';
const token = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_TOKEN:
            state = action.token;
            return state;
    }
    return state;
}

export default token;