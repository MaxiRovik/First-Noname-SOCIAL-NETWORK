export const getAllUsersData = (state) => {
    return state.usersPage.users
};

export const getUsersSumInPage = (state) => {
    return state.usersPage.usersInPage
};


export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
};


export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
};


export const getStateOfIsFetching = (state) => {
    return state.usersPage.isFetching
};


export const getFollowingInProgress = (state) => {
    return state.usersPage.setOfFollowingInProgress
};