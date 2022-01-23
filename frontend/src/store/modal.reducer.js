
const initialState = {
    currModalShown: ''
}

export function modalReducer(state = initialState, action) {

    let newState = state;

    switch (action.type) {
        case 'MODAL_TOGGLE':
            newState = { ...state, currModalShown: { ...action.currModalShown } }
            break;


    }
    return newState;
}