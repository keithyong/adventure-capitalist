import * as React from 'react';
import * as functions from './functions';

class NumberField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            isValid: false
        };
    }
    handleChange(event) {
        var value = event.target.value
        var vs = value.split(' ')

        // Validate the input.
        if (functions.isNumeric(vs[0]) && vs.length == 2 && functions.isValid(vs[1])) {
            this.setState({ isValid: true })
        } else {
            this.setState({ isValid: false })
        }

        this.setState({value: event.target.value})
    }
    render() {
        var errorClass = ''
        if (this.state.isValid) {
            errorClass = ''
        } else {
            errorClass = 'error'
        }
        console.log(errorClass)
        return (
            <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} placeholder="Enter a number"/>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <label>Enter number:</label>
                <NumberField />
            </div>
        )
    }
}


React.render(<App />, document.getElementById('react-mount'));
