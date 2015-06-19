import * as React from 'react'
import * as functions from './functions'
import {isValidNumber} from './validate'
import RawNumber from './RawNumber.jsx'

export default class NumberInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            isValid: false
        };
    }
    setIsValid(isValid) {
        this.setState({ isValid: isValid })
    }
    handleChange(event) {
        var value = event.target.value
        this.setState({ value: event.target.value })

        var isValid = isValidNumber(value)
        if (isValid === false) {
            setTimeout(this.setIsValid(isValid), 2000);
        } else {
            this.setIsValid(isValid)
        }
    }
    getClassName() {
        var className = ''
        var errorClass = ''

        // Generate error classes based on input validity.
        if (this.state.isValid) {
            errorClass = ''
        } else {
            errorClass = 'error'
        }

        className = 'number-input ' + errorClass
        return className
    }
    render() {
        return (
            <div>
                <input type="text" className={this.getClassName()} value={this.state.value} onChange={this.handleChange.bind(this)} placeholder="Enter a number"/>
                <RawNumber isValid={this.state.isValid} value={this.state.value} />
            </div>
        )
    }
}
