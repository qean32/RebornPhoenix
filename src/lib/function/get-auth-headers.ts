import { getToken } from "./get-token"

export const getAuthHeaders = (file: boolean = false) => {
    return file ?
        { 'Authorization': `${getToken()}` }
        :
        (getToken() ?
            {
                'Content-Type': 'application/json',
                'Authorization': `${getToken()}`
            }
            :
            {
                'Content-Type': 'application/json',
            }
        )
}