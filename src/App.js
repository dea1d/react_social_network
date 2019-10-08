import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Component from './components/Component/Component.jsx'


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header></Header>
      <Navbar></Navbar>
      <Component></Component>
    </div>
  )
}
export default App;


