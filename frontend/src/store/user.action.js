import {userService} from '../services/user.service.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'


export function login(credentials) {
    return (dispatch) => {
        userService.login(credentials)
        .then(user => {
            // console.log('Added Car', savedCar);
            const action = {type: 'SET_USER', user}
            dispatch(action)
            showSuccessMsg('Loggein')
        })
        .catch(err => {
            showErrorMsg('Cannot login')
        })       
    }
}
export function signup(credentials) {
    return (dispatch) => {
        userService.signup(credentials)
        .then(user => {
            // console.log('Added Car', savedCar);
            const action = {type: 'SET_USER', user}
            dispatch(action)
            showSuccessMsg('Signed up')
        })
        .catch(err => {
            showErrorMsg('Cannot signup')
        })       
    }
}
export function logout() {
    return (dispatch) => {
        userService.logout()
        .then(() => {
            // console.log('Added Car', savedCar);
            const action = {type: 'SET_USER', user: null}
            dispatch(action)
            showSuccessMsg('Logged out')
        })
        .catch(err => {
            showErrorMsg('Cannot logout')
        })       
    }
}
