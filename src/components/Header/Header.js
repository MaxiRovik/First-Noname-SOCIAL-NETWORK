import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {

  return <header className ={classes.header}>

          <img src = 'http://anatoliy-peresada.narod.ru/energoda/gERB.JPG'/>


          <h1 className={classes.h1}>Daniel</h1>
      <div className={classes.loginBlock}>
          {props.isAuth?
              <div>{props.login} -
                  <button onClick ={props.logout}>Log out</button>
              </div>
          : <NavLink to={'/login'}> Login </NavLink> }

      </div>

    </header>
    
}

export default Header;