import { useUser } from "@/lib/castom-hook"
import React from "react"

export const RefreshToken: React.FC<{}> = () => {
    useUser(true)

    return <></>
}