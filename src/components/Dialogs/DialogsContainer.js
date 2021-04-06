import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



const mapStateToProps =(state) => {
    return {
        dialogsPage:state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        newMessageEvent: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
        addMessage: () => {
            dispatch(sendMessageActionCreator())

        }
    }
}

const ConnectDialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);


export default ConnectDialogsContainer;