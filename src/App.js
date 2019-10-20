import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Component from './components/Component/Component.jsx'
import Dialogs from './components/Dialogs/Dialogs.jsx'
import { Route } from 'react-router-dom'


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header></Header>
      <Navbar></Navbar>
      <div className='app-wrapper-content'>
        <Route path='/Dialogs' render={() => <Dialogs
          state={props.state.messagesPage}
          dispatch={props.dispatch}></Dialogs>}></Route>
        <Route path='/Component' render={() => <Component
          state={props.state.componentPage}
          dispatch={props.dispatch}></Component>}></Route>
      </div>
    </div>
  )
}
export default App;


