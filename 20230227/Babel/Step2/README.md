# how to express translate import via Babel


1. Install to regarding package
```sh
npm install @babel/core @babel/cli @babel/plugin-transform-modules-commonjs
```

2. setting to `.babelrc `

``` json
{
    "plugins" : ["@babel/plugin-transform-modules-commonjs"]
}
```

3. Launch to babel


```sh
npx babel server.js --out-file dist/server.js
```