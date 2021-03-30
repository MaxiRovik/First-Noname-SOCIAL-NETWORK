import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import  Message from './Message/Message'
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";


const Dialogs=(props) => {
    let state = props.store.getState().dialogsPage;

 let dialogsElements = state.dialogs.map( dialog => < DialogItem name = {dialog.name} id = {dialog.id} picture = {dialog.picture}/>);
 let messagesElement = state.messages.map( m =>  <Message  message = {m.message} />);
 let newMessageText = state.newMessageText;


    let addMessage = () => {
        props.store.dispatch(sendMessageActionCreator())

    }

    let onNewMessage = (e) => {
       let text= e.target.value;
      props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElement}
                <div>
                    <div>
                        <textarea
                                  placeholder="Enter you message"
                                  value = {newMessageText}
                                  onChange={onNewMessage}/>


                    </div>
                    <div>
                        <button onClick={addMessage}>Send </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs