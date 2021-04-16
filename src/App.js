import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings'
import {Route} from "react-router-dom";
import ConnectDialogsContainer from "./components/Dialogs/DialogsContainer";
import ConnectUsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";




const App = (props) => {
    return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={ () => <ConnectDialogsContainer/>} />
                    <Route path='/profile/:userId?'
                           render={ () => <ProfileContainer a={66666666666}/> } />
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
