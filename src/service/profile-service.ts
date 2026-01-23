import { requestDelete, requestGet, requestPost } from "@/lib/function/request"

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
        return requestPost(`${instance}/${id}/follow`, {})
    },

    getSubscribe: (id: string | number) => {
        return requestGet(`${instance}/${id}/my-follow/`)
    },

    createCharacter: (data: any) => {
        return requestPost(`${instance}/create/character`, data, true)
    },

    deleteCharacter: (id: string | number) => {
        return requestDelete(`${instance}/${id}/delete/character`)
    },

    updateProfile: (data: any) => {
        return requestPost(`${instance}/update`, data, !!data.get('ava'))
    },

    getSubscribers: () => {
        return requestGet(`${instance}/followers`)
    },

    me: () => {
        return requestGet(`${instance}/me`)
    }
}