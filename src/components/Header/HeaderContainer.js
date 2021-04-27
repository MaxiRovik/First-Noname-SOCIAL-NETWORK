import React from 'react';
import Header from "./Header";
import * as axios from 'axios';
import {authentication, setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {authAPI} from "../../api/api";


class HeaderContainer extends React.Component  {

    componentDidMount() {
        this.props.authentication()
    }

render () {
    return < Header {...this.props}/>
 }
}


const mapStateToProps =(state) => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login,
}) ;

export default connect (mapStateToProps,{authentication})(HeaderContainer);