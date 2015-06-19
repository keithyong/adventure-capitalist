import {data} from './data'

export function isNumeric(s) {
    var val = parseFloat(s)
    return !isNaN(val)
}

export function isValid(s) {
    if (data[s])
        return true
    else
        return false
}

export function repeat(pattern, count) {
    if (count < 1) return '';
    var result = '';
    while (count > 1) {
        if (count & 1) result += pattern;
        count >>= 1, pattern += pattern;
    }
    return result + pattern;
}
