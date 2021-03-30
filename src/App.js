import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings'
import {Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar state={props.state.dialogsPage}/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={() => <Dialogs store ={props.store} />}/>
                    <Route path='/profile'
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               dispatch ={props.dispatch}/>}/>
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />

                </div>

            </div>
        </BrowserRouter>
    )

}

export default App;
