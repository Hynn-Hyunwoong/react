const React = require('react')
const reactDOM = require('react-dom')

class App extends React.Component {
    render(){
        return (
            <div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        )
    }
}

const root = reactDOM.createRoot(document.getElementById('root'))
root.render(<App />)