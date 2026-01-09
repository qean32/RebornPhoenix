import { requestDelete, requestGet, requestPost } from "@/lib/function/request"

const instance = 'session'

export const sessionService = {
    getSession: (id: string | number) => {
        return requestGet(`${instance}/${id}`)
    },

    createSession: (data: any) => {
        return requestPost(`${instance}/create/session`, data)
    },

    deleteSession: (id: string | number) => {
        return requestDelete(`${instance}/delete/session/${id}`)
    },

    createEntity: (data: any) => {
        return requestPost(`${instance}/create/entity`, data)
    },

    createMap: (data: any) => {
        return requestPost(`${instance}/create/map`, data)
    },

    createObject: (data: any) => {
        return requestPost(`${instance}/create/object`, data)
    },

    pushImgToSession: (data: any, id: string | number) => {
        return requestPost(`${instance}/${id}/push/img`, data)
    }
}