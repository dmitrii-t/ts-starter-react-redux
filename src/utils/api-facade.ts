import axios from 'axios';
import { IUserDTO } from '../../shared/IUser';

export function loadUsersAPI() {
  return axios.get(`/api/users`).then(res => res.data as IUserDTO[]);
}
