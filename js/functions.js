import {data} from './data'

export function repeat(pattern, count) {
    if (count < 1) return ''
    var result = ''
    while (count > 1) {
        if (count & 1) result += pattern
        count >>= 1, pattern += pattern
    }
    return result + pattern
}

export function digitsAfterDecimal(numStr) {
    var digitsAfterDecimal = 0
    var len = numStr.length
    for (var i = 0; i < len; i++) {
        // If we find the decimal point
        if (numStr[i] == '.') {
            digitsAfterDecimal = len - i - 1
        }
    }

    return digitsAfterDecimal
}

export function convertToRawNumber(value) {
    var vs = value.trim().split(' ')
    console.log(vs)
    var numStr = vs[0]

    if (vs.length === 1) {
        return numStr
    }

    var ext = vs[1]
    var rawNumber = numStr + repeat('0', data[ext] - digitsAfterDecimal(numStr))
    return rawNumber
}
