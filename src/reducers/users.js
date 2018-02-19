import * as Type from '../constants/ActionTypes';
var initialState = { uid: '' };
const users = (state = initialState, action) => {
    switch (action.type) {
        case Type.LOGIN:
            if (action.users !== null) {
                state = action.users;
                return state;
            }
        case Type.GET_CURRENT_USER:
            console.log(action)
            state = action.users;
            return state;
    }
    return state;
}

export default users;