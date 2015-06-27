import * as React from 'react'
import * as functions from './functions'

export default class ValidatedInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            validity: this.props.classNames.pending
        }
        this.timeouts = []
    }
    static propTypes = {
        validator: React.PropTypes.func.isRequired,
        timeout: React.PropTypes.number,
        placeholder: React.PropTypes.string,
        label: React.PropTypes.string,
        classNames: React.PropTypes.shape({
            main: React.PropTypes.string.isRequired,
            valid: React.PropTypes.string.isRequired,
            invalid: React.PropTypes.string.isRequired,
            pending: React.PropTypes.string.isRequired
        }),
        isPassword: React.PropTypes.bool
    }
    static defaultProps = {
        timeout: 0.5,
        placeholder: 'Enter something...',
        label: '',
        classNames: {
            main: 'validated-input',
            valid: 'valid',
            invalid: 'invalid',
            pending: 'pending'
        },
        isPassword: false
    }
    clearAllTimeouts() {
        for (var i = 0; i < this.timeouts.length; i++) {
            clearTimeout(this.timeouts[i])
        }
    }
    setValidity(validity) {
        this.setState({ validity: validity })
    }
    handleChange(event) {
        var value = event.target.value
        this.setState({ value: event.target.value })
        this.clearAllTimeouts()

        if (value === '') {
            this.setState({ validity: this.props.classNames.pending })
        } else if (this.props.validator(value) === false) {
            this.setState({ validity: this.props.classNames.pending })
            this.timeouts.push(
                setTimeout(() => {
                    this.setValidity(this.props.classNames.invalid)
                }.bind(this), this.props.timeout * 1000)
            )
        } else {
            this.setValidity(this.props.classNames.valid)
        }
    }
    getClassName() {
        var className = ''
        var validityClassName = this.props.classNames[this.state.validity]
        className = this.props.classNames.main + ' ' + validityClassName

        return className
    }
    getInputType() {
        var type = "text"
        if (this.props.isPassword) {
            type = "password"
        }

        return type
    }
    render() {
        return (
            <div>
                <label
                    className={this.props.classNames.main + '-label'}>
                    {this.props.label}
                </label>
                <input type={this.getInputType()}
                    className={this.getClassName()}
                    value={this.state.value}
                    onChange={this.handleChange.bind(this)}
                    placeholder={this.props.placeholder}
                    spellCheck="false"
                    autoCorrect="false"
                />
            </div>
        )
    }
}
