import { combineReducers } from 'redux';
import users from './users';
import detail from './detail';

const appReducers = combineReducers({
    users: users,
    detail: detail
});

export default appReducers;
