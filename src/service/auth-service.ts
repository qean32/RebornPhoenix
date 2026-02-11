import { requestPost } from "@lib/function/request"
import { authFormSchema, changePasswordFormSchema, registrationFormSchema, resetPasswordFormSchema } from "@/model/schema"
const instance = ''

export class authService {
    async REGISTRATION(data: registrationFormSchema) {
        return requestPost(`${instance}/registration`, data)
    }

    async AUTH(data: authFormSchema) {
        return requestPost(`${instance}/auth`, data)
    }

    async CHANGE_PASSWORD(data: changePasswordFormSchema, token: string) {
        return requestPost(`profile/change-password`, { ...data, token })
    }

    async RESET_PASSWORD(data: resetPasswordFormSchema) {
        return requestPost(`profile/reset-password`, data)
    }
}

export const authServiceItem = new authService()