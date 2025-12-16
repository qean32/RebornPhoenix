import { requestDelete, requestGet, requestPatch, requestPost } from "@/lib/function/request"

const instance = 'profile'

export const profileService = {
    getUserInfo: (id: number) => {
        return requestGet(`${instance}/${id}/info/`)
    },

    getCharacters: (id: number) => {
        return requestGet(`${instance}/${id}/characters/`)
    },

    getPosts: (id: number) => {
        return requestGet(`${instance}/${id}/posts/`)
    },

    getSessions: (id: number) => {
        return requestGet(`${instance}/${id}/sessions/`)
    },

    banAction: (data: any, id: number) => {
        return requestPost(`${instance}/ban-action/${id}`, data)
    },

    getBanReason: (id: number) => {
        return requestGet(`${instance}/ban-reason/${id}`)
    },

    subscribe: (id: number) => {
        return requestPost(`${instance}/subscribe/${id}`, {})
    },

    createCharacter: (data: any) => {
        return requestPost(`${instance}/create/character`, data)
    },

    deleteCharacter: (id: number) => {
        return requestDelete(`${instance}/delete/character/${id}`)
    },

    updateProfile: (data: any) => {
        return requestPatch(`${instance}/update`, data)
    },

    getFollowers: () => {
        return requestGet(`${instance}/followers`)
    },

    me: () => {
        return requestGet(`${instance}/me`)
    }
}