export const fromDataToFormData = (data: any) => {
    const form = new FormData()

    Object.entries(data).forEach(item => {
        // @ts-ignore
        form.append(item[0], item[1])
    })

    return form
}