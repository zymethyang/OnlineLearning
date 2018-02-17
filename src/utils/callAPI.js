import axios from 'axios';
import * as config from '../shared/config';

export default function callApi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `${config.BASE_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        throw err;
    });
};