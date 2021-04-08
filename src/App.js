import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings'
import {Route} from "react-router-dom";
import ConnectDialogsContainer from "./components/Dialogs/DialogsContainer";
import ConnectUsersContainer from "./components/Users/UsersContainer";




const App = (props) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={ () => <ConnectDialogsContainer/>} />
                    <Route path='/profile'
                           render={ () => <Profile/> } />
                    <Route path='/users'
                           render={ () => <ConnectUsersContainer/> } />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />

                </div>

            </div>

    )

};

export default App;
