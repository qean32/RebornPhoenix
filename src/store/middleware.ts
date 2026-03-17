import { generateRejectToastPayload, generateAddToastPayload, generateId } from "@/lib/function";
import { requestPost } from "@/lib/function/request";


const toast = (method: Function, next: any, ...args: any) => {
    const payload = method(...args)
    next(payload)

    setTimeout(() => {
        next({ type: 'toast/removeToast', payload: { id: payload.payload.id } })
    }, 3000)
}

const rejectMwthods = ['pushImg', 'pushUser', 'removeEntity', 'removeObject', 'removeMap', 'removeCharacter', 'editBestiary']

export const sessionMiddleware = (store: any) => (next: any) => (action: any) => {
    const type = action.type.split('/')

    if (type[0] == 'session') {
        const mode = store.getState('').log.mode
        if (mode == "play") {
            const isPush = type[1] == 'pushEntity' || type[1] == 'pushObject' || type[1] == 'pushMap'

            if (rejectMwthods.includes(type[1])) {
                toast(generateRejectToastPayload, next)
                return
            }

            if (!rejectMwthods.includes(type[1])) {
                if (isPush) {
                    const id = generateId()
                    requestPost("event", { event: { payload: { ...action.payload, id }, type: type[1], id: store.getState('').session.session.id } })

                    return next({ ...action, payload: { ...action.payload, isFromConnect: true, id } });
                } else {
                    requestPost("event", { event: { payload: action.payload, type: type[1], id: store.getState('').session.session.id } })
                }
            }

            if (isPush) {
                toast(generateAddToastPayload, next, action.payload.name)
            }

            return next(action);
        }
    }

    return next(action);
};
