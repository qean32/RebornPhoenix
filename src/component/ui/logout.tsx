import React from 'react'
import { tokenStorageKey } from '@/config'
import { useToast } from '@/lib/hook'
import { useAppDispatch } from '@/store'
import { setUser } from '@/store/user-store'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

interface Props {
}


export const Logout: React.FC<Props> = ({ }: Props) => {
    const toast = useToast()
    const navigate = useNavigate()
    const dispath = useAppDispatch()

    const logout = () => {
        Cookies.remove(tokenStorageKey)
        dispath(setUser(null))
        toast('message', { text: 'Выход..' })
        setTimeout(() => {
            navigate('/')
        }, 600)
    }

    return (
        <p className="pl-2 text-red-800 cursor-pointer" onClick={logout} >Выход</p>
    )
}
