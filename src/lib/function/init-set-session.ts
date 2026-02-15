import { setSession } from "@/store/session-store"
import { useAppDispatch } from "../hook/redux"

export const initSetSession = () => {
    const dispath = useAppDispatch()

    const setSessionFn = async (_session: any) => {
        const session = fetch(`${process.env.SERVER_HOST}api/static/${_session.data}/`)
        const bestiary = fetch(`${process.env.SERVER_HOST}api/static/${_session.bestiary}/`)

        Promise.all([session, bestiary])
            .then(async ([session, bestiary]) => {
                dispath(
                    setSession({
                        bestiary: await bestiary.json(),
                        session: await session.json(),
                        info: {
                            bestiary: _session.bestiary,
                            session: _session.data
                        },
                        isSet: true
                    }))
            })
    }

    return setSessionFn
}