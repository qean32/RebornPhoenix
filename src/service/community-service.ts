import { requestGet } from "@lib/function/request"
const instance = 'users'

export const communityService = {
    getUsers: (skip: number, take: number, search: string) => {
        return requestGet(`${instance}?skip=${skip}&take=${take}&search=${search}`)
    },
}