import './App.css';
import {Route, Routes} from "react-router";
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import AuthForm from "./components/Auth/AuthForm";
import NewsContainer from "./components/News/NewsContainer";
import CarsContainer from "./components/Cars/CarsContainer";
import FavouritesContainer from "./components/Favourites/FavouritesContainer";

function App() {
    return (
        <div className='appWrapper'>
            <Header/>
            <Navbar/>
            <div className='appWrapperContent'>
                <Routes>
                    <Route path='/auth' element={<AuthForm/>}/>
                    <Route path='/cars' element={<CarsContainer/>}/>
                    <Route path='/favourites' element={<FavouritesContainer/>}/>
                    <Route path='/news' element={<NewsContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
