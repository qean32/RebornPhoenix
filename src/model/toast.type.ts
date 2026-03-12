export type toastType = {
    key: toastKeyType,
    id: number,
    payload: toastPayloadType,
    view: boolean
}

export type toastPayloadType = {
    name?: string
    path?: string
    text?: string | unknown
}

export type toastKeyType =
    ''
    | 'push-entity'
    | 'event-message'
    | 'message'