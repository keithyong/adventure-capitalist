import * as React from 'react'
import * as functions from './functions'
import RawNumber from './RawNumber.jsx'

export default class NumberInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            validity: 'valid'
        }
        this.timeout = []
    }
    clearAllTimeouts() {
        for (var i = 0; i < this.timeout.length; i++) {
            clearTimeout(this.timeout[i])
        }
    }
    setValidity(validity) {
        this.setState({ validity: validity })
    }
    handleChange(event) {
        var value = event.target.value
        this.setState({ value: event.target.value })

        var isValid = this.props.validFunction(value)
        this.clearAllTimeouts()

        if (isValid === false) {
            this.setState({ validity: 'pending' })
            console.log('timeout: ' + this.timeout)

            this.timeout.push(setTimeout(function(){ this.setValidity('invalid') }.bind(this), this.props.validationTimeoutSeconds * 1000))
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
