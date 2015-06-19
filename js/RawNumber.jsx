import * as React from 'react'
import {repeat, digitsAfterDecimal, convertToRawNumber} from './functions'
import {data} from './data'

export default class RawNumber extends React.Component {
    render() {
        if (this.props.isValid) {
            var rawNumber = convertToRawNumber(this.props.value)

            return <span>{rawNumber}</span>
        } else {
            return <span id="invalid-number">Invalid number.</span>
        }
    }
}
