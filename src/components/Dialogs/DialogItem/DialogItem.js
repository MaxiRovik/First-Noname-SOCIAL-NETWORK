import React from 'react';
import classes from './DialogItem.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <div className = {classes.ItemBlock}>
                <div className={classes.ItemPicture}>
                    <img className={classes.img}  src={props.picture} alt='#'/>
                </div>
                <div className = {classes.item}>
                    <NavLink to ={path} activeClassName={classes.active}>{props.name}</NavLink>
                </div>
            </div>

        </div>
    )
};
export default DialogItem;