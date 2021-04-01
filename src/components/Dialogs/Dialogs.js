import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import  Message from './Message/Message'

const Dialogs=(props) => {

 let dialogsElements = props.dialogsPage.dialogs.map( dialog => < DialogItem name = {dialog.name} id = {dialog.id} picture = {dialog.picture}/>);
 let messagesElement = props.dialogsPage.messages.map( item =>  <Message  message = {item.message} />);
 let newMessageText = props.dialogsPage.newMessageText;

    let onAddMessage = () => {
        props.addMessage()
    }

    let onNewMessage = (e) => {
       let text= e.target.value;
      props.newMessageEvent(text);
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
                        <button onClick={onAddMessage}>Send </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs