import { combineReducers } from 'redux';
import users from './users';
import detail from './detail';
import course from './course';

const appReducers = combineReducers({
    users: users,
    detail: detail
});

export default appReducers;
