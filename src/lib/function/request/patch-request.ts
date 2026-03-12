import { getAuthHeaders } from ".."
import { axiosInstance } from "@/config"

export const requestPatch = async <T>(path: string, body: T, file: boolean = false) => {
    return ((await axiosInstance.patch<T>(path, body, { headers: { ...getAuthHeaders(file) } })))
}