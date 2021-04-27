import  React from 'react';
import userPhoto from '../../assets/img/user.png'

const Login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <img src = {userPhoto}/>
            <div>
                <label for="unm"><b>User Name</b></label>
                <input placeholder="Enter Username" id="unm"/>
            </div>
            <div>
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" id="psw"/>
            </div>
            <button> LOGIN </button>
            <div>
                <label>
                    <input type="checkbox"  name="remember"/> Remember me
                </label>
            </div>


        </div>


    )
}
export  default Login;