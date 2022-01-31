import Axios from 'axios';
import { httpService } from './http.service';
var axios = Axios.create({
  withCredentials: true,
});

const STORAGE_KEY_LOGGEDIN = 'loggedinUser';

export const userService = {
  login,
  logout,
  signup,
  getLoggedinUser,
  getEmptyUser,
};

async function login(credentials) {
  // console.log('cred in services', credentials);
  try {
    const user = await httpService.post(`api/auth/login`, credentials);
    _setLoggedinUser(user.data);
    return user.data;
  } catch (err) {
    console.log('userserivce-front-eror', err);
  }
}

async function signup(userInfo) {
  try {
    const user = await httpService.post(`api/auth/signup`, userInfo);
    _setLoggedinUser(user.data);
    return user.data;
  } catch (err) {
    console.log('userserivce-front-eror', err);
  }
}

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN));
}

function _setLoggedinUser(user) {
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user));
}

function logout() {
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, null);
  return httpService.post(`api/auth/logout`);
  // return Promise.resolve()
}

function getEmptyUser() {
  return {
    username: '',
    password: '',
    fullname: '',
  };
}
