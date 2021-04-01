const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts:[
        {id: '1', message: "Hi, how are you?", likesCount:12},
        {id: '2', message: "It is my first post?", likesCount: 11 },
        {id: '3', message: "I want to break free!", likesCount: 10},
        {id: '4', message: "ok",  likesCount: 1}
    ],
    newPostText: 'Hi, write something!',
};

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        case ADD_POST:
            let newPost = {
                id:5,
                message:state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText  = '';
            return state;
        default:
            return state;
    }
}

export const updateNewPostTextActionCreator = (value) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText:value
    }
};
export const addPostActionCreator = () => ({type: ADD_POST});
export default profileReducer;