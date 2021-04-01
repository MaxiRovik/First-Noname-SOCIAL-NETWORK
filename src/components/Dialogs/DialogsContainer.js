import React from 'react';

import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer =(props) => {
    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    };

    let newMessageEvent = (text) => {
      props.store.dispatch(updateNewMessageTextActionCreator(text))
    };

    return (<Dialogs dialogsPage=         {state}
                     newMessageEvent =   {newMessageEvent}
                     addMessage =   {addMessage}/>
    )
};

export default DialogsContainer;