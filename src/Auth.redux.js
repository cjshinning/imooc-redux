import axios from 'axios'

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const USR_DATA = 'USR_DATA'

// reducer
const initState = {
    isAuth:false,
    user:'李云龙',
    age: 20
};
export function auth(state=initState,action){
    console.log(state, action)
    switch(action.type){
        case LOGIN:
            return {...state,isAuth:true}
        case LOGOUT:
        return {...state,isAuth:false}
        case USR_DATA: 
            return {...state, user: action.payload.user, age: action.payload.age}
        default:
            return state
    }
}

// action
export function getUserData(){
    return dispatch => {
        axios.get('/data')
            .then(res=>{
                dispatch(userData(res.data))
            })
    }
}

export function userData(data){
    return {type: USR_DATA, payload: data}
}

export function login(){
    return {type: LOGIN}
}

export function logout(){
    return {type: LOGOUT}
}