import * as Type from '../constants/ActionTypes';
var initialState = { uid: '' };
const detail = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_DETAIL_USER:
        console.log(action);
            state = action.detail;
            return state;
    }
    return state;
}

export default detail;