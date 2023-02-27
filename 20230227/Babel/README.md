# Babel

Babel ? transpiler to JavaScript Tool. (Compailed with JavaScript)
Why?
1) JavaScript continuity upgraded.
2) Type of launch JavaScript (ES4,5,6 ...jQuery..), If upgraded, requirement update run-time
3) If using ES6 Language, not compatible with previous version browser.


## Step of JavaScript transpiler previously JavaScript Language (ES5 early version)

JavaScript Language
- ES6
- ES5
- ES4 
- jQury


## Step of Type by Type for launch to JavaScript

Browser
- Window
- document

NodeJS
- global
- require
- module


Browser & NodeJS Different point is module system.
NodeJS ( CommonJS )
- require

but add to module system in browser ES6.
- import

## Today Training Item

1) Translate the ES6 to ES5
2) Import => Require

## Babel usage basic guide

1) Babel Install

```sh
npm init
$ npm install @babel/core @babel cli @babel/preset-env
```

tip) different npm and npx?
- NPM : If Install, currently directory in node_modules directory
- NPX : NPX is launching command line (to easy)

2) Setting Babel.

- rc
- zshrc bashrc pritterrc eslintrc 

create a `.babelrc`
`rc run commands run controller`
`ls , ls-al`
`lsrc`


```json
{
    "presets" : ["@babel/preset-env"]
}
```

```sh
npx babel [translate filename] -out-file dist/example.js
npx babel es6.js --out-file dist/es6.js
```