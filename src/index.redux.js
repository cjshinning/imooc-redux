
const ADD_GUN = 'INCREMENT'
const REMOVE_GUN = 'DECREMENT'

// reducer
export function counter(state = 10, action) {
    switch (action.type) {
        case 'INCREMENT':
        return state + 1
        case 'DECREMENT':
        return state - 1
        default:
        return state
    }
}

// action creator
export function addGUN(){
    return {type: ADD_GUN}
}

export function removeGUN(){
    return {type: REMOVE_GUN}
}