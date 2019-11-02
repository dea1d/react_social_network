import React from 'react'
import { headerAll } from './../../assets/styles/styles'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <header style={headerAll.headerCom}>
      <img style={headerAll.headerImg} src='http://files-warehouse.com/size_200/files/channel/34/344e/344e6c07a29aced8ffedef135664fd2b.jpg'></img>
      <div style={headerAll.loginBlog}>
        {props.isAuth ? props.login :
          <NavLink to={'login/'}>Login</NavLink>
        }
      </div>
    </header>
  )
}

export default Header