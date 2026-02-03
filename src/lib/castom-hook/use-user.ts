import { useAppSelector } from "./redux"

export const useUser = () => {
    const { user } = useAppSelector(state => state.user)

    return user
}