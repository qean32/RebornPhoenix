import { AxiosResponse } from "axios";
import { useToast } from "../hook";

export const handleFetchThen = ({ status, data }: AxiosResponse, toast: ReturnType<typeof useToast>, ACCEESS_ACTION: string, callBack?: (data: any) => void) => {
    if (status == 201 || status == 200) {
        toast('message', { text: ACCEESS_ACTION })
        callBack && callBack(data)
    }
}