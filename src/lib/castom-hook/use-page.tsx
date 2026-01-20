import { changeTitle, initSetUser } from "@lib/function"

export const usePage = (title: string) => {
    changeTitle(title)
    initSetUser()
    window.scrollTo({ top: 0 })

    return {}
}