export const processingAcceess = (data: any, toast: Function, message: string) => {
    if (data.code == 200 || data.code == 201) {
        toast('message', { text: message })
    }
}