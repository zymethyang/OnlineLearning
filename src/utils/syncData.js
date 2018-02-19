import axios from 'axios';
import * as config from '../shared/config';

export default function syncData(endpoint, method = 'GET', body, token) {
    return axios({
        method: method,
        url: `${config.BASE_URL}${endpoint}`,
        data: body,
        headers: { 'token': token }
    }).catch(err => {
        throw err;
    });
};
