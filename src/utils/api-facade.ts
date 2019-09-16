import axios from 'axios'
import {IUser} from '../model/IUser'

export function loadDataTable() {
    return axios.get(`/api/users`).then(res => res.data as IUser[])
}
