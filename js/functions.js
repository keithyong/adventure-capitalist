import {data} from './data'

export function isNumeric(s) {
    var val = parseFloat(s)
    return !isNaN(val)
}

export function isValid(s) {
    console.log(data)
    if (data[s])
        return true
    else
        return false
}
