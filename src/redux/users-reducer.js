import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_FETCHING_STATE = 'TOGGLE_FETCHING_STATE';
const TOGGLE_FOLLOWING_BUTTON = 'TOGGLE_FOLLOWING_BUTTON';



let initialState = {
    users:[ ],
    usersInPage: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    setOfFollowingInProgress: [],
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW :
            return{
            ...state,
               users:state.users.map(item => {
                   if (item.id === action.userId) {
                       return {...item,
                      followed: true}
                   }
                   return item;
               })
            };
        case UNFOLLOW: {
            return{
                ...state,
                users:state.users.map(item => {
                    if (item.id === action.userId) {
                        return {...item,
                            followed: false}
                    }
                    return item;
                })
            };
        }
        case SET_USERS:{
            return{
                ...state,
                users:[...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return{
                ...state,
                currentPage:action.page
            }
        }

        case SET_TOTAL_USERS_COUNT: {
            return{
                ...state,
                totalUsersCount:action.totalCount
            }
        }
        case TOGGLE_FETCHING_STATE: {
            return{
                ...state,
                isFetching:action.fetchingState
            }
        }
        case TOGGLE_FOLLOWING_BUTTON: {
            return{
                ...state,
                setOfFollowingInProgress: action.followingButtonState
                    ?[...state. setOfFollowingInProgress,action.userId]
                    : state. setOfFollowingInProgress.filter(id =>id != action.userId)
            }
        }
        default:
            return state;
    }
}

const clickOnFollow = (userId) => ({type: FOLLOW, userId});
const clickOnUnFollow = (userId) => ({type: UNFOLLOW, userId});
const setUsers = (users) => ({type: SET_USERS, users});
const setCurrentPage = (page) => ({type:SET_CURRENT_PAGE, page});
const setTotalUsersCount = (totalCount) => ({type:SET_TOTAL_USERS_COUNT, totalCount});
const toggleIsFetching = (fetchingState) => ({type:TOGGLE_FETCHING_STATE, fetchingState});
const toggleFollowingButton = (followingButtonState,userId) => ({type:TOGGLE_FOLLOWING_BUTTON, followingButtonState, userId});


export const getUsers=(currentPage,usersInPage) => {
    return (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));

    usersAPI.getUsers(currentPage,usersInPage).then(data => {

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    });
}};

export const setUnfollow =(userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingButton(true,userId));

        usersAPI.setUnfollow(userId)
            .then(data => {
                if  (data.resultCode == 0) {
                    dispatch(clickOnUnFollow(userId))
                }
                dispatch(toggleFollowingButton(false,userId));
            });
    }
};

export const setFollow =(userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingButton(true, userId));

        usersAPI.setFollow(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(clickOnFollow(userId))
                }
                dispatch(toggleFollowingButton(false, userId));
            });
    }
}
export default usersReducer;