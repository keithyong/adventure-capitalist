import * as functions from './functions'

export function isValidNumber(value) {
    if (value === "") {
        return true
    }

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

export function email(value) {
    var emailRegex = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/g
    if (emailRegex.exec(value)) {
        return true
    } else {
        return false
    }
}

export function password(value) {
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g
    if (passwordRegex.exec(value)) {
        return true
    } else {
        return false
    }
}

export function number(value) {
    var numberRegex = /^\d+$/g
    if (numberRegex.exec(value)) {
        return true
    } else {
        return false
    }
}
