import { getAuthHeaders } from ".."
import { axiosInstance } from "@/config"

export const requestGet = async <T>(path: string) => {
    return (await axiosInstance.get<T>(path, { headers: { ...getAuthHeaders() } })).data
}