import { generateRejectToastPayload, generateAddToastPayload, generateId } from "@/lib/function";
import { requestPost } from "@/lib/function/request";


const toast = (method: Function, next: any, ...args: any) => {
    const payload = method(...args)
    next(payload)

    setTimeout(() => {
        next({ type: 'toast/removeToast', payload: { id: payload.payload.id } })
    }, 3000)
}

const rejectMwthods = ['pushImg', 'pushUser', 'removeEntity', 'removeObject', 'removeMap', 'removeCharacter', 'editBestiary', 'pushToBestiary']

export const sessionMiddleware = (store: any) => (next: any) => (action: any) => {
    const type = action.type.split('/')
    const mode = store.getState('').log.mode

    if (type[0] == 'session' && mode == "play") {
        const isPush = (type[1] == 'pushEntity' || type[1] == 'pushObject' || type[1] == 'pushMap')

        if (rejectMwthods.includes(type[1]) && mode == "play") {
            toast(generateRejectToastPayload, next)
            return
        }

        if (!rejectMwthods.includes(type[1]) && mode == "play") {
            requestPost("event", { event: { payload: { ...action.payload, isFromConnect: true }, type: type[1], id: store.getState('').session.session.id } })
        }

        if (isPush) {
            toast(generateAddToastPayload, next, action.payload.name)
            return next({ ...action, payload: { ...action.payload, isFromConnect: true } });
        }
        return next({ ...action, payload: { ...action.payload, isFromConnect: true } });
    }

    return next(action);
};
