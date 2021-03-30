import React from 'react';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts  posts={props.profilePage}
                      newPostText = {props.profilePage.newPostText}
                      dispatch = {props.dispatch}/>
        </div>
    )

};
export default Profile;