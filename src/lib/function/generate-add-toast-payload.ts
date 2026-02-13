import { toastType } from "@/model"
import { generateId } from "./generate-id"

export const generateAddToastPayload = (name: string): { payload: toastType, type: 'toast-store/pushToast' } => {
    return {
        payload: {
            id: generateId(),
            key: 'push-entity',
            payload: { name },
            view: true
        },
        type: 'toast-store/pushToast'
    }
}