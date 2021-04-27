import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import compose from "redux/src/compose";




const mapStateToProps =(state) => {
    return {
        dialogsPage:state.dialogsPage,

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






export default
compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)
(Dialogs);