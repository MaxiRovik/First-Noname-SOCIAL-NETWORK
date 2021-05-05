import React from 'react';
import {sendMessageActionCreator} from "../../redux/dialogs-reducer";
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
        addMessage: (newMessageText) => {
            dispatch(sendMessageActionCreator(newMessageText))
        }
    }
};

export default
compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)
(Dialogs);