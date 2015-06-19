import * as React from 'react'
import * as functions from './functions'
import {isValidNumber} from './validate'
import RawNumber from './RawNumber.jsx'

export default class NumberInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            validity: 'valid'
        }
        this.timeout
    }
    setValidity(validity) {
        this.setState({ validity: validity })
    }
    handleChange(event) {
        var value = event.target.value
        this.setState({ value: event.target.value })

        var isValid = isValidNumber(value)
        if (isValid === false) {
            this.setState({ validity: 'pending' })

            // Having trouble in this line of code on clearing the timeout.
            clearTimeout(this.timeout)

            this.timeout = setTimeout(function(){ this.setValidity('invalid') }.bind(this), this.props.validationTimeoutSeconds * 1000)
            console.log(this.timeout)
        } else {
            this.setValidity('valid')
        }
    }
    getClassName() {
        var className = ''
        var errorClass = this.state.validity

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
