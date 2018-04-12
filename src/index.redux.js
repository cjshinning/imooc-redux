
const ADD_GUN = 'INCREMENT'
const REMOVE_GUN = 'DECREMENT'

// reducer
export function counter(state = 0, action) {
    switch (action.type) {
        case ADD_GUN:
            return state + 1
        case REMOVE_GUN:
            return state - 1
        default:
            return state = 10
    }
}

// action creator
export function addGUN(){
    return {type: ADD_GUN}
}

export function removeGUN(){
    return {type: REMOVE_GUN}
}

export function addGUNAsync(){
    return dispatch => {
        setTimeout(() => {
            dispatch(addGUN())
        }, 2000)
    }
}