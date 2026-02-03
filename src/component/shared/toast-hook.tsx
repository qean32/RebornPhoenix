import { ToastPushEntity, ToastEventMessage, ToastMessage } from "@/component/case/toast"
import { toastKeyDto, toastPayloadDto } from "@/model"


export const toastHook = (
    {
        keyMessage,
        payload,
        id,
        view
    }: {
        keyMessage: toastKeyDto,
        view: boolean,
        id: number,
        payload: toastPayloadDto | any
    },
    firstId: number
) => {
    if (keyMessage == "push-entity") return <ToastPushEntity view={view} key={id} {...payload} backToast={firstId != id} />
    if (keyMessage == "event-message") return <ToastEventMessage view={view} key={id} {...payload} backToast={firstId != id} />
    if (keyMessage == "message") return <ToastMessage view={view} key={id} {...{ text: '' }} {...payload} backToast={firstId != id} />
    return <>WTFIT!</>
}