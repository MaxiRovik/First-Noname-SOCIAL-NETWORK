import  React from 'react';
import userPhoto from '../../assets/img/user.png'
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/Forms Controls/FormsControls";
import {maxLengthCreator, required} from "../../Utilities/validators";
import connect from "react-redux/es/connect/connect";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import classes from '.././common/Forms Controls/FormsControls.module.css';

const maxLength50 = maxLengthCreator(50);

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label for="lgn"><b>Email</b></label>
                    <Field component={Input}
                           placeholder={"Email"}
                           name={"email"}
                           id={"lgn"}
                           validate={[required, maxLength50 ]}/>
                </div>
                <div>
                    <label for="psw"><b>Password</b></label>
                    <Field component={Input}
                           type={"password"}
                           placeholder={"Enter Password"}
                           name={"password"}
                           id={"psw"}
                           validate={[required, maxLength50 ]}/>
                </div>
                <div>
                    <label>
                        <Field component={Input}
                               type={"checkbox"}
                               name={"remember me"}/>
                        Remember me
                    </label>
                    { props.error && <div className = {classes.summaryResponseError}>
                                        {props.error}
                                    </div>}
                    <button> LOGIN </button>
                </div>

            </form>
    )
};

const LoginReduxForm = reduxForm ({form:'login'})(LoginForm);

const LoginPage = (props) => {
    const onSubmit = (formData) => {
        // // console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe)

    };

    if (props.isAuth) {
        return (
            <Redirect to={"/profile"} />
        )
    };

    return (
        <div>
            <h1>Login</h1>
            <img src = {userPhoto}/>
        <LoginReduxForm onSubmit={onSubmit}/>
                </div>
    )
};
const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth
})
export  default connect(mapStateToProps, {login, logout})(LoginPage);