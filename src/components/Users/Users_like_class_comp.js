import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/img/user.png'

class Users extends React.Component {
    // constructor(props) {
    //     super(props);
    //     alert('new object created')

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersInPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    pageChangeEvent = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersInPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }


    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.usersInPage);

        let pages = [];

        for (let i=1; i<=pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className = {classes.usersBlock}>
                <div>
                    {pages.map((p)=> {
                        return (
                        <button className = {this.props.currentPage === p && classes.selectedPage} onClick = {()=>{this.pageChangeEvent(p)} }>{p}</button>
                        )})}

                </div>
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