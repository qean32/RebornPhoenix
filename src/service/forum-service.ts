import { requestDelete, requestGet, requestPatch, requestPost } from "@lib/function/request"
const instance = 'forum'

export const forumService = {
    GET_DEPARTAMENTS: () => {
        return requestGet(`${instance}/departments`)
    },

    GET_POST: (id: string | number) => {
        return requestGet(`${instance}/${id}/post/`)
    },

    GET_DEPARTAMENT_POST: (skip: number, take: number, search: string, idDepartment: number | string, date: string = '', tags: string = '') => {
        return requestGet(`${instance}/${idDepartment}/department?skip=${skip}&take=${take}&search=${search}&date=${date}&tags=${tags}`)
    },

    GET_FIXED_POST: (idDepartment: number) => {
        return requestGet(`${instance}/${idDepartment}/department/fixed`)
    },

    CREATE_POST: (data: any) => {
        return requestPost(`${instance}/create/post`, data)
    },

    LIKE_ACTION: (id: string | number) => {
        return requestPost(`${instance}/${id}/like-action`, {})
    },

    MY_LIKE: (id: string | number) => {
        return requestGet(`${instance}/${id}/my-like`)
    },

    DELETE_POST: (id: string | number) => {
        return requestDelete(`${instance}/${id}/delete`)
    },

    CREATE_COMMENT: (data: any, id: string | number) => {
        return requestPost(`${instance}/${id}/comment/create`, data)
    },

    UPDATE_COMMENT: (data: any, id: string | number) => {
        return requestPatch(`${instance}/${id}/comment/update`, data)
    },

    DELETE_COMMENT: (id: string | number) => {
        return requestDelete(`${instance}/${id}/comment/delete`)
    },

    GET_COMMENTS: (id: string | number) => {
        return requestGet(`${instance}/${id}/comments`)
    }
}