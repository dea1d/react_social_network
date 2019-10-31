import React from 'react'
import h from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className={h.header}>
      <img src='http://files-warehouse.com/size_200/files/channel/34/344e/344e6c07a29aced8ffedef135664fd2b.jpg'></img>
      <div className={h.loginblog}>
        {props.isAuth ? props.login :
          <NavLink to={'login/'}>Login</NavLink>
        }
      </div>
    </header>
  )
}

export default Header