import * as functions from './functions'

export function isValidNumber(value) {
    value = value.trim()
    var vs = value.split(' ')

    var vsLen = vs.length

    var isValid = false
    if (vsLen == 2) {
        if (functions.isNumeric(vs[0]) && functions.isValid(vs[1])) {
            isValid = true
        }
    }
    else if (vsLen == 1) {
        if (functions.isNumeric(vs[0])) {
            isValid = true
        }
    }

    return isValid
}
