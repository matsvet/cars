import React from 'react';
import './Preloader.css';
import style from './Preloader.css'

const Preloader = () => {
    return (
        <div className={style.prloaderBlock}>
            <div className="lds-default">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Preloader;