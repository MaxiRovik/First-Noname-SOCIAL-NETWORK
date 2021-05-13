import React from 'react';
import classes from './MyPosts.module.css'
import {Field, reduxForm} from "redux-form";
import { maxLengthCreator, required} from "../../../Utilities/validators";
import {TextArea} from "../../common/Forms Controls/FormsControls";
import Post from "./Post/Post";



const maxLength10 = maxLengthCreator(10)

const PostForm = (props) => {
    return (
        <form className = {classes.textArea}
              onSubmit = {props.handleSubmit} >
            <Field component = {TextArea}

                   placeholder ="Enter you new post"
                   name = "post"
                   validate={[ required, maxLength10 ]}/>
        <div>
             <button className = {classes.submitButton}>Add post</button>
        </div>
        </form>
    )
};

const PostReduxForm = reduxForm({form:"addNewPost"})(PostForm);

const MyPosts = (props) => {

let postsElement = props.posts.map( post =>
    <Post postId = {post.id}
          key = {post.id}
          message = {post.message}
          likesCount = {post.likesCount}
          deletePost ={props.deletePost}/>);


let onAddPost = (value) => {
    props.addPost(value.post);
};


    return (
      <div className = {classes.postsBlock }>
          <h3>My posts</h3>
        <div >
          <PostReduxForm onSubmit = {onAddPost} />
        </div>

        <div className = {classes.posts}>
            {postsElement}
        </div>
      </div>
    )

};
export default MyPosts;