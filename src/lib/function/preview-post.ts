import { separator, separatorLink } from "@/export";

export const previewPost = (ref: any) => {
    if (ref.current) {
        const links = ref.current.innerHTML.match(/\{(.*?)\}/g)
        const text = ref.current.innerHTML.replaceAll('/', '').replaceAll('&nbsp;', '').split('<div>')

        // @ts-ignore
        window.open(`preview/${text.join(separator)}${separatorLink}${links?.join(separator).replaceAll('/', ';')}`, '_blank').focus();
    }
}