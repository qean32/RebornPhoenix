import { requestGet } from "@lib/function/request"
const instance = 'users'

export const communityService = {
    GET_USERS: (skip: number, take: number, search: string) => {
        return requestGet(`${instance}?skip=${skip}&take=${take}&search=${search}`)
    },

    SEARCH_USERS: (search: string) => {
        return requestGet(`${instance}/search?search=${search}`)
    },

    GET_USERS_BY_ARRAY: (data: string) => {
        return requestGet(`${instance}/from-array?users=${data}`)
    }
}