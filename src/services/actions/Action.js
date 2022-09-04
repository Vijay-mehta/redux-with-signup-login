import axios from 'axios'
import {SIGNUP} from '../Constances'
import {LOGIN} from '../Constances'



export const Signupfun = (payload) => async (dispatch) => {
    try{
        console.log(payload, 'thisispayload')
        const signupData = {
            method: 'POST',
            url:`${process.env.REACT_APP_BASEURL}/auth/signup`,
            headers:{
              authorzation:"take",
              "Content-Type":"application/Json"
            },
            data:payload
        }
        const {data} = await axios(signupData)
       dispatch({
        type: SIGNUP,
        payload: data
       })
    }
    catch(err){
        console.log(err, 'This is ERROR')
    }
}


export const loginfun = (payload) => async (dispatch) => {
    try{
        console.log(payload, 'thisispayload')
        const loginData = {
            method: 'POST',
            url:`${process.env.REACT_APP_BASEURL}/auth/login`,
            headers:{
              authorzation:"take",
              "Content-Type":"application/Json"
            },
            data:payload
        }
        const {data} = await axios(loginData)
    
       dispatch({
        type: LOGIN,
        payload: data
       })
    }
    catch(err){
        console.log(err, 'This is ERROR')
    }
}