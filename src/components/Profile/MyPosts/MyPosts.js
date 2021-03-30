import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


// let addPostActionCreator = () => {
//     return {
//         type: 'ADD-POST'
//     }
// };
//
// let updateNewPostTextActionCreator = (value) => {
//     return {
//         type:'UPDATE-NEW-POST-TEXT',
//         newText:value
//     }
// }

const MyPosts = (props) => {

let postsElement = props.posts.posts.map( post =>
    <Post message = {post.message} likesCount = {post.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());

    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    return (
      <div className={classes.postsBlock}>
          <h3>My posts</h3>
        <div>
            <div>
                <textarea className = {classes.textArea}
                          onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}/>
            </div>
            <div>
                <button className = {classes.submitButton}
                        onClick={addPost}>Add post</button>
            </div>

        </div>

        <div className = {classes.posts}>
            {postsElement}
        </div>

          
      </div>
    )

}
export default MyPosts;