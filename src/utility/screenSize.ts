function chgOnSm(curWidth: number, specWidth: number, passOption:string, failOption:string) {
    return curWidth <= specWidth ? passOption : failOption;
}

function chgOnVal(currentValue:any, desiredValue:any, passOption:string, failOption:string) {
    return currentValue === desiredValue ? passOption : failOption;
}

export { chgOnSm, chgOnVal }