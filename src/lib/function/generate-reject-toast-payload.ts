import { toastType } from "@/model"
import { generateId } from "./generate-id"

export const generateRejectToastPayload = (): { payload: toastType, type: 'toast/pushToast' } => {
    return {
        payload: {
            id: generateId(),
            key: 'message',
            payload: { text: "В игровом режиме действие запрещено!" },
            view: true
        },
        type: 'toast/pushToast'
    }
}