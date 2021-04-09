import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/img/user.png'

class Users extends React.Component {
    constructor(props) {
        super(props);
        alert('new object created')
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return (
            <div className = {classes.usersBlock}>
                {/*<button onClick={this.getUsers}>Get Users</button>*/}
                {this.props.users.map( e =>(
                    <div key ={e.id} className = {classes.usersContainer}>
                        <div>
                            <div>
                                <img className = {classes.img} src={e.photos.small != null ? e.photos.small : userPhoto}/>
                            </div>
                            <div>
                                {e.followed
                                    ? <button onClick ={() => {this.props.unFollow(e.id)}} className = {classes.buttonFollowed}>
                                        Follow
                                    </button>
                                    : <button onClick ={() => {this.props.follow(e.id)}} className = {classes.buttonUnfollowed}>
                                        Unfollow
                                    </button>}
                            </div>
                        </div>
                        <div className = {classes.usersInfo}>
                            <div className = {classes.usersNameAndStatus}>
                                <div className = {classes.name}>
                                    {e.name}
                                </div>
                                <div>
                                    {e.status}
                                </div>

                            </div>
                            <div>
                                <div>
                                    {"e.location.city"}
                                </div>
                                <div>
                                    {"e.location.country"}
                                </div>
                            </div>
                        </div>
                    </div>
                ) )}
            </div>


        )
    }
}

export default Users;