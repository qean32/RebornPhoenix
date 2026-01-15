export type toastDto = {
    key: toastKeyDto,
    id: number,
    payload: toastPayloadDto,
    view: boolean
}

export type toastPayloadDto = {
    name?: string
    path?: string
    text?: string | unknown
}

export type toastKeyDto =
    ''
    | 'push-entity'
    | 'event-message'
    | 'message'