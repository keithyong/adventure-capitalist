import * as React from 'react'
import * as functions from './functions'
import {isValidNumber} from './validate'

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

        var isValid = isValidNumber(value)

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

        var vs = this.state.value.split(' ')

        return (
            <div>
            <input type="text" className={className} value={this.state.value} onChange={this.handleChange.bind(this)} placeholder="Enter a number"/>
            </div>
        )
    }
}
