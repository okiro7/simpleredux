import {LOAD_TICKETS, SHOW_LOADER, HIDE_LOADER} from './types'

const initState = {
    tickets: [],
    isLoading: true
}

export default(state = initState, action) => {
    switch (action.type) {
        case LOAD_TICKETS:
            return {
                ...state,
                tickets: action.payload
            }
        case SHOW_LOADER:
        case HIDE_LOADER:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}
