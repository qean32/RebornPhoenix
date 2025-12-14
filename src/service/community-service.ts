import { requestGet, requestPatch } from "@lib/function/request"
const instance = 'users'

export const communityService = {
    getUsers: (skip: number, take: number, search: string) => {
        return requestGet(`${instance}?skip=${skip}&take=${take}&search=${search}`)
    },

    getUser: (id: string) => {
        return requestGet(`${instance}/id/?id=${id}`)
    },

    updateUser: (ava: any) => {
        return requestPatch(`${instance}/`, ava, true)
    }
}