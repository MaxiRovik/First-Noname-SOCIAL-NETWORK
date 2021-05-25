import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form"

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SET_PHOTO = 'SET_PHOTO';
const SET_PROFILE_DATA = 'setProfileData';

let initialState = {
    posts:[
        {id: 1, message: "Hi, how are you?", likesCount:12},
        {id: 2, message: "It is my first post?", likesCount: 11 },
        {id: 3, message: "I want to break free!", likesCount: 10},
        {id: 4, message: "ok",  likesCount: 1}
    ],
    profile: null,
    status: '',


};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return     {...state, posts: [...state.posts,
                    {id: 5, message: action.newPost, likesCount: 0}]}
        }
        case SET_USER_PROFILE:{
            return {...state, profile:action.profile}
        }
        case SET_STATUS: {
            return {...state, status:action.status}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => {
                    return(
                        p.id !== action.postId)
                   })
            }
        }
        case SET_PHOTO: {
            return {...state, profile: {...state.profile, photos: action.file}}
        }

        default:
            return state;
    }
};
export const addPost = (newPost) => ({type: ADD_POST, newPost} );
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type:SET_STATUS, status});
export const deletePost = (postId) => ({type:DELETE_POST, postId });
export const setPhoto = (file) => ({type:SET_PHOTO, file});
export const setProfileData = (data) => ({type:SET_PROFILE_DATA, data});

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

export const savePhoto = (file) => {
    return (dispatch)=> {
        profileAPI.savePhoto(file)
            .then(response => {
                if(response.resultCode === 0 ) {
                    dispatch(setPhoto(response.data.photos));
                }
            })
    }
};

export const changeProfileData = (data) => async (dispatch, getState) => {
        const userId = getState().auth.userId;
        const response = await  profileAPI.changeProfileData(data);
                if (response.data.resultCode === 0 ) {
                    dispatch(getProfileInfo(userId));
                }
                else{
                    let initError = response.data.messages[0]
                        .slice(
                            response.data.messages[0].indexOf(">") + 1,
                            response.data.messages[0].indexOf(")")
                        )
                        .toLocaleLowerCase();
                    dispatch(stopSubmit("profile",
                        {contacts: { [initError]: response.data.messages[0] }}));
                    return Promise.reject(response.data.messages[0]);
                }
};



export default profileReducer;