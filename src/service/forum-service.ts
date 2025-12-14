import { requestGet } from "@lib/function/request"
const instance = 'forum'

export const forumService = {
    getDepartment: (id: string) => {
        return requestGet(`${instance}/id/?id=${id}`)
    },
}