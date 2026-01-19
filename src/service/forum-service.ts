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

    myLike: (id: string | number) => {
        return requestGet(`${instance}/${id}/my-like`)
    },

    deletePost: (id: string | number) => {
        return requestDelete(`${instance}/${id}/delete`)
    },

    createComment: (data: any, id: string | number) => {
        return requestPost(`${instance}/${id}/comment/create`, data)
    },

    updateComment: (data: any, id: string | number) => {
        return requestPatch(`${instance}/${id}/comment/update`, data)
    },

    deleteComment: (id: string | number) => {
        return requestDelete(`${instance}/${id}/comment/delete`)
    },

    getComments: (id: string | number) => {
        return requestGet(`${instance}/${id}/comments`)
    }
}