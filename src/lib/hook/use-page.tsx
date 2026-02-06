import { changeTitle, initSetUser } from "@lib/function"
import React from "react"

export const usePage = (title: string) => {
    initSetUser()
    React.useEffect(() => {
        changeTitle(title)
        window.scrollTo({ top: 0 })
    }, [])

    return {}
}