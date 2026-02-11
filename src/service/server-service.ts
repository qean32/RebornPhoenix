import { requestGet, requestPost } from "@lib/function/request"
const instance = 'server';

export const serverService = {
    SERVER: () => {
        return requestGet(`${instance}`)
    },

    STATIC: (path: string) => {
        return requestGet(`${path}`)
    },

    event: (id: number | string, data: any) => {
        return requestPost('event', { event: { ...data, id: id } })
    }
}