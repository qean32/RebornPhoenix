import { ToastPushEntity, ToastEventMessage, ToastMessage } from "@/component/case/toast"
import { toastKeyType, toastPayloadType } from "@/model"


export const toastHook = (
    {
        keyMessage,
        payload,
        id,
        view
    }: {
        keyMessage: toastKeyType,
        view: boolean,
        id: number,
        payload: toastPayloadType | any
    },
    isBackToast: boolean
) => {
    if (keyMessage == "push-entity") return <ToastPushEntity view={view} key={id} {...payload} isBackToast={isBackToast} />
    if (keyMessage == "event-message") return <ToastEventMessage view={view} key={id} {...payload} isBackToast={isBackToast} />
    if (keyMessage == "message") return <ToastMessage view={view} key={id} {...{ text: '' }} {...payload} isBackToast={isBackToast} />
    return <>WTFIT!</>
}