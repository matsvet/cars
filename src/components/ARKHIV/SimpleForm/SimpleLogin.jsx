// import SimpleForm from "./SimpleForm";
// import {NavLink} from "react-router-dom";
// import {connect} from "react-redux";
// import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
// import {Button} from "antd";
// import {useContext} from "react";
// import {Context} from "../../../index";
//
// const SimpleLogin = (props) => {
//     const {auth, firebase} = useContext(Context)
//
//     const signInWithGoogle = async () => {
//         const provider = new firebase.auth.GoogleAuthProvider()
//         const {user} = await auth.signInWithPopup(provider)
//         console.log(user)
//     }
//     const signWithEmail = async () => {
//         const {user} = await auth.signInWithEmailAndPassword('123@123.ru', '123456')
//         console.log(user)
//     }
//
//     const handleLogin = (email, password) => {
//         return email
//     }
//
//     return <div>
//         Войти
//         <SimpleForm
//             title="Войти"
//             handleClick={handleLogin}
//         />
//         <Button onClick={signInWithGoogle}>Войти с Гуглом</Button>
//         Зарегистрироваться ->
//         <NavLink to='/signup'>КНОПКА</NavLink>
//     </div>
// }
//
// const mapStateToProps = (state) => ({})
//
//
// export default connect(mapStateToProps, {})(SimpleLogin);