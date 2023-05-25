import './App.css'
import React from 'react'
import { Routes, Route } from "react-router-dom";
import SignUp from './components/sign up/sign_up';
import SignIn from './components/sign in/sign_in';


function App() {


  return (
    <React.Fragment>
      <Routes>
        <Route index element= {<SignUp/>}/>
        <Route path='signIn' element= {<SignIn/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default App
