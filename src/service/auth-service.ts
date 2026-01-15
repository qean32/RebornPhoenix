import { requestPost } from "@lib/function/request"
import { authFormDto, changePasswordFormDto, registrationFormDto, resetPasswordFormDto } from "@/model/schema"
const instance = ''

export class authService {
    async registration(data: registrationFormDto) {
        return requestPost(`${instance}/registration`, data)
    }

    async auth(data: authFormDto) {
        return requestPost(`${instance}/auth`, data)
    }

    async changePassword(data: changePasswordFormDto) {
        return requestPost(`${instance}/change-password`, data)
    }

    async resetPassword(data: resetPasswordFormDto) {
        return requestPost(`${instance}/reset-password`, data)
    }
}