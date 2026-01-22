import { requestDelete, requestGet, requestPost } from "@/lib/function/request"

const instance = 'session'

export const sessionService = {
    getSession: (id: string | number) => {
        return requestGet(`${instance}/${id}`)
    },

    createSession: (data: any) => {
        return requestPost(`${instance}`, data)
    },

    deleteSession: (id: string | number) => {
        return requestDelete(`${instance}/${id}/`)
    },

    createEntity: (data: any) => {
        return requestPost(`${instance}/entity`, data, true)
    },

    createMap: (data: any) => {
        return requestPost(`${instance}/map`, data, true)
    },

    createObject: (data: any) => {
        return requestPost(`${instance}/object`, data, true)
    },

    pushImgToSession: (data: any) => {
        return requestPost(`s/push-img`, data, true)
    },

    getEntities: () => {
        return requestGet(`s/entities`)
    },

    getObjects: () => {
        return requestGet(`s/objects`)
    },

    getMaps: () => {
        return requestGet(`s/maps`)
    }
}