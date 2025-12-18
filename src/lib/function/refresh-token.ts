import { invalidTokenMessage, tokenKey } from "@/export"
import { getToken } from "./get-token"
import { setToken } from "./set-token"
import { authService } from "@/service"

export const refreshToken = () => {
    // @ts-ignore
    getToken() && authService.refreshAuth().then((token: string) => {
        if (token == invalidTokenMessage) {
            localStorage.removeItem(tokenKey)
            return
        }

        setToken(token)
    })
}