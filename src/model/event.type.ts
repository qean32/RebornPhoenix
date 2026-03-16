export type eventType = {
    type: keysEvent
    payload: any
}

export type keysEvent =
    'swaMmap' |
    'changeObject' |
    'changeEntity' |
    'dice' |
    'view-img' |
    'sync' |
    'pushEntity' |
    'pushObject' |
    'pushCharacter' |
    'push-to-bestiary' |
    'pushMap'

['pushImg', 'pushUser', 'removeEntity', 'removeObject',
    'removeMap', 'removeCharacter', 'editBestiary']
