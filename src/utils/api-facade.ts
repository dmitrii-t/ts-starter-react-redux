import axios from 'axios';
import {IUser} from '../model/IUser';

export function loadUsersAPI() {
    return axios.get(`/api/users`).then(res => res.data as IUser[]);
}
