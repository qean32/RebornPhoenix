import { requestDelete, requestGet, requestPost } from "@/lib/function/request"

const instance = 'session'

export const sessionService = {
    GET_SESSION: (id: string | number) => {
        return requestGet(`${instance}/${id}`)
    },

    CREATE_SESSION: (data: any) => {
        return requestPost(`${instance}`, data)
    },

    DELETE_SESSION: (id: string | number) => {
        return requestDelete(`${instance}/${id}/`)
    },

    CREATE_ENTITY: (data: any) => {
        return requestPost(`${instance}/entity`, data, true)
    },

    CREATE_MAP: (data: any) => {
        return requestPost(`${instance}/map`, data, true)
    },

    CREATE_OBJECT: (data: any) => {
        return requestPost(`${instance}/object`, data, true)
    },

    PUSH_IMG_TO_SESSION: (data: any) => {
        return requestPost(`s/push-img`, data, true)
    },

    GET_ENTITIES: () => {
        return requestGet(`s/entities`)
    },

    GET_OBJECTS: () => {
        return requestGet(`s/objects`)
    },

    GET_MAPS: () => {
        return requestGet(`s/maps`)
    },

    SAVE_JSON: (data: any, path: string) => {
        return requestPost(`JSON/${path}/`, data)
    }
}