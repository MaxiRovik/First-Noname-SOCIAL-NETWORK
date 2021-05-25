import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {

let postId  = props.postId;
let onDeletePost =(postId) =>{
    props.deletePost(postId)
    };

    return (

        <div className = {classes.item}>

            <img src='https://m.buro247.ru/images/senina/max-baskakov-OzAeZPNsLXk-unsplash.jpg' alt='#'/>
            {props.message}

            <div>
                <span>like</span>
                <span>{props.likesCount}</span>
            </div>

            <button  style ={{backgroundColor:"orange"}}onClick={()=> onDeletePost(postId)} > Delete post  </button>
      </div>

                    
        )

}
export default Post;



