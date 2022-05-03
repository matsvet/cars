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
                <img src='https://cdn-icons.flaticon.com/png/512/1435/premium/1435087.png?token=exp=1651241848~hmac=bff781e3fa0a96562207dad98058125a'/>
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