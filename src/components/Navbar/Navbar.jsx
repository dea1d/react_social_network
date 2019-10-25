import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/component' activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' activeClassName={classes.active}>Message</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users' activeClassName={classes.active}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='#'>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='#'>Settings</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='#'>Music</NavLink>
            </div>
        </nav>
    )
}

export default Navbar