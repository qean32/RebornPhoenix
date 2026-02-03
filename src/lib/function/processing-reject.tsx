export const processingReject = (error: any, toast: Function) => {
    if (error.code == 400 || error.code == 500) {
        toast('message', { text: error.error })
    }
}