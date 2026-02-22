export const previewPost = (text: string) => {
    if (text) {
        // @ts-ignore
        window.open(`preview/${text}`, '_blank').focus();
    }
}