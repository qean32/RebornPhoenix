import { customMarkup, separator } from "@/export"

export const convertToHTML = (text: string, link?: string) => {
    function* generatorFn() {
        // @ts-ignore
        for (const item of link?.replaceAll('{', '').replaceAll('}', '').split(',')) yield item;
    }
    const generator = generatorFn()


    return text.split(separator).map(item => {
        const arr = item.split(' ')

        if (item.includes('script')) {
            return "ERROR"
        }
        if (arr[0] == customMarkup.h1) {
            return `<p class="text-4xl">${arr.slice(1).join(' ')}</p>`
        }
        if (arr[0] == customMarkup.small) {
            return `<p class="text-sm">${arr.slice(1).join(' ')}<p>`
        }
        if (arr[0] == customMarkup.h2) {
            return `<p class="text-3xl">${arr.slice(1).join(' ')}<p>`
        }
        if (arr[0] == customMarkup.h3) {
            return `<p class="text-2xl">${arr.slice(1).join(' ')}<p>`
        }
        if (arr[0] == customMarkup.small) {
            return `<p class="text-sm">${arr.slice(1).join(' ')}<p>`
        }
        if (arr[0].slice(0, 4) == 'img:' && link) {

            return `<img class="rounded-sm" src="${generator.next().value.replaceAll(';', '/')}" />`
        }

        return `<p class="text-xl">${item}<p>`
    }).join('')
}