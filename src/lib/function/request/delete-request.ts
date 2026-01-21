import { axiosInstance } from "@/export"
import { getAuthHeaders } from "../get-auth-headers"

export const requestDelete = async <T>(path: string) => {
    return ((await axiosInstance.delete<T>(path, { headers: { ...getAuthHeaders() } })))
}