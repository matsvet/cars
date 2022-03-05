import React from "react";
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <div className={style.navbar}>
        <div className={style.item}>
            <NavLink to='/cars'>
                Автомобили
            </NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='/favourites'>
                Избранное
            </NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='/news'>
                Новости
            </NavLink>
        </div>
    </div>
}

export default Navbar;