import React from 'react'
// import Login from '../components/Login'
import {Routes,Route} from 'react-router-dom'
import SignupContainer from '../containers/SignupContainer'
import LoginContainer from '../containers/LoginContainer'

const PublicRouter = () => {
  return (
    <>
   
  <Routes>
    <Route exact path="/" element={<LoginContainer/>}/>
    <Route exact path="/Login" element={<LoginContainer/>}/>
    <Route exact path="/signup" element={<SignupContainer/>}/>
  </Routes>
      
    </ >
  )
}

export default PublicRouter
