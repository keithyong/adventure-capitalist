import * as React from 'react'
import {repeat} from './functions'
import {data} from './data'

export default class RawNumber extends React.Component {
    render() {
        var num = this.props.number
        var ext = this.props.ext
        var numStr = num + ''

        var digitsAfterDecimal = 0;
        for (var i = 0; i < numStr.length; i++) {
            if (numStr[i] == '.')
        }
        num = num + repeat('0', data[ext] - digitsAfterDecimal)

        return <span>{num}</span>
    }
}
