import data from './data'

export function isNumeric(s) {
    return !isNaN(s)
}

export function isValid(s) {
    console.log(data)
    if (data[s])
        return true
    else
        return false
}
