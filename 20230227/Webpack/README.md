# WebPack

1) Babel just transpiler only code. Also, babel doens't transpile is multiple files. ex- require
2) WebPack is bundler module.


# WebPack Summary
Webpack is a module bundler for JavaScript applications. It takes multiple JavaScript files and their dependencies and bundles them into a single file, which can be served to the browser for use in a web application.

Webpack is commonly used in modern web development to help manage complex application architectures and to provide a more efficient development workflow. By bundling multiple JavaScript files into a single file, Webpack can reduce the number of HTTP requests made by a web page, which can result in faster load times.

Webpack also has many built-in features and plugins that make it easy to perform tasks like transpiling ES6/ES7 code to ES5, optimizing and minifying code for production, and processing other file types like CSS and images. Additionally, Webpack can be used with other tools like Babel, React, and TypeScript to help build more robust and feature-rich web applications.

In summary, Webpack is a powerful tool that simplifies the process of building and managing complex web applications by bundling multiple JavaScript files and their dependencies into a single file.


## Module
a module refers to any unit of code that can be imported and exported in a JavaScript application. It can be a single file, or a collection of related files that provide some functionality.

Modules can be written in any valid JavaScript syntax, including ES6/ES7, CommonJS, AMD, and more. When using Webpack, modules can be loaded and bundled together in a way that allows them to work together as a cohesive application.

Webpack uses a module system that enables you to specify dependencies between modules and to load them on demand. It allows you to use syntax like import and export to define the dependencies between modules, and Webpack takes care of bundling all the modules together into a single file that can be used in a web application.

Additionally, Webpack can load various types of assets, including images, stylesheets, and fonts, and bundle them together with your JavaScript code. This makes it easy to build complex web applications that include a variety of assets and dependencies.

Overall, the module system in Webpack provides a powerful and flexible way to manage dependencies and bundle all the necessary code and assets for a web application.

Modules is on file.

## Bundler
A bundler in Webpack is a tool that takes all the modules, assets, and other files used in a web application and packages them together into a single file or a set of files that can be loaded in a browser. The bundler creates a dependency graph of all the code and assets used in the application and bundles them together based on their dependencies.

Webpack is a popular bundler used in modern web development. It takes all the modules used in a web application and creates a bundle that can be used in a browser. Webpack is highly configurable and provides many features and plugins that can be used to optimize the output of the bundling process.

One of the main benefits of using a bundler like Webpack is that it can help reduce the number of HTTP requests made by a web page, resulting in faster load times. By bundling all the necessary code and assets into a single file, the browser can download the entire application more quickly.

Webpack also provides many other features, such as the ability to transpile modern JavaScript syntax to ES5 syntax, code splitting to reduce the size of the bundle, and tree shaking to remove unused code from the bundle. It also supports many types of assets, including images, stylesheets, and fonts.

Overall, a bundler in Webpack is a powerful tool that simplifies the process of building complex web applications by bundling all the necessary code and assets together into a single file or set of files that can be loaded in a browser.


## Example

1) module 
for example,
controller, service, repository

3 module
- 1. controller
- 2. service
- 3. repository

2) webpack

1 webpack
- controller
- service
- repository

``` html
<script src='./js1.js'></script>
<script src='./js2.js'></script>
<script src='./js3.js'></script>
<script src='./js4.js'></script>
```
 
translate webpack
```html
<script src='./bundle.js'></script>
```

## webpack option

1) babel
- presets
- plugins

2) 
- entry
- output
- loaders
- plugins

import => require
es6 => es5

entry => plugins => output

## Webpack launch

```sh
npm install webpack webpack-cli
```

## Weback Project 
bundling in src

## webpack setting file

```js
const path = require('path')

module.exports = {
    enryt: './src/index.js',
    output : {
        filename : 'bundle.js',
        path : path.join(__dirname,'dist'),
    },
}
```

4. sample code write

**Index.js**

```js
const home = require('./pages/home.js')
console.log(home.name)
```


**pages/home.js**

```js

module.exports = {
    name : 'Hynn',
}
```

5. Launch the webpack

```sh
npx webpack `--config webpack.config.js` => `e.target is webpack config file `
```
