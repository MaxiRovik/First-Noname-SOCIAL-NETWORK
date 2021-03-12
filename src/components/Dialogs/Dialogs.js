import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import  Message from './Message/Message'

const Dialogs=(props) => {
 let dialogsElements = props.state.dialogs.map( dialog => < DialogItem name = {dialog.name} id = {dialog.id} picture = {dialog.picture}/>);
 let messagesElement = props.state.messages.map( m =>  <Message  message = {m.message} />);

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElement}
            </div>

        </div>
    )
}

export default Dialogs