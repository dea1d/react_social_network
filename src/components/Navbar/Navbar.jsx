import React from 'react'
import classes from './Navbar.module.css'

// let classes =  {
//     "nav": "Navbar_nav__3Kbng",
// 	"item": "Navbar_item__2zChe"
// }
const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><a>Profile</a></div>
            <div className={classes.item}><a>Message</a></div>
            <div className={classes.item}><a>Music</a></div>
            <div className={classes.item}><a>News</a></div>
            <div className={classes.item}><a>Settings</a></div>
        </nav>
    )
}

export default Navbar