import './App.css';
import 'antd/dist/antd.css'
import {Route, Routes} from "react-router";
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import SignInForm from "./components/Auth/SignInForm";
import SignUpForm from "./components/Auth/SignUpForm";
import NewsPageContainer from "./components/News/NewsPageContainer";
import CarsPageContainer from "./components/CarsDisplayComponents/AllCars/CarsPageContainer";
import FavouritesPageContainer from "./components/CarsDisplayComponents/Favourites/FavouritesPageContainer";
import HomePage from "./components/Homepage/HomePage";
import {Component, useContext} from "react";
import {connect} from "react-redux";
import SimpleLogin from "./components/ARKHIV/SimpleForm/SimpleLogin";
import SimpleSignUp from "./components/ARKHIV/SimpleForm/SimpleSignUp";
import ComparatedPageContainer from "./components/CarsDisplayComponents/Comparated/ComparatedPageContainer";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "./firebase/firebase";
import NotesPageContainer from "./components/Notes/NotesPageContainer";


const App = () => {
    const { auth } = useContext(Context)
    const [ user, loading, error ] = useAuthState(auth)

    return (
        <div className='appWrapper'>
            <Header/>
            <Navbar/>
            <div className='appWrapperContent'>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/signin' element={<SignInForm/>}/>
                    <Route path='/signup' element={<SignUpForm/>}/>
                    <Route path='/cars' element={<CarsPageContainer/>}/>
                    <Route path='/favourites' element={<FavouritesPageContainer/>}/>
                    <Route path='/comparation' element={<ComparatedPageContainer/>}/>
                    <Route path='/news' element={<NewsPageContainer/>}/>
                    <Route path='/notes' element={<NotesPageContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}

const mapStateToProps = () => ({
})
const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
