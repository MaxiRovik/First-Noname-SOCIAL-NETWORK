import {profileAPI} from "../api/api";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts:[
        {id: '1', message: "Hi, how are you?", likesCount:12},
        {id: '2', message: "It is my first post?", likesCount: 11 },
        {id: '3', message: "I want to break free!", likesCount: 10},
        {id: '4', message: "ok",  likesCount: 1}
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return     {
                ...state,

                posts: [...state.posts,
                    {id: 5, message: action.newPost, likesCount: 0}],
                }
        }
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile:action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status:action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: action.post.filter(p => p.id != action.postId)
            }
        }
        default:
            return state;
    }
};
export const addPost = (newPost) => ({type: ADD_POST, newPost} );
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type:SET_STATUS, status});
// export const deletePost = (postId) = ({type:DELETE_POST, postId });


export const getProfileInfo = (userId) =>{
    return (dispatch)=> {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));

            });
    }
};

export const getStatus = (userId) => {
    return (dispatch)=> {
        profileAPI.getStatus(userId)
            .then(response => {

                dispatch(setStatus(response.data));
})
    }
};


export const updateStatus = (status) => {
    return (dispatch)=> {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.resultCode === 0 ) {
                    dispatch(setStatus(status));
                }
            })
    }
};


export default profileReducer;