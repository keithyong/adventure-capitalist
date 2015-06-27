import * as React from 'react'
import {email, isValidNumber, password} from './validate'
import ValidatedInput from './ValidatedInput.jsx'

class App extends React.Component {
    render() {
        return (
            <div className="main">
                <h1>React Validated Input</h1>
                <ValidatedInput
                  timeout={0.4}
                  validator={email}
                  placeholder={'Enter an email'}
                />
                <ValidatedInput
                  timeout={0.4}
                  validator={isValidNumber}
                  placeholder={'Enter a number'}
                />
                <ValidatedInput
                  timeout={0.4}
                  validator={password}
                  placeholder={'Enter a password'}
                  isPassword={true}
                />
            </div>
        )
    }
}

React.render(<App />, document.getElementById('react-mount'));
