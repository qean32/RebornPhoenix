import { toastType } from "@/model"
import { generateId } from "./generate-id"

export const generateRejectToastPayload = (): { payload: toastType, type: 'toast-store/pushToast' } => {
    return {
        payload: {
            id: generateId(),
            key: 'message',
            payload: { text: "В игровом режиме действие запрещено!" },
            view: true
        },
        type: 'toast-store/pushToast'
    }
}