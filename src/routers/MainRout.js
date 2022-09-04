import React from 'react'
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from '../components/Header';
const MainRout = () => {
  return (
    <>
    <Header/>
  
      <Router>
        <PublicRouter/>
        <PrivateRouter/>
      </Router>
    </>
  )
}

export default MainRout
