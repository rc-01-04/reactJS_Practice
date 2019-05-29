import React from 'react';
import logo from "./logo.svg";
//import Navigation from './Navigation';
import Navigation from './Navigation'


// arrow function : stateless function,
// class : smart

// 모듈화
// arrow function.
const Header = props => {
    const {city} = props;
    return (
        <header className="App-header">
            <Navigation/>
            <img src="https://www.10wallpaper.com/wallpaper/medium/1411/Asian_pure_beauty_model_photo_Wallpaper_medium.jpg" className="App-logo" alt="logo"/>
            <p>
                여기는 {city} 입니다.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            아나
        </header>
    );
};
export default Header;
