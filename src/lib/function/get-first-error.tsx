import { REJECT_SERVER } from "@/config";
import { AxiosError } from "axios";

export const getFirstError = (response: AxiosError): string | unknown => {
    // @ts-ignore
    return response.response?.data?.message ?? Object.entries(response?.response?.data?.errors)[0][1] ?? REJECT_SERVER
}