import {SIGNUP} from '../Constances';
import {LOGIN} from '../Constances';


const initialState={
    userData:[]
}

export default function userSignup(state=initialState,action){
    switch(action.type){
        case SIGNUP:
            return{
                ...state,
                userData:action.payload
            }
            default:
                return state
    }



}

function userLogin(state=initialState,action){
    switch(action.type){
        case LOGIN:
            return{
                ...state,
                userData:action.payload
            }
            default:
                return state
    }

}

export  {userLogin};
// export {userSignup, userLogin};