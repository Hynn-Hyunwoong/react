const React = require('react')
const reactDOM = require('react-dom')

class App extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "234", /*#__PURE__*/React.createElement("ul", null, "123", /*#__PURE__*/React.createElement("li", null, "1"), /*#__PURE__*/React.createElement("li", null, "2"), /*#__PURE__*/React.createElement("li", null, "3"), /*#__PURE__*/React.createElement("li", null, "4")));
  }
}


const root = reactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)