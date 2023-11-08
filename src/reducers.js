import { CHANGE_SEARCH_FIELD } from './constans.js'

const initialState = {
    serachField: ""
}

export const searchRobots = (state = initialState, action = {}) => {
    switch (action.type){
        case CHANGE_SEARCH_FIELD:
        return Object.assign({}, state, {serachField: action.payload});
        default:
            return state;
    }
}
