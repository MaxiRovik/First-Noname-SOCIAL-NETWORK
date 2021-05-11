import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return (
   
        <div className = {classes.item}>

            <img src='https://m.buro247.ru/images/senina/max-baskakov-OzAeZPNsLXk-unsplash.jpg' alt='#'/>
            {props.message}

            <div>
                <span>like</span>
                <span>{props.likesCount}</span>
            </div>

      </div>
                    
        )

}
export default Post;