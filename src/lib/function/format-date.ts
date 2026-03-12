import { dataTimeOption } from "@/config"

export const formatDate = (date: string): string => {
    // @ts-ignore
    return new Date(date).toLocaleString("ru", dataTimeOption) ?? ""
}
