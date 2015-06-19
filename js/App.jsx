import * as React from 'react'
import NumberInput from './NumberInput.jsx'

class App extends React.Component {
    render() {
        return (
            <div>
                <label>Enter number:</label>
                <NumberInput />
            </div>
        )
    }
}

React.render(<App />, document.getElementById('react-mount'));
