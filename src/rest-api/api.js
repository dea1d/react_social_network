import instance from './instance'


export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(response => { return response.data; }
        )
    },
    getMeId() {
        return instance.get(`auth/me`,
        ).then(response => { return response.data; }
        )
    },
    getProfile(userId) {
        console.log('Устарело. Используйте новый вариант profileAPI object. Этот более поддерживаться не будет.')
        return profileAPI.getProfile(userId)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)

    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)

    }
}


export const profileAPI = {
    getProfile(userId) {
        return instance.get('profile/' + userId)
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status', { status: status }
        )
    }
}

