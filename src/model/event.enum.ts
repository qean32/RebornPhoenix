export type eventType = {
    type: KE
    payload: any
}

export enum KE {
    swapCurrentMap = "swapCurrentMap",
    changeObject = "changeObject",
    changeEntity = "changeEntity",
    dice = "dice",
    sync = "sync",
    pushEntity = "pushEntity",
    pushObject = "pushObject",
    pushCharacter = "pushCharacter",
    pushToBestiary = "pushToBestiary",
    viewImg = "viewImg",
    pushMap = "pushMap",
    pushImg = "pushImg",
}
