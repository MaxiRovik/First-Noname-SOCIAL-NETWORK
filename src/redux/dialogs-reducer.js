const SEND_MESSAGE = 'SEND_MESSAGE';


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

};

const dialogsReducer = (state = initialState, action) => {

    switch(action.type){
        case SEND_MESSAGE:
            let newMessage =action.newMessageText;
            return{
                ...state,
                messages: [...state.messages,
                    {id:'5', message: newMessage}],
                newMessageText:'',
            };

        default:
            return state;
        }
}

export const sendMessageActionCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText});

export default dialogsReducer;