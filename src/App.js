import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import DialogContainer from './components/Dialogs/DialogContainer.jsx'
import { Route } from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';



const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer></HeaderContainer>
      <Navbar></Navbar>
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() => <DialogContainer store={props.store} />} />
        <Route path='/profile/:userId?' render={() => <ProfileContainer store={props.store} />} />
        <Route path='/users' render={() => <UsersContainer store={props.store} />} />
      </div>
    </div>
  )
}
export default App;


