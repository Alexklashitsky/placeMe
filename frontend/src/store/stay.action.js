import { stayService } from '../services/stay.service.js'


export function loadStays() {
    return (dispatch, getState) => {
        const { staysModule: { filterBy } } = getState()
        // console.log('filterBy:', filterBy);

        stayService.query(filterBy).then((stays) => {
            const action = { type: 'SET_STAYS', stays }
            console.log('stays in action:', stays);

            dispatch(action)
        })
    }
}
