import { getToken } from "./get-token"

export const getAuthHeaders = (file: boolean = false) => {
    return file ?
        { 'Authorization': `Bearer ${getToken()}` }
        :
        (getToken() ?
            {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            }
            :
            {
                'Content-Type': 'application/json',
            }
        )
}