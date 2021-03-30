const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = ' UPDATE_NEW_MESSAGE_TEXT'

const dialogsReducer = (state, action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        case SEND_MESSAGE:
            let newMessage = state.newMessageText;
            state.newMessageText='';
            state.messages.push({id:'5', message: newMessage});
            return state;
        default:
            return state;
        }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: text
    }
}
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export default dialogsReducer;