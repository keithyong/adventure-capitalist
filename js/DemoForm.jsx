import * as React from 'react'
import {email, number, password} from './validate'
import ValidatedInput from './ValidatedInput.jsx'

export default class DemoForm extends React.Component {
    handleWrongPassword() {
        console.log('nope')
    }
    render() {
        return (
            <div>
                <ValidatedInput
                  timeout={0.4}
                  validator={email}
                  placeholder={'Enter an email'}
                />
                <ValidatedInput
                  timeout={0.4}
                  validator={number}
                  placeholder={'Enter a number'}
                />
                <ValidatedInput
                  timeout={0.4}
                  validator={password}
                  placeholder={'Enter a password'}
                  isPassword={true}
                  onInvalid={this.handleWrongPassword}
                />
            </div>
        )
    }
}
