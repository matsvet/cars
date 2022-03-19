// import SimpleForm from "./SimpleForm";
// import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
// import {NavLink, useHistory} from "react-router-dom";
// import {Navigate, useNavigate} from "react-router";
// import {connect} from "react-redux";
//
//
// const SimpleSignUp = (props) => {
//     const navigate = useNavigate();
//
//     const handleSignUp = (email, password) => {
//         const auth = getAuth();
//         createUserWithEmailAndPassword(auth, email, password)
//             .then(({user}) => {
//                     props.setUserCreator({
//                         email: user.email,
//                         token: user.accessToken,
//                         id: user.uid,
//                     })
//                     navigate('/');
//                 }
//             )
//             .catch(console.error)
//     }
//
//     return <div>
//         Регистрация
//         <SimpleForm
//             title="Зарегистрироваться"
//             handleClick={handleSignUp}
//         />
//         Уже есть аккаунт ->
//         <NavLink to='/signin'>КНОПКА</NavLink>
//     </div>
// }
//
// const mapStateToProps = (state) => ({})
//
// export default connect(mapStateToProps, {})(SimpleSignUp);