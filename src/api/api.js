import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
            "API-KEY": "60cc96aa-bdb2-41f9-a447-2be0a24470c6"
        }
});

export const usersAPI = {
    getUsers(currentPage = 1,usersInPage = 10){
        return instance.get(`users?page=${currentPage}&count=${usersInPage}`)
            .then(response => {
                return response.data
            })
    },
    setUnfollow(userId){
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    setFollow(userId){
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },

};

export const profileAPI = {
    getProfile(userId){
    return instance.get('profile/' + userId)
        .then(response => {
            return response.data
        })
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
            .then(response => {
                return response
            })
    },
    updateStatus(status){
        return instance.put('profile/status/',{status:status})
            .then(response => {
                    return response.data

            })
    }
}


export const authAPI = {
    authMe(){
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
};



