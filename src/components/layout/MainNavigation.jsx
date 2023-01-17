import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>Great Quotes</div>
        <nav className={classes.nav}>
            <ul>
                <li><NavLink activeClassName={classes.actve} to='/quotes'>All Quotes</NavLink></li>
                <li><NavLink activeClassName={classes.active} to='/newQuote'>Add a Quote</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation