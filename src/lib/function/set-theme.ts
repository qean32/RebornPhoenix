import { expires, themeStorageKey } from "@/config"
import Cookies from "js-cookie"

export const setTheme = (theme: string[]) => {
    if (theme) {
        document.body.style.setProperty("--bg-color", theme[0])
        document.body.style.setProperty("--bg-color-darkness", theme[1])
        document.body.style.setProperty("--bg-color-dark", theme[2])
        document.body.style.setProperty("--bg-color-light", theme[3])
        document.body.style.setProperty("--text", theme[4])

        Cookies.set(themeStorageKey, JSON.stringify(theme), {
            expires
        })
    }
}
