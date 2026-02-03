import { requestGet } from "@lib/function/request"
const instance = 'server';

export const serverService = {
    SERVER: () => {
        return requestGet(`${instance}`)
    },

    STATIC: (path: string) => {
        return requestGet(`${path}`)
    }
}