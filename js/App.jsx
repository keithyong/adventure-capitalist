import * as React from 'react'
import DemoForm from './DemoForm.jsx'

class App extends React.Component {
    render() {
        return (
            <div className="main">
                <h1>React Validated Input</h1>
                <DemoForm />
            </div>
        )
    }
}

React.render(<App />, document.getElementById('react-mount'));
