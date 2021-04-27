import React from 'react';
import {addPost, updateNewPostText,} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps =(state) => {
    return {
        posts: state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}

const ConnectMyPostsContainer = connect(mapStateToProps,{updateNewPostText,
    addPost})(MyPosts);


export default ConnectMyPostsContainer;