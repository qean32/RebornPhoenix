import { requestDelete, requestGet, requestPatch, requestPost } from "@/lib/function/request"

const instance = 'profile'

export const profileService = {
    getUserInfo: (id: string | number) => {
        return requestGet(`${instance}/${id}/info/`)
    },

    getCharacters: (id: string | number) => {
        return requestGet(`${instance}/${id}/characters/`)
    },

    getPosts: (id: string | number) => {
        return requestGet(`${instance}/${id}/posts/`)
    },

    getSessions: (id: string | number) => {
        return requestGet(`${instance}/${id}/sessions/`)
    },

    banAction: (data: any, id: string | number) => {
        return requestPost(`${instance}/${id}/ban-action/`, data)
    },

    getBanReason: (id: string | number) => {
        return requestGet(`${instance}/${id}/ban-reason/`)
    },

    subscribeAction: (id: string | number) => {
        return requestPost(`${instance}/subscribe/${id}`, {})
    },

    getSubscribe: (id: string | number) => {
        return requestGet(`${instance}/subscribe/${id}`)
    },

    createCharacter: (data: any) => {
        return requestPost(`${instance}/create/character`, data)
    },

    deleteCharacter: (id: string | number) => {
        return requestDelete(`${instance}/delete/character/${id}`)
    },

    updateProfile: (data: any) => {
        return requestPatch(`${instance}/update`, data)
    },

    getSubscribers: () => {
        return requestGet(`${instance}/subscribers`)
    },

    me: () => {
        return requestGet(`${instance}/me`)
    }
}