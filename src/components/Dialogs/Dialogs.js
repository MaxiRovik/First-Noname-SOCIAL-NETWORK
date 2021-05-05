import React from 'react';
import classes from './Dialogs.module.css'
import {Field,reduxForm} from "redux-form";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {TextArea} from "../common/Forms Controls/FormsControls";
import {maxLengthCreator, required} from "../../Utilities/validators";

const maxLength50 = maxLengthCreator(50)

const MessageTextForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <div>
                <Field component={TextArea} name = "newMessageText"
                       placeholder="Enter you message"
                       validate={[required, maxLength50 ]}/>
            </div>
            <div>
                 <button>Send </button>
            </div>
        </form>
    )
};

const MessageTextReduxForm = reduxForm({form:"dialogTextForm"})(MessageTextForm)


const Dialogs =(props) => {

    let dialogsElements = props.dialogsPage.dialogs.map( dialog => < DialogItem name = {dialog.name} id = {dialog.id} picture = {dialog.picture}/>);
    let messagesElement = props.dialogsPage.messages.map( item =>  <Message  message = {item.message} />);
    let newMessageWasCreate = (values) => {
    props.addMessage(values.newMessageText);
};

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElement}

                <MessageTextReduxForm onSubmit = {newMessageWasCreate}/>

            </div>

        </div>
    )
}

export default Dialogs;