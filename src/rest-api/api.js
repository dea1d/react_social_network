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

}


