import { requestPost } from "@lib/function/request"
import { authFormDto, changePasswordFormDto, registrationFormDto, resetPasswordFormDto } from "@/model/schema"
const instance = 'auth'

export const authService = {
    auth: async (data: authFormDto) => {
        return requestPost(`${instance}`, data)
    },

    registration: async (data: registrationFormDto) => {
        return requestPost(`${instance}/registration`, data)
    },

    changePassword: async (data: changePasswordFormDto) => {
        return requestPost(`${instance}/change-password`, data)
    },

    resetPassword: async (data: resetPasswordFormDto) => {
        return requestPost(`${instance}/reser-password`, data)
    },
}