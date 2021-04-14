const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_FETCHING_STATE = 'TOGGLE_FETCHING_STATE';


let initialState = {
    users:[ ],
    usersInPage: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
        } case TOGGLE_FETCHING_STATE: {
            return{
                ...state,
                isFetching:action.fetchingState
            }
        }
        default:
            return state;
    }
}

export const  follow = (userId) => ({type: FOLLOW, userId});
export const  unFollow = (userId) => ({type: UNFOLLOW, userId});
export const  setUsers = (users) => ({type: SET_USERS, users});
export const  setCurrentPage = (page) => ({type:SET_CURRENT_PAGE, page});
export const setTotalUsersCount = (totalCount) => ({type:SET_TOTAL_USERS_COUNT, totalCount});
export const toggleIsFetching = (fetchingState) => ({type:TOGGLE_FETCHING_STATE, fetchingState});

export default usersReducer;