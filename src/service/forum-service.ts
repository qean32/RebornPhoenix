import { requestDelete, requestGet, requestPatch, requestPost } from "@lib/function/request"
const instance = 'forum'

export const forumService = {
    getDepartments: () => {
        return requestGet(`${instance}/departments`)
    },

    getPost: (id: string | number) => {
        return requestGet(`${instance}/${id}/post/`)
    },

    getDepartmentPost: (skip: number, take: number, search: string, idDepartment: number | string, date: string = '', tags: string = '') => {
        return requestGet(`${instance}/${idDepartment}/department?skip=${skip}&take=${take}&search=${search}&date=${date}&tags=${tags}`)
    },

    getFixedPost: (idDepartment: number) => {
        return requestGet(`${instance}/${idDepartment}/department/fixed`)
    },

    createPost: (data: any) => {
        return requestPost(`${instance}/create/post`, data)
    },

    likeAction: (id: string | number) => {
        return requestPost(`${instance}/${id}/like-action`, {})
    },

    deletePost: (id: string | number) => {
        return requestDelete(`${instance}/${id}/delete`)
    },

    createComment: (data: any) => {
        return requestPost(`${instance}/create/comment`, data)
    },

    updateComment: (data: any, id: string | number) => {
        return requestPatch(`${instance}/update/comment/${id}`, data)
    },

    deleteComment: (id: string | number) => {
        return requestDelete(`${instance}/create/comment/${id}`)
    },

    getComment: (id: string | number) => {
        return requestGet(`${instance}/${id}/comment`)
    }
}