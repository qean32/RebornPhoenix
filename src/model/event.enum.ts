export type eventType = {
    type: KE
    payload: any
}

export enum KE {
    swapCurrentMap,
    changeObject,
    changeEntity,
    dice,
    sync,
    pushEntity,
    pushObject,
    pushCharacter,
    pushToBestiary,
    viewImg,
    pushMap,
}
