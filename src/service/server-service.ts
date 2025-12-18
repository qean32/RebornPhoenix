import { requestGet } from "@lib/function/request"
const instance = 'server';

export const serverService = {
    server: () => {
        return requestGet(`${instance}`)
    },
}