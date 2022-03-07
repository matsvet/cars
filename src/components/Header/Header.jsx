import React from "react";
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Button} from "antd";

const Header = () => {
    return <div className={style.header}>
        <div className={style.name}>
            <img src='https://berserkon.com/images/porsche-drawing-carrera-gt-4.png'/>
            <div className={style.item}>
                CarList
            </div>
        </div>

        <div className={style.signItem}>
            <NavLink to='/signin'>
                <Button size={"large"}>
                    Войти
                </Button>
            </NavLink>
        </div>
    </div>
}

export default Header;