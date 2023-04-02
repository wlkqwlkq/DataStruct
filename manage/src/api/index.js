import http from '@/axios/request'

export const getData = () => {
    return http.get('/home/getData')
}

export const getUserData = () => {
    return http.get('/user/getData')
}

export const addUser = (data)=> {
    return http.post('/user/addUser',data)
}
export const login = (data)=> {
    return http.post('/login/doLogin',data)
}
export const User = {
    getUserData:() => {
        return http.get('/user/getData')
    },
    addUser: (data)=> {
        return http.post('/user/addUser',data)
    },
    upUser: (data)=> {
        return http.post('/user/upUser',data)
    },
    deleteUser: (id)=> {
        return http.post('/user/delUser',id)
    },
    queryUser: (name)=> {
        return http.post('/user/queryUser',name)
    }
}