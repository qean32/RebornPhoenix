import { requestDelete, requestGet, requestPost } from "@/lib/function/request"

const instance = 'profile'

export const profileService = {
    GET_USER_INFO: (id: string | number) => {
        return requestGet(`${instance}/${id}/info/`)
    },

    GET_CHARACTERS: (id: string | number) => {
        return requestGet(`${instance}/${id}/characters/`)
    },

    GET_POSTS: (id: string | number) => {
        return requestGet(`${instance}/${id}/posts/`)
    },

    GET_SESSIONS: (id: string | number) => {
        return requestGet(`${instance}/${id}/sessions/`)
    },

    BAN_ACTION: (data: any, id: string | number) => {
        return requestPost(`${instance}/${id}/ban-action/`, data)
    },

    GET_BAN_REASON: (id: string | number) => {
        return requestGet(`${instance}/${id}/ban-reason/`)
    },

    SUBSCRIBE_ACTION: (id: string | number) => {
        return requestPost(`${instance}/${id}/follow`, {})
    },

    GET_SUBSCRIBE: (id: string | number) => {
        return requestGet(`${instance}/${id}/my-follow/`)
    },

    CREATE_CHARACTER: (data: any) => {
        return requestPost(`${instance}/create/character`, data, true)
    },

    DELETE_CHARACTER: (id: string | number) => {
        return requestDelete(`${instance}/${id}/delete/character`)
    },

    UPDATE_PROFILE: (data: any) => {
        return requestPost(`${instance}/update`, data, !!data.get('ava'))
    },

    GET_SUBSCRIBERS: () => {
        return requestGet(`${instance}/followers`)
    },

    me: () => {
        return requestGet(`${instance}/me`)
    }
}