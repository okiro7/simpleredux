import {getTickets} from '../lib/todoServices'

import {LOAD_TICKETS, SHOW_LOADER, HIDE_LOADER} from './types'

export const loadTodos = tickets => ({type: LOAD_TICKETS, payload: tickets})
export const showLoader = () => ({type: SHOW_LOADER, payload: true})
export const hideLoader = () => ({type: HIDE_LOADER, payload: false})

export const fetchTodos = () => (dispatch) => {
    dispatch(showLoader())
    getTickets().then((tickets) => {
        dispatch(loadTodos(tickets))
        dispatch(hideLoader())
    })
}

export const getAllTickets = (tickets) => {
    return tickets;
}
