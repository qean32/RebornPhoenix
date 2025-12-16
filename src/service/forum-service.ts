import { requestDelete, requestGet, requestPost } from "@lib/function/request"
const instance = 'forum'

export const forumService = {
    getDepartments: () => {
        return requestGet(`${instance}/departments`)
    },

    getPost: (id: number) => {
        return requestGet(`${instance}/post/${id}`)
    },

    getDepartmentPost: (skip: number, take: number, search: string, idDepartment: number, date: string, tags: string) => {
        return requestGet(`${instance}/department/${idDepartment}?skip=${skip}&take=${take}&search=${search}&date=${date}&tags=${tags}`)
    },

    createPost: (data: any) => {
        return requestPost(`${instance}/push-post`, data)
    },

    like: (id: number) => {
        return requestPost(`${instance}/${id}/like-action`, {})
    },

    deletePost: (id: number) => {
        return requestDelete(`${instance}/${id}/delete`)
    },

    createComment: (data: any) => {
        return requestPost(`${instance}/create/comment`, data)
    }
}