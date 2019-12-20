import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": '4ac87885-1e58-48c2-9840-fcb4dc8c7172'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
    requestUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId)
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
};
