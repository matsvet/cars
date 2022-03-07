import './App.css';
import 'antd/dist/antd.css'
import {Route, Routes} from "react-router";
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import SignInForm from "./components/Auth/SignInForm";
import NewsContainer from "./components/News/NewsContainer";
import CarsContainer from "./components/Cars/CarsContainer";
import FavouritesPageContainer from "./components/Favourites/FavouritesPageContainer";

function App() {
    return (
        <div className='appWrapper'>
            <Header/>
            <Navbar/>
            <div className='appWrapperContent'>
                <Routes>
                    <Route path='/signin' element={<SignInForm/>}/>
                    <Route path='/cars' element={<CarsContainer/>}/>
                    <Route path='/favourites' element={<FavouritesPageContainer/>}/>
                    <Route path='/news' element={<NewsContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
