import { AxiosError } from "axios";
import { useToast } from "../hook";
import { getFirstError } from ".";

export const handleFetchCatch = (response: AxiosError, toast: ReturnType<typeof useToast>, callBack?: () => void) => {
    toast('message', { text: getFirstError(response) }, 2000)
    callBack && callBack()
}