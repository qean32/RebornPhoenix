import { useAppSelector } from "./redux"

export const useUser = () => {
    const { user, _try } = useAppSelector(state => state.user)

    return { user, _try }
}