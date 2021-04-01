const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = ' UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
    dialogs: [
        {id: '1', name: 'Daria', picture: 'https://st3.depositphotos.com/3761483/14435/i/600/depositphotos_144350333-stock-photo-mercedes-benz-logo.jpg'},
        {id: '2', name: 'Max', picture: 'http://autozam.ru/wp-content/uploads/2011/04/bmw-logotip.jpg'},
        {id: '3', name: 'Daniel', picture:'https://za-rulem.org/wp-content/uploads/2014/10/znachki-marok-avtomobilej-audi-1024x815.jpg'},
        {id: '4', name: 'Nick', picture:'https://autoepoch.ru/wp-content/uploads/2015/12/25.jpg'},
        {id: '5', name: 'Dan', picture:'https://kimuracars.com/ifiles/articles/046/toyota-1s.jpg'},
        {id: '5', name: 'Dan', picture:'https://kimuracars.com/ifiles/articles/046/toyota-1s.jpg'},
        {id: '5', name: 'Dan', picture:'https://kimuracars.com/ifiles/articles/046/toyota-1s.jpg'},
        {id: '5', name: 'Dan', picture:'https://kimuracars.com/ifiles/articles/046/toyota-1s.jpg'}
    ],
    messages: [
        {id: '1', message: "hi, how are you?'"},
        {id: '2', message: "Where have you been?"},
        {id: '3', message: "Let's go!"},
        {id: '4', message: "ok"}
    ],
    newMessageText:'',
};

const dialogsReducer = (state = initialState, action) => {
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