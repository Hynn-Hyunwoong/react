# Styled Components 

1. React Project Settings
2. Styled-Components Settings


## React Project Settings

```sh
npm init -y
npm install -D webpack webpack-cli @babel/core @babel/preset-env @babel/preset-react 
npm install -D webpack-dev-server html-webpack-plugin babel-loader mini-css-extract-plugin
npm install react react-dom styled-components

```

## Webpack Config

1. Setting to webpack.config.js
2. Setting CSS-Loader
3. resolving Issue styled-components 


Normally `.rc` File type of JSON.

1) Package Install
```sh
npm install react react-dom styled-components 
```

```sh
| -- src
| ----app.js
| ----index.js
| -- index.html
```
Why possible 'import' in JavaScript? 
commonJS - require
ES6 - import 


## Launch to Webpack

1. npx webpack
- Understanding login for launching a webpack 

2. npx webpack server
- Different "npx webpack" point?

3. npm run dev
- Why running ?

**package.json**
```json
"scripts":{
    "dev" : "webpack server"
}
```
why excluding npx?


### Style Component Setting 

1. Previous Setting CSS-Loader with Styled-Component 

- style-loader
- css-loader
What is different style-loader and css-loader?

package Install
```sh
npm install -D mini-css-extract-plugin css-loader
```

## Usage Style-components

**Directory**
```sh
| -- src
| ---- components 
| ------button.jsx
| ---- pages
| ------main.jsx
| ----
| ---- index.jsx
| ---- app.jsx
```

import `main` component from `App` Component
`Class`, `Props`
JSX
While usage React.createElement method

If add to ID vale "1", 
```JSX
// JSX
<App id="1" />
<App id="1">Hello World</App>

// React.createElement
React.createElement(App, { id :"1"})
React.createElement(App, { id :"1"}, "Hello world")
```

```JSX
const App = (props) =>{
    // props {id : "1", children : "Hello world"}
    console.log(props.children), console.log(props.id)
    const {children, id} = props
    console.log(children, id)
}
