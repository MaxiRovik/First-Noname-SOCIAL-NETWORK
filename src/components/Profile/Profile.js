import React from 'react';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import ConnectMyPostsContainer from "./MyPosts/MyPostsContainer";




const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <ConnectMyPostsContainer  /*store={props.store}*//>
        </div>
    )

};
export default Profile;