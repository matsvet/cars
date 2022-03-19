import React, {useContext} from "react";
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Button} from "antd";
import {Context} from "../../firebase/firebase";
import {useAuthState} from "react-firebase-hooks/auth";

const Header = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return <div className={style.header}>
        <div className={style.name}>
            <NavLink to='/'>
                <img src='https://www.pngkey.com/png/full/442-4425060_tesla-model-3-filled-icon-tesla-model-3.png'/>
            </NavLink>
            <NavLink to='/'>
                <div className={style.item}>
                    CarList
                </div>
            </NavLink>
        </div>
        <div className={style.slogan}>
            Подбери идеальный авто
        </div>
        <div className={style.signItem}>
            {user ?
                <Button danger size={"large"} onClick={() => auth.signOut()}>
                    Выйти
                </Button>
                :
                <NavLink to='/signin'>
                    <Button size={"large"}>
                        Войти
                    </Button>
                </NavLink>
            }
        </div>
    </div>
}

export default Header;