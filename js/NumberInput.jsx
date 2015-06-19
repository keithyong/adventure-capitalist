import * as React from 'react'
import * as functions from './functions'

export default class NumberInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            isValid: false
        };
    }
    handleChange(event) {
        var value = event.target.value
        value = value.trim()
        var vs = value.split(' ')

        var vsLen = vs.length;

        // Validate the input.
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

        this.setState({ isValid: isValid })
        this.setState({ value: event.target.value })
    }
    render() {
        var className = ''
        var errorClass = ''

        if (this.state.isValid) {
            errorClass = ''
        } else {
            errorClass = 'error'
        }

        className = 'number-input ' + errorClass
        console.log(className)

        return (
            <input type="text" className={className} value={this.state.value} onChange={this.handleChange.bind(this)} placeholder="Enter a number"/>
        )
    }
}
