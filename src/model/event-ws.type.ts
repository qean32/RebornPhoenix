export type eventWSType = {
    key: keys,
    payload: any
}

type keys = 'change-object' | 'change-entity' | 'view-img' | 'dice'