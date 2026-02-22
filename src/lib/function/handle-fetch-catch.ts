import { AxiosError } from "axios";
import { useToast } from "../hook";
import { getFirstError } from ".";

export const handleFetchCatch = (response: AxiosError, toast: ReturnType<typeof useToast>, callBack?: () => void) => {
    console.log('zxc')
    toast('message', { text: getFirstError(response) }, 2000)
    callBack && callBack()
}