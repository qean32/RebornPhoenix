import { axiosInstance } from "@/config"
import { getAuthHeaders } from ".."

export const requestPost = async <T>(path: string, body: T, file: boolean = false) => {
    return ((await axiosInstance.post<T>(path, body, { headers: { ...getAuthHeaders(file) } })))
}