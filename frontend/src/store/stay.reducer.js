import { userService } from '../services/user.service.js'


const initialState = {

}

export function staysReducer(state = initialState, action) {

    let newState = state;

    switch (action.type) {
        case 'ADD_COUNT':
            newState = { ...state, count: state.count + action.diff }
            break;
        case 'DECREASE_COUNT':
            newState = { ...state, count: state.count - action.diff }
            break;
        case 'SET_STAYS':
            newState = { ...state, stays: [...action.stays] }
            break;
        case 'ADD_TOY':
            newState = { ...state, toys: [...state.toys, action.toy] }
            break;
        case 'REMOVE_TOY':
            newState = { ...state, toys: state.toys.filter(toy => toy._id !== action.toyId) }
            break;
        case 'UPDATE_TOY':
            newState = {
                ...state, cars: state.cars.map(currToy => {
                    return (currToy._id === action.toy._id) ? action.toy : currToy
                })
            }
            break;
        case 'ADD_TOY_TO_CART':
            newState = { ...state, cart: [...state.cart, action.car] }
            break;
        case 'REMOVE_TOY_FROM_CART':
            newState = { ...state, cart: state.cart.filter(car => car._id !== action.carId) }
            break;
        case 'CLEAR_CART':
            newState = { ...state, cart: [] }
            break;

        case 'SET_FILTER':
            newState = { ...state, filterBy: { ...action.filterBy } }
            break

    }
    return newState;
}
