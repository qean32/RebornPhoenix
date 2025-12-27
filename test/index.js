function isValidIP(str) {
    const tmp = str.split('.')
    return (tmp.length == 4 && !tmp.filter(item => (Number(item) >= 255 && Number(item) <= 0)).length)
}

const tmp = 'sTreSS'.split('').filter(item => 'sTreSS'.split('').filter(item_ => item_.toLowerCase() == item.toLowerCase()).length == 1)
console.log(tmp[0])