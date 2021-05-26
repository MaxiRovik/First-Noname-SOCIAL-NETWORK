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
        .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
            .then(response => response)
    },
    updateStatus(status){
        return instance.put('profile/status/',{status:status})
            .then(response => response.data)
    },
    savePhoto(file) {
        let formData = new FormData();
        formData.append("image",file);
        return instance.put('profile/photo',formData, {
            headers: {
                'Content-Type':'multipart/form-data'
            }
        })
            .then(response => response.data)
    },
    changeProfileData(data) {
        return instance.put('profile', data)
            .then(response => response)
    }
};


export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(email, password, rememberMe = false, captcha = "null") {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`);
    }
};




export const securityAPI = {
   getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
};
