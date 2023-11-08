import { CHANGE_SEARCH_FIELD } from './constans.js'

export const setSearchfield = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})
