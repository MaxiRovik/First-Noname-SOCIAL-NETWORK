// import dialogsReducer from "./dialogs-reducer";
// import profileReducer from "./profile-reducer";
// import sidebarReducer from "./sidebar-reducer";
//
// let store =  {
//     _rerenderEntireTree(){
//         console.log('state has been changed');
//     },
//      _state: {
//         profilePage:{
//             posts:[
//                 {id: '1', message: "Hi, how are you?", likesCount:12},
//                 {id: '2', message: "It is my first post?", likesCount: 11 },
//                 {id: '3', message: "I want to break free!", likesCount: 10},
//                 {id: '4', message: "ok",  likesCount: 1}
//             ],
//             newPostText: 'Hi',
//         },
//         dialogsPage:{
//             dialogs: [
//                 {id: '1', name: 'Daria', picture: 'https://st3.depositphotos.com/3761483/14435/i/600/depositphotos_144350333-stock-photo-mercedes-benz-logo.jpg'},
//                 {id: '2', name: 'Max', picture: 'http://autozam.ru/wp-content/uploads/2011/04/bmw-logotip.jpg'},
//                 {id: '3', name: 'Daniel', picture:'https://za-rulem.org/wp-content/uploads/2014/10/znachki-marok-avtomobilej-audi-1024x815.jpg'},
//                 {id: '4', name: 'Nick', picture:'https://autoepoch.ru/wp-content/uploads/2015/12/25.jpg'},
//                 {id: '5', name: 'Dan', picture:'https://kimuracars.com/ifiles/articles/046/toyota-1s.jpg'},
//                 {id: '5', name: 'Dan', picture:'https://kimuracars.com/ifiles/articles/046/toyota-1s.jpg'},
//                 {id: '5', name: 'Dan', picture:'https://kimuracars.com/ifiles/articles/046/toyota-1s.jpg'},
//                 {id: '5', name: 'Dan', picture:'https://kimuracars.com/ifiles/articles/046/toyota-1s.jpg'}
//             ],
//             messages: [
//                 {id: '1', message: "hi, how are you?'"},
//                 {id: '2', message: "Where have you been?"},
//                 {id: '3', message: "Let's go!"},
//                 {id: '4', message: "ok"}
//             ],
//             newMessageText:'',
//         },
//         sidebar: {}
//     },
//
//     getState(){
//          return  this._state;
//     },
//      subscribe(observer) {
//         this._rerenderEntireTree = observer;
//     },
//     dispatch (action) {
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//         this._rerenderEntireTree(this._state)
//     },
// }
//
// export default  store;
