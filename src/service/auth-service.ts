import { requestPost } from "@lib/function/request"
import { authFormDto, changePasswordFormDto, registrationFormDto, resetPasswordFormDto } from "@/model/schema"
const instance = ''

export class authService {
    async REGISTRATION(data: registrationFormDto) {
        return requestPost(`${instance}/registration`, data)
    }

    async AUTH(data: authFormDto) {
        return requestPost(`${instance}/auth`, data)
    }

    async CHANGE_PASSWORD(data: changePasswordFormDto, token: string) {
        return requestPost(`profile/change-password`, { ...data, token })
    }

    async RESET_PASSWORD(data: resetPasswordFormDto) {
        return requestPost(`profile/reset-password`, data)
    }
}