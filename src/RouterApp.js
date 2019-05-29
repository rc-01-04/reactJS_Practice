import React from 'react'
import {Route} from "react-router-dom";
import Header from "./Header";

// index 파일은 디폴트 경로
import Weather from "./Component/Weather";


// 얘네도 원래 따로 만들어야함
const Home = () => <div>Home</div>
const About = () => <div>About</div>

const RouterApp = () => {
    const city = "Daejeon"
    return (
        <div>

            인자 전달

            <Header city = {city} />
            <Route exact path="/NavLink" component={Home} />
            <Route exact path="/Link" component={Weather} />
        </div>
    )
}
export default RouterApp;