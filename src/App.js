import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Component from './components/Component/Component.jsx'
import DialogContainer from './components/Dialogs/DialogContainer.jsx'
import { Route } from 'react-router-dom'


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header></Header>
      <Navbar></Navbar>
      <div className='app-wrapper-content'>
        <Route path='/Dialogs' render={() => <DialogContainer store={props.store} />} />
        <Route path='/Component' render={() => <Component store={props.store} />} />
      </div>
    </div>
  )
}
export default App;


