import axios from 'axios'
import {IRecord} from '../model/IRecord'

export function fetchDataTable() {
    return axios.get(`/api/users`).then(res => res.data as IRecord[])
}
