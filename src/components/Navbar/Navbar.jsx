import React, {Component} from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <a href="#">News</a>
            </div>
            <div className={s.item}>
                <a href="#">Music</a>
            </div>
            <div className={s.item}>
                <a href="#">Settings</a>
            </div>
            <div></div>
            <div className={s.item}>
                <NavLink to="/sidebar" activeClassName={s.activeLink}>Sidebar</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;