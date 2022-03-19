import React from "react";
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {Button, Menu, Switch} from 'antd';
import {
    MailOutlined, AppstoreOutlined, SettingOutlined, CarOutlined, PaperClipOutlined,
    HeartOutlined, SearchOutlined, CheckSquareOutlined, MenuUnfoldOutlined, MenuFoldOutlined
} from '@ant-design/icons';


const {SubMenu} = Menu;

class Navbar extends React.Component {
    state = {
        theme: 'light',
        current: '1',
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    changeTheme = value => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <div className={style.navbar} style={{width: 151}}>
                {/*<Switch*/}
                {/*    checked={this.state.theme === 'dark'}*/}
                {/*    onChange={this.changeTheme}*/}
                {/*    checkedChildren="Dark"*/}
                {/*    unCheckedChildren="Light"*/}
                {/*/>*/}
                {/*<br/>*/}
                {/*<br/>*/}
                {/*<Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>*/}
                {/*    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}*/}
                {/*</Button>*/}
                <Menu
                    theme={this.state.theme}
                    onClick={this.handleClick}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[this.state.current]}
                    mode="inline"
                    inlineCollapsed={this.state.collapsed}
                >
                    <SubMenu key="sub1" icon={<CarOutlined/>} title="Авто">
                        <Menu.Item key="1" icon={<SearchOutlined />}><NavLink to='/cars'>Поиск</NavLink></Menu.Item>
                        <Menu.Item key="2" icon={<HeartOutlined />}><NavLink to='/favourites'>Избранные</NavLink></Menu.Item>
                        <Menu.Item key="3" icon={<CheckSquareOutlined />}><NavLink to='/comparation'>Сравнение</NavLink></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="5" icon={<PaperClipOutlined />}><NavLink to='/news'>Новости</NavLink></Menu.Item>
                    <Menu.Item key="6" icon={<PaperClipOutlined />}><NavLink to='/notes'>Заметки</NavLink></Menu.Item>
                </Menu>
            </div>
        );
    }
}


// const Navbar = () => {
//     return <div className={style.navbar}>
//         <div className={style.item}>
//             <NavLink to='/cars'>
//                 Автомобили
//             </NavLink>
//         </div>
//         <div className={style.item}>
//             <NavLink to='/favourites'>
//                 Избранное
//             </NavLink>
//         </div>
//         <div className={style.item}>
//             <NavLink to='/comparation'>
//                 Сравнение
//             </NavLink>
//         </div>
//         <div className={style.item}>
//             <NavLink to='/news'>
//                 Новости
//             </NavLink>
//         </div>
//     </div>
// }

export default Navbar;