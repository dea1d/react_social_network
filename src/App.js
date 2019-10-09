import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Component from './components/Component/Component.jsx'
import Dialogs from './components/Dialogs/Dialogs.jsx'
import {BrowserRouter, Route} from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header></Header>
        <Navbar></Navbar>
        <div className='app-wrapper-content'>
          <Route path='/Dialogs' component={Dialogs}></Route>
          <Route path='/Component' component={Component}></Route>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App;


