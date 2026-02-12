export type eventType = {
    type: keysEvent
    payload: any
}

export type keysEvent =
    'swap-map' |
    'change-object' |
    'change-entity' |
    'dice'