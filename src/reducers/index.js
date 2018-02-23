import { combineReducers } from 'redux';
import users from './users';
import detail from './detail';
import course from './course';
import token from './token';
import document from './document';

const appReducers = combineReducers({
    detail: detail,
    token: token,
    course: course,
    document: document
});

export default appReducers;
